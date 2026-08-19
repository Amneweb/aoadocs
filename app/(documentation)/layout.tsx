import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { Monitor, ShieldUser } from "lucide-react";
import { docsIconColors } from "@/lib/icon-colors";

export default function Layout({ children }: { children: React.ReactNode }) {
  const options = baseOptions();

  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={options.nav}
      githubUrl={options.githubUrl}
      tabs={{
        transform: (option) => ({
          ...option,
          icon:
            option.title === "Portal" ? (
              <ShieldUser
                color={docsIconColors.rosa}
                size={22}
                strokeWidth={1.5}
              />
            ) : (
              <Monitor
                color={docsIconColors.turquesa}
                size={22}
                strokeWidth={1.5}
              />
            ),
        }),
      }}
    >
      {children}
    </DocsLayout>
  );
}
