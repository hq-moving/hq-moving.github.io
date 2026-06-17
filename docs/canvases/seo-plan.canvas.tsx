import { useState } from "react";
import {
  Stack, Row, Grid, H1, H2, H3, Text, Card, CardHeader, CardBody,
  Table, Pill, Stat, Callout, Divider, Button, useHostTheme, CollapsibleSection,
} from "cursor/canvas";

// ─── Data ───────────────────────────────────────────────────────────────────

const KEYWORDS = [
  { term: "office furniture installation Port St. Lucie", intent: "Transactional", vol: "High", diff: "Low", priority: "P1" },
  { term: "commercial movers Treasure Coast", intent: "Transactional", vol: "High", diff: "Low", priority: "P1" },
  { term: "cubicle installation Jupiter FL", intent: "Transactional", vol: "Med", diff: "Low", priority: "P1" },
  { term: "office relocation West Palm Beach", intent: "Transactional", vol: "High", diff: "Med", priority: "P1" },
  { term: "office furniture installers Stuart FL", intent: "Transactional", vol: "Med", diff: "Low", priority: "P1" },
  { term: "cubicle reconfiguration West Palm Beach", intent: "Transactional", vol: "Med", diff: "Low", priority: "P1" },
  { term: "Herman Miller installation Treasure Coast", intent: "Commercial", vol: "Med", diff: "Low", priority: "P1" },
  { term: "Steelcase reconfiguration Palm Beach County", intent: "Commercial", vol: "Med", diff: "Low", priority: "P1" },
  { term: "office furniture assembly Vero Beach", intent: "Transactional", vol: "Low", diff: "Low", priority: "P2" },
  { term: "workstation installation Palm Beach Gardens", intent: "Transactional", vol: "Med", diff: "Low", priority: "P2" },
  { term: "furniture decommissioning South Florida", intent: "Transactional", vol: "Med", diff: "Med", priority: "P2" },
  { term: "commercial office movers Martin County", intent: "Transactional", vol: "Low", diff: "Low", priority: "P2" },
  { term: "phased office relocation Florida", intent: "Informational", vol: "Med", diff: "Med", priority: "P2" },
  { term: "office furniture installation contractor Boca Raton", intent: "Transactional", vol: "Med", diff: "Med", priority: "P2" },
  { term: "how to plan an office move checklist", intent: "Informational", vol: "High", diff: "High", priority: "P3" },
  { term: "office furniture movers Melbourne FL", intent: "Transactional", vol: "Low", diff: "Low", priority: "P3" },
  { term: "IT decommissioning office relocation", intent: "Informational", vol: "Med", diff: "Med", priority: "P3" },
  { term: "ergonomic workstation installation compliance", intent: "Informational", vol: "Low", diff: "Med", priority: "P3" },
];

type PageType = "Service" | "Location" | "Pillar";

