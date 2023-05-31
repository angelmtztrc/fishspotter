'use client';

import { cloneElement } from 'react';
import { usePathname } from 'next/navigation';

import { SearchPlaces } from '@/molecules';

import { cls } from '@/libs/cls.lib';
import { navigationItems } from '@/utils/navigation.util';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="absolute bottom-0 left-0 bg-darken-900 rounded-t-xl p-4 w-full z-10 border-t border-dark-900">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-center">
          <div className="h-2 w-16 bg-dark-900 rounded-full" />
        </div>
        <SearchPlaces />
        <ul className="border-t border-dark-900 flex pt-3 justify-around items-baseline">
          {navigationItems.map(({ path, name, getIcon }) => {
            const isActive = pathname === path;
            return (
              <li key={name} className="flex flex-col items-center">
                {cloneElement(getIcon(isActive), {
                  className: cls(
                    'w-6 h-6',
                    isActive ? 'text-gray-100' : 'text-gray-900'
                  )
                })}
                <p
                  className={cls(
                    'font-body mt-1 font-bold text-sm',
                    isActive ? 'text-gray-100' : 'text-gray-900'
                  )}
                >
                  {name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
