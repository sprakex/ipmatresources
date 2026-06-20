import Link from "next/link";
import Image from "next/image";
import treeImage from "@/public/tree-transparent.png";

export default function HomePage() {
  return (
    <>
      <section className="home-grid-bg">
        <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-12 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8">
          <div className="grid gap-6 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-4 sm:mb-6 inline-flex rounded-full border bg-fd-background/70 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm text-muted-foreground shadow-sm backdrop-blur">
                100% free forever
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                Everything you need to crack{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-green-600 via-lime-500 to-emerald-600
                    dark:from-green-300 dark:via-lime-400 dark:to-green-500
                    bg-clip-text text-transparent
                  "
                >
                  IPMAT.
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-xl">
                For all my self-learners out there.
              </p>

              <div className="mt-6 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/docs/quantitative-ability"
                  className="
                    rounded-full
                    px-8 py-3
                    font-medium
                    transition-all
                    bg-black text-white
                    dark:bg-white dark:text-black
                    hover:opacity-90
                    text-center
                    shadow-sm
                  "
                >
                  Browse Resources
                </Link>
              </div>
            </div>

            <div className="tree-hero" aria-hidden="true">
              <Image
                src={treeImage}
                alt=""
                width={560}
                height={560}
                priority
                className="relative z-10 mx-auto w-[min(55vw,21rem)] sm:w-[min(72vw,21rem)] lg:w-[25rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-4 py-5 text-center sm:px-6">
          <p className="text-xs text-zinc-400 sm:text-sm">
            The website does not host any files.
          </p>

          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} IPMAT Resources
          </p>
        </div>
      </footer>
    </>
  );
}
