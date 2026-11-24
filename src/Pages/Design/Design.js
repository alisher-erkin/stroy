import { useLang } from '../../i18n/LanguageContext';
import PageHero from '../../components/PageHero';
import CtaBand from '../../components/CtaBand';
import heroImg from '../../images/new/svc_author.jpg';
import gal1 from '../../images/new/video03_09_final.jpg';
import gal2 from '../../images/new/video01_07_final.jpg';

export default function Design() {
  const { t } = useLang();
  const d = t.design;

  return (
    <>
      <PageHero title={d.title} lead={t.pages.designLead} image={heroImg} />

      <section className="sec">
        <div className="wrap split">
          <div className="text">
            {d.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="split-gal">
            {[gal1, gal2].map((src) => (
              <figure key={src}><img src={src} alt="" loading="lazy" /><figcaption>{t.home.galCap}</figcaption></figure>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-tint">
        <div className="wrap">
          <div className="head"><h2>{d.stagesTitle}</h2></div>
          <div className="grid-3">
            {d.stages.map((s, i) => (
              <div className="card stage" key={s.title}>
                <span className="stage-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap text">
          <h2>{d.supervisionTitle}</h2>
          {d.supervision.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
