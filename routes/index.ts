export const routes = {
  home: "/",
  about: "/about",
  programmes: "/programmes",
  admissions: "/admissions",
  gallery: "/gallery",
  contact: "/contact",
  // "Book a Visit" goes to the "Talk to us" card on the Admissions page.
  visit: "/admissions#enquire",
};

// Links shown in the header, mobile menu and footer.
export const mainNav = [
  { label: "About", href: routes.about },
  { label: "Programmes", href: routes.programmes },
  { label: "Admissions", href: routes.admissions },
  { label: "Gallery", href: routes.gallery },
  { label: "Contact", href: routes.contact },
];
