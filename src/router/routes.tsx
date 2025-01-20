import RootLayout from '@router/index';
import About from '@pages/About';
import HomePage from '@pages/Home';
import ErrorPage from '@pages/Error';
import ServicePage from '@pages/Service';
import MenuPage from '@pages/Menu';
import BookingPage from '@pages/Booking';
import OurTeamPage from '@pages/OurTeam';
import TestimonialPage from '@pages/Testimonial';
import ContactPage from '@pages/Contact';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        name: 'Home',
        title: 'Home',
        element: <HomePage />,
      },
      {
        path: '/about',
        name: 'About',
        title: 'About Us',
        element: <About />,
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
