/** Local landing pages — Port St. Lucie hub + 100-mile service radius */

const sharedServices = [
  { title: 'Office Furniture Installation', slug: 'office-furniture-installation' },
  { title: 'Cubicle Installation', slug: 'cubicle-installation' },
  { title: 'Office Reconfiguration', slug: 'office-reconfiguration' },
  { title: 'Furniture Decommissioning', slug: 'furniture-decommissioning' },
  { title: 'Commercial Moving', slug: 'commercial-moving' },
  { title: 'Interstate Installation & Moving', slug: 'interstate-installation-moving' },
];

function localFaqs(cityName, countyName) {
  return [
    {
      question: `Do you provide free estimates for ${cityName} office projects?`,
      answer:
        'Yes. We provide free on-site or virtual estimates for furniture installation, reconfiguration, and commercial moves throughout the area. Call (772) 207-3720 or request a quote online.',
    },
    {
      question: `Which office furniture brands do you install in ${cityName}?`,
      answer:
        'We install and relocate Herman Miller, Steelcase, Haworth, Knoll, Teknion, HON, AIS, and legacy panel systems. See our full systems list on the Office Furniture Systems page.',
    },
    {
      question: 'Can you work after hours or on weekends?',
      answer:
        'Yes. After-hours and weekend scheduling is available for facility managers who need to minimize downtime during active business operations.',
    },
    {
      question: `How far from Port St. Lucie do you travel for ${countyName} projects?`,
      answer:
        'Headquarters Moving is based in Port St. Lucie and routinely serves clients within a 100-mile radius across the Treasure Coast, Palm Beach County, and Central Florida.',
    },
    {
      question: 'Do you handle both moving and furniture installation on one project?',
      answer:
        'Yes. Many corporate relocations combine disassembly, transport, and reinstallation with a single project coordinator — reducing vendor handoffs and timeline risk.',
    },
  ];
}

