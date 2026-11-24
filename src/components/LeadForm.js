import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { INSTAGRAM, PHONE, PHONE_HREF, TELEGRAM } from '../config';

// Заявки принимает Netlify Forms (форма "lead" объявлена в public/index.html).
const encode = (data) => new URLSearchParams(data).toString();

export default function LeadForm() {
  const { t } = useLang();
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'lead', ...data }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="head">
          <h2 dangerouslySetInnerHTML={{ __html: t.form.title }} />
          <p className="lead">{t.form.lead}</p>
        </div>
        <div className="contact">
          <form className="card" name="lead" onSubmit={onSubmit}>
            <p className="hidden"><label>Bot <input name="bot-field" /></label></p>
            <input className="field" name="name" type="text" required placeholder={t.form.name} aria-label={t.form.name} />
            <input className="field" name="phone" type="tel" required placeholder={t.form.phone} aria-label={t.form.phone} />
            <input className="field" name="area" type="number" min="1" placeholder={t.form.area} aria-label={t.form.area} />
            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? t.form.sending : t.form.send}
            </button>
            {status === 'ok' && <p className="form-msg">{t.form.ok}</p>}
            {status === 'error' && <p className="form-msg err">{t.form.error}</p>}
          </form>
          <div className="card contact-info">
            <div className="row"><span>{t.form.phoneLabel}</span><a href={PHONE_HREF}>{PHONE}</a></div>
            <div className="row"><span>{t.form.hoursLabel}</span><div>{t.form.hours}</div></div>
            <div className="row"><span>Instagram</span><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@tastroy_uz</a></div>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">{t.ui.btnTg}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
