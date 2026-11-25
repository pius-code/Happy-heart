import type { StaticImageData } from "next/image";

import basic1Classroom from "@/public/images/Basic1 classrooom.jpg";
import chineseClub from "@/public/images/Chinese club.jpg";
import excursion from "@/public/images/excursion.jpg";
import wa0026 from "@/public/images/IMG-20261123-WA0026.jpg";
import heritageTrip from "@/public/images/IMG-20261123-WA0027.jpg";
import wa0028 from "@/public/images/IMG-20261123-WA0028.jpg";
import wa250004 from "@/public/images/IMG-20261125-WA0004.jpg";
import wa250005 from "@/public/images/IMG-20261125-WA0005.jpg";
import campusMorning from "@/public/images/IMG_20240126_084507.jpg";
import campusActivity from "@/public/images/IMG_20240126_101836.jpg";
import culturalMoment from "@/public/images/WhatsApp Image 2022-03-02 at 10.59.35 AM (7).jpeg";

interface GalleryItemBase {
  id: string;
  title: string;
  caption: string;
  dateLabel: string;
  /** Controls tile height in the mobile/desktop masonry grid for a natural collage feel */
  aspect: "portrait" | "landscape" | "square";
}

export interface GalleryImageItem extends GalleryItemBase {
  type: "image";
  src: StaticImageData;
  alt: string;
}

export interface GalleryVideoItem extends GalleryItemBase {
  type: "video";
  videoSrc: string;
}

export type GalleryItem = GalleryImageItem | GalleryVideoItem;

export const galleryItems: GalleryItem[] = [
  // New uploads (25 Nov 2026)
  {
    type: "video",
    id: "vid-wa25-0008",
    videoSrc: "/videos/VID-20261125-WA0008.mp4",
    title: "Campus Video 1",
    caption: "Video highlight from Happy Heart School.",
    dateLabel: "25 NOV 2026",
    aspect: "portrait",
  },
  {
    type: "video",
    id: "vid-wa25-0009",
    videoSrc: "/videos/VID-20261125-WA0009.mp4",
    title: "Campus Video 2",
    caption: "Classroom and campus energy in motion.",
    dateLabel: "25 NOV 2026",
    aspect: "square",
  },
  {
    type: "image",
    id: "img-wa25-0004",
    src: wa250004,
    alt: "Happy Heart School activity",
    title: "Daily Activity",
    caption: "Engaged minds and bright smiles.",
    dateLabel: "25 NOV 2026",
    aspect: "square",
  },
  {
    type: "video",
    id: "vid-wa25-0010",
    videoSrc: "/videos/VID-20261125-WA0010.mp4",
    title: "Campus Video 3",
    caption: "Students sharing their school day.",
    dateLabel: "25 NOV 2026",
    aspect: "portrait",
  },
  {
    type: "image",
    id: "img-wa25-0005",
    src: wa250005,
    alt: "Happy Heart School pupils",
    title: "Bright Futures",
    caption: "Every day brings something new to discover.",
    dateLabel: "25 NOV 2026",
    aspect: "landscape",
  },
  {
    type: "video",
    id: "vid-wa25-0011",
    videoSrc: "/videos/VID-20261125-WA0011.mp4",
    title: "Campus Video 4",
    caption: "A closer look at life at Happy Heart.",
    dateLabel: "25 NOV 2026",
    aspect: "landscape",
  },

  // Existing photos
  {
    type: "image",
    id: "img-chinese-club",
    src: chineseClub,
    alt: "Members of the Chinese club holding up a certificate on the school steps",
    title: "Chinese Club",
    caption: "Members of the Chinese club celebrating their certificate on the school steps.",
    dateLabel: "23 NOV 2026",
    aspect: "landscape",
  },
  {
    type: "image",
    id: "img-heritage-trip",
    src: heritageTrip,
    alt: "Pupils in yellow and orange polos gathered outside a whitewashed castle",
    title: "Heritage Trip",
    caption: "Pupils exploring Ghana's history during our school heritage excursion.",
    dateLabel: "23 NOV 2026",
    aspect: "portrait",
  },
  {
    type: "image",
    id: "img-excursion",
    src: excursion,
    alt: "Happy Heart pupils smiling together during a school excursion",
    title: "School Excursion",
    caption: "Out and about learning beyond the classroom walls.",
    dateLabel: "23 NOV 2026",
    aspect: "landscape",
  },
  {
    type: "image",
    id: "img-basic-1-classroom",
    src: basic1Classroom,
    alt: "Basic 1 pupils focused on classwork at their desks",
    title: "Basic 1 Classroom",
    caption: "Hands-on learning and bright minds in our Basic 1 classroom.",
    dateLabel: "23 NOV 2026",
    aspect: "square",
  },
  {
    type: "image",
    id: "img-wa0026",
    src: wa0026,
    alt: "Happy Heart pupils during a school activity",
    title: "Campus Moments",
    caption: "Smiles, teamwork, and everyday joy around campus.",
    dateLabel: "23 NOV 2026",
    aspect: "portrait",
  },
  {
    type: "image",
    id: "img-wa0028",
    src: wa0028,
    alt: "Pupils participating in a group learning session",
    title: "Group Learning",
    caption: "Growing together through curiosity and friendship.",
    dateLabel: "23 NOV 2026",
    aspect: "landscape",
  },
  {
    type: "image",
    id: "img-campus-morning",
    src: campusMorning,
    alt: "Pupils gathered on campus on a bright morning",
    title: "Morning Assembly",
    caption: "Starting the school day with energy and purpose.",
    dateLabel: "26 JAN 2024",
    aspect: "portrait",
  },
  {
    type: "image",
    id: "img-campus-activity",
    src: campusActivity,
    alt: "Students engaged in a creative school activity",
    title: "Creative Time",
    caption: "Building confidence through hands-on activities.",
    dateLabel: "26 JAN 2024",
    aspect: "landscape",
  },
  {
    type: "image",
    id: "img-cultural-moment",
    src: culturalMoment,
    alt: "Pupils dressed for a Happy Heart School celebration",
    title: "School Celebration",
    caption: "Memorable moments from our Happy Heart community.",
    dateLabel: "02 MAR 2022",
    aspect: "square",
  },
];

export function getGalleryItemById(id: string): GalleryItem | undefined {
  return galleryItems.find((item) => item.id === id);
}
