import { faCat } from '@fortawesome/free-solid-svg-icons'
import { ArrowUpRight } from 'lucide-react'

const ACCENT = '#B9A3FF'
const CAT_COLOR = 'rgb(116, 115, 118)'

function CatIcon() {
  const [width, height, , , path] = faCat.icon
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="size-8 shrink-0"
      fill={CAT_COLOR}
      aria-hidden="true"
      focusable="false"
    >
      <path d={Array.isArray(path) ? path.join(' ') : path} />
    </svg>
  )
}

export function CallingCard() {
  return (
    <article className="w-full max-w-2xl">
      <header>
        <div className="flex items-center justify-between gap-4">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: ACCENT }}
          >
            Documentation Czar
          </p>
          <CatIcon />
        </div>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-neutral-50 sm:text-5xl">
          Kythera Contreras
        </h1>
        <p className="mt-3 text-pretty text-lg text-neutral-300">
          Technical writer, editor, Atlassian Solutions Specialist
        </p>
      </header>

      <div
        className="my-10 h-px w-16"
        style={{ backgroundColor: ACCENT }}
        aria-hidden="true"
      />

      <section aria-labelledby="about-heading" className="space-y-4">
        <h2 id="about-heading" className="sr-only">
          About
        </h2>
        <p className="text-pretty text-xl leading-relaxed text-neutral-100">
          Specializing in bringing order to information chaos.
        </p>
        <p className="text-pretty leading-relaxed text-neutral-300">
          I work with multi-discipline Agile teams to keep their information
          organized and optimized in ways that align with strategic and company
          goals. I leverage my background in quality assurance and fine arts to
          ensure accuracy, visual clarity, and high editorial standards. I use
          my Atlassian expertise to craft knowledge bases and workflows that
          empower teams to maximize their potential.
        </p>
        <p className="text-pretty leading-relaxed text-neutral-300">
          {
            'As the \u201CDocumentation Czar,\u201D I provide the editorial governance necessary to maintain compliance with style guides and satisfy the \u201CDefinition of Done.\u201D'
          }
        </p>
      </section>

      <footer className="mt-12 border-t border-neutral-800 pt-8">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
          How to reach me
        </h2>
        <a
          href="https://www.linkedin.com/in/kytheracontreras"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 inline-flex items-center gap-2 rounded-sm text-lg font-medium underline decoration-1 underline-offset-4 transition-colors hover:text-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{ color: ACCENT, outlineColor: ACCENT }}
        >
          linkedin.com/in/kytheracontreras
          <ArrowUpRight
            className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </footer>
    </article>
  )
}
