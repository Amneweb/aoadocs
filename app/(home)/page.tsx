import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col px-10">
      <section className="container flex flex-col items-center gap-6 py-10 text-center">
        <h1 className="text-5xl font-bold uppercase tracking-tight">
          Portal AOA | Guía de trámites
        </h1>
        <p className="max-w-2xl text-md text-fd-muted-foreground text-justify">
          Bienvenidos a la Documentación sobre el uso del Portal de trámites de
          la Asociación. Hacé click en Trámites para encontrar toda la
          información sobre los pasos a seguir para cada tarea según el rol que
          tengas: encargado, entrenador, staff de AOA, medidor o representante
          de club. ¿Listo para empezar?
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
            Trámites
          </Link>
          <Link
            href="/website"
            className="rounded-md border px-6 py-3 font-medium"
          >
            Administración del website
          </Link>
        </div>
      </section>
    </main>
  );
}
