import injectFonts from '@/libs/fonts.lib';

import '@/styles/globals.css';

type EntryLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'Fish Spotter',
  description: 'An application to keep track of the places where you can fish.'
};

const EntryLayout = ({ children }: EntryLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={injectFonts}>{children}</body>
    </html>
  );
};

export default EntryLayout;
