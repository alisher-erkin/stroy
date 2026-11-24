import { useLang } from '../../i18n/LanguageContext';
import PageHero from '../../components/PageHero';
import CtaBand from '../../components/CtaBand';
import Icon from '../../components/Icon';
import heroImg from '../../images/new/hero.jpg';

const ADV_ICONS = ['doc', 'design', 'team', 'plan', 'clock', 'help'];

export default function Aboutus() {
  const { t } = useLang();
  const a = t.about;

  return (
    <>
      <PageHero title={t.nav.about} lead={t.pages.aboutLead} image={heroImg} />

      <section className="sec">
        <div className="wrap text">
          {a.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section className="sec sec-tint">
        <div className="wrap">
          <div className="card mission">
            <h2>{a.missionTitle}</h2>
            <p>{a.mission}</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head"><h2>{t.advantages.title}</h2></div>
          <div className="grid-3">
            {t.advantages.cards.map((c, i) => (
              <div className="card adv" key={c.title}>
                <div className="ico"><Icon name={ADV_ICONS[i]} /></div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
