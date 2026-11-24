import { useLang } from '../../i18n/LanguageContext';
import PageHero from '../../components/PageHero';
import LeadForm from '../../components/LeadForm';
import heroImg from '../../images/new/video03_09_final.jpg';

export default function Contacts() {
  const { t } = useLang();

  return (
    <>
      <PageHero title={t.contacts.title} lead={t.pages.contactsLead} image={heroImg} />
      <LeadForm />
    </>
  );
}
