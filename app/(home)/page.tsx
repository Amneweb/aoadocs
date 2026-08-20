import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col px-10">
      <section className="container flex flex-col items-center gap-6 py-10 text-center">
        <h1 className="text-5xl font-bold uppercase tracking-tight">
          AOA | Guías de uso
        </h1>
        <h2>
          ⛔ Tanto el portal como esta documentación aún están en preparación
        </h2>
        <p className="max-w-2xl text-md text-fd-muted-foreground text-justify">
          Bienvenidos a la Documentación sobre el uso del Portal de Trámites y
          la administración del sitio web de la Asociación.{" "}
          <strong>¿Listos para empezar?</strong> <br></br>Si sos adulto
          responsable de un competidor, entrenador, staff de AOA, medidor o
          representante de club, hacé click en Portal de Trámites; si sos editor
          del website, click en Webadmin.
        </p>
        <Image
          src="/docs/paraDocsLandingCompu.jpg"
          width={900}
          height={516}
          unoptimized
          alt="taza de café para empezar a trabajar"
          className="rounded-2xl max-w-2xl object-cover"
          loading="eager"
        />

        <div className="flex gap-4">
          <Link
            href="/portal"
            className="rounded-md bg-fd-primary px-6 py-3 font-medium text-fd-primary-foreground"
          >
            Portal de Trámites
          </Link>
          <Link
            href="/website"
            className="rounded-md border px-6 py-3 font-medium"
          >
            Webadmin
          </Link>
        </div>
      </section>
    </main>
  );
}
