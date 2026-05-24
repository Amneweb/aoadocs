import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col px-10">
      <section className="container flex flex-col items-center gap-6 py-10 text-center">
        <h1 className="text-5xl font-bold uppercase tracking-tight">
          Todo sobre el sitio de la AOA
        </h1>
        <p className="max-w-2xl text-md text-fd-muted-foreground text-justify">
          Es importantísimo que la web esté actualizada siempre, para inspirar
          confianza y lograr que sea LA fuente de información de referencia.
          Instagram o Facebook son muy volátiles y la información "desaparece"
          muy rápido: o te lo perdiste o lo viste y cuando volvés a chequear,
          tenés que scrollear hasta encontrar el post, si lo encontrás.
        </p>
        <h2 className="text-3xl font-bold">¿Listo/a para empezar?</h2>
        <Image
          src="/paraDocsLandingCompu.jpg"
          width={900}
          height={516}
          unoptimized
          alt="taza de café para empezar a trabajar"
          className="rounded-2xl object-cover"
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
            href="https://github.com/your-org/noqtadocs"
            className="rounded-md border px-6 py-3 font-medium"
          >
            View on GitHub
          </Link>
        </div>
      </section>
    </main>
  );
}