const PAGES: {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDesc: string;
  type: PageType;
  priority: string;
}[] = [
  // ── Location pages ────────────────────────────────────────
  {
    type: "Location", priority: "P1",
    slug: "/locations/port-st-lucie",
    h1: "Office Movers & Furniture Installers in Port St. Lucie, FL",
    metaTitle: "Office Movers Port St. Lucie FL | Headquarters Moving",
    metaDesc: "Local office moving and furniture installation in Port St. Lucie. Cubicles, workstations, decommissioning — free estimate.",
  },
  {
    type: "Location", priority: "P1",
    slug: "/locations/west-palm-beach",
    h1: "Commercial Office Movers & Furniture Installers in West Palm Beach",
    metaTitle: "Office Furniture Installation West Palm Beach | Headquarters Moving",
    metaDesc: "Serving West Palm Beach businesses with office furniture installation, cubicle reconfiguration, and commercial relocation services.",
  },
  {
    type: "Location", priority: "P1",
    slug: "/locations/stuart-fl",
    h1: "Office Moving & Furniture Installation Services in Stuart, FL",
    metaTitle: "Office Movers Stuart FL | Furniture Installation | HQ Moving",
    metaDesc: "Trusted office movers and furniture installers in Stuart, FL. Herman Miller, Steelcase, Haworth, and more. Free estimate.",
  },
  {
    type: "Location", priority: "P1",
    slug: "/locations/jupiter-fl",
    h1: "Cubicle Installation & Office Moving in Jupiter, FL",
    metaTitle: "Office Furniture Installers Jupiter FL | Headquarters Moving",
    metaDesc: "Professional cubicle installation and office relocation in Jupiter, FL. Serving Palm Beach County businesses since day one.",
  },
  {
    type: "Location", priority: "P1",
    slug: "/locations/vero-beach",
    h1: "Office Furniture Installation & Moving Services in Vero Beach, FL",
    metaTitle: "Office Movers Vero Beach FL | HQ Moving",
    metaDesc: "Office furniture installation, reconfiguration, and moving services in Vero Beach and Indian River County. Call for a free quote.",
  },
  {
    type: "Location", priority: "P2",
    slug: "/locations/palm-beach-gardens",
    h1: "Commercial Furniture Installers & Office Movers in Palm Beach Gardens",
    metaTitle: "Office Furniture Installation Palm Beach Gardens | HQ Moving",
    metaDesc: "Palm Beach Gardens office furniture assembly, cubicle installation, and phased relocation services by Headquarters Moving.",
  },
  {
    type: "Location", priority: "P2",
    slug: "/locations/fort-pierce",
    h1: "Office Moving & Furniture Installation in Fort Pierce, FL",
    metaTitle: "Commercial Movers Fort Pierce FL | Headquarters Moving",
    metaDesc: "Fort Pierce and St. Lucie County office movers specializing in furniture installation, cubicle setup, and decommissioning.",
  },
  {
    type: "Location", priority: "P2",
    slug: "/locations/boca-raton",
    h1: "Office Furniture Installation & Commercial Moving in Boca Raton",
    metaTitle: "Office Furniture Installers Boca Raton | Headquarters Moving",
    metaDesc: "Boca Raton businesses trust HQ Moving for Herman Miller, Steelcase, and Haworth installation, reconfiguration, and office relocation.",
  },
  {
    type: "Location", priority: "P3",
    slug: "/locations/melbourne-fl",
    h1: "Office Movers & Furniture Installers in Melbourne, FL",
    metaTitle: "Commercial Movers Melbourne FL | Headquarters Moving",
    metaDesc: "Melbourne and Brevard County office furniture installation and moving services. Serving Treasure Coast to Space Coast.",
  },
  {
    type: "Location", priority: "P3",
    slug: "/locations/treasure-coast",
    h1: "Office Moving & Furniture Installation Across the Treasure Coast",
    metaTitle: "Treasure Coast Commercial Movers | Headquarters Moving",
    metaDesc: "Headquarters Moving serves the entire Treasure Coast — Port St. Lucie, Stuart, Fort Pierce, and Vero Beach for office furniture and commercial moves.",
  },
  // ── Pillar pages ──────────────────────────────────────────
  {
    type: "Pillar", priority: "P1",
    slug: "/guides/commercial-office-relocation",
    h1: "The Complete Guide to Commercial Office Relocation in South Florida",
    metaTitle: "Commercial Office Relocation Guide South Florida | HQ Moving",
    metaDesc: "Step-by-step guide for facility managers planning a commercial office move in Florida — timelines, vendor coordination, and cost breakdown.",
  },
  {
    type: "Pillar", priority: "P1",
    slug: "/guides/office-furniture-installation",
    h1: "Office Furniture Installation: What Facility Managers Need to Know",
    metaTitle: "Office Furniture Installation Guide for Facility Managers | HQ Moving",
    metaDesc: "Everything facility managers need to plan, budget, and execute an office furniture installation project in Florida.",
  },
  {
    type: "Pillar", priority: "P2",
    slug: "/guides/cubicle-systems-florida",
    h1: "Cubicle Systems in Florida: Installation, Reconfiguration & Disposal",
    metaTitle: "Florida Cubicle System Guide: Install, Reconfigure, Decommission",
    metaDesc: "A practical guide to managing Herman Miller, Steelcase, Haworth, and Knoll cubicle systems across Florida offices.",
  },
  // ── Existing service pages (optimize) ─────────────────────
  {
    type: "Service", priority: "P1",
    slug: "/services/office-furniture-installation",
    h1: "Professional Office Furniture Installation Services — Florida",
    metaTitle: "Office Furniture Installation Services Florida | HQ Moving",
    metaDesc: "Headquarters Moving installs Herman Miller, Steelcase, Haworth, Knoll, and more across Florida. Free estimate — (772) 207-3720.",
  },
  {
    type: "Service", priority: "P1",
    slug: "/services/cubicle-installation",
    h1: "Cubicle Installation & Reconfiguration by Expert Installers",
    metaTitle: "Cubicle Installation Florida | Expert Installers | HQ Moving",
    metaDesc: "Expert cubicle assembly, reconfiguration, and systems installation across Florida. All major manufacturers. Free estimate.",
  },
  {
    type: "Service", priority: "P2",
    slug: "/services/furniture-decommissioning",
    h1: "Office Furniture Decommissioning & Disposal Services in Florida",
    metaTitle: "Office Furniture Decommissioning Florida | HQ Moving",
    metaDesc: "Professional office furniture decommissioning, disposal, and donation coordination across Florida. Serving facility managers and project coordinators.",
  },
];

