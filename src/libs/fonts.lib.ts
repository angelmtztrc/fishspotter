import { Nunito_Sans } from 'next/font/google';

const body = Nunito_Sans({
  variable: '--body-font',
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin']
});

const injectFonts = () => [body.variable].join(' ');

export default injectFonts();
