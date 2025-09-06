import { CASE_STUDIES } from "../data/caseStudies";
import ProjectCard from "../components/ProjectCard";
import CapabilitiesStrip from "../components/CapabilitiesStrip";
import RagAskBox from "../components/RagAskBox";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold">AI Engineering for FinTech</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-2xl">
          I design production-ready AI systems: Retrieval-Augmented Generation, metadata-driven ETL,
          and observability that leaders can trust.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/case" className="rounded-md border px-4 py-2">View AI Case Studies</a>
          <a href="/resume.pdf" className="rounded-md border px-4 py-2">Download Resume</a>
        </div>
        <CapabilitiesStrip />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Try the RAG UI (demo)</h2>
        <p className="mt-2 text-slate-700">Abstracted via provider adapters and DI (OpenAI/Claude).</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">OpenAI provider</h3>
            <RagAskBox provider="openai" />
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Claude provider</h3>
            <RagAskBox provider="claude" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Case Studies</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <ProjectCard
              key={cs.slug}
              slug={cs.slug}
              title={cs.title}
              tagline={cs.tagline}
              highlights={cs.stack}
              featured={cs.featured}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