export const locations = [
  {
    slug: 'port-st-lucie',
    city: 'Port St. Lucie',
    county: 'St. Lucie County',
    region: 'Treasure Coast',
    isHub: true,
    priority: 'P1',
    lat: 27.273,
    lng: -80.3582,
    headline: 'Office Movers & Furniture Installers in Port St. Lucie, FL',
    metaTitle: 'Office Movers Port St. Lucie FL | Headquarters Moving',
    metaDescription:
      'Local office moving and furniture installation in Port St. Lucie. Cubicles, workstations, decommissioning — free estimate.',
    subheadline:
      'Headquarters Moving LLC is headquartered in Port St. Lucie — your local partner for commercial furniture installation, cubicle systems, and office relocation.',
    intro:
      'Port St. Lucie is home base for Headquarters Moving LLC. Facility managers, dealership project coordinators, and corporate real estate teams across St. Lucie County rely on us for Herman Miller and Steelcase installations, cubicle reconfigurations, phased office moves, and furniture decommissioning. We know local building requirements, elevator scheduling, and the timelines that keep government and corporate offices operational.',
    neighborhoods: ['Tradition', 'St. Lucie West', 'Port St. Lucie City Center', 'Torino', 'Becker Road corridor'],
    services: sharedServices,
    faqs: localFaqs('Port St. Lucie', 'St. Lucie County'),
  },
  {
    slug: 'west-palm-beach',
    city: 'West Palm Beach',
    county: 'Palm Beach County',
    region: 'Palm Beach County',
    priority: 'P1',
    lat: 26.7153,
    lng: -80.0534,
    headline: 'Commercial Office Movers & Furniture Installers in West Palm Beach',
    metaTitle: 'Office Furniture Installation West Palm Beach | Headquarters Moving',
    metaDescription:
      'Serving West Palm Beach businesses with office furniture installation, cubicle reconfiguration, and commercial relocation services.',
    subheadline:
      'Professional cubicle reconfiguration, workstation installation, and commercial office moving for West Palm Beach and Palm Beach County businesses.',
    intro:
      'West Palm Beach corporate offices, law firms, medical groups, and co-working operators need installers who understand high-rise logistics, loading dock rules, and tight move windows. Headquarters Moving delivers office furniture installation, cubicle reconfiguration, and phased relocations throughout downtown WPB, CityPlace, and the I-95 corridor — with crews that travel from our Treasure Coast headquarters for multi-day buildouts.',
    neighborhoods: ['Downtown WPB', 'CityPlace', 'Northwood', 'Palm Beach Lakes', 'Okeechobee Boulevard corridor'],
    services: sharedServices,
    faqs: localFaqs('West Palm Beach', 'Palm Beach County'),
  },
  {
    slug: 'stuart-fl',
    city: 'Stuart',
    county: 'Martin County',
    region: 'Treasure Coast',
    priority: 'P1',
    lat: 27.1975,
    lng: -80.2528,
    headline: 'Office Moving & Furniture Installation Services in Stuart, FL',
    metaTitle: 'Office Movers Stuart FL | Furniture Installation | HQ Moving',
    metaDescription:
      'Trusted office movers and furniture installers in Stuart, FL. Herman Miller, Steelcase, Haworth, and more. Free estimate.',
    subheadline:
      'Martin County\'s trusted team for office furniture assembly, cubicle installation, and commercial relocation.',
    intro:
      'Stuart and Martin County businesses — from downtown professional offices to industrial parks along US-1 — depend on reliable furniture installers who show up on schedule and leave spaces move-in ready. We install panel systems, benching, conference rooms, and reception areas, and we coordinate with your IT team for power and data raceways during cubicle projects.',
    neighborhoods: ['Downtown Stuart', 'East Stuart', 'Palm City', 'Hobe Sound', 'Indiantown corridor'],
    services: sharedServices,
    faqs: localFaqs('Stuart', 'Martin County'),
  },
  {
    slug: 'jupiter-fl',
    city: 'Jupiter',
    county: 'Palm Beach County',
    region: 'Palm Beach County',
    priority: 'P1',
    lat: 26.9342,
    lng: -80.0942,
    headline: 'Cubicle Installation & Office Moving in Jupiter, FL',
    metaTitle: 'Office Furniture Installers Jupiter FL | Headquarters Moving',
    metaDescription:
      'Professional cubicle installation and office relocation in Jupiter, FL. Serving Palm Beach County businesses since day one.',
    subheadline:
      'Cubicle installation, workstation setup, and office relocation for Jupiter, Abacoa, and northern Palm Beach County.',
    intro:
      'Jupiter\'s growing professional office market — from Abacoa corporate parks to Harbourside Place medical suites — needs experienced commercial furniture crews. Headquarters Moving handles cubicle installation, office reconfiguration, and commercial moves with manufacturer-trained handling of Herman Miller, Steelcase, and Haworth systems.',
    neighborhoods: ['Abacoa', 'Jupiter Farms', 'Harbourside', 'Donald Ross Road corridor', 'Indiantown Road offices'],
    services: sharedServices,
    faqs: localFaqs('Jupiter', 'Palm Beach County'),
  },
  {
    slug: 'vero-beach',
    city: 'Vero Beach',
    county: 'Indian River County',
    region: 'Treasure Coast',
    priority: 'P1',
    lat: 27.6386,
    lng: -80.3973,
    headline: 'Office Furniture Installation & Moving Services in Vero Beach, FL',
    metaTitle: 'Office Movers Vero Beach FL | HQ Moving',
    metaDescription:
      'Office furniture installation, reconfiguration, and moving services in Vero Beach and Indian River County. Call for a free quote.',
    subheadline:
      'Indian River County office furniture installation, cubicle reconfiguration, and commercial moving.',
    intro:
      'Vero Beach government offices, healthcare facilities, and professional services firms regularly upgrade workstations and relocate departments. We provide furniture installation, cubicle reconfiguration, decommissioning, and commercial moving throughout Vero Beach, Sebastian, and Indian River County — with the same crews that serve our Port St. Lucie headquarters region.',
    neighborhoods: ['Downtown Vero Beach', 'Central Beach', 'Sebastian', 'Fellsmere', 'US-1 business corridor'],
    services: sharedServices,
    faqs: localFaqs('Vero Beach', 'Indian River County'),
  },
  {
    slug: 'palm-beach-gardens',
    city: 'Palm Beach Gardens',
    county: 'Palm Beach County',
    region: 'Palm Beach County',
    priority: 'P2',
    lat: 26.8234,
    lng: -80.1386,
    headline: 'Commercial Furniture Installers & Office Movers in Palm Beach Gardens',
    metaTitle: 'Office Furniture Installation Palm Beach Gardens | HQ Moving',
    metaDescription:
      'Palm Beach Gardens office furniture assembly, cubicle installation, and phased relocation services by Headquarters Moving.',
    subheadline:
      'Workstation installation and phased office relocations for PGA Boulevard and Palm Beach Gardens corporate campuses.',
    intro:
      'Palm Beach Gardens corporate parks along PGA Boulevard and Northlake Boulevard require installers familiar with multi-tenant buildings, dock scheduling, and after-hours access. Headquarters Moving delivers cubicle installation, benching systems, conference room setup, and coordinated commercial moves for tenants expanding, consolidating, or refreshing their workspace.',
    neighborhoods: ['PGA Boulevard corridor', 'Downtown at the Gardens', 'Legacy Place', 'Northlake Boulevard offices'],
    services: sharedServices,
    faqs: localFaqs('Palm Beach Gardens', 'Palm Beach County'),
  },
  {
    slug: 'fort-pierce',
    city: 'Fort Pierce',
    county: 'St. Lucie County',
    region: 'Treasure Coast',
    priority: 'P2',
    lat: 27.4467,
    lng: -80.3256,
    headline: 'Office Moving & Furniture Installation in Fort Pierce, FL',
    metaTitle: 'Commercial Movers Fort Pierce FL | Headquarters Moving',
    metaDescription:
      'Fort Pierce and St. Lucie County office movers specializing in furniture installation, cubicle setup, and decommissioning.',
    subheadline:
      'St. Lucie County commercial movers and furniture installers — minutes from our Port St. Lucie headquarters.',
    intro:
      'Fort Pierce businesses and St. Lucie County agencies trust Headquarters Moving for office furniture installation, cubicle systems, and commercial relocation. Our proximity to Fort Pierce means faster response times, flexible scheduling, and crews who know local facilities — from downtown professional offices to airport-area industrial parks.',
    neighborhoods: ['Downtown Fort Pierce', 'Midway Road corridor', 'St. Lucie County government campus', 'US-1 business district'],
    services: sharedServices,
    faqs: localFaqs('Fort Pierce', 'St. Lucie County'),
  },
  {
    slug: 'boca-raton',
    city: 'Boca Raton',
    county: 'Palm Beach County',
    region: 'Palm Beach County',
    priority: 'P2',
    lat: 26.3683,
    lng: -80.1289,
    headline: 'Office Furniture Installation & Commercial Moving in Boca Raton',
    metaTitle: 'Office Furniture Installers Boca Raton | Headquarters Moving',
    metaDescription:
      'Boca Raton businesses trust HQ Moving for Herman Miller, Steelcase, and Haworth installation, reconfiguration, and office relocation.',
    subheadline:
      'Corporate furniture installation and office relocation for Boca Raton, Mizner Park, and south Palm Beach County.',
    intro:
      'Boca Raton\'s corporate office market — from Mizner Park professional towers to Research Park campuses — demands polished furniture installation and minimal disruption. Headquarters Moving installs major manufacturer systems, reconfigures cubicle layouts for hybrid teams, and manages commercial relocations with dedicated project coordination.',
    neighborhoods: ['Downtown Boca Raton', 'Mizner Park', 'Research Park', 'West Boca corporate parks', 'Glades Road corridor'],
    services: sharedServices,
    faqs: localFaqs('Boca Raton', 'Palm Beach County'),
  },
  {
    slug: 'melbourne-fl',
    city: 'Melbourne',
    county: 'Brevard County',
    region: 'Space Coast',
    priority: 'P3',
    lat: 28.0836,
    lng: -80.6081,
    headline: 'Office Movers & Furniture Installers in Melbourne, FL',
    metaTitle: 'Commercial Movers Melbourne FL | Headquarters Moving',
    metaDescription:
      'Melbourne and Brevard County office furniture installation and moving services. Serving Treasure Coast to Space Coast.',
    subheadline:
      'Brevard County office furniture installation and commercial moving from your Treasure Coast headquarters team.',
    intro:
      'Melbourne and the Space Coast host aerospace, defense, and professional services offices that require precise furniture installation and secure commercial moving. Headquarters Moving travels from Port St. Lucie for multi-day installation projects, cubicle reconfigurations, and office relocations throughout Brevard County.',
    neighborhoods: ['Downtown Melbourne', 'Eau Gallie', 'Melbourne International Airport corridor', 'Palm Bay offices', 'Viera corporate parks'],
    services: sharedServices,
    faqs: localFaqs('Melbourne', 'Brevard County'),
  },
  {
    slug: 'treasure-coast',
    city: 'Treasure Coast',
    county: 'Multi-County',
    region: 'Treasure Coast',
    isHub: true,
    priority: 'P3',
    lat: 27.273,
    lng: -80.3582,
    headline: 'Office Moving & Furniture Installation Across the Treasure Coast',
    metaTitle: 'Treasure Coast Commercial Movers | Headquarters Moving',
    metaDescription:
      'Headquarters Moving serves the entire Treasure Coast — Port St. Lucie, Stuart, Fort Pierce, and Vero Beach for office furniture and commercial moves.',
    subheadline:
      'Regional hub for commercial office moving and furniture installation from Port St. Lucie to Vero Beach.',
    intro:
      'The Treasure Coast — spanning St. Lucie, Martin, and Indian River counties — is our core service territory. Headquarters Moving LLC provides office furniture installation, cubicle reconfiguration, commercial relocation, and furniture decommissioning for businesses from Port St. Lucie through Stuart, Fort Pierce, and Vero Beach. One local team, one phone number, consistent quality across every county.',
    neighborhoods: ['Port St. Lucie', 'Fort Pierce', 'Stuart', 'Vero Beach', 'Jensen Beach', 'Sebastian'],
    childSlugs: ['port-st-lucie', 'stuart-fl', 'fort-pierce', 'vero-beach', 'jupiter-fl'],
    services: sharedServices,
    faqs: [
      {
        question: 'What cities are included in the Treasure Coast service area?',
        answer:
          'We serve Port St. Lucie, Fort Pierce, Stuart, Jensen Beach, Vero Beach, Sebastian, and surrounding communities across St. Lucie, Martin, and Indian River counties.',
      },
      {
        question: 'Do you travel outside the Treasure Coast?',
        answer:
          'Yes. We also serve Palm Beach County, Brevard County, and statewide Florida projects, plus interstate installation and moving nationwide.',
      },
      ...localFaqs('the Treasure Coast', 'the region').slice(2),
    ],
  },
];

/** Map display city names on service-areas page to location slugs */
export const cityToLocationSlug = {
  'Port Saint Lucie': 'port-st-lucie',
  'Port St. Lucie': 'port-st-lucie',
  'Fort Pierce': 'fort-pierce',
  Stuart: 'stuart-fl',
  'Vero Beach': 'vero-beach',
  'West Palm Beach': 'west-palm-beach',
  Jupiter: 'jupiter-fl',
  'Boca Raton': 'boca-raton',
  Melbourne: 'melbourne-fl',
  'Palm Beach Gardens': 'palm-beach-gardens',
};

export function getLocationBySlug(slug) {
  return locations.find((location) => location.slug === slug);
}

export function getLocationSlugs() {
  return locations.map((location) => location.slug);
}

export function getFeaturedLocations() {
  return locations.filter((location) => location.priority === 'P1' && location.slug !== 'treasure-coast');
}
