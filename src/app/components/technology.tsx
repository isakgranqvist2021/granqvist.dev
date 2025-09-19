export function Technology() {
  return (
    <section id="technology" className="bg-light" tabIndex={2}>
      <div className="container">
        <div className="grid" role="grid">
          <div
            style={{
              backgroundSize: '60%',
              backgroundImage: 'url(/png/go.png)',
            }}
            className="grid-item"
            title="Go Programming Language"
            role="img"
            aria-label="Go Programming Language"
          />
          <div
            style={{
              backgroundSize: '55%',
              backgroundImage: 'url(/png/node.png)',
            }}
            className="grid-item"
            title="Node.js"
            role="img"
            aria-label="Node.js"
          />
          <div
            className="grid-item"
            style={{
              backgroundSize: '40%',
              backgroundImage: 'url(/png/react.png)',
            }}
            title="React.js"
            role="img"
            aria-label="React.js"
          />
          <div
            style={{
              backgroundSize: '30%',
              backgroundImage: 'url(/png/angular.png)',
            }}
            className="grid-item"
            title="Angular"
            role="img"
            aria-label="Angular"
          />
          <div
            style={{
              backgroundSize: '70%',
              backgroundImage: 'url(/png/typescript.png)',
            }}
            className="grid-item"
            title="TypeScript"
            role="img"
            aria-label="TypeScript"
          />
          <div
            style={{
              backgroundSize: '40%',
              backgroundImage: 'url(/png/aws.png)',
            }}
            className="grid-item"
            title="Amazon Web Services"
            role="img"
            aria-label="Amazon Web Services"
          />
        </div>
      </div>
    </section>
  );
}
