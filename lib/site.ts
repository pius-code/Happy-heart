// Verified school details (from the school's previous website, happyheart.edu.gh).
// Footers, contact blocks and JSON-LD must read from here.
export const site = {
  name: "Happy Heart School",
  url: "https://happyheart.edu.gh",
  ageRange: "Ages 18 months – 14 years",
  address: {
    street: "4 Uranus Street",
    area: "Dome Pillar 2",
    district: "Ga East",
    city: "Accra",
    country: "Ghana",
    full: "4 Uranus Street, Dome Pillar 2, Ga East, Accra, Ghana",
  },
  ghanaPostAddress: "GE-324-7377",
  phone: {
    display: "+233 (0) 554 414 948",
    href: "tel:+233554414948",
    // Same number on WhatsApp. wa.me opens a chat in the app (or WhatsApp Web).
    whatsappHref: "https://wa.me/233554414948",
  },
  email: "admin@happyheart.edu.gh",
};

// Leadership listed on the previous website. Only Mr Bluie has a usable photo there.
export const team = [
  { name: "Mr Isaac Aboagye Asante", role: "CEO", photo: null },
  { name: "Mrs Hariet Asante", role: "Director of Operations", photo: null },
  { name: "Mr Kennedy Bluie", role: "Headteacher", photo: "/images/team/kennedy-bluie.jpg" },
  { name: "Mr Fred Badu", role: "STEAM", photo: null },
];
