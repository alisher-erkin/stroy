import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function CtaBand() {
  const { t } = useLang();
  return (
    <section className="sec">
      <div className="wrap">
        <div className="card cta-band">
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: t.pages.ctaTitle }} />
            <p>{t.pages.ctaText}</p>
          </div>
          <Link to="/contacts" className="btn btn-primary">{t.form.send}</Link>
        </div>
      </div>
    </section>
  );
}
