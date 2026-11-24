import { useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import { INSTAGRAM, PRICES, TELEGRAM } from '../../config';
import LeadForm from '../../components/LeadForm';
import Icon from '../../components/Icon';
import hero from '../../images/new/hero.jpg';
import svcCosmetic from '../../images/new/svc_cosmetic.jpg';
import svcCapital from '../../images/new/svc_capital.jpg';
import svcAuthor from '../../images/new/svc_author.jpg';
import vid1 from '../../images/new/video01_01_hook.jpg';
import vid2 from '../../images/new/video03_01_hook.jpg';
import gal2 from '../../images/new/video03_09_final.jpg';
import gal3 from '../../images/new/video01_07_final.jpg';
import './Home.css';

const SVC_IMGS = [svcCosmetic, svcCapital, svcAuthor];
const VID_IMGS = [vid1, vid2];
const fmt = (n) => n.toLocaleString('ru-RU').replace(/ /g, ' ');
const html = (s) => ({ __html: s });

export default function Home() {
  const { t } = useLang();
  const h = t.home;
  const [area, setArea] = useState(60);
  const [type, setType] = useState(1);
  const [lo, hi] = PRICES[type];

  return (
    <>
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${hero})` }} />
        <div className="wrap">
          <h1 dangerouslySetInnerHTML={html(h.heroTitle)} />
          <p dangerouslySetInnerHTML={html(h.heroSub)} />
          <div className="cta-row">
            <a href="#calc" className="btn btn-primary">{t.ui.btnCalc}</a>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">{t.ui.btnTg}</a>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="wrap trust-grid">
          {h.trust.map(([icon, title, text]) => (
            <div className="card trust-item" key={title}>
              <div className="ico"><Icon name={icon} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec" id="services">
        <div className="wrap">
          <div className="head">
            <h2 dangerouslySetInnerHTML={html(h.svcTitle)} />
            <p className="lead">{h.svcLead}</p>
          </div>
          <div className="svc-grid">
            {t.repair.tariffs.map((tariff, i) => (
              <div className="card svc" key={tariff.title}>
                <img src={SVC_IMGS[i]} alt="" loading="lazy" />
                <div className="svc-body">
                  <h3>{tariff.title}</h3>
                  <p>{h.svc[i]}</p>
                  <div className="price">{t.ui.priceFmt(...PRICES[i])} <small>{t.ui.perM2}</small></div>
                </div>
              </div>
            ))}
          </div>
          <p className="svc-note">{t.ui.priceNote}</p>
          <div className="chips">
            {h.chips.map((c) => <div className="chip" key={c}>{c} · <span>{t.ui.onRequest}</span></div>)}
          </div>
        </div>
      </section>

      <section className="sec sec-tint" id="calc">
        <div className="wrap">
          <div className="head">
            <h2 dangerouslySetInnerHTML={html(h.calcTitle)} />
            <p className="lead">{h.calcLead}</p>
          </div>
          <div className="calc">
            <div className="card calc-form">
              <div>
                <label htmlFor="area">{h.calcArea}</label>
                <div className="area-row">
                  <input id="area" type="range" min="20" max="250" value={area} onChange={(e) => setArea(+e.target.value)} />
                  <div className="area-val">{area} m²</div>
                </div>
              </div>
              <div>
                <label>{h.calcType}</label>
                <div className="types">
                  {h.types.map((name, i) => (
                    <button type="button" key={name} className={i === type ? 'on' : ''} onClick={() => setType(i)}>
                      {name}<small>${PRICES[i][0]}–{PRICES[i][1]}/m²</small>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="card calc-result">
              <div className="lbl">{h.calcResult}</div>
              <div className="sum">{h.sumFmt(fmt(lo * area), fmt(hi * area))}</div>
              <div className="hint">{h.calcHint}</div>
              <a href="#contact" className="btn btn-primary">{h.calcBtn}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="steps">
        <div className="wrap">
          <div className="head"><h2 dangerouslySetInnerHTML={html(h.stepsTitle)} /></div>
          <div className="steps">
            {t.advantages.process.map((s, i) => (
              <div className="card step" key={s}><span>{String(i + 1).padStart(2, '0')}</span><p>{s}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="tips">
        <div className="wrap">
          <div className="head">
            <h2 dangerouslySetInnerHTML={html(h.tipsTitle)} />
            <p className="lead">{h.tipsLead}</p>
          </div>
          <div className="vid-grid">
            {h.videos.map((title, i) => (
              <a className="vid" href={INSTAGRAM} target="_blank" rel="noopener noreferrer" key={title}>
                <img src={VID_IMGS[i]} alt="" loading="lazy" />
                <span className="play"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg></span>
                <h3>{title}</h3>
              </a>
            ))}
            <div className="card vid-more">
              <p>{h.vidMore}</p>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn btn-primary">@tastroy_uz</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <h2 dangerouslySetInnerHTML={html(h.galTitle)} />
            <p className="lead">{h.galLead}</p>
          </div>
          <div className="gal">
            {[svcAuthor, gal2, gal3].map((src) => (
              <figure key={src}><img src={src} alt="" loading="lazy" /><figcaption>{h.galCap}</figcaption></figure>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head"><h2 dangerouslySetInnerHTML={html(h.faqTitle)} /></div>
          <div className="faq">
            {h.faq.map(([q, a]) => (
              <details className="card" key={q}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <LeadForm />
    </>
  );
}
