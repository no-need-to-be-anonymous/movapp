import Script from 'next/script';
import { Footer } from './Footer';
import Header from './Header/index';
import { ScrollToTop } from 'components/basecomponents/ScrollToTop';
import { CountryVariant, getCountryVariant } from 'utils/locales';

const PLAUSIBLE_DOMAINS: Record<CountryVariant, string> = {
  cs: 'movapp.cz, all.movapp.eu',
  sk: 'sk.movapp.eu, all.movapp.eu',
  pl: 'pl.movapp.eu, all.movapp.eu',
};

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <Script data-domain={PLAUSIBLE_DOMAINS[getCountryVariant()]} src="https://plausible.io/js/plausible.js" />
      <main className="bg-white sm:bg-primary-grey pt-2 pb-5 min-h-screen px-2 m-auto">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
};
