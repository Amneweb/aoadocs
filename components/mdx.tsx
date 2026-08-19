import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,

    img: (props) => {
      const src =
        typeof props.src === "string" && props.src.startsWith("/")
          ? `/docs${props.src}`
          : props.src;

      return <img {...props} src={src} />;
    },

    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
