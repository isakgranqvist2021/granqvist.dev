export function About() {
  return (
    <section className="bg-dark" id="about" tabIndex={3}>
      <div className="container">
        <div className="flex-item">
          <h2>Who am I?</h2>
          <p className="body1">
            As a software developer with a passion for technology, I am always
            eager to take on new challenges and come up with creative solutions.
          </p>
          <p className="body1">
            I specialize in delivering custom software and applications tailored
            to the specific needs of businesses, with a focus on web and server
            applications. Let's work together to bring your project to life.
          </p>
        </div>
        <div className="flex-item">
          <img src="/svg/about.svg" alt="Exclamation mark" />
        </div>
      </div>
    </section>
  );
}
