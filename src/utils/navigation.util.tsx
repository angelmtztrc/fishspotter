import {
  HomeIcon as HomeSolidIcon,
  MapIcon as MapSolidIcon,
  HeartIcon as HeartSolidIcon,
  UserCircleIcon as ProfileSolidIcon
} from '@heroicons/react/24/solid';

import {
  HomeIcon as HomeOutlineIcon,
  MapIcon as MapOutlineIcon,
  HeartIcon as HeartOutlineIcon,
  UserCircleIcon as ProfileOutlineIcon
} from '@heroicons/react/24/outline';

{
  /* <li className="flex flex-col items-center">
            <HomeIcon className="w-6 h-6 text-gray-100" />
            <p className="font-body text-gray-100 mt-1 font-bold text-sm">
              Home
            </p>
          </li>
          <li className="flex flex-col items-center">
            <MapIcon className="w-6 h-6 text-gray-900" />
            <p className="font-body text-gray-900 mt-1 font-bold text-sm">
              Nearby
            </p>
          </li>
          <li className="flex flex-col items-center">
            <HeartIcon className="w-6 h-6 text-gray-900" />
            <p className="font-body text-gray-900 mt-1 font-bold text-sm">
              Favourites
            </p>
          </li>
          <li className="flex flex-col items-center">
            <UserCircleIcon className="w-6 h-6 text-gray-900" />
            <p className="font-body text-gray-900 mt-1 font-bold text-sm">
              Profile
            </p>
          </li> */
}

export const navigationItems = [
  {
    path: '/',
    name: 'Home',
    getIcon: (isActive: boolean) =>
      isActive ? <HomeSolidIcon /> : <HomeOutlineIcon />
  },
  {
    path: '/nearby',
    name: 'Nearby',
    getIcon: (isActive: boolean) =>
      isActive ? <MapSolidIcon /> : <MapOutlineIcon />
  },
  {
    path: '/favourites',
    name: 'Favourites',
    getIcon: (isActive: boolean) =>
      isActive ? <HeartSolidIcon /> : <HeartOutlineIcon />
  },
  {
    path: '/profile',
    name: 'Profile',
    getIcon: (isActive: boolean) =>
      isActive ? <ProfileSolidIcon /> : <ProfileOutlineIcon />
  }
];
