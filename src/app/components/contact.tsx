export function Contact() {
  return (
    <footer className="bg-dark" id="contact" tabIndex={5}>
      <div className="container">
        <div className="social">
          <h3>You can also find me on social media</h3>

          <div className="social-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/isakgranqvist2021/"
              title="Instagram"
            >
              <img
                src="/svg/instagram.svg"
                alt="Instagram Icon"
                loading="lazy"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/isak-granqvist-b1217a207/"
              title="Linkedin"
            >
              <img src="/svg/linkedin.svg" alt="Linkedin Icon" loading="lazy" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/isakgranqvist2021"
              title="Github"
            >
              <img src="/svg/github.svg" alt="Github Icon" loading="lazy" />
            </a>
          </div>

          <a href="mailto:contact@granqvist.dev" className="email-text">
            contact@granqvist.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
