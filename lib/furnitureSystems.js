export const majorManufacturers = [
  'Herman Miller',
  'Steelcase',
  'Haworth',
  'Knoll',
  'Teknion',
  'Kimball International',
  'Allsteel',
  'National Office Furniture',
  'AIS',
  'Friant',
  'Global Furniture Group',
  'HON',
  'OFS',
  'KI',
  'Indiana Furniture',
];

export const legacySystems = [
  {
    manufacturer: 'Herman Miller',
    systems: ['Action Office (AO)', 'Action Office 2', 'Ethospace', 'Resolve', 'Canvas Office Landscape'],
  },
  {
    manufacturer: 'Steelcase',
    systems: ['Steelcase 9000', 'Avenir', 'Answer', 'Context', 'Series 9000'],
  },
  {
    manufacturer: 'Haworth',
    systems: ['Premise', 'UniGroup', 'Compose', 'Enclose'],
  },
  {
    manufacturer: 'Knoll',
    systems: ['Dividends', 'Dividends Horizon', 'AutoStrada'],
  },
  {
    manufacturer: 'Teknion',
    systems: ['Leverage', 'Transit', 'TOS'],
  },
  {
    manufacturer: 'Allsteel',
    systems: ['Terrace', 'Concensys'],
  },
  {
    manufacturer: 'HON',
    systems: ['Initiate', 'Accelerate'],
  },
];

export const floridaCommonSystems = [
  { name: 'Herman Miller AO2', manufacturer: 'Herman Miller' },
  { name: 'Herman Miller Ethospace', manufacturer: 'Herman Miller' },
  { name: 'Steelcase 9000', manufacturer: 'Steelcase' },
  { name: 'Steelcase Avenir', manufacturer: 'Steelcase' },
  { name: 'Steelcase Answer', manufacturer: 'Steelcase' },
  { name: 'Haworth Premise', manufacturer: 'Haworth' },
  { name: 'Haworth UniGroup', manufacturer: 'Haworth' },
  { name: 'Knoll Dividends', manufacturer: 'Knoll' },
  { name: 'Teknion Leverage', manufacturer: 'Teknion' },
  { name: 'HON Initiate', manufacturer: 'HON' },
  { name: 'AIS Matrix', manufacturer: 'AIS' },
  { name: 'Allsteel Terrace', manufacturer: 'Allsteel' },
];

export const systemServices = [
  'Office moves',
  'Panel reconfigurations',
  'Cubicle downsizing',
  'Asset liquidation',
  'Furniture installation',
  'Office decommissioning',
];

export const furnitureSystemsFaqs = [
  {
    question: 'Do you install and relocate Herman Miller AO2 and Ethospace systems?',
    answer:
      'Yes. Our crews regularly install, move, reconfigure, and decommission Herman Miller Action Office 2 (AO2) and Ethospace panel systems for corporate offices, dealerships, and facility managers throughout Florida.',
  },
  {
    question: 'Can you move and reconfigure Steelcase 9000 and Answer cubicles?',
    answer:
      'Yes. We handle Steelcase 9000, Avenir, Answer, and related legacy Steelcase systems for office relocations, panel reconfigurations, cubicle downsizing, and decommissioning projects statewide.',
  },
  {
    question: 'Do you work with Haworth Premise and UniGroup in Florida?',
    answer:
      'Yes. Haworth Premise and UniGroup are among the most common systems we encounter in Florida government agencies, schools, hospitals, and corporate offices. We install, relocate, and reconfigure these panel systems.',
  },
  {
    question: 'What Knoll and Teknion systems can your installers handle?',
    answer:
      'We work with Knoll Dividends, Dividends Horizon, and AutoStrada, as well as Teknion Leverage, Transit, and TOS. These systems appear frequently during office moves and workspace renovations across the Treasure Coast and all of Florida.',
  },
  {
    question: 'Which office furniture systems are most common in Florida government offices?',
    answer:
      'Florida state agencies, municipalities, schools, and hospitals often use Herman Miller AO2 and Ethospace, Steelcase 9000 and Answer, Haworth Premise and UniGroup, Knoll Dividends, Teknion Leverage, HON Initiate, AIS Matrix, and Allsteel Terrace. We install, move, and reconfigure all of them.',
  },
];

export function getAllSearchableSystems() {
  const fromLegacy = legacySystems.flatMap(({ manufacturer, systems }) =>
    systems.map((system) => ({
      name: system,
      manufacturer,
      category: 'Legacy cubicle system',
    }))
  );

  const fromFlorida = floridaCommonSystems.map((item) => ({
    name: item.name,
    manufacturer: item.manufacturer,
    category: 'Common in Florida offices',
  }));

  const fromManufacturers = majorManufacturers.map((name) => ({
    name,
    manufacturer: name,
    category: 'Manufacturer',
  }));

  const seen = new Set();
  return [...fromFlorida, ...fromLegacy, ...fromManufacturers].filter((item) => {
    const key = `${item.manufacturer}|${item.name}`.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
