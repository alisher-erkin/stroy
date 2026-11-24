import { useLang } from '../../i18n/LanguageContext';
import { PRICES } from '../../config';
import PageHero from '../../components/PageHero';
import CtaBand from '../../components/CtaBand';
import heroImg from '../../images/new/svc_capital.jpg';

export default function Repair() {
  const { t } = useLang();
  const r = t.repair;

  return (
    <>
      <PageHero title={r.title} lead={t.pages.repairLead} image={heroImg} />

      <section className="sec">
        <div className="wrap text">
          {r.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section className="sec sec-tint">
        <div className="wrap">
          <div className="head">
            <h2>{r.typesTitle}</h2>
            <p className="lead">{r.typesText}</p>
          </div>
          <div className="grid-3">
            {r.tariffs.map((tariff, i) => (
              <div className={`card tariff${i === 1 ? ' featured' : ''}`} key={tariff.title}>
                <h3>{tariff.title}</h3>
                <div className="price">{t.ui.priceFmt(...PRICES[i])} <small>{t.ui.perM2}</small></div>
                <ul className="check-list">
                  {tariff.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="svc-note">{t.ui.priceNote}</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="text">
            <h2>{r.materialsTitle}</h2>
            <p>{r.materials}</p>
          </div>
          <img src="/img/painting.jpg" alt="" className="split-img" loading="lazy" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
