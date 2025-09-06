import { useParams } from "react-router-dom";
import { CASE_STUDIES } from "../data/caseStudies";
import CitationList from "../components/CitationList";

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = CASE_STUDIES.find((x) => x.slug === slug);
  if (!cs) return <div className="p-8">Not found.</div>;

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-semibold">{cs.title}</h1>
      <p className="mt-2 text-slate-700">{cs.tagline}</p>

      <h2 className="mt-8 text-xl font-semibold">Problem</h2>
      <p className="mt-2">{cs.problem}</p>

      <h2 className="mt-6 text-xl font-semibold">Approach</h2>
      <ul className="mt-2 list-disc pl-5 space-y-1">
        {cs.approach.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Stack</h2>
      <div className="mt-2 flex flex-wrap gap-2">
        {cs.stack.map((s) => (
          <span key={s} className="rounded-full border px-2 py-0.5 text-xs">
            {s}
          </span>
        ))}
      </div>

      <h2 className="mt-6 text-xl font-semibold">Outcomes</h2>
      <ul className="mt-2 list-disc pl-5 space-y-1">
        {cs.outcomes.map((o, i) => (
          <li key={i}>{o}</li>
        ))}
      </ul>

      {cs.links?.length ? (
        <div className="mt-8 flex gap-3">
          {cs.links.map((l) => (
            <a key={l.href} href={l.href} className="underline" target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      ) : null}

      <CitationList citations={cs.citations} />
    </article>
  );
}
