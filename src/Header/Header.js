import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { PHONE, PHONE_HREF } from '../config';

export default function Header() {
  const { t, lang, setLang, languages } = useLang();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Закрываем мобильное меню и прокручиваем вверх при смене страницы
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const links = [
    ['/', t.nav.home],
    ['/repair', t.nav.repair],
    ['/design', t.nav.design],
    ['/about', t.nav.about],
    ['/contacts', t.nav.contacts],
  ];

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link to="/" className="logo"><span className="logo-mark">T</span>TASTROY</Link>
        <nav className="menu">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>
          ))}
        </nav>
        <div className="nav-right">
          <div className="lang" role="group" aria-label="Language">
            {languages.map((code) => (
              <button key={code} type="button" className={code === lang ? 'on' : ''} aria-pressed={code === lang} onClick={() => setLang(code)}>
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="phone" href={PHONE_HREF}>{PHONE}</a>
          <button type="button" className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>
        ))}
        <a className="phone" href={PHONE_HREF}>{PHONE}</a>
      </div>
    </header>
  );
}
