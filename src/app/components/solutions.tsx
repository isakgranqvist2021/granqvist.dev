export function Solutions() {
  return (
    <section className="bg-dark" id="solutions" tabIndex={1} role="row">
      <div className="container">
        <div className="grid">
          <div className="card">
            <div className="card-icon">
              <img src="/svg/domain.svg" alt="Business building icon" />
            </div>
            <h3>Backend Development</h3>
            <p className="subtitle2">
              Are you in need of robust software to drive the success of your
              business? As an experienced software developer, I use powerful
              tools like TypeScript, C#, and Go to create reliable solutions
              that meet your needs.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src="/svg/store-front.svg" alt="Storefront icon" />
            </div>
            <h3>Frontend Development</h3>
            <p className="subtitle2">
              Are you in need of a sleek, fast, and user-friendly user
              interface? As a software developer with expertise in tools like
              React and Angular, I can help you create a modern interface that
              meets your needs and exceeds your expectations. Contact me to
              learn more.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src="/svg/cloud.svg" alt="Cloud icon" />
            </div>
            <h3>Cloud Solutions</h3>
            <p className="subtitle2">
              Looking to leverage the power of Google or Amazon to scale your
              software infrastructure? I am here to help. With a strong
              background in software development and a diverse range of tools
              and technologies at my disposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
