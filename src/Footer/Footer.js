import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { INSTAGRAM, PHONE, PHONE_HREF, TELEGRAM } from '../config';

export default function Footer() {
  const { t } = useLang();

  return (
    <>
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <Link to="/" className="logo" style={{ color: '#fff', marginBottom: 14 }}><span className="logo-mark">T</span>TASTROY</Link>
              <p>{t.ui.footerTagline}</p>
            </div>
            <div>
              <h4>TASTROY</h4>
              <ul>
                <li><Link to="/repair">{t.nav.repair}</Link></li>
                <li><Link to="/design">{t.nav.design}</Link></li>
                <li><Link to="/about">{t.nav.about}</Link></li>
                <li><Link to="/contacts">{t.nav.contacts}</Link></li>
              </ul>
            </div>
            <div>
              <h4>{t.nav.repair}</h4>
              <ul>{t.footer.services.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
            <div>
              <h4>{t.form.phoneLabel}</h4>
              <ul>
                <li><a href={PHONE_HREF} style={{ color: '#fff', fontWeight: 700 }}>{PHONE}</a></li>
                <li>{t.form.hours}</li>
                <li><a href={TELEGRAM} target="_blank" rel="noopener noreferrer">Telegram</a></li>
                <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram @tastroy_uz</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} TASTROY · {t.ui.city}</span>
            <span>tastroy.uz</span>
          </div>
        </div>
      </footer>
      <div className="mbar">
        <a href={PHONE_HREF} className="btn btn-ghost">{t.ui.call}</a>
        <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Telegram</a>
      </div>
    </>
  );
}
