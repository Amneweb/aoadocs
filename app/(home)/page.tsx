import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col px-10">
      <section className="container flex flex-col items-center gap-6 py-10 text-center">
        <h1 className="text-5xl font-bold uppercase tracking-tight">
          Todo sobre el sitio de la AOA
        </h1>
        <p className="max-w-2xl text-md text-fd-muted-foreground text-balance">
          Bienvenidos a la Documentación para editores y creadores de contenido
          del sitio de la AOA. En estas páginas encontrarás información sobre
          cómo crear páginas, agregar, editar y borrar datos, y mantener el
          sitio actualizado SIEMPRE.
        </p>
        <h2 className="text-3xl font-bold">¿Listo/a para empezar?</h2>
        <Image
          src="/paraDocsLandingCompu.jpg"
          width={900}
          height={516}
          unoptimized
          alt="taza de café para empezar a trabajar"
          className="rounded-2xl max-w-2xl object-cover"
          loading="eager"
        />
        <div className="flex gap-4">
          <Link
            href="/docs"
            className="rounded-md bg-fd-primary px-6 py-3 font-medium text-fd-primary-foreground"
          >
            Ir a la documentación
          </Link>
          <Link
            href="https://github.com/Amneweb/aoadocs"
            className="rounded-md border px-6 py-3 font-medium"
          >
            Repo de esta Documentación
          </Link>
        </div>
        <p className="text-sm max-w-xl text-fd-muted-foreground">
          Si sos afiliado y llegaste acá buscando información sobre cómo
          realizar trámites, este no es el lugar que buscabas. Te sugerimos
          visitar la{" "}
          <a
            href="http://76.13.227.142/aoa/tramites"
            className="underline underline-offset-4 hover:no-underline"
          >
            GUÍA DE TRÁMITES
          </a>
        </p>
      </section>
    </main>
  );
}
