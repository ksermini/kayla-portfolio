import { Link } from "react-router-dom";

export default function ProjectCard({ slug, title, tagline, highlights = [], featured }) {
  return (
    <Link
      to={`/case/${slug}`}
      className={`block rounded-xl border p-5 hover:shadow-lg transition ${
        featured ? "border-black" : "border-slate-200"
      }`}
    >
      <div className="text-xs uppercase tracking-wider opacity-50">
        {featured ? "Featured Case Study" : "Case Study"}
      </div>
      <h3 className="mt-1 text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-slate-600">{tagline}</p>
      {highlights.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span key={h} className="rounded-full border px-2 py-0.5 text-xs">
              {h}
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
