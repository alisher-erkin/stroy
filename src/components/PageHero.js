export default function PageHero({ title, lead, image }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="wrap">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}
