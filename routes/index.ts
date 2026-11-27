export const routes = {
  home: "/",
  about: "/about",
  admissions: "/admissions",
  gallery: "/gallery",
  contact: "/contact",
  // "Book a Visit" goes to the Contact page with the Visit reason pre-selected.
  visit: "/contact?reason=visit",
};

// Links shown in the header, mobile menu and footer.
export const mainNav = [
  { label: "About", href: routes.about },
  { label: "Admissions", href: routes.admissions },
  { label: "Gallery", href: routes.gallery },
  { label: "Contact", href: routes.contact },
];
