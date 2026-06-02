import timelineData from "../../data/timelineData";
import "./Timeline.css";

export default function Timeline() {
  return (
    <section className="timeline">
      {timelineData.map((item) => (
        <article key={item.id} className="timeline-card">
          <div className="timeline-top">
            <span className="timeline-date">{item.date}</span>

            <span className={`timeline-stage ${item.status}`}>
              {item.stage}
            </span>
          </div>

          <h3>{item.title}</h3>

          <p>{item.description}</p>
        </article>
      ))}
    </section>
  );
}
