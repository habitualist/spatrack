import ceoImage from '../assets/CEO.jpeg'

// Import Duplex Project Images
import duplexMain from '../assets/project_duplex_completed_main.jpeg'
import duplex01 from '../assets/project_duplex_completed_01.jpeg'
import duplex02 from '../assets/project_duplex_completed_02.jpeg'
import duplex03 from '../assets/project_duplex_completed_03.jpeg'
import duplex04 from '../assets/project_duplex_completed_04.jpeg'
import duplexBathroom from '../assets/project_duplex_interior_bathroom.jpeg'
import duplexStairs from '../assets/project_duplex_interior_stairs.jpeg'

// Import Blockwork Project Images
import blockworkMain from '../assets/project_blockwork_main.jpeg'
import blockworkScaffolding from '../assets/project_blockwork_scaffolding.jpeg'
import blockworkDetail from '../assets/project_blockwork_detail.jpeg'
import blockworkFront from '../assets/project_blockwork_front.jpeg'
import blockworkSecondFloor from '../assets/project_blockwork_second_floor.jpeg'
import blockworkRoofFrame from '../assets/project_blockwork_roof_frame.jpeg'

// Import Slab Casting Project Images
import slabMain from '../assets/project_slab_pouring_main.jpeg'
import slabReinforcement from '../assets/project_slab_reinforcement.jpeg'
import slabFoundationRods from '../assets/project_slab_foundation_rods.jpeg'
import slabColumnsReinforcement from '../assets/project_slab_columns_reinforcement.jpeg'
import slabPlumbing from '../assets/project_slab_plumbing.jpeg'
import slabCloseup from '../assets/project_slab_casting_closeup.jpeg'

export const company = {
  name: 'Spatrack',
  brandName: 'SPATRACK',
  legalName: 'Services Nig. Ltd.',
  shortTag: 'Architecture & Construction',
  headline: 'Building Innovative Spaces with Precision & Excellence',
  subtext: 'We provide professional architectural design, construction, and engineering solutions tailored to individuals, businesses, and government organizations across Lagos, Nigeria.',
  aboutPreview: 'We are a forward-thinking architecture and construction firm committed to delivering innovative, functional, and high-quality building solutions. From concept to completion, we bring your vision to life with precision and professionalism.',
  aboutParagraphs: [
    'We are a forward-thinking architecture and construction firm based in Lagos, Nigeria, dedicated to delivering innovative, functional, and high-quality building solutions. With a strong commitment to excellence, we provide a full range of services including architectural design, construction, engineering, consultancy, feasibility studies, and project management.',
    "Our approach is centered on understanding each client's unique vision and transforming it into practical, aesthetically pleasing, and sustainable results. We work closely with individuals, corporate organizations, government agencies, and parastatals to deliver projects that meet the highest standards of quality, safety, and efficiency.",
    'Driven by professionalism and attention to detail, our team ensures that every project is executed with precision from concept development to final delivery. We pride ourselves on creating structures that not only serve their purpose but also stand the test of time.',
    'At the core of our operations is a commitment to client satisfaction, innovation, and integrity, making us a trusted partner in the built environment.',
  ],
  mission: 'To deliver high-quality, innovative, and sustainable building solutions that meet client needs and exceed expectations.',
  vision: 'To be a leading architecture and construction firm known for excellence, reliability, and innovative design.',
}

export const contact = {
  phones: ['+234 901 574 3527', '+234 703 749 4431'],
  email: 'snlspatrack@gmail.com',
  whatsapp: '+234 701 768 3488',
  whatsappMessage: 'Hello Spatrack, I would like to book a consultation and discuss my project. Please kindly reply to me here on WhatsApp.',
  whatsappLink: `https://wa.me/2347017683488?text=${encodeURIComponent('Hello Spatrack, I would like to book a consultation and discuss my project. Please kindly reply to me here on WhatsApp.')}`,
  address: '33, Sereki Crescent, Bakare Bus Stop, Meiran, Lagos, Nigeria',
  mapEmbed: 'https://www.google.com/maps?q=33%20Sereki%20Crescent%20Bakare%20Bus%20Stop%20Meiran%20Lagos%20Nigeria&z=15&output=embed',
  hours: 'Monday - Saturday: 9:00 AM - 5:00 PM',
}

