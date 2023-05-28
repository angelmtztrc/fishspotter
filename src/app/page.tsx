'use client';

import { Map } from '@/atoms';

const HomePage = () => {
  return (
    <main className="relative">
      <Map />
      <div className="absolute bottom-0 left-0 bg-darken-900 rounded-t-xl p-4 w-full z-10 border-t border-dark-900">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="h-2 w-16 bg-dark-900 rounded-full" />
          </div>
          <div>{/* INPUT */}</div>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
