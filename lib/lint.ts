import {
  type FileObject,
  printErrors,
  scanURLs,
  validateFiles,
} from "next-validate-link";

import { register } from "fumadocs-mdx/node";

register();

const { source } = await import("./source");

async function checkLinks() {
  const scanned = await scanURLs({
    preset: "next",
    populate: {
      "[...slug]": source.getPages().map((page) => ({
        value: {
          slug: page.slugs,
        },
        hashes: getHeadings(page),
      })),
    },
  });

  printErrors(
    await validateFiles(await getFiles(), {
      scanned,
      markdown: {
        components: {
          Card: {
            attributes: ["href"],
          },
        },
      },
      checkRelativePaths: "as-url",
    }),
    true,
  );
}

function getHeadings({ data }: (typeof source)["$inferPage"]): string[] {
  return data.toc.map((item) => item.url.slice(1));
}

function getFiles() {
  const promises = source.getPages().map(async (page): Promise<FileObject> => {
    if (!page.absolutePath) {
      throw new Error(`Missing absolutePath for page: ${page.url}`);
    }

    return {
      path: page.absolutePath,
      content: await page.data.getText("raw"),
      url: page.url,
      data: page.data,
    };
  });

  return Promise.all(promises);
}

void checkLinks();
