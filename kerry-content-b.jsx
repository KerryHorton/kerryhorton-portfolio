// kerry-content-b.jsx — case study content, projects 06–10, plus About.
window.KERRY_CASES = window.KERRY_CASES || {};

window.KERRY_CASES["ecocar"] = {
  number: "06",
  slug: "ecocar",
  kicker: "UW EcoCAR Mobility Challenge · GM",
  title: "Designing an Onboarding Experience for a Semi-Autonomous Car-Sharing Vehicle",
  subtitle: "A UX research and product design project exploring how renters can safely learn unfamiliar vehicle features before driving.",
  intro: [
    "As vehicles become more connected and automated, the challenge is not just designing the technology — it is helping people understand, trust, and use that technology safely.",
    "Through the University of Washington EcoCAR team, I worked on the HMI/UX team for the EcoCAR Mobility Challenge, a four-year competition sponsored by General Motors. The competition challenged university teams to retrofit a 2019 Chevrolet Blazer into an electric-hybrid, semi-autonomous vehicle intended for a car-sharing platform. My team focused on the user-facing mobile app experience, specifically how renters could learn about unfamiliar semi-autonomous features before getting behind the wheel.",
  ],
  snapshot: {
    "Client": "University of Washington EcoCAR Mobility Challenge",
    "Timeline": "Year 3 · September 2020 – June 2021",
    "Role": "Design Team Lead, UX/UI Researcher & Designer",
    "Team": "HMI/UX Design Team, App Development Team, broader UW EcoCAR team, GM competition stakeholders",
    "Methods": "Competitive analysis, user research, survey research, interviews, personas, information architecture, value/feasibility mapping, wireframing, low-fidelity prototyping",
    "Tools": "Figma, Google Forms, Miro",
    "Outcome": "UW EcoCAR placed 4th of 11 in Year 3; judges highlighted the team's accessibility considerations, research process, and clear design rationale",
  },
  summary: {
    problem: "Car-sharing renters may climb into a semi-autonomous vehicle they've never driven. Teaching unfamiliar, safety-critical features \u2014 like Adaptive Cruise Control \u2014 before the drive is a trust and safety problem, not just a UX nicety.",
    role: "Design Team Lead \u00b7 UX Researcher & Designer",
    timeline: "Year 3 \u00b7 Sep 2020 \u2013 Jun 2021",
    team: "HMI/UX design team, app dev team & GM competition stakeholders",
    methods: ["Competitive Analysis", "Surveys", "Interviews", "Personas", "Information Architecture", "Wireframing", "Lo-fi Prototyping"],
    outcome: "A research-led, multi-modal onboarding flow for Adaptive Cruise Control \u2014 helping UW place 4th of 11, with judges calling out accessibility and research rigor.",
  },
  stats: [
    { value: "4th", label: "of 11 competing universities" },
    { value: "Yr 3", label: "of a 4-year GM challenge" },
  ],
  tags: ["UX Research", "Product Design", "Human Factors", "Automotive UX", "Onboarding", "Accessibility", "Competitive Analysis", "Information Architecture", "Wireframing", "Prototyping", "Emerging Technology", "Car Sharing", "Safety-Critical UX"],
  sections: [
    { id: "challenge", title: "The Challenge", blocks: [
      { type: "p", text: "Car-sharing users may rent vehicles they have never driven before. When those vehicles include semi-autonomous features, such as Adaptive Cruise Control, the learning curve becomes more than a convenience issue — it becomes a safety and trust issue." },
      { type: "p", text: "Our design challenge was to help renters quickly and confidently understand how to use unfamiliar vehicle features without relying on a staff member, printed manual, or third-party support." },
      { type: "quote", text: "How might users of car-sharing services achieve sufficient education on semi-autonomous vehicle features so they can safely and successfully operate an unfamiliar car-sharing vehicle?" },
    ]},
    { id: "role", title: "My Role", blocks: [
      { type: "p", text: "I led the design team responsible for the renter-side mobile app experience. My work included research synthesis, competitive analysis, ideation, information architecture, wireframing, low-fidelity prototyping, and design decision-making." },
      { type: "p", text: "As design team lead, I also helped coordinate our work with the broader HMI/UX team and app development team. Because the project sat at the intersection of software, vehicle systems, and user education, our design decisions needed to account for usability, accessibility, safety, technical feasibility, and competition requirements." },
    ]},
    { id: "why-onboarding", title: "Why Onboarding Mattered", blocks: [
      { type: "p", text: "Unlike a privately owned car, a car-sharing vehicle may be used by many different people with different driving backgrounds, confidence levels, and familiarity with advanced vehicle features. That created a central UX challenge: how do we give users enough information to feel prepared without overwhelming them before a ride?" },
      { type: "p", text: "The onboarding experience needed to be efficient enough for a car-sharing context, accessible for different user proficiencies, flexible across learning styles, clear enough to support safe vehicle operation, and integrated with both the mobile app and in-car system." },
    ]},
    { id: "competitive", title: "Competitive Analysis", blocks: [
      { type: "p", text: "We began by studying existing car-sharing apps to identify common patterns, strengths, and gaps — how apps supported search, reservations, payments, vehicle access, damage reporting, and pre-ride education. We found that successful car-sharing experiences often included clear map-based search, flexible reservation flows, multiple payment options, damage documentation before and after a ride, clear access instructions, QR-code access with backup code entry, and consistent visual systems." },
      { type: "p", text: "This helped us understand the baseline expectations users bring into a car-sharing app, so we could identify where education around semi-autonomous features needed to fit into the broader rental flow." },
    ]},
    { id: "research", title: "User Research", blocks: [
      { type: "p", text: "To understand user needs and learning preferences, we conducted survey research and user interviews. We wanted to learn how people prefer to absorb new information, especially when learning about an unfamiliar product or system. Participants valued:" },
      { type: "list", items: [
        "Efficiency — information quickly and without unnecessary friction",
        "Accessibility — instructions that were easy to understand and use",
        "Flexibility — options depending on their context and comfort level",
        "Variation in learning modes — information presented in more than one way",
      ]},
      { type: "p", text: "We also found that many participants identified as visual learners, followed by physical, verbal, and aural learners. This shaped our decision to include multiple ways of presenting onboarding information, including videos, images, GIFs, and short text explanations." },
    ]},
    { id: "insights", title: "Key Research Insights", blocks: [
      { type: "themes", items: [
        { title: "Quick & practical, not a course", text: "Renters want just enough to feel prepared and safe \u2014 a brief flow, not a dense training module." },
        { title: "People learn differently", text: "The flow had to support visual, physical, and verbal learners through mixed media \u2014 not text alone." },
        { title: "Clear mental models matter", text: "Adaptive Cruise Control needs what/when/how/limits made understandable without oversimplifying safety." },
        { title: "App + vehicle as one system", text: "Users move between phone and car, so onboarding had to connect to what they'd see inside the vehicle." },
      ]},
    ]},
    { id: "ia", title: "Information Architecture", blocks: [
      { type: "p", text: "We created information architecture flows for both the renter side and owner side of the app. This helped us understand how different user types would move through the product and where onboarding needed to fit within the broader car-sharing experience. One challenge we identified was that connecting renter-side and owner-side flows could create unnecessary complexity, so we separated the two flows while still allowing users to switch between them within the app." },
      { type: "image", caption: "The IA helped us separate renter and owner flows while identifying where education should appear in the car-sharing journey." },
    ]},
    { id: "wireframes", title: "Wireframing & Prototyping", blocks: [
      { type: "p", text: "We created wireframes for the renter-side experience, focusing on making the interface feel seamless, accessible, and informative. The wireframes helped us explore how users would move from booking a car to learning about its features, and gave us a way to evaluate whether important information was visible at the right moments. I personally designed the Settings screen, using familiar patterns from popular mobile apps so the experience would feel intuitive." },
      { type: "p", text: "We then moved into low-fidelity prototypes for the renter-side app experience. These screens incorporated early branding decisions, including color palette, typography, and icons, with the goal of creating an interface that felt accessible, informative, and easy to move through before or during a rental." },
      { type: "image", caption: "Wireframes and low-fidelity prototypes defined how renters would navigate the app and access vehicle information." },
    ]},
    { id: "onboarding-flow", title: "Onboarding Flow", blocks: [
      { type: "p", text: "The onboarding flow was the core of our solution. For Year 3, our team focused on onboarding users to Adaptive Cruise Control. The flow introduced the feature, explained its purpose, and gave users a way to review how it worked before operating the vehicle." },
      { type: "p", text: "I designed several onboarding screens, including the start screen, overview screen, feature review screen, and progress indicator. The flow was designed to break down technical information into smaller, more approachable steps so users could build understanding without feeling overwhelmed." },
      { type: "image", caption: "The onboarding flow used short, step-based education to help renters understand Adaptive Cruise Control before driving." },
    ]},
    { id: "outcome", title: "Competition Outcome", blocks: [
      { type: "p", text: "At the end of Year 3, the University of Washington EcoCAR team placed 4th out of 11 competitors. Judges responded positively to the team's design process, accessibility considerations, and explanation of design decisions — specifically noting the team's thoughtful approach to accessibility, use of remote research methods during COVID-era constraints, and clear progression from research findings to prototype iterations." },
      { type: "quote", text: "LOVED the accessibility considerations. Above and beyond! The team is really understanding the concepts and is on the right path. — Competition Judge" },
    ]},
    { id: "reflection", title: "Reflection", blocks: [
      { type: "p", text: "This project helped me understand how UX research and design can support safety, trust, and education in complex technical systems. Unlike a typical consumer app, this experience needed to account for the physical context of use. A renter would not just be tapping through screens — they would eventually be operating a real vehicle with unfamiliar semi-autonomous features. That made clarity, accessibility, and timing especially important." },
      { type: "p", text: "As design team lead, I also learned how to guide a team through a highly cross-functional project. Our work needed to align with competition requirements, engineering constraints, HMI considerations, and user needs. That experience helped me become more comfortable translating research into practical design decisions within a larger technical ecosystem." },
    ]},
  ],
};

