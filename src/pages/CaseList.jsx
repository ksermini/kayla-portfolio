import { CASE_STUDIES } from "../data/caseStudies";
import { Link } from "react-router-dom";

export default function CaseList() {
  return (
    <section className="section">
      <h1 className="text-2xl font-semibold mb-4">Case Studies</h1>
      <div className="grid-cards">
        {CASE_STUDIES.map(cs => (
          <Link to={`/case/${cs.slug}`} key={cs.slug} className="card hover:shadow-subtle">
            <div className="card-pad">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">{cs.title}</h2>
                {cs.tag && <span className="badge">{cs.tag}</span>}
              </div>
              <p className="muted">{cs.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

