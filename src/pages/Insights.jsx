import { INSIGHTS } from "../data/insights";
import CitationList from "../components/CitationList";

export default function Insights() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-semibold">AI Insights</h1>
      <p className="mt-2 text-slate-700">
        Selected standards and papers that inform my designs. I keep this page short and current.
      </p>

      <div className="mt-8 space-y-10">
        {INSIGHTS.map((it) => (
          <section key={it.title}>
            <h2 className="text-xl font-semibold">{it.title}</h2>
            <p className="mt-2">{it.summary}</p>
            {Array.isArray(it.applications) && it.applications.length ? (
              <>
                <h3 className="mt-4 font-semibold">Applications</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  {it.applications.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </>
            ) : null}
            <CitationList citations={it.citations} />
          </section>
        ))}
      </div>
    </main>
  );
}