window.KERRY_CASES["meetzap"] = {
  number: "07",
  slug: "meetzap",
  kicker: "Design for America · University of Washington",
  title: "Designing a Community-Building App for First-Year College Students",
  subtitle: "A mixed-methods UX research and product design project exploring how first-year students build connection and belonging in residence halls.",
  intro: [
    "Starting college can be exciting, but it can also be isolating. For first-year students living in residence halls, the transition often means navigating a new environment, forming friendships from scratch, and figuring out where to turn for social and emotional support.",
    "Through Design for America, my team explored how we might better support first-year University of Washington students as they adjusted to residence hall life. Our research focused on understanding where students felt disconnected, what support systems they actually used, and how a digital product could encourage more meaningful in-person connection.",
  ],
  snapshot: {
    "Client": "Design for America · UW residence hall experience",
    "Timeline": "September 2019 – May 2020",
    "Role": "Team Lead, UX Researcher, UX/UI Designer",
    "Team": "6 student designers, UW residents, residence hall stakeholders / administrators",
    "Methods": "Secondary research, user interviews, survey research, affinity mapping, ideation, information architecture, prototyping, usability testing",
    "Tools": "Figma, Miro, Google Forms, Google Workspace",
    "Outcome": "Designed Meetzap, a mobile app concept that helped first-year students discover events, match with peers, and coordinate low-pressure in-person meetups",
  },
  summary: {
    problem: "First-year students in residence halls often feel isolated. Community is designed for but doesn't happen automatically, and RAs aren't seen as social connectors.",
    role: "Team Lead \u00b7 UX Researcher & Designer",
    timeline: "Sep 2019 \u2013 May 2020",
    team: "6 student designers, UW residents & residence-hall staff",
    methods: ["Secondary Research", "Interviews", "Survey (91)", "Affinity Mapping", "Prototyping", "Usability Testing"],
    outcome: "Meetzap turns shared context into low-pressure, in-person meetups \u2014 grounded in 91 survey responses showing 1 in 3 students lacked a strong sense of community.",
  },
  stats: [
    { value: "91", label: "survey responses" },
    { value: "1 in 3", label: "lacked a strong sense of community" },
    { value: "2.65 / 5", label: "average community rating" },
  ],
  tags: ["UX Research", "Product Design", "Mixed Methods", "Survey Research", "User Interviews", "Affinity Mapping", "Prototyping", "Usability Testing", "Student Experience", "Community Building", "Trust & Safety"],
  sections: [
    { id: "challenge", title: "The Challenge", blocks: [
      { type: "p", text: "Residence halls are often designed with community in mind, but that does not mean community happens automatically. First-year students are navigating a major life transition: moving away from familiar support systems, adjusting to a new academic environment, and trying to build relationships in an unfamiliar place. While Resident Advisors are available on each floor, their role is often centered on safety, logistics, and support — not necessarily creating low-pressure opportunities for students to socialize and form genuine friendships." },
      { type: "quote", text: "How might we better support UW first-year students who are staying in residence halls and navigating their transition into a new community?" },
    ]},
    { id: "role", title: "My Role", blocks: [
      { type: "p", text: "As team lead, I helped guide the project from early research through final prototype and presentation. I contributed across the full design process, including research planning, interviews, survey analysis, synthesis, ideation, prototyping, and visual design." },
      { type: "p", text: "A major part of my role was also helping the team stay aligned through an ambiguous, long-term project. Early on, I gave the group a high degree of creative freedom, but I later realized we needed clearer structure to keep momentum. I adjusted by creating broader project timelines, smaller individual deliverables, and more focused working sessions, which helped the team move more efficiently from research to design." },
    ]},
    { id: "approach", title: "Research Approach", blocks: [
      { type: "p", text: "We used a mixed-methods approach to understand the social and emotional experience of first-year students living in UW residence halls." },
      { type: "list", items: [
        "Secondary research to better understand the broader college transition experience",
        "6 qualitative interviews with UW residents and administrators",
        "91 survey responses from UW residents and administrators",
        "Affinity mapping and color coding to identify recurring themes across transcripts and survey responses",
      ]},
      { type: "p", text: "We used qualitative research to understand the emotional context behind students' experiences, then used survey data to identify which patterns were showing up more broadly across the residence hall community." },
    ]},
    { id: "findings", title: "Key Research Findings", blocks: [
      { type: "h", text: "1. Community was valued, but often missing." },
      { type: "p", text: "Students wanted to feel connected to their residence hall communities, but many did not experience a strong sense of belonging. From our survey, we found that 1 in 3 students did not report a strong sense of community, with an average community rating of 2.65 out of 5. Community was not just a \u201cnice to have\u201d — it was a meaningful gap in the first-year experience." },
      { type: "h", text: "2. Students did not always see RAs as social connectors." },
      { type: "p", text: "Residents knew RAs were available for safety, logistics, and formal support, but they did not necessarily view them as a natural path to friendship. At the same time, RAs wanted to help residents build community — revealing an opportunity to create less formal, more approachable ways for students and RAs to connect." },
      { type: "h", text: "3. Stressors extended beyond social life." },
      { type: "p", text: "Students' residence hall experience was shaped by more than friendship alone. Mental health, academics, and living conditions all contributed to how students felt during their transition into college. This helped us avoid designing a solution that treated social connection as isolated from the broader student experience." },
      { type: "h", text: "4. Friends were the most common go-to resource." },
      { type: "p", text: "When students needed support, they were most likely to turn to friends. This finding helped us focus on peer connection as a key part of helping students feel more comfortable, supported, and integrated into campus life." },
    ]},
    { id: "scope", title: "Refining the Design Scope", blocks: [
      { type: "p", text: "Our early research question focused broadly on supporting students through the transition into residence hall life. As we synthesized our findings, we realized the strongest opportunity was more specific: helping students build meaningful peer connections through shared interests, activities, and in-person interactions." },
      { type: "quote", text: "How might we increase face-to-face interactions and build community among students living in University of Washington residence halls?" },
    ]},
    { id: "principles", title: "Design Principles", blocks: [
      { type: "h", text: "Make connection feel easier." },
      { type: "p", text: "Students wanted to meet people, but initiating plans with unfamiliar peers could feel awkward or intimidating. Our solution needed to lower the barrier to starting a conversation or making a plan." },
      { type: "h", text: "Support in-person interaction." },
      { type: "p", text: "We did not want to create another social media app that kept students behind a screen. The product needed to act as a bridge to face-to-face connection." },
      { type: "h", text: "Include different social styles." },
      { type: "p", text: "Some students are comfortable introducing themselves to strangers, while others need a lower-pressure way to engage. We wanted the experience to support both introverted and extroverted students." },
      { type: "h", text: "Connect students through shared context." },
      { type: "p", text: "Students were more likely to feel comfortable meeting people when they had something in common — a class, hobby, hometown, event, or study goal." },
    ]},
    { id: "ethics", title: "Ethical Considerations", blocks: [
      { type: "p", text: "One of our most important design decisions was how to represent student profiles. Because the app was designed to help students meet new people, we wanted users to feel safe and confident. At the same time, we were cautious about making the experience too photo-driven — we did not want students to make quick judgments based on appearance, especially because the app was intended to support friendship and community, not dating." },
      { type: "p", text: "After discussing the tradeoffs, we chose to use avatars instead of profile photos. This allowed for basic identification while reducing the likelihood that students would make snap judgments based on appearance, keeping the experience focused on personality, shared interests, and comfort." },
      { type: "image", caption: "We chose avatars over profile photos to balance safety, identification, and inclusive connection." },
    ]},
    { id: "final", title: "Final Concept: Meetzap", blocks: [
      { type: "p", text: "Our final concept was Meetzap, a mobile app designed to help first-year students connect with peers, discover residence hall events, and turn digital introductions into in-person interactions." },
      { type: "list", items: [
        "Onboarding for first-time users", "Customizable student profiles", "RA announcements", "Upcoming residence hall events",
        "Peer matching", "Chat functionality", "Meetup coordination", "Offline Mode to encourage in-person connection",
      ]},
      { type: "h", text: "Peer Matching" },
      { type: "p", text: "During onboarding, students could share information about their interests, classes, hometown, goals, and preferences. The matching concept helped students find other residents with shared context. Once matched, they could view each other's profiles and decide whether to accept; if both accepted, chat became available. The goal was to reduce the anxiety of introducing yourself to a stranger while expanding students' ability to meet people beyond their immediate floor." },
      { type: "h", text: "Meet Up Now" },
      { type: "p", text: "Designed for moments when students wanted to do something with others but did not feel comfortable asking publicly. A student could select what they wanted to do, where, when, and how many people they wanted to join — and the app would help connect them with another student or group interested in the same activity." },
      { type: "h", text: "Offline Mode" },
      { type: "p", text: "We wanted Meetzap to encourage real connection, not just more screen time. Offline Mode activated when students met up in person, with light conversation prompts and a reward system where students could earn points or prizes for spending time off their phones — reinforcing the larger behavior we wanted to support." },
      { type: "image", caption: "The final prototype helped students discover events, connect with peers, and coordinate low-pressure in-person meetups." },
    ]},
    { id: "reflection", title: "Reflection", blocks: [
      { type: "p", text: "This project was an early lesson in research-led product design, ethical decision-making, and team leadership. As team lead, I initially gave the group a high degree of creative freedom so each person could contribute their own perspective. Over time, I realized the team needed more structure to stay aligned and make progress through a long, ambiguous project." },
      { type: "p", text: "I adjusted by creating clearer timelines, smaller individual deliverables, and more focused working sessions. That shift improved participation and helped the team move from research synthesis to final prototype more effectively. The strongest solutions often come from narrowing the problem, understanding the emotional context behind user behavior, and designing for the real-world moments where people need support." },
    ]},
  ],
};