const CALENDAR = [
  {
    month: "Month 1",
    theme: "Local Foundations",
    items: [
      "Publish /locations/port-st-lucie, /locations/stuart-fl, /locations/jupiter-fl with LocalBusiness schema",
      "Audit and update Google Business Profile — services, photos, service area radius",
      "Build 30 consistent NAP citations (Yelp, Angi, BBB, Yelp for Business, Houzz)",
      "Optimize existing service pages for Treasure Coast geo-modifiers",
    ],
  },
  {
    month: "Month 2",
    theme: "Facility Manager Pain Points",
    items: [
      "Publish /guides/commercial-office-relocation (pillar, 2,500+ words, anchor links)",
      "Blog: 'How to Coordinate IT Decommissioning During an Office Relocation'",
      "Blog: 'Phased Office Moves: A Checklist for Minimizing Downtime'",
      "Publish /locations/vero-beach and /locations/west-palm-beach",
    ],
  },
  {
    month: "Month 3",
    theme: "Manufacturer Authority",
    items: [
      "Expand /office-furniture-systems with individual manufacturer subheadings (H2 per brand)",
      "Blog: 'Herman Miller AO2 vs Ethospace: Which Is Easier to Reconfigure?'",
      "Blog: 'Steelcase Answer Panel System: What Florida Movers Need to Know'",
      "Publish /locations/palm-beach-gardens and /locations/fort-pierce",
    ],
  },
  {
    month: "Month 4",
    theme: "Ergonomics & Compliance Content",
    items: [
      "Blog: 'Ergonomic Workstation Setup: OSHA Guidelines for Florida Offices'",
      "Blog: 'ADA Compliance Checklist for Office Furniture Layout'",
      "Publish /guides/office-furniture-installation (pillar)",
      "Launch Google Business Profile Q&A with 10 seeded questions/answers",
    ],
  },
  {
    month: "Month 5",
    theme: "Social Proof & Case Studies",
    items: [
      "Publish 2 case studies: one government office, one corporate HQ relocation",
      "Launch review acquisition campaign (email/text to past clients, QR code cards)",
      "Blog: 'Office Furniture Decommissioning: What Happens to Your Old Cubicles?'",
      "Publish /locations/boca-raton and /locations/treasure-coast hub page",
    ],
  },
  {
    month: "Month 6",
    theme: "Authority & Link Building",
    items: [
      "Publish /guides/cubicle-systems-florida (pillar)",
      "Guest post pitch to South Florida commercial real estate and IFMA chapter blogs",
      "Blog: 'How to Choose a Commercial Office Mover in South Florida'",
      "Quarterly audit: update page schema, fix crawl errors, refresh stale content",
    ],
  },
];