export const services = [
  {
    num: '01',
    name: 'Architectural Design',
    desc: 'We create functional, aesthetic, and innovative designs that align with your vision and project requirements.',
    fullDesc: 'Our design process turns ideas into clear, buildable concepts through space planning, visual development, and detailed drawings tailored to each project.',
    image: duplexStairs,
    alt: 'Architectural Design showing finished stairs and interiors',
  },
  {
    num: '02',
    name: 'Construction',
    desc: 'We deliver high-quality construction services, ensuring durability, safety, and timely project completion.',
    fullDesc: 'From site preparation to final finishing, we execute projects with disciplined coordination, quality materials, and strong attention to workmanship and safety.',
    image: blockworkMain,
    alt: 'Real construction site with blockwork under development',
  },
  {
    num: '03',
    name: 'Engineering',
    desc: 'Our engineering solutions are designed to support structural integrity and efficiency across all project types.',
    fullDesc: 'We provide technical engineering support that helps projects perform well, remain safe, and comply with practical building requirements.',
    image: slabReinforcement,
    alt: 'Engineering steel mesh reinforcement for concrete slab',
  },
  {
    num: '04',
    name: 'Consultancy',
    desc: 'We provide expert advice to guide clients through planning, design, and execution phases.',
    fullDesc: 'Our consultancy service helps clients make better project decisions, reduce costly mistakes, and move forward with greater clarity and confidence.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=85',
    alt: 'Consultancy',
  },
  {
    num: '05',
    name: 'Feasibility Studies',
    desc: 'We assess project viability to help clients make informed decisions before project execution.',
    fullDesc: 'We review the practical, site, and cost implications of a proposed development so clients can understand opportunities and constraints before committing resources.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=85',
    alt: 'Feasibility Studies',
  },
  {
    num: '06',
    name: 'Project Management',
    desc: 'We oversee projects from start to finish, ensuring quality control, cost efficiency, and timely delivery.',
    fullDesc: 'We coordinate schedules, teams, quality standards, and project reporting to keep delivery organized and aligned with client expectations.',
    image: ceoImage,
    alt: 'Project Management by Spatrack CEO',
    imagePosition: 'center 30%',
  },
]

export const projects = [
  {
    id: 1,
    slug: 'completed-residential-duplex',
    title: 'Completed Residential Duplex',
    category: 'Residential',
    location: 'Lagos, Nigeria',
    year: '2026',
    description: 'A fully completed, premium modern residential duplex in Lagos. Designed with high-quality interior finishes, functional space planning, and elegant exterior form.',
    image: duplexMain,
    gallery: [
      duplexMain,
      duplex01,
      duplex02,
      duplex03,
      duplex04,
      duplexStairs,
      duplexBathroom
    ]
  },
  {
    id: 2,
    slug: 'multi-family-residential-development',
    title: 'Multi-Family Residential Development',
    category: 'Commercial & Residential',
    location: 'Lagos, Nigeria',
    year: 'In Progress',
    description: 'A multi-story residential building under construction. We managed the structural blockwork, framing, and scaffolding to ensure high durability and execution precision.',
    image: blockworkMain,
    gallery: [
      blockworkMain,
      blockworkScaffolding,
      blockworkDetail,
      blockworkFront,
      blockworkSecondFloor,
      blockworkRoofFrame
    ]
  },
  {
    id: 3,
    slug: 'concrete-slab-foundation-casting',
    title: 'Concrete Slab & Foundation Casting',
    category: 'Structural Engineering',
    location: 'Lagos, Nigeria',
    year: '2026',
    description: 'Foundation excavation, columns reinforcement installation, plumbing layout, and professional concrete slab casting for a solid structural foundation.',
    image: slabMain,
    gallery: [
      slabMain,
      slabReinforcement,
      slabFoundationRods,
      slabColumnsReinforcement,
      slabPlumbing,
      slabCloseup
    ]
  },
]

export const stats = [
  { num: '6', label: 'Core Services' },
  { num: '200+', label: 'Completed Sites' },
  { num: 'Lagos', label: 'Primary Base' },
]

export const reasons = [
  { icon: 'Team', title: 'Professional Team', text: 'A professional and experienced team committed to high standards across architecture, construction, and project execution.' },
  { icon: 'Care', title: 'Client-Focused Approach', text: 'We listen carefully, understand your goals, and tailor every service around your project needs and priorities.' },
  { icon: 'Quality', title: 'High-Quality Delivery', text: 'We prioritize quality, safety, and durable outcomes that reflect both good design and dependable construction practice.' },
  { icon: 'Execution', title: 'Reliable Execution', text: 'We value efficient delivery, organized coordination, and practical solutions that keep projects moving in the right direction.' },
]