window.KERRY_CASES["seattle-design-festival"] = {
  number: "08",
  slug: "seattle-design-festival",
  kicker: "Seattle Design Festival 2019 · \u201cBalance\u201d",
  title: "Designing an Interactive Installation for Seattle Design Festival",
  subtitle: "An experiential design project exploring online identity, offline presence, and personal balance.",
  intro: [
    "Seattle Design Festival is a citywide design event that brings together designers, community members, civic leaders, and organizations to explore how design can shape better experiences and communities.",
    "For the 2019 festival, our team created a physical installation in response to the theme: Balance. We were interested in the balance between people's online and offline lives — how much time we spend in each space, how we present ourselves differently, and how digital habits can shape our sense of identity. Our goal was to create an installation that invited people to physically interact with the theme rather than simply read about it.",
  ],
  snapshot: {
    "Client": "Seattle Design Festival interactive installation",
    "Timeline": "June 2019 – August 2019",
    "Role": "Project Manager, Designer, Builder",
    "Team": "4 designers/builders, Seattle Design Festival visitors",
    "Methods": "Individual brainstorming, group ideation, concept development, experiential design, physical prototyping, fabrication",
    "Tools": "Sketching, woodworking tools, spray paint, physical fabrication materials",
    "Outcome": "Built an interactive installation that invited festival visitors to reflect on the balance between online and offline presence through physical engagement",
  },
  summary: {
    problem: "Seattle Design Festival's theme was 'Balance.' We wanted visitors to feel \u2014 not just read about \u2014 the tension between online identity and offline presence, in a busy public setting.",
    role: "Project Manager \u00b7 Designer \u00b7 Builder",
    timeline: "Jun 2019 \u2013 Aug 2019",
    team: "4 designers/builders + festival visitors",
    methods: ["Ideation", "Concept Development", "Experiential Design", "Physical Prototyping", "Fabrication"],
    outcome: "A hand-built interactive installation that invited festival-goers to physically reflect on their own online / offline balance.",
  },
  tags: ["Experiential Design", "Physical Interaction", "Installation Design", "Project Management", "Design Thinking", "Visual Communication", "Fabrication", "Public Engagement", "Human-Centered Design", "Concept Development"],
  sections: [
    { id: "challenge", title: "The Challenge", blocks: [
      { type: "p", text: "The Seattle Design Festival theme asked participants to explore the idea of balance. Our team interpreted this through the lens of modern identity: the balance between who we are online, who we are offline, and how much time and energy we give to each version of ourselves." },
      { type: "p", text: "We wanted visitors to reflect on questions like: How much time do I spend online versus offline? How do I present myself differently in digital and physical spaces? Does my online presence reflect my authentic self? What would a healthier balance look like?" },
      { type: "p", text: "Rather than designing a text-heavy installation, we wanted to create something physical, visual, and participatory — something people could understand by moving through it, touching it, and reacting to it." },
    ]},
    { id: "role", title: "My Role", blocks: [
      { type: "p", text: "I served as the project manager, designer, and builder for the installation. My role included helping the team stay organized, contributing to early concept development, supporting the physical design direction, coordinating build tasks, and helping fabricate the final installation." },
      { type: "p", text: "Because this was a physical project with a limited budget and timeline, project management and execution were just as important as the concept itself. We needed to make something that was meaningful, engaging, durable, transportable, and realistic to build with the resources we had." },
    ]},
    { id: "goal", title: "Design Goal", blocks: [
      { type: "p", text: "Our goal was to create a physical installation that encouraged visitors to reconsider the balance between their online and offline presence. We wanted the experience to feel interactive rather than passive, visual rather than text-heavy, approachable for a public festival environment, reflective without feeling too serious or instructional, simple enough to understand quickly, and open-ended enough to invite conversation." },
      { type: "p", text: "The installation needed to work for people who might only stop for a few seconds, while still offering more meaning for those who wanted to engage more deeply." },
    ]},
    { id: "ideation", title: "Ideation", blocks: [
      { type: "p", text: "We began by individually brainstorming different installation concepts, then came together to discuss which ideas best supported the festival theme and the visitor experience we wanted to create. During ideation, we explored how people might physically move through or interact with the installation. We were especially drawn to concepts that required visitors to do something with their bodies — not just stand in front of a display and read." },
      { type: "p", text: "We intentionally decided not to include a long timeline, explanation, or text-heavy narrative. In a festival setting, we believed visuals and interaction would be more memorable than a written explanation. We wanted visitors to guide their own experience: engage first, then ask as many or as few questions as they wanted." },
      { type: "image", caption: "Early sketches explored how physical movement and visual contrast could help visitors reflect on online and offline balance." },
    ]},
    { id: "principles", title: "Design Principles", blocks: [
      { type: "h", text: "Make the interaction intuitive." },
      { type: "p", text: "Visitors should be able to understand how to engage without needing a long explanation." },
      { type: "h", text: "Let the visual design carry the message." },
      { type: "p", text: "Because the installation was part of a busy public festival, the idea needed to communicate quickly through form, movement, and contrast." },
      { type: "h", text: "Encourage reflection, not instruction." },
      { type: "p", text: "We wanted the installation to invite people to think about their own habits and identity, not tell them there was one \u201ccorrect\u201d way to balance online and offline life." },
      { type: "h", text: "Build within real constraints." },
      { type: "p", text: "The final installation needed to be achievable with our budget, tools, materials, timeline, and team capacity." },
    ]},
    { id: "building", title: "Building the Installation", blocks: [
      { type: "p", text: "Over two months, our team turned the concept into a physical installation. Because we had a limited budget and resources, practicality mattered. We needed to make design decisions that were visually effective, structurally realistic, and possible for us to build ourselves. The fabrication process included measuring and cutting wood pieces, sanding materials, spray painting components, assembling the structure, nailing pieces together, and transporting and preparing the installation for the festival." },
      { type: "p", text: "This was one of my first experiences building a physical design at this scale. It pushed me to think beyond screens and consider how materials, space, construction, and durability shape the user experience." },
      { type: "image", caption: "With limited budget and materials, we fabricated the installation by hand — from cutting and sanding wood to painting and assembly." },
    ]},
    { id: "final", title: "Final Installation", blocks: [
      { type: "p", text: "The final installation invited Seattle Design Festival visitors to physically engage with the theme of balance and reflect on how they divide time, attention, and identity between online and offline spaces. Instead of relying on a detailed explanation, the installation used interaction and visual design to create a more open-ended experience. Visitors could engage quickly or spend more time asking questions and discussing the concept with our team." },
      { type: "image", caption: "The final installation used physical interaction to invite reflection on online identity, offline presence, and personal balance." },
    ]},
    { id: "reflection", title: "Reflection", blocks: [
      { type: "p", text: "This project taught me that experience design is not limited to digital products. A physical installation still requires many of the same skills I use in UX: understanding an audience, designing for context, simplifying a complex idea, creating an intuitive interaction, and considering how people will feel as they move through an experience." },
      { type: "p", text: "It also helped me understand the importance of constraints, and that a user experience can be a screen, a service, a space, an object, or a moment of reflection in a public festival. Individual brainstorming made group ideation stronger: giving each person time to explore ideas independently helped us bring more creative concepts to the table, then converge around a shared direction." },
    ]},
  ],
};

