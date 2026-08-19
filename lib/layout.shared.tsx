import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";
import Image from "next/image";
import { defineTranslations } from "fumadocs-core/i18n";
import { uiTranslations } from "fumadocs-ui/i18n";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2">
          <Image src="/docs/logo.svg" alt="" width={24} height={24} />
          <span className="font-semibold">AOA Docs</span>
        </span>
      ),
    },
    links: [
      { text: "Documentación", url: "/docs" },
      { text: "Web de AOA", url: "/" },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
