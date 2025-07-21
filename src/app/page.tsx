export default function Home() {
  return (
    <div>
      <section>
        <h1>TAGLINE</h1>
        <p className="content-text">Some more content for this page <br />INFO AND DESCRIPTION</p>
      </section>
      <div className="flex justify-center gap-10 p-8"style={{ gap: '200px' }}>
        <div className="box blur-box w-180 h-100"></div>
        <div className="box blur-box w-180 h-100"></div>
      </div>
    </div>
  );
}