window.KERRY_CASES["aurora"] = {
  number: "09",
  slug: "aurora",
  kicker: "Design for America · Healthcare",
  title: "Designing a Resource Kiosk for Ovarian Cancer Survivors",
  subtitle: "A healthcare UX and service design project exploring how survivors can access trusted support, education, and community after treatment.",
  intro: [
    "Transitioning out of cancer treatment can bring a new kind of uncertainty. During treatment, patients often have structured care plans and regular guidance from providers. After treatment ends, survivors may need to navigate a more self-directed journey — finding reliable information, emotional support, and community resources on their own.",
    "Through Design for America, my team explored how we might better support ovarian cancer survivors as they transitioned from treatment into survivorship. Our final concept was a private, accessible resource kiosk designed for an oncology care setting, where survivors could discover personalized resources, support groups, and community connections after their final appointment.",
  ],
  snapshot: {
    "Client": "Design for America · ovarian cancer survivorship support",
    "Timeline": "September 2018 – May 2019",
    "Role": "UX Researcher, UX/UI Designer",
    "Team": "5 student designers and researchers, gynecologic oncologists, patients / survivors",
    "Methods": "Secondary research, provider interviews, patient / survivor interviews, synthesis, ideation, wireframing, low-fidelity prototyping, physical prototyping",
    "Tools": "Figma, physical prototyping materials, Miro, Google Workspace",
    "Outcome": "Designed a private, accessible resource kiosk concept for an oncology care setting — focused on support, connection, education, privacy, and professional resource validity",
  },
  summary: {
    problem: "When cancer treatment ends, ovarian cancer survivors lose the structure of provider-led care and must find trustworthy information, support, and community largely on their own.",
    role: "UX Researcher & UX/UI Designer",
    timeline: "Sep 2018 \u2013 May 2019",
    team: "5 student researchers/designers, oncologists & survivors",
    methods: ["Secondary Research", "Provider Interviews", "Survivor Interviews", "Synthesis", "Wireframing", "Physical Prototyping"],
    outcome: "A private, accessible resource kiosk for oncology settings \u2014 prioritizing privacy, professionally-validated resources, and community connection at a sensitive transition.",
  },
  tags: ["Healthcare UX", "Service Design", "UX Research", "Sensitive Research", "Patient Experience", "Survivorship Support", "Accessibility", "Privacy", "Resource Navigation", "Prototyping", "Figma", "Physical-Digital Experience"],
  sections: [
    { id: "challenge", title: "The Challenge", blocks: [
      { type: "p", text: "Our team began with a broad interest in women's healthcare and the gaps people experience when navigating complex care systems. We chose to focus on ovarian cancer survivorship because one of our team members had a personal connection to a community of ovarian cancer survivors, which helped us approach the topic with both care and curiosity." },
      { type: "p", text: "Through early research, we learned that survivors often face a difficult transition after treatment. During active treatment, care is structured and provider-led. But once treatment ends, survivors may be left to find resources, support networks, and education more independently." },
      { type: "quote", text: "How might we better support ovarian cancer survivors in their transition from treatment into survivorship?" },
    ]},
    { id: "role", title: "My Role", blocks: [
      { type: "p", text: "As a UX researcher and UX/UI designer, I contributed to the research, synthesis, ideation, and prototyping phases of the project. I helped the team understand the needs of survivors and providers, translate research findings into design requirements, and develop a kiosk concept that prioritized privacy, accessibility, and trustworthy information. I also supported the interface design and physical prototype development as the concept evolved from early wireframes into a final presentation." },
    ]},
    { id: "approach", title: "Research Approach", blocks: [
      { type: "p", text: "We began with secondary research to understand ovarian cancer treatment, survivorship, and the broader healthcare context. From there, we conducted interviews with gynecologic oncologists, patients, and survivors to understand what people needed during the post-treatment transition. Our research focused on questions like: What changes after treatment ends? Where do survivors go for information and support? What resources feel trustworthy? How do patients and providers think about survivorship planning?" },
      { type: "p", text: "Because this was a sensitive healthcare context, we approached the research carefully and focused on understanding survivors' needs without assuming that one product could solve the full complexity of their experience." },
    ]},
    { id: "findings", title: "Key Research Findings", blocks: [
      { type: "h", text: "1. Survivorship created a transition gap." },
      { type: "p", text: "The post-treatment phase could feel less structured than active treatment. During treatment, patients often have a clear plan guided by their gynecologic oncologist. After treatment, survivors may need to take on more responsibility for planning their own next steps — an opportunity to design support for the moment when patients move from provider-led care into more self-directed survivorship." },
      { type: "h", text: "2. Patients and providers were concerned about information validity." },
      { type: "p", text: "One provider shared that they spent a lot of time telling patients where not to search. That quote stuck with our team because it revealed a major tension: survivors wanted information, but not all available information felt accurate, relevant, or trustworthy. This pushed us to prioritize professionally validated resources rather than simply creating another place to browse generic health information." },
      { type: "h", text: "3. Survivors wanted education after treatment." },
      { type: "p", text: "Survivors expressed a desire to better understand life after treatment, including what resources were available, what to expect, and how to navigate the next stage of care. This helped us frame education as an ongoing survivorship need, not something that ends when treatment ends." },
      { type: "h", text: "4. Support and connection mattered deeply." },
      { type: "p", text: "Many survivors valued support groups, especially ones that reflected their interests and lifestyles. For example, one interviewee referenced a bike-riding group as a meaningful source of positivity and connection. Support was not only clinical or informational — it was also social, personal, and identity-based." },
      { type: "h", text: "5. Treatment can affect interpersonal relationships." },
      { type: "p", text: "Survivorship is not experienced in isolation. Treatment can change relationships with partners, family, friends, and communities. This reinforced the need to design for emotional and social support, not just information access." },
    ]},
    { id: "requirements", title: "Defining the Design Requirements", blocks: [
      { type: "p", text: "After reviewing our interviews and synthesizing the research, we narrowed our design requirements around three core needs:" },
      { type: "h", text: "Support" },
      { type: "p", text: "Survivors valued support groups and communities, especially when those groups reflected their personal interests and lived experiences." },
      { type: "h", text: "Connection" },
      { type: "p", text: "Survivors wanted ways to connect with others who understood what they were going through, particularly during the transition out of active treatment." },
      { type: "h", text: "Education" },
      { type: "p", text: "Survivors needed reliable, relevant, and accessible resources that had been validated by professionals in the field." },
    ]},
    { id: "concept", title: "Concept: A Private Resource Kiosk", blocks: [
      { type: "p", text: "We explored several possible ways to support survivors during the post-treatment transition, intentionally brainstorming beyond a single screen-based solution. Early ideas included printed resource takeaways, journals, invitations, calendars, mobile information displays, interactive prompts, and different types of physical spaces. As we evaluated ideas, we kept returning to one important question: where would survivors feel comfortable accessing sensitive resources?" },
      { type: "p", text: "That question helped us narrow toward a private, place-based solution: a digital resource kiosk for an oncology care setting. Used after a patient's final appointment, the kiosk would help them find personalized resources, support groups, and communities based on their needs and interests. We chose a kiosk because the oncology setting was already a trusted and familiar environment — meeting survivors at a meaningful transition point in their care journey." },
      { type: "list", items: [
        "Answer a few questions about their needs and interests",
        "Receive personalized survivorship resources",
        "Discover support groups and community options",
        "Access professionally validated education",
        "Print a personalized resource sheet to take home",
      ]},
      { type: "image", caption: "Before converging on the kiosk, we explored a wide range of ways survivors could access support, education, and community after treatment." },
    ]},
    { id: "iterating", title: "Iterating for Privacy, Accessibility & Feasibility", blocks: [
      { type: "p", text: "Our early prototype included both a digital interface and a physical clay model of the kiosk. For the physical kiosk, we initially explored a larger sculptural form, but later realized it was too large for a gynecologist's office or oncology waiting room. As we refined the kiosk, we focused on three priorities:" },
      { type: "h", text: "Privacy" },
      { type: "p", text: "Because users would be engaging with personal health-related information, the kiosk needed to feel discreet and protected. We adjusted the form so the screen would be less visible to others in the room." },
      { type: "h", text: "Accessibility" },
      { type: "p", text: "The kiosk needed to accommodate different bodies, mobility needs, and comfort levels. The final prototype's curved walls created a more enclosed space, and a sliding panel allowed for more leg or wheelchair space." },
      { type: "h", text: "Feasibility" },
      { type: "p", text: "The kiosk also needed to be realistic for a medical office environment. We reduced its overall size and designed it to use the existing wall, which helped reduce material needs and make the concept more feasible." },
      { type: "image", caption: "We moved away from the initial kiosk shape after identifying concerns around size, screen visibility, and fit within a medical office." },
    ]},
    { id: "final", title: "Final Prototype", blocks: [
      { type: "p", text: "Our final prototype included a refined physical kiosk model, a Figma interface, and a personalized resource printout. The kiosk was designed to create a safe, semi-private space for survivors to explore resources at their own pace. The interface guided users through a short set of prompts and generated personalized recommendations based on their needs and interests." },
      { type: "p", text: "At the end of the experience, users could print a resource sheet to take with them. This was important because it allowed survivors to leave with something tangible that they could revisit later, share with a caregiver, or bring into a future conversation with a provider." },
      { type: "image", caption: "The final kiosk prioritized privacy, accessibility, and feasibility — with a printed resource sheet as a tangible takeaway." },
    ]},
    { id: "reflection", title: "Reflection", blocks: [
      { type: "p", text: "This was one of my earliest UX projects, and it introduced me to the role user research can play in designing for sensitive, emotionally complex experiences. The project taught me that meaningful design starts with understanding the user's context, not jumping straight to a solution. In this case, the challenge was not just that survivors needed more information — it was that they needed trustworthy, relevant, and accessible support during a transition that could feel emotionally and logistically uncertain." },
      { type: "p", text: "I also learned how important it is to align on design principles before moving too far into execution, and how physical context shapes digital experiences. The kiosk was not just a screen — its placement, size, privacy, accessibility, and physical form all influenced whether users would feel safe and comfortable using it." },
    ]},
  ],
};

