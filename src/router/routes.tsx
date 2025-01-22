import React from 'react';
import RootLayout from '@router/index';
import ErrorPage from '@pages/Error';
import ServicePage from '@pages/Service';
import MenuPage from '@pages/Menu';
import BookingPage from '@pages/Booking';
import OurTeamPage from '@pages/OurTeam';
import TestimonialPage from '@pages/Testimonial';
import ContactPage from '@pages/Contact';

// -Types
import { Rout } from '@types.app/router';
import SkeletonLoader from '@components/ui/Skeleton/Loader';
import Skeleton from '@components/ui/Skeleton';

const About = React.lazy(() => import('@pages/About'));
const HomePage = React.lazy(() => import('@pages/Home'));

export const routes: Rout[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        name: 'Home',
        title: 'Home',
        element: (
          <React.Suspense fallback={<Skeleton name='loader' />}>
            <HomePage />
          </React.Suspense>
        ),
      },
      {
        path: '/about',
        name: 'About',
        title: 'About Us',
        element: (
          <React.Suspense fallback={<SkeletonLoader />}>
            <About />
          </React.Suspense>
        ),
      },
      {
        path: '/service',
        name: 'Service',
        title: 'Services',
        element: <ServicePage />,
      },
      {
        path: '/menu',
        name: 'Menu',
        title: 'Food Menu',
        element: <MenuPage />,
      },
      {
        path: '/booking',
        name: 'Booking',
        title: 'Booking',
        group: 'Pages',
        element: <BookingPage />,
      },
      {
        path: '/team',
        name: 'Our Team',
        title: 'Our Team',
        group: 'Pages',
        element: <OurTeamPage />,
      },
      {
        path: '/testimonial',
        name: 'Testimonial',
        title: 'Testimonial',
        group: 'Pages',
        element: <TestimonialPage />,
      },
      {
        path: '/contact',
        name: 'Contact',
        title: 'Contact',
        element: <ContactPage />,
      },
    ],
  },
];
