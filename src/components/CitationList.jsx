export default function CitationList({ citations = [] }) {
  if (!citations.length) return null;
  return (
    <section className="mt-8">
      <h3 className="text-lg font-semibold">Research & References</h3>
      <ul className="mt-2 space-y-2">
        {citations.map((c) => (
          <li key={c.url} className="text-sm">
            <span className="font-medium">{c.title}</span>{" "}
            <span className="opacity-70">— {c.publisher}</span>{" "}
            <a className="underline" href={c.url} target="_blank" rel="noreferrer">
              View
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