window.KERRY_CASES["first-plate"] = {
  number: "10",
  slug: "first-plate",
  kicker: "First Plate LLC · Founder",
  title: "Building a Wholesale Biscotti Brand for Portland Coffeehouses",
  subtitle: "An early entrepreneurship, customer experience, and brand design project.",
  intro: [
    "First Plate LLC was a small food business I founded to produce and wholesale Italian biscotti for independent coffeehouses in the Portland metro area.",
    "What started as a creative project during high school became my first real experience identifying a customer need, validating demand, developing a product, building business relationships, and creating a brand experience from the ground up.",
  ],
  snapshot: {
    "Client": "First Plate LLC, wholesale biscotti business",
    "Timeline": "May 2016 – July 2018",
    "Role": "Founder & Operator",
    "Team": "Independent coffeehouse owners, coffeehouse customers, local wholesale partners",
    "Methods": "Customer discovery, market validation, product testing, wholesale outreach, customer feedback, brand development",
    "Tools": "Squarespace, Instagram, Facebook, product photography, Google Workspace",
    "Outcome": "Produced thousands of biscotti over two years and supplied multiple independent Portland coffeehouses, managing product, sales, operations, branding, and customer relationships end-to-end",
  },
  summary: {
    problem: "Portland's coffee culture was world-class, but few independent shops offered a biscotti worthy of the coffee. Was that a personal observation \u2014 or a real wholesale opportunity?",
    role: "Founder & Operator",
    timeline: "May 2016 \u2013 Jul 2018",
    team: "Independent coffeehouse owners & their customers",
    methods: ["Customer Discovery", "Market Validation", "Product Testing", "Wholesale Outreach", "Brand Development"],
    outcome: "Validated demand with real buyers, produced thousands of biscotti, and supplied multiple Portland coffeehouses \u2014 managing product, brand, ops & relationships end-to-end.",
  },
  tags: ["Entrepreneurship", "Customer Experience", "Brand Design", "Website Design", "Product Development", "Customer Discovery", "Operations", "Wholesale Sales", "Food & Beverage", "Small Business", "Visual Design", "Product Photography"],
  sections: [
    { id: "opportunity", title: "The Opportunity", blocks: [
      { type: "p", text: "During my freshman year of high school, an injury sidelined me from athletics and left me looking for a new creative outlet. I originally considered starting a catering business focused on hors d'oeuvres, which is where the name First Plate came from. But as I spent more time in local coffeehouses, I noticed something specific: Portland had incredible coffee culture, but many shops did not offer a high-quality biscotti that felt worthy of pairing with the coffee." },
      { type: "p", text: "Coming from an Italian household, that gap stood out to me. Good coffee and good biscotti felt like they should naturally go together, so I started exploring whether this was just something I noticed personally or a real opportunity in the local market." },
    ]},
    { id: "goal", title: "The Goal", blocks: [
      { type: "p", text: "My goal was to create a high-quality, high-margin biscotti product that coffeehouses would be proud to sell and customers would genuinely enjoy. At the same time, I wanted the business to feel personal, thoughtful, and rooted in the experience of local coffee culture — not like a generic packaged food brand." },
    ]},
    { id: "discovery", title: "Customer Discovery", blocks: [
      { type: "p", text: "Before investing too much time into production, I reached out to several well-known coffeehouses in Portland to understand whether there was real demand for the product. A few shops responded, including Coffeehouse Northwest, which became an important early relationship. The owner met with me, validated the opportunity, and shared his perspective on what independent coffeehouses look for in wholesale products." },
      { type: "p", text: "That conversation helped me better understand the buyer side of the experience: Would a coffeehouse want to carry this product? Would it fit naturally into their existing menu? Would the quality meet their standards? Would the product be easy enough to sell, store, and serve? That early feedback gave me the confidence to move from idea to product development." },
    ]},
    { id: "product", title: "Product Development & Validation", blocks: [
      { type: "p", text: "Once I had a clearer sense of market demand, I began testing biscotti recipes. I needed a product that was high quality, authentic in flavor, strong in margin potential, reliable to produce consistently, durable enough for wholesale distribution, and simple enough to manage as a one-person operation. After experimenting with different recipes, I landed on a classic almond biscotti that felt authentic, scalable, and well-suited for coffeehouse customers." },
      { type: "p", text: "To validate the product, I brought a batch of biscotti to Coffeehouse Northwest for employees and customers to try. The response was positive, and the shop became my first wholesale customer. This was an early lesson in the value of getting a real product in front of real people — seeing how customers and business owners responded in the actual environment where the product would be sold." },
    ]},
    { id: "business", title: "Building the Business", blocks: [
      { type: "p", text: "Over two years, I baked thousands of classic almond biscotti and grew First Plate to serve multiple independent coffeehouses across Portland. As the sole founder and operator, I managed every part of the business:" },
      { type: "list", items: [
        "Recipe development", "Ingredient sourcing", "Production and baking", "Wholesale outreach", "Customer relationships",
        "Order fulfillment", "Packaging", "Delivery coordination", "Social media", "Website design", "Product photography",
      ]},
      { type: "p", text: "There were opportunities to expand into additional coffeehouses and local retail, including interest from a high-end supermarket chain. But because I was a full-time student running the business independently from my family kitchen, I intentionally limited growth to what I could manage well. That decision taught me an important business lesson: growth only works if the operation can support the quality of the customer experience." },
    ]},
    { id: "brand", title: "Brand & Website Design", blocks: [
      { type: "p", text: "In addition to producing and selling the biscotti, I created the digital presence for First Plate. I designed a simple website with a homepage featuring staged product photography, an About page explaining the story behind the business, and a Contact page for wholesale inquiries. I also created a Facebook page and Instagram account to support the brand." },
      { type: "p", text: "The goal of the website was not to create a large e-commerce experience. It was to give the business a credible, polished presence that reflected the quality and personal nature of the product. Because First Plate was a small local brand, the visual direction needed to feel warm, simple, and handmade without feeling unprofessional." },
      { type: "image", caption: "Staged product photography and a warm, simple brand presence reflected the handmade quality of the product." },
    ]},
    { id: "cx", title: "Customer Experience", blocks: [
      { type: "p", text: "Looking back, what I cared about most was not just selling biscotti, it was creating a good experience for everyone involved. For coffeehouse owners, that meant offering a product that was easy to order, reliable in quality, and aligned with the atmosphere of their shops. For customers, that meant creating something that felt like a small but memorable part of their coffee ritual. For me, it meant building real relationships with local business owners, learning how to present myself professionally, and understanding how much trust matters when someone chooses to carry your product." },
    ]},
    { id: "reflection", title: "Reflection", blocks: [
      { type: "p", text: "I closed First Plate before leaving for college. By that point, I had become deeply attached to the product, the customers, and the relationships I had built. While closing the business was bittersweet, it felt like the right decision. First Plate had served its purpose: it gave me my first experience building something from scratch, bringing it into the world, and learning what it takes to make an idea real." },
      { type: "p", text: "This experience connects directly to how I approach UX and research today. I'm still drawn to understanding what people need, why certain experiences feel better than others, and how thoughtful details can make something feel easier, more useful, or more memorable. First Plate also gave me an early appreciation for the business side of experience design: a product can be beautiful and well-intentioned, but it also has to work operationally for the people buying it, selling it, and using it." },
    ]},
  ],
};

