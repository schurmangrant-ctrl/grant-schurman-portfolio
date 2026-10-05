/* ------------------------------------------------------------------
   EDIT THIS FILE to change what the site says and shows.

   Images: every `src` below is a file in images/. To swap in a full-size
   original, save it over the same filename (or change the path here).
   Replace every URL marked TODO.
------------------------------------------------------------------- */
window.PORTFOLIO = {
  name: ["Grant", "Schurman"],
  tagline: "Architectural Portfolio",
  email: "schurmangrant@gmail.com",

  links: {
    resumePdf: "",                                      // optional: "resume.pdf" adds a Download button
    rosie: "https://ruralstudio.org/project/rosies-home/",
    fullNineYards: "https://example.com/full-9-yards",  // TODO
    etsy: "https://www.etsy.com/shop/YOURSHOP"          // TODO
  },

  about: {
    photo: "images/about.jpg",
    role: "Architecture Student",
    location: "Mount Carroll, Illinois",
    text: [
      "I got into architecture when I was a kid playing with Legos. From then on building and creating were something I always strived to do. Always being a detail-oriented person, I’m generally looking around cities noticing the small things around buildings and structures. Through my time in school I’ve been able to curate a great deal of different projects and in this time I’ve been able to establish my own style.",
      "I know my future in this field is bright and I’m excited to take my first real steps. The one main thing I want to do in this career path is make an impact and be able to change the life of another in a good way through something I’ve put my design into."
    ]
  },

  resume: {
    education: [
      { when: "2019 – Present", what: "Auburn University — Auburn, AL", note: "Bachelor of Architecture (5 Year Program)" }
    ],
    experience: [
      { when: "2019 – 2020", org: "Richard L. Johnson & Associates", place: "Rockford, IL", role: "Intern",
        bullets: ["Handled smaller scale tasks on projects.", "Took various notes and information down from construction meetings.", "Delivered construction documents across the region."] },
      { when: "2021", org: "Willett Hofmann & Associates", place: "Dixon, IL", role: "Intern",
        bullets: ["Began to manage medium scale projects and produce more vital deliverables.", "Headed site visits and managed the correspondence to meet and take down info.", "Entirely categorized and organized the firm’s paper records into a large database."] },
      { when: "2022 – 2023", org: "Streamline Architects", place: "East Moline, IL", role: "Intern",
        bullets: ["Was in charge of several large scale projects at the same time.", "Ran the rendering scheduling and systems for the office through myself and interns.", "Kept constant correspondence and client management through various projects.", "Had larger design say and aided in the completion of specifications and CD sets."] },
      { when: "2022 – Present", org: "Auburn College of Architecture", place: "Auburn, AL", role: "Asst. to Dean",
        bullets: ["Coordinate administrative operations for the College Dean, managing calendars and communication.", "Spearhead special projects and provide critical administrative support for events."] }
    ],
    software: [   // level is out of 10
      { group: "Design", items: [["AutoCAD", 9], ["Revit", 7], ["Rhino", 8], ["SketchUp", 7]] },
      { group: "Edit",   items: [["Photoshop", 8], ["Illustrator", 9], ["InDesign", 8], ["Word", 9]] },
      { group: "Render", items: [["Twinmotion", 9], ["Lumion", 8], ["D5 Render", 8], ["V-Ray", 6], ["Enscape", 6]] }
    ],
    skills: ["Various AI image creators (Bing, PlaygroundAI, DALL-E)", "Watercolor painting", "Construction experience", "Woodworking"]
  },

  /* section: "school" | "work" — decides which landing door the project sits behind */
  projects: [
    { id: 1, section: "school", title: "Covered Bridge Dormitories", short: ["Covered Bridge", "Dormitories"], place: "Columbus, GA",
      subtitle: "Riverwalk mixed use living for Columbus State students.",
      hero: "images/hero-01.jpg",
      text: [
        "Located in downtown Columbus, Georgia, this project is a set of mixed-use dormitory buildings for the students of Columbus State University. A large covered bridge form spans across the three dormitory buildings below. Within the bridge are library and study spaces for students with views that look out on the Chattahoochee River.",
        "The two covered bridges that used to connect Girard (now Phenix City) Alabama and Columbus were designed and built by freed slave Horace King. The bridges were destroyed at the end of the Civil War during the Battle of Girard, the last battle of the entire war. During site analysis and documentation, I had noticed that these bridges and King, the architect, were hardly mentioned. From then on I wanted to utilize referencing the covered bridges as much as possible.",
        "The building itself reflects the basic makeup of a covered bridge and its piers. Three masses house the dining, retail, recreational, and administrative program on the ground floors, while the upper two floors hold the dorms. Windows are carved out and extruded to help the feeling of the three masses feel large and supportive to the bridge above. Additionally, the pass-through spaces on the ground floor are reflective of the bridge above, using its negative space to permeate through to the courtyard spaces."
      ],
      images: [
        { src: "images/p1-01.jpg", cap: "Historic photo of the Dillingham Street Bridge, just northwest of the site, and an early concept sketch." },
        { src: "images/p1-02.jpg", cap: "Site plan and floor plans." },
        { src: "images/p1-03.jpg", cap: "Exterior renderings and wall section details." },
        { src: "images/p1-04.jpg", cap: "Building sections." },
        { src: "images/p1-05.jpg", cap: "Elevations." }
      ] },

    { id: 2, section: "school", title: "Mobile Performing Arts Center (MPAC)", short: ["MPAC", "Performing Arts Center"], place: "Mobile, AL",
      subtitle: "A performing arts center featuring various practice, event, and public spaces as well as a large theater.",
      hero: "images/hero-02.jpg",
      text: [
        "On the corner of Franklin and Dauphin in Mobile, AL this project takes formal nods from the historic wrought iron balconies seen throughout the city. Mardi Gras began in Mobile and the balconies we now see strewn across New Orleans and the French Quarter are a product of those festivities. By utilizing the same formal and functional language, this project creates large practice spaces with views looking out through the skin of the building. That skin is representative of the divided nature of the balconies.",
        "Utilizing symmetry and order as seen in the plans and sections, the building brings its users to a large atrium space. Looking up towards the three floors of practice and event space. As you progress throughout the building the theater space brings you in through a system of stairs and doorways that separates you from the rest of the building. The performers use the rear of the building as well as portions of the upper floors for the support and administration."
      ],
      images: [
        { src: "images/p2-01.jpg", cap: "Balcony precedent sketch and site map." },
        { src: "images/p2-02.jpg", cap: "Ground floor and second floor plans." },
        { src: "images/p2-03.jpg", cap: "Upper floor plan and atrium / practice space renderings." },
        { src: "images/p2-04.jpg", cap: "Performance, egress and mechanical diagrams, with structural exploded axonometric." },
        { src: "images/p2-05.jpg", cap: "Wall section with specification callouts, and sectional render." },
        { src: "images/p2-06.jpg", cap: "Building sections." },
        { src: "images/p2-07.jpg", cap: "Physical models." }
      ] },

    { id: 3, section: "school", title: "Rosie’s Home", short: ["Rosie’s Home", "Rural Studio"], place: "Newbern, AL",
      subtitle: "Rural Studio 20K Project. Taking advantage of a covered home via pole barn.",
      hero: "images/hero-03.jpg",
      link: { label: "See Rosie’s Home on the Rural Studio website", key: "rosie" },
      text: [
        "This client home is a project that takes into consideration aging, a home through generations, and expansion. Rosie, the client, has mobility issues, is aging, and has family that intends to live with her in the coming years. By building a new home below an existing pole barn, this allows for protection from the elements, expansion as necessary if relatives move in, and covered outdoor space that is so desperately needed during warmer months.",
        "Taking inspiration from past Rural Studio 20K homes, the project looks to optimize the future and create obvious solutions for when the client wants to expand their home. The plan allows for clear division of the home while also allowing for all amenities to be used by anyone living there. Having the pole barn roof as a secondary layer above the home’s roof makes sure that even when these additions are possibly made, weak roof joints don’t become problematic and expensive.",
        "I was in Newbern in the Spring of 2022. My group was six students; we were tasked with designing the floor plan of Rosie’s Home down to the exact inch where the doors and pipes came through the slab. We then were part of the installation of the pole barn itself, aiding the contractors in putting it up and setting the footings. In the weeks after the pole barn went up, we put up all of the forms, dug the turn downs, laid the gravel, dug the plumbing paths, calculated the slope, and so many other things. Then finally we laid the slab.",
        "Learning this process brought me a phenomenal amount of understanding to the details involved in architecture. Knowing that we design what we design then someone else is to interpret that and build it themselves, it’s not an easy task."
      ],
      images: [
        { src: "images/p3-01.jpg", cap: "Site plan sketch." },
        { src: "images/p3-02.jpg", cap: "Diagram of one option for how expansion could work, and initial concept sketches." },
        { src: "images/p3-03.jpg", cap: "Floor plan, long section and cross sections." },
        { src: "images/p3-04.jpg", cap: "Interior and exterior elevations." },
        { src: "images/p3-05.jpg", cap: "On site at Rural Studio, Spring 2022, and my “Empathetic Drawing” of part of Rosie’s home." },
        { src: "images/p3-06.jpg", cap: "Perspective drawing." }
      ] },

    { id: 4, section: "school", title: "Orange Beach Rentals", short: ["Gulf Tiny Home", "Short Term Cabin"], place: "Orange Beach, AL",
      subtitle: "Tiny homes project, limited square footage. Cost effective short term rentals near the beach.",
      hero: "images/hero-04.jpg",
      text: [
        "Along a path in the Orange Beach state park in Alabama, this project is intended to be “glamping” dwellings for lower-cost stays near the beach. Beginning with some precedent research, I was interested in using multi-use installations like the Murphy bed, fold down tables, and built in/storable furniture.",
        "By using simple materials and common construction methods, this project aims to be cost effective while still pushing for quality design in the details. All in all this small rental comfortably sleeps five people, while with smaller groups it can accommodate beach gear, bikes, etc. by folding up one of the beds."
      ],
      images: [
        { src: "images/p4-01.jpg", cap: "Site photos along the path in Orange Beach State Park." },
        { src: "images/p4-02.jpg", cap: "Floor plan scenarios 1–4: one cabin, four ways to live in it." },
        { src: "images/p4-03.jpg", cap: "Floor plan with 30 ft of surroundings, and building sections." },
        { src: "images/p4-04.jpg", cap: "Mid-review watercolor conceptual rendering, and interior model photos." }
      ] },

    { id: 5, section: "school", title: "Wood Comp", short: ["Wood Comp", "Forestry Pavilion"], place: "Montgomery, AL",
      subtitle: "Competition by the Alabama Forestry Foundation. Small scale pavilion at their urban headquarters.",
      hero: "images/hero-05.jpg",
      text: [
        "Tasked with designing something that reflects the nature of wood, this pavilion dives into the unnatural curving the material can make when worked on by the human hand. Inspired by the Aalto Stool, wood steam bending defies much of most woodworking’s guidelines and rules. Creating a smooth curve out of a once straight piece of wood.",
        "Below the structure, this covering hatches and crosses itself as it supports the angled roof, yet the wood never touches the ground. Wood and steel connections work together to bring the heavy load to the ground through its concrete base."
      ],
      images: [
        { src: "images/p5-01.jpg", cap: "Axonometric views of the pavilion." },
        { src: "images/p5-02.jpg", cap: "Site plan and pavilion plan." },
        { src: "images/p5-03.jpg", cap: "Sections AA and BB, and massing in context." }
      ] },

    { id: 6, section: "work", title: "Various Professional / Personal", short: ["Professional Work", "Architectural Personal"], place: "Various",
      subtitle: "A compilation of some freelance orders, AI specialty image creation, and professional renderings done for past companies while interning.",
      hero: "images/hero-06.jpg",
      text: [
        "Within this section you’ll see some of the less structured and more personal work. I’ve been able to use my skill to secure some really interesting and informative freelance work through personal connections and websites like Fiverr.",
        "AI has been something that has really taken the entire architecture profession by storm, and I really wanted to make sure I could use it as a tool for conceptual work, inspiration, or just simple image creation.",
        "Professionally I’ve been able to head my rendering departments. Ranging from large scale golf course clubhouses to smaller storage units, I’ve been able to architecturally visualize quite a bit in my time interning."
      ],
      groups: { professional: "Professional", personal: "Freelance, AI & Making" },
      images: [
        { g: "professional", src: "images/p6-pro-davis-initial.jpg", cap: "Initial render of the Davis Community Center, in my hometown of Mount Carroll, IL." },
        { g: "professional", src: "images/p6-pro-davis-final.jpg", cap: "Final renders of the Davis Community Center." },
        { g: "professional", src: "images/p6-pro-davenport-1.jpg", cap: "Davenport Country Club, clubhouse renderings." },
        { g: "professional", src: "images/p6-pro-davenport-2.jpg", cap: "Davenport Country Club, clubhouse renderings." },
        { g: "personal", src: "images/p6-free-mayans-sketch.jpg", cap: "Freelance: sketch supplied by client." },
        { g: "personal", src: "images/p6-free-mayans-final.jpg", cap: "Freelance: final product." },
        { g: "personal", src: "images/p6-free-home-sketch.jpg", cap: "Freelance: sketch supplied by client." },
        { g: "personal", src: "images/p6-free-home-final.jpg", cap: "Freelance: final product." },
        { g: "personal", src: "images/p6-ai-big.jpg", cap: "Sketchy BIG-style rendering, generated." },
        { g: "personal", src: "images/p6-ai-farnsworth.jpg", cap: "Farnsworth-style winter rendering, generated." },
        { g: "personal", src: "images/p6-ai-chalet.jpg", cap: "Generated mountain chalet, comic style." },
        { g: "personal", src: "images/p6-ai-watercolor.jpg", cap: "Watercolor contemporary home, generated." },
        { g: "personal", src: "images/p6-make-stools.jpg", cap: "Aalto stools I made at Rural Studio." }
      ] }
  ]
};
