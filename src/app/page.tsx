'use client';

import { HomeIcon } from '@heroicons/react/24/solid';
import {
  MapIcon,
  HeartIcon,
  UserCircleIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

import { Map } from '@/atoms';
import { Navbar } from '@/organisms';

const HomePage = () => {
  return (
    <main className="relative">
      <Map />
      <Navbar />
    </main>
  );
};

export default HomePage;
