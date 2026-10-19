/**
 * wedding-data.js — Customer-facing editable data layer for noor-e-zahra
 * Edit this file to update couple names, parents, dates, venue, Islamic dua, and photos.
 */

window.WEDDING_DATA = {
  couple: {
    bride: {
      first: "Anam",
      last: "Sayeed",
      script: "Sayeed",
      parents: "Daughter of Haji Md Sayeed Alam",
      note: "Daughter of Haji Md Sayeed Alam — a heart full of grace, kindness and quiet light.",
      photo: "./editable/assets/bride.jpg",
    },
    groom: {
      first: "Zishan",
      last: "",
      script: "Perwez",
      parents: "Son of Shahid Perwez",
      note: "Son of Shahid Perwez — steady, devoted and blessed with warmth.",
      photo: "./editable/assets/groom.jpg",
    },
  },

  wedding: {
    eventName: "Nikah Ceremony",
    dateISO: "2026-12-12T18:00:00+05:30",
    dateLabel: "December",
    day: "12",
    year: "2026",
    weekday: "Saturday",
    time: "6:00 PM onwards",
    blessing: "With the blessings of Allah and our families, we invite you to share in the joy of our Nikah & Walima as two hearts become one.",
  },

  religious: {
    duaArabic: "اللَّهُمَّ بَارِكْ لَهُمَا وَبَارِكْ عَلَيْكُمَا وَاجْمَعْ بَيْنَهُمَا فِي خَيْرٍ",
    duaTranslit: "O Allah, bless them, and send Your blessings upon them, and unite them in goodness.",
  },

  venue: {
    name: "Hotel Sardar Garden",
    line2: "Near Eraqui Girls High School, Ansar Nagar, Nawada",
    address: "Hotel Sardar Garden, Near Eraqui Girls High School, Ansar Nagar, Nawada, Bihar 805112",
    hosts: "Shahid Perwez & Sanaullah",
  },

  events: [
    {
      id: "nikah",
      eventName: "Nikah Ceremony",
      dateISO: "2026-12-12T18:00:00+05:30",
      dateLabel: "December",
      day: "12",
      year: "2026",
      weekday: "Saturday",
      time: "6:00 PM onwards",
      venue: "Hotel Sardar Garden",
      venueLine2: "Near Eraqui Girls High School, Ansar Nagar, Nawada",
      address: "Hotel Sardar Garden, Near Eraqui Girls High School, Ansar Nagar, Nawada, Bihar 805112",
    },
    {
      id: "walima",
      eventName: "Walima Ceremony",
      dateISO: "2026-12-14T18:00:00+05:30",
      dateLabel: "December",
      day: "14",
      year: "2026",
      weekday: "Monday",
      time: "6:00 PM onwards",
      venue: "At Our Residence",
      venueLine2: "Inerwa Road, Baldiha, Jaynagar",
      address: "Inerwa road, Infront of Raza mosque, Baldiha Jaynagar, Bihar",
    },
  ],

  complements: "Shahid Perwez & Sanaullah",

  contacts: [
    { name: "Shahid Perwez", phone: "9304292121" },
    { name: "Sanaullah", phone: "8434824050" },
  ],

  images: {
    bride: "./editable/assets/bride.jpg",
    groom: "./editable/assets/groom.jpg",
    floralCorner: "./editable/assets/floral-corner.png",
    goldFlourish: "./editable/assets/gold-flourish.png",
    masjid: "./editable/assets/masjid.png",
    mandala: "./editable/assets/mandala.png",
    paperTexture: "./editable/assets/paper-texture.jpg",
  },
};