// ─────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────
window.KERRY_ABOUT = {
  paras: [
    "My background is in human-centered design and consumer insights research.",
    "UX has always felt like a natural fit for me because it sits in the middle of a few things I care about: design, psychology, communication, and strategy. It gives me a way to be creative and analytical at the same time, while staying close to how people actually think, feel, and make decisions.",
    "Most recently, I worked as a qualitative researcher at Thursday Strategy supporting research for clients across technology, travel, financial services, and consumer products, including Google, Chase, Air Canada, and PrizePicks. I loved working across different industries and helping teams make sense of big, often messy questions: how people respond to a new idea, what makes a brand feel trustworthy, where an experience breaks down, or what a team should do next.",
    "I'm at my best when research has a real decision to influence. I like asking thoughtful questions, creating space for people to share honestly, finding the patterns hiding in messy data, and turning what we learn into clear, practical recommendations that teams can actually use.",
    "Whether I'm testing a high-stakes form, exploring how people respond to a new product concept, or understanding what makes a brand experience resonate, I'm usually interested in the same thing: why people do what they do, and what teams should do with that knowledge. I'm especially drawn to the spaces where UX research overlaps with product strategy, brand strategy, marketing, and experiential customer experience: how people discover, choose, use, trust, and build relationships with products, services, and places over time.",
  ],
  personalHeading: "Outside of work",
  personal: "I'm usually exploring in some form: trying a new restaurant, going on a long walk, practicing yoga, paddle boarding, planning a trip, or cooking with friends and family. I'm very much a people person, and I get a lot of energy from good conversations, shared meals, and being in new places. Right now, a few trips I'd love to take are to Moab, the Dolomites, and South Africa. I'm also a big dog person, and will almost always stop to say hi to one :)",
  lookingFor: "I'm looking for my next team in UX Research, Product Research, UX Strategy, or consumer insights — ideally somewhere curious, collaborative, supportive, and serious about building experiences people actually want to use.",
  facts: [
    { k: "Based in", v: "Austin, TX" },
    { k: "Experience", v: "4+ years" },
    { k: "Focus", v: "UX Research · Strategy · Consumer Insights" },
    { k: "Recently", v: "Thursday Strategy · Accenture Federal · McKinsey" },
  ],
  expertise: [
    "Mixed-methods research", "Usability testing", "A/B & concept testing", "Qualitative synthesis",
    "Survey research", "Journey mapping", "Personas", "Research-to-strategy", "Brand & consumer insights", "Executive storytelling",
  ],
  clients: [
    { name: "Google", slug: "thursday-strategy" },
    { name: "Chase", slug: "thursday-strategy" },
    { name: "Air Canada", slug: "thursday-strategy" },
    { name: "PrizePicks", slug: "thursday-strategy" },
    { name: "Federal Student Aid (FAFSA)", slug: "fafsa" },
    { name: "Spotify", slug: "spotify" },
    { name: "Uber", slug: "uber-reserve" },
  ],
};
