import Root from "@router/index";
import About from "@pages/About";
import HomePage from "@pages/Home";
import ErrorPage from "@pages/Error";
import ServicePage from "@pages/Service";
import MenuPage from "@pages/Menu";
import BookingPage from "@pages/Booking";
import OurTeamPage from "@pages/OurTeam";
import TestimonialPage from "@pages/Testimonial";
import ContactPage from "@pages/Contact";

export const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        name: "Home",
        element: <HomePage />,
      },
      {
        path: "/about",
        name: "About",
        element: <About />,
      },
      {
        path: "/service",
        name: "Service",
        element: <ServicePage />,
      },
      {
        path: "/menu",
        name: "Menu",
        element: <MenuPage />,
      },
      {
        path: "/booking",
        name: "Booking",
        group: "Pages",
        element: <BookingPage />,
      },
      {
        path: "/team",
        name: "Our Team",
        group: "Pages",
        element: <OurTeamPage />,
      },
      {
        path: "/testimonial",
        name: "Testimonial",
        group: "Pages",
        element: <TestimonialPage />,
      },
      {
        path: "/contact",
        name: "Contact",
        element: <ContactPage />,
      },
    ],
  },
];
