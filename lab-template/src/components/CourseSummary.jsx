function CourseSummary({ topics, duration, deliveryMode, children }) {
  const formattedTopics = Array.isArray(topics)
    ? topics.join(", ")
    : topics;

  return (
    <section className="card summary">
      <h2 className="heading-medium">Lab Segment</h2>

      <dl className="summary-list">
        <div>
          <dt>Topics</dt>
          <dd>{formattedTopics}</dd>
        </div>
        <div>
          <dt>Duration</dt>
          <dd>{duration}</dd>
        </div>
        <div>
          <dt>Delivery</dt>
          <dd>{deliveryMode}</dd>
        </div>
      </dl>

      {children && <footer className="summary-footer">{children}</footer>}
    </section>
  );
}

export default CourseSummary;
