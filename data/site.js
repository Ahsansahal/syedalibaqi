/**
 * Central content file for the whole site, migrated from the original Wix site
 * (deepakravi.co.uk). Pages are presentational and read everything from here.
 * Gallery items live in ./galleries.js.
 *
 * Media paths point to /public (e.g. "/images/…", "/videos/…", "/files/…").
 */

export const site = {
  name: "Syed Ali Abdul Baqi",
  role: "Visual Artist",
  location: "London",
  email: "deepuckravi@gmail.com",
  phones: [
    { label: "+44 (0) 74044 38838", tel: "+447404438838", whatsapp: "447404438838" },
    { label: "+91 9840312725", tel: "+919840312725", whatsapp: "919840312725" },
  ],
  cvUrl: "/files/cv.pdf",
  cvContactUrl: "/files/cv-contact.pdf",
  copyright: "© 2026-27 by Syed Ali Abdul Baqi",
};

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Work",
    href: "/work",
    children: [
      { label: "Animation and Motion Graphics", href: "/work" },
      { label: "Case Study", href: "/case-study" },
      { label: "Projects", href: "/projects" },
    ],
  },
  { label: "Generative AI", href: "/generative-ai" },
  { label: "Album art", href: "/album-art" },
  { label: "Clients", href: "/clients" },
  { label: "About Dee", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Scrolling marquee rows (Home + About). Text kept exactly as on the original site.
export const marquees = [
  { text: "Visual Stategy", direction: "rtl" },
  { text: "Brand Voice", direction: "ltr" },
  { text: "Brand Identity", direction: "rtl" },
  { text: "Motion Design", direction: "ltr" },
];

export const home = {
  heroLines: ["Syed Ali Abdul Baqi,", "VISUAL ARTIST,", "LONDON"],
  showreel: {
    label: "Showreel",
    src: "/videos/2520e1_7602b66129df4bfc9931873c3ef2baf7.mp4",
    poster: "/images/2520e1_b191a0a4b2df483caeae69dd792332e7_mv2.png",
    title: "Click to view showreel",
  },
  projectsButton: { label: "Projects", href: "/projects" },
  glimpseLabel: "Glimpse",
};

export const work = {
  title: ["Animation", "& Video work"],
  intro:
    "Across a range of projects, the scope has consistently involved ideation to creative execution - merging animation, graphic design, sound design and generative AI tools to create authentic and immersive outcomes that strengthen brand impact.",
};

export const caseStudy = {
  headerImage: "/images/2520e1_a7dbf2f3534b41738be94fc6c3b5b5cd_mv2.png",
  title: "Case Study: EVO ICL",
  subtitle: "Reframing Vision Correction Through Inclusive Segmentation",
  intro: [
    "EVO ICL is a globally recognised vision correction solution and an implantable collamer lens that enables people to live without the need for glasses or contact lenses acting as a barrier in their daily lives. It is known for premium, high performance outcomes. However, recent campaigns such as those featuring Lucy Bronze have unintentionally reinforced the perception that EVO ICL is primarily for an elite, high income audience.",
    "This project repositions the brand through inclusive customer segmentation, making EVO ICL feel accessible, relatable and desirable across broader lifestyle groups.",
  ],
  heroFilm: {
    heading: 'Hero Film: "What\'s Your Superpower?',
    body: 'A central hero film titled "What\'s your superpower?" unified the segmented storytelling approach by positioning clear vision as a source of confidence, freedom and self expression rather than a clinical outcome. It brought together the Fearless, the Dreamer and the Bold through distinct visuals and real life scenarios, framing vision correction as a personal superpower that empowers different lifestyles in different ways. This ensured consistency across all content while still allowing each audience to feel individually represented, with an aspirational yet grounded tone. The film was also showcased at a live event to amplify impact and create a shared, high attention storytelling moment.',
    video: {
      src: "/videos/2520e1_7a25770b0b454a53a033770487dbc8ac.mp4",
      poster: "/images/2520e1_7a25770b0b454a53a033770487dbc8acf002.jpg",
    },
  },
  partnership: {
    heading: "A summary of a year-long partnership with the brand",
    video: {
      src: "/videos/2520e1_197f1593b401417482c1ce67cbc94719.mp4",
      poster: "/images/2520e1_197f1593b401417482c1ce67cbc94719f002.jpg",
    },
    body: "This piece brings together the creative output and campaign work developed over this period. It reflects the creative direction I led and the assets I produced across multiple activations.",
  },
  cta: { label: "View projects", href: "/projects" },
};

/**
 * Projects page. `gallery` keys refer to ./galleries.js.
 * galleryStyle: "row" = strip of portrait images, "thumbnails" = slideshow with thumbnail strip.
 * `video` (optional) + `videoPosition` ("before" | "after" the gallery).
 */
export const projects = {
  headerImage: "/images/2520e1_1065a251d75f4ba1b8e356d00f16129c_mv2.jpg",
  title: "Projects",
  intro:
    "From building brands from the ground up to refining existing identities, each project is rooted in strategy, shaped by storytelling, and executed with a strong attention to detail, reflecting my approach to design - thoughtful, functional, and visually driven.",
  items: [
    {
      title: "Staar Surgical: Project Bronze",
      body: [
        "STAAR Surgical has partnered with footballer Lucy Bronze to front the EVO ICL campaign, highlighting the lens implant as a lifestyle-enhancing vision correction solution that offers clarity, freedom, and safety without compromise. The campaign will center on Lucy's reputation for precision, performance, and vision on the field to inspire audiences considering alternatives to glasses and contact lenses. Production will involve email campaigns and social media creatives that showcase Lucy's story, emphasize EVO ICL's key benefits - sharp vision, reversibility, and long-term safety - and position the brand as a trusted, aspirational choice for people seeking clear sight and greater lifestyle freedom.",
      ],
      gallery: "projectBronze",
      galleryStyle: "row",
      video: {
        src: "/videos/2520e1_13127af86a0c48479b5b905dbf3cc4d1.mp4",
        poster: "/images/2520e1_13127af86a0c48479b5b905dbf3cc4d1f002.jpg",
      },
      videoPosition: "after",
    },
    {
      title: "OCL Vision: Make the switch",
      subtitle: "Social Media Campaign",
      body: [
        'The "Make the Switch" campaign targeted glasses and contact lens wearers aged 22–40, highlighting the frustrations of foggy lenses, dryness, and daily maintenance in a fast-paced lifestyle. Led by OCL Vision, a trusted leader in eye health and vision correction, the goal is to drive consultation bookings by positioning laser vision correction as the smart switch for living life without interruptions.',
      ],
      gallery: "projectOcl",
      galleryStyle: "row",
      video: {
        src: "/videos/2520e1_c458a697031a477fb59c0adb4bf3b8e1.mp4",
        poster: "/images/2520e1_c458a697031a477fb59c0adb4bf3b8e1f000.jpg",
      },
      videoPosition: "before",
    },
    {
      title: "Admiah Digital: Branding",
      body: [
        "Agency Brief: Admit Digital is a Google Ads agency specializing in highly targeted advertising campaigns that help businesses maximize ROI through data-driven precision and measurable growth. The brief is to create a clean, modern logo and brand identity in a single day that reflects the company's expertise, trustworthiness, and results-focused approach, with a digital-first design adaptable for web, social, and ad placements.",
      ],
      gallery: "projectAdmiah",
      galleryStyle: "thumbnails",
    },
    {
      title: "Brand Identity:Totle (Kidswear)",
      body: [
        "Agency Brief: The aboard company is a fashion label that specialises in children's apparel. They are a company aiming to break into the fashion sector with their strong branding, which is where we come in. They want their branding to thrill youngsters and to convey children's enthusiasm and energy in their visual language. Totle is the name we came up with, and the branding can have an option to include a mascot if required.",
      ],
      gallery: "projectTotle",
      galleryStyle: "thumbnails",
    },
    {
      title: "Tratech Consulting: Rebranding",
      body: [
        "Agency Brief: Tratech Consulting has engaged us to refresh their logo and explore how the overall brand identity could evolve to better reflect their ethos and future direction. The task is to modernize the logo while preserving key elements that maintain brand recall and recognition. Beyond the logo, we want you to envision how the branding system could expand—through updated colors, typography, iconography, and applications—to enhance Tratech Consulting's positioning as a trusted, innovative, and forward-looking partner. The evolution should highlight the brand's core values of expertise, reliability, and adaptability while creating a visual identity that is scalable, digital-first, and capable of standing out in competitive markets.",
      ],
      gallery: "projectTratech",
      galleryStyle: "thumbnails",
    },
    {
      title: "FITBOX: Brand refresh",
      body: [
        "Agency Brief: This project is a rapid brand refresh designed to update and modernize the look and feel of the brand within just half a day. The focus is on creating small but high-impact changes that enhance brand perception while staying true to existing identity elements for continuity and recall.",
        "Year: 2026-27",
      ],
      gallery: "projectFitbox",
      galleryStyle: "thumbnails",
    },
    {
      title: "Titan : D&I campaign",
      body: [
        "Agency Brief: Titan coming from the TATA group is a well-established company and we all know that. Speaking of the culture, they already have a D&I culture but they want the team to be more aware of it.",
        "They want us to work on 12 emailers and reflect on the behaviours of the employees post the pitch.  Marketing Objective is to promote Diversity and Inclusion amongst their employees.",
        "Year: 2020",
      ],
      gallery: "projectTitan",
      galleryStyle: "thumbnails",
    },
    {
      title: "Surrey Hills Coffee Co.",
      subtitle: "Brief from the agency",
      body: [
        "We have been approached by a theoretical client who have asked us to create their brand identity and require a logo and associated assets from our agency. The fictional company is called 'Surrey Hills Coffee Co' and they operate a small trendy van and visit popular walking spots in the Surrey Hills area. They source sustainable ethical coffee from around the world and sell expensive artisan coffee. - We require three logo concepts in colour from yourself showing your thought process.",
        "Year: 2026-27",
      ],
      gallery: "projectSurrey",
      galleryStyle: "thumbnails",
    },
  ],
};

export const generativeAI = {
  title: ["AI-Enhanced", "Creative Storytelling"],
  intro: [
    "This space showcases my finished artworks - visuals and videos born from a fusion of generative AI and traditional graphic design practices.",
    "Each piece begins with AI-generated imagery or motion, then evolves through detailed editing in Photoshop and After Effects to achieve the final, polished result. The outcome: fully realized concepts that blur the line between imagination and reality.",
  ],
};

export const albumArt = {
  titleTop: "Album",
  titleBottom: "Art",
  // The four "phone" tiles in the hero (2 stills + 2 looping videos)
  phones: [
    { type: "image", src: "/images/2520e1_66be641019144fd6bd977104d7f254fd_mv2.png" },
    {
      type: "video",
      src: "/videos/2520e1_77f7f535c0984cdb818f8f478e7121c6.mp4",
      poster: "/images/2520e1_77f7f535c0984cdb818f8f478e7121c6f000.jpg",
    },
    {
      type: "video",
      src: "/videos/2520e1_6cfee54e92444b3db995852447b996ea.mp4",
      poster: "/images/2520e1_6cfee54e92444b3db995852447b996eaf000.jpg",
    },
    { type: "image", src: "/images/2520e1_81b9190b0ba943ee8adf7cf29b9d3e68_mv2.png" },
  ],
};

export const clients = {
  title: ["Shaping brands", "one story at a time."],
};

export const about = {
  quote: '"Creativity takes courage"',
  author: "-Henri Matisse",
  storyHeading: "My Story",
  storyVideo: {
    src: "/videos/2520e1_65e5fb57a8024ca88e70f4db3c2d9cf2.mp4",
    poster: "/images/2520e1_65e5fb57a8024ca88e70f4db3c2d9cf2f000.jpg",
  },
};

export const contact = {
  heading: "GET IN TOUCH",
  taglineTop: "Your product is almost",
  taglineBottom: "INVISIBLE without branding.",
  whatsappIcon: "/images/2520e1_851d878d92cc4b3991e5f04dbcc8c693_mv2.png",
};