const TECH_ACTIONS = [
  {
    id: "01",
    title: "LocalBusiness + MovingCompany JSON-LD on Every Location Page",
    detail: `Implement nested schema: Organization > LocalBusiness > MovingCompany. Each location page gets its own geo-coordinates, areaServed (radius or city list), telephone, openingHours, and priceRange. Use hasOfferCatalog to list service types. This directly feeds the Local Pack knowledge panel and Google Maps listing.`,
    effort: "High impact",
    difficulty: "Med",
  },
  {
    id: "02",
    title: "Google Business Profile Optimization & Weekly Posts",
    detail: `Set primary category to "Moving Company" and add secondary categories: "Office Furniture Store" and "Labor and Delivery Services". Upload 20+ geotagged job-site photos. Expand service area to all cities within 100 miles. Post weekly GBP updates (project photos, service spotlights). Add Products for each service with descriptions and pricing ranges.`,
    effort: "High impact",
    difficulty: "Low",
  },
  {
    id: "03",
    title: "Structured Data for FAQs on Every Service and Pillar Page",
    detail: `Add FAQPage schema to service and guide pages (already have FAQ accordions). Each question/answer pair structured as mainEntity > Question > acceptedAnswer. Google shows these as rich result dropdowns in SERPs, expanding your organic footprint. Aim for 4–6 questions per page targeting informational long-tails.`,
    effort: "Med impact",
    difficulty: "Low",
  },
  {
    id: "04",
    title: "NAP Consistency Audit Across 50+ Directories",
    detail: `Audit every citation for exact Name/Address/Phone match. Port St. Lucie businesses often have duplicate or mismatched listings from old addresses. Use BrightLocal or Whitespark to fix Yelp, Angi, HomeAdvisor, BBB, Houzz, Thumbtack, Foursquare, Apple Maps, and Bing Places. Each inconsistent citation dilutes local pack authority.`,
    effort: "High impact",
    difficulty: "Low",
  },
  {
    id: "05",
    title: "Core Web Vitals & Mobile Optimization for Local Ranking",
    detail: `Google weights page experience as a local ranking signal. Target: LCP < 2.5s, INP < 200ms, CLS < 0.1. For the Next.js/S3 stack: ensure all images are WebP with correct sizes (already partially done), preload LCP image, defer non-critical JS. Add preconnect for Google Fonts and EmailJS. Aim for 90+ Lighthouse mobile score on each location page.`,
    effort: "Med impact",
    difficulty: "Med",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function KeywordsSection() {
  const [filter, setFilter] = useState<string>("All");
  const priorities = ["All", "P1", "P2", "P3"];
  const filtered = filter === "All" ? KEYWORDS : KEYWORDS.filter(k => k.priority === filter);

  const toneMap: Record<string, "success" | "warning" | "danger" | "info"> = {
    P1: "success", P2: "info", P3: "warning",
  };
  const volTone: Record<string, "success" | "warning" | "info"> = {
    High: "success", Med: "info", Low: "warning",
  };
  const diffTone: Record<string, "success" | "warning" | "danger"> = {
    Low: "success", Med: "warning", High: "danger",
  };

  return (
    <Stack gap={12}>
      <Text tone="secondary">
        Long-tail, high-intent terms within a 100-mile radius of Port St. Lucie. Volume and difficulty are relative estimates for this market — not absolute search volume numbers.
      </Text>
      <Row gap={8}>
        {priorities.map(p => (
          <Pill key={p} active={filter === p} onClick={() => setFilter(p)}>{p === "All" ? "All" : `Priority ${p}`}</Pill>
        ))}
      </Row>
      <Table
        headers={["Search Term", "Intent", "Volume", "Difficulty", "Priority"]}
        columnAlign={["left", "left", "center", "center", "center"]}
        striped
        rows={filtered.map(k => [
          <Text size="small" key={k.term}>{k.term}</Text>,
          <Text size="small" tone="secondary" key="intent">{k.intent}</Text>,
          <Pill key="vol" size="sm" active={k.vol === "High"}>{k.vol}</Pill>,
          <Pill key="diff" size="sm" active={k.diff === "Low"}>{k.diff}</Pill>,
          <Pill key="pri" size="sm" active={k.priority === "P1"}>{k.priority}</Pill>,
        ])}
      />
      <Callout tone="info" title="Quick wins to act on first">
        All P1 transactional terms have low difficulty and no established local competitor with dedicated pages. Publishing location pages for Port St. Lucie, Stuart, and Jupiter with geo-modified H1s will rank within 60–90 days given the current domain authority.
      </Callout>
    </Stack>
  );
}

function SitemapSection() {
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const types: string[] = ["All", "Location", "Pillar", "Service"];
  const filtered = typeFilter === "All" ? PAGES : PAGES.filter(p => p.type === typeFilter);
  const grouped = types.slice(1).map(t => ({ type: t, pages: PAGES.filter(p => p.type === t) }));

  return (
    <Stack gap={16}>
      <Text tone="secondary">
        10 new location pages, 3 pillar guide pages, and 2 existing service pages to optimize. Slugs, H1s, and meta copy ready to implement.
      </Text>
      <Grid columns={3} gap={12}>
        <Stat value="10" label="Location pages to build" />
        <Stat value="3" label="Pillar guides to publish" />
        <Stat value="2" label="Service pages to optimize" />
      </Grid>
      <Row gap={8}>
        {types.map(t => (
          <Pill key={t} active={typeFilter === t} onClick={() => setTypeFilter(t)}>{t}</Pill>
        ))}
      </Row>
      {(typeFilter === "All" ? grouped : grouped.filter(g => g.type === typeFilter)).map(group => (
        <Stack key={group.type} gap={8}>
          <H3>{group.type} Pages</H3>
          {group.pages.map(page => (
            <Card key={page.slug} collapsible defaultOpen={false}>
              <CardHeader trailing={<Pill size="sm" active={page.priority === "P1"}>{page.priority}</Pill>}>
                {page.slug}
              </CardHeader>
              <CardBody>
                <Stack gap={8}>
                  <Row gap={8} align="start">
                    <Text size="small" tone="tertiary" style={{ minWidth: 72 }}>H1</Text>
                    <Text size="small" weight="semibold">{page.h1}</Text>
                  </Row>
                  <Row gap={8} align="start">
                    <Text size="small" tone="tertiary" style={{ minWidth: 72 }}>Title</Text>
                    <Text size="small">{page.metaTitle}</Text>
                  </Row>
                  <Row gap={8} align="start">
                    <Text size="small" tone="tertiary" style={{ minWidth: 72 }}>Desc</Text>
                    <Text size="small" tone="secondary">{page.metaDesc}</Text>
                  </Row>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Stack>
      ))}
    </Stack>
  );
}

function CalendarSection() {
  const theme = useHostTheme();
  return (
    <Stack gap={16}>
      <Text tone="secondary">
        Six-month topical authority build targeting facility managers, project coordinators, and corporate real estate decision-makers. Each month has a single theme to maintain topical coherence.
      </Text>
      {CALENDAR.map((month, i) => (
        <Card key={month.month} collapsible defaultOpen={i === 0}>
          <CardHeader trailing={<Text size="small" tone="tertiary">{month.theme}</Text>}>
            {month.month}
          </CardHeader>
          <CardBody>
            <Stack gap={6}>
              {month.items.map((item, j) => (
                <Row key={j} gap={10} align="start">
                  <div style={{
                    minWidth: 20, height: 20, borderRadius: "50%",
                    background: theme.fill.secondary,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: 1,
                  }}>
                    <Text size="small" tone="tertiary" style={{ fontSize: 10 }}>{j + 1}</Text>
                  </div>
                  <Text size="small">{item}</Text>
                </Row>
              ))}
            </Stack>
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
}

function TechSection() {
  const theme = useHostTheme();
  const effortColor: Record<string, string> = {
    "High impact": theme.accent.primary,
    "Med impact": theme.text.secondary,
  };
  return (
    <Stack gap={16}>
      <Text tone="secondary">
        Five specific implementations to improve local pack ranking, rich results, and Google Business Profile signals. Ordered by speed-to-impact.
      </Text>
      {TECH_ACTIONS.map(action => (
        <Stack key={action.id} gap={0}>
          <Row gap={12} align="center" style={{ marginBottom: 6 }}>
            <div style={{
              minWidth: 28, height: 28, borderRadius: 6,
              background: theme.fill.secondary,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Text size="small" weight="bold" tone="tertiary">{action.id}</Text>
            </div>
            <Text weight="semibold">{action.title}</Text>
            <div style={{ marginLeft: "auto" }}>
              <Row gap={6}>
                <Pill size="sm" active>{action.effort}</Pill>
                <Pill size="sm">{action.difficulty} effort</Pill>
              </Row>
            </div>
          </Row>
          <div style={{ paddingLeft: 40 }}>
            <Text size="small" tone="secondary">{action.detail}</Text>
          </div>
          <Divider style={{ marginTop: 16 }} />
        </Stack>
      ))}
    </Stack>
  );
}

// ─── Root ────────────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "keywords", label: "Keyword Analysis" },
  { id: "sitemap", label: "URL Structure" },
  { id: "calendar", label: "Content Calendar" },
  { id: "tech", label: "Technical SEO" },
] as const;

type SectionId = typeof SECTIONS[number]["id"];

export default function SEOPlan() {
  const [active, setActive] = useState<SectionId>("keywords");
  const theme = useHostTheme();

  return (
    <Stack gap={24} style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <Stack gap={4}>
        <H1>Treasure Coast SEO Plan — Headquarters Moving LLC</H1>
        <Text tone="secondary">
          Port St. Lucie, FL · 100-mile service radius · B2B commercial moving and office furniture installation
        </Text>
      </Stack>

      <Grid columns={4} gap={12}>
        <Stat value="18" label="Target keywords" />
        <Stat value="15" label="Pages to build" />
        <Stat value="24" label="Content pieces (6 mo)" />
        <Stat value="10" label="Target cities" />
      </Grid>

      <Row gap={8} wrap>
        {SECTIONS.map(s => (
          <Pill key={s.id} active={active === s.id} onClick={() => setActive(s.id as SectionId)}>
            {s.label}
          </Pill>
        ))}
      </Row>

      <Divider />

      {active === "keywords" && <KeywordsSection />}
      {active === "sitemap" && <SitemapSection />}
      {active === "calendar" && <CalendarSection />}
      {active === "tech" && <TechSection />}
    </Stack>
  );
}
