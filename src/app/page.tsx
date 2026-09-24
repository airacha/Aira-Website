export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="group flex items-center gap-2"
            aria-label="Aira home"
          >
            <span className="text-2xl font-bold tracking-tight">
              Air<span className="text-blue-500">a</span>
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 transition-transform group-hover:scale-125" />
          </a>

          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#technology" className="transition hover:text-white">
              Technology
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
          >
            Connect
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-blue-400">
              Aira Technologies
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
              Building
              <br />
              <span className="text-white/40">intelligent</span>
              <br />
              technology.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              Aira is building a new generation of intelligent technology
              across AI, operating systems, software and hardware.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-blue-500 hover:text-white"
              >
                Explore Aira
              </a>

              <a
                href="#about"
                className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:border-white/50"
              >
                Our Vision
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            About Aira
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            Technology should understand people.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
            We are exploring how artificial intelligence can make technology
            more natural, useful and accessible through intelligent software,
            operating systems and connected devices.
          </p>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Technology
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-sm text-blue-400">01</span>
              <h3 className="mt-5 text-2xl font-semibold">Artificial AI</h3>
              <p className="mt-4 leading-7 text-white/50">
                Intelligent systems designed to understand natural human
                commands and interactions.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-sm text-blue-400">02</span>
              <h3 className="mt-5 text-2xl font-semibold">
                Operating Systems
              </h3>
              <p className="mt-4 leading-7 text-white/50">
                Building Aira OS as an intelligent platform for next-generation
                devices.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-sm text-blue-400">03</span>
              <h3 className="mt-5 text-2xl font-semibold">Software</h3>
              <p className="mt-4 leading-7 text-white/50">
                Creating software experiences where people can interact with
                technology naturally.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-sm text-blue-400">04</span>
              <h3 className="mt-5 text-2xl font-semibold">Hardware</h3>
              <p className="mt-4 leading-7 text-white/50">
                Exploring intelligent hardware and devices designed around
                AI-first experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Projects
          </p>

          <div className="mt-8 rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] p-8 sm:p-12">
            <p className="text-sm text-blue-400">AIRA OS</p>

            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              An intelligent operating system.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/60">
              Aira OS is our ongoing exploration into an AI-controlled,
              command-driven operating system for next-generation devices.
            </p>

            <button className="mt-8 rounded-full border border-white/20 px-6 py-3 transition hover:bg-white hover:text-black">
              Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
            Let&apos;s build the future.
          </h2>

          <p className="mt-6 text-white/50">
            More information about Aira and our projects will be available
            soon.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aira Technologies. All rights reserved.</p>
          <p>Building intelligent technology.</p>
        </div>
      </footer>
    </main>
  );
}
