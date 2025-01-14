/* eslint-disable react/jsx-key*/
import { useTranslation, Trans } from 'next-i18next';
export { getStaticProps } from 'utils/localization';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { Language } from 'utils/locales';
import { useLanguage } from 'utils/useLanguageHook';
import SEO from 'components/basecomponents/SEO';

interface LinkTextProps {
  href: string;
  children?: string;
  target?: '_blank' | '_self';
  locale?: Language;
}

export const LinkText = ({ href, children, target, locale }: LinkTextProps) => {
  return (
    <Link locale={locale} href={href}>
      <a target={target} className="underline text-primary-blue">
        {children}
      </a>
    </Link>
  );
};

const H2 = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) => <h2 className="mb-1 mt-5 sm:my-4 text-primary-blue" {...props} />;
const P = ({ ...props }: HTMLAttributes<HTMLParagraphElement>) => <p className="mb-6" {...props} />;

const About = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  return (
    <>
      <SEO
        title={t('seo.about_page_title')}
        description={t('seo.about_page_description')}
        image="https://www.movapp.cz/icons/movapp-cover.jpg"
      />
      <div className="max-w-7xl m-auto pb-6">
        <h1 className="text-primary-blue">
          <Trans className="block my-2">{t('about_page.title')}</Trans>
        </h1>
        <H2>{t('about_page.movapp_goal_title')}</H2>
        {t('about_page.movapp_goal_description')}
        <H2>{t('about_page.why_movapp_title')}</H2>
        <P>
          <Trans i18nKey={'about_page.why_movapp_mova'} />
        </P>
        <P>{t('about_page.why_movapp_description')}</P>
        <P>
          <Trans
            i18nKey={'about_page.why_movapp_license'}
            t={t}
            components={[<LinkText href="https://creativecommons.org/licenses/by-nc/4.0/deed.cs" target="_blank" />]}
          />
        </P>

        <Trans
          i18nKey={'about_page.why_movapp_origin'}
          t={t}
          components={[<LinkText href="https://drive.google.com/drive/u/0/folders/129vObZ0vUHpDd07slIfaiAfKsEbx1mNw" target="_blank" />]}
        />

        <H2>{t('about_page.our_team_title')}</H2>
        <P>{t('about_page.our_team_description')}</P>
        <P>{t('about_page.our_team_illustrators')}</P>

        <Trans
          i18nKey={'about_page.our_team_contact'}
          components={[<LinkText href={`/contacts`} locale={currentLanguage} target="_self" />]}
        />

        <H2>{t('about_page.stand_with_ukraine_title')}</H2>
        <Trans
          i18nKey={'about_page.stand_with_ukraine_description'}
          components={[<LinkText href="https://stojimezaukrajinou.cz/" target="_blank" />]}
        />
        <H2>{t('about_page.czech_digital_title')}</H2>
        <Trans i18nKey={'about_page.czech_digital_description'} components={[<LinkText href="https://cesko.digital/" target="_blank" />]} />
      </div>
    </>
  );
};

export default About;
