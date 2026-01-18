function WelcomeBanner({ course, instructor, term }) {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "صباح الخير" : "مساء الخير";

  return (
    <section className="card banner">
      <h1 className="heading-large">{course}</h1>
      <p className="meta">
        {term} Term · Instructor: Dr. {instructor}
      </p>
      <p>
        Welcome! In this lab you will practice JSX rendering, props, list
        rendering, and component composition.
        <br />
        <strong>{greeting}</strong>
      </p>
    </section>
  );
}

export default WelcomeBanner;
