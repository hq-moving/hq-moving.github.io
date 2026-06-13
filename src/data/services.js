import deskImg from '../images/desk_small.png';
import cubeImg from '../images/cubeImg.jpg';
import officeImg from '../images/officeImg.jpg';
import equipmentImg from '../images/equipment.jpg';
import loadedImg from '../images/loaded.jpg';
import wrapImg from '../images/wrapped.png';
import dolliesImg from '../images/Dollies.png';
import boxesImg from '../images/boxes.png';
import comMvgImg from '../images/comMvg.jpg';
import movingCouchImg from '../images/movingCouch.jpg';

export const services = [
    {
        slug: 'office-furniture-installation',
        title: 'Office Furniture Installation',
        shortTitle: 'Office Furniture',
        navLabel: 'Office Furniture',
        featured: true,
        image: deskImg,
        heroImage: officeImg,
        metaDescription:
            'Professional office furniture installation in Florida. Expert assembly, space planning, and workspace setup for businesses across the Treasure Coast and statewide.',
        keywords:
            'office furniture installation Florida, commercial furniture assembly, workspace setup, office desk installation, Treasure Coast office furniture',
        headline: 'Professional Office Furniture Installation in Florida',
        subheadline:
            'From single workstations to full-floor buildouts, we assemble, position, and optimize your office furniture with precision and minimal disruption to your business.',
        intro:
            'Headquarters Moving LLC specializes in commercial office furniture installation for businesses of every size. Whether you are opening a new office, expanding your team, or refreshing your workspace, our trained installers handle assembly, placement, cable management coordination, and final walkthroughs so your team can get back to work quickly.',
        benefits: [
            'Certified handling of major office furniture brands and systems',
            'Space planning support to maximize productivity and flow',
            'Minimal downtime with coordinated delivery and installation schedules',
            'Clean, professional finish with debris removal included',
            'Flexible scheduling including evenings and weekends',
        ],
        features: [
            {
                title: 'Desk & Workstation Assembly',
                description:
                    'Standing desks, L-desks, benching systems, and executive suites assembled to manufacturer specifications.',
            },
            {
                title: 'Conference Room Setup',
                description:
                    'Tables, chairs, credenzas, and presentation walls installed and aligned for a polished client-facing space.',
            },
            {
                title: 'Reception & Lobby Areas',
                description:
                    'Front-of-house furniture installed with attention to brand presentation and guest experience.',
            },
            {
                title: 'Modular & Panel Systems',
                description:
                    'Panel-based and modular furniture systems configured for acoustics, privacy, and team collaboration.',
            },
        ],
        faqs: [
            {
                question: 'Do you install furniture purchased from any vendor?',
                answer:
                    'Yes. We install furniture from major dealers and direct-from-manufacturer shipments. Provide your floor plan and delivery schedule and we will coordinate the rest.',
            },
            {
                question: 'How far in advance should we book installation?',
                answer:
                    'We recommend booking at least two weeks ahead for large projects. Smaller installs can often be scheduled within a few business days.',
            },
            {
                question: 'Can you work after business hours?',
                answer:
                    'Absolutely. After-hours and weekend installation is available to minimize disruption to your daily operations.',
            },
        ],
    },
    {
        slug: 'cubicle-installation',
        title: 'Cubicle Installation',
        shortTitle: 'Cubicles',
        navLabel: 'Cubicles',
        featured: true,
        image: cubeImg,
        heroImage: cubeImg,
        metaDescription:
            'Cubicle installation and workstation setup in Florida. Professional panel systems, benching, and open-plan office configurations across the Treasure Coast.',
        keywords:
            'cubicle installation Florida, workstation setup, panel system installation, office cubicle assembly, commercial cubicle installers',
        headline: 'Cubicle & Workstation Installation Services',
        subheadline:
            'Expert installation of cubicle systems, benching, and collaborative workstations tailored to your floor plan and headcount.',
        intro:
            'Modern offices rely on flexible workstation layouts. Our cubicle installation team configures panel systems, benching, and hybrid open-plan setups with accurate measurements, level panels, and consistent alignment across your entire floor.',
        benefits: [
            'Precise layout based on your CAD or floor plan',
            'Electrical and data coordination with your IT team',
            'Reuse and reconfiguration of existing panel inventory',
            'Acoustic and privacy considerations built into every layout',
            'Post-install punch list and adjustment support',
        ],
        features: [
            {
                title: 'New Cubicle Buildouts',
                description: 'Full installation from crate to move-in ready workstations.',
            },
            {
                title: 'Panel Reconfiguration',
                description: 'Modify existing cubicle runs to add seats or create collaboration zones.',
            },
            {
                title: 'Benching Systems',
                description: 'Open benching and shared desks installed with cable management in mind.',
            },
            {
                title: 'Accessories & Add-Ons',
                description: 'Overhead storage, tack boards, whiteboards, and privacy screens mounted in place.',
            },
        ],
        faqs: [
            {
                question: 'Can you reconfigure our existing cubicles?',
                answer:
                    'Yes. Reconfiguration is one of our most requested services. We can expand, shrink, or completely redesign your current panel inventory.',
            },
            {
                question: 'Do you handle electrical connections?',
                answer:
                    'We coordinate with licensed electricians for power drops. Our team handles all furniture-side power and data raceway installation.',
            },
        ],
    },
    {
        slug: 'office-reconfiguration',
        title: 'Office Reconfiguration',
        shortTitle: 'Reconfiguration',
        navLabel: 'Reconfiguration',
        featured: true,
        image: officeImg,
        heroImage: equipmentImg,
        metaDescription:
            'Office reconfiguration services in Florida. Relayout desks, cubicles, and meeting spaces without a full move. Treasure Coast and statewide.',
        keywords:
            'office reconfiguration Florida, office layout change, workspace redesign, office furniture relocation, internal office move',
        headline: 'Office Reconfiguration & Space Optimization',
        subheadline:
            'Adapt your workspace to hybrid teams, growth, or new workflows without the cost and downtime of a full relocation.',
        intro:
            'Business needs change faster than lease terms. Our office reconfiguration service helps you redesign layouts, move departments, consolidate floors, or create hot-desking zones—all within your existing space.',
        benefits: [
            'Same-building moves with zero truck time when possible',
            'Detailed labeling so every item returns to the right place',
            'Phased execution to keep departments operational',
            'Space utilization analysis before work begins',
            'Coordination with facilities, IT, and building management',
        ],
        features: [
            {
                title: 'Department Relocations',
                description: 'Move teams between floors or wings with minimal business interruption.',
            },
            {
                title: 'Hybrid Workspace Design',
                description: 'Hot desks, hoteling stations, and touchdown areas for flexible work.',
            },
            {
                title: 'Density Changes',
                description: 'Add or reduce seating capacity while maintaining code compliance paths.',
            },
            {
                title: 'Temporary Swing Space',
                description: 'Stage furniture during renovations and restore layouts when work completes.',
            },
        ],
        faqs: [
            {
                question: 'How long does a typical reconfiguration take?',
                answer:
                    'Small departments can be reconfigured in a day. Full-floor projects typically run one to three days depending on scope.',
            },
        ],
    },
    {
        slug: 'furniture-delivery-setup',
        title: 'Furniture Delivery & Setup',
        shortTitle: 'Delivery & Setup',
        navLabel: 'Delivery & Setup',
        featured: false,
        image: loadedImg,
        heroImage: loadedImg,
        metaDescription:
            'Office furniture delivery and setup in Florida. Receive, inspect, assemble, and place commercial furniture with white-glove care.',
        keywords:
            'office furniture delivery Florida, furniture setup service, commercial furniture receiving, white glove furniture delivery',
        headline: 'Office Furniture Delivery & Setup',
        subheadline:
            'We receive, inspect, assemble, and place your furniture so it arrives ready for your team—not sitting in crates in the hallway.',
        intro:
            'Coordinating multiple vendor deliveries is one of the biggest headaches in an office project. We manage receiving, damage inspection, assembly, and final placement so your facilities team can focus on the bigger picture.',
        benefits: [
            'Dock and loading dock coordination',
            'Crate and packaging debris removal',
            'Assembly included at time of delivery',
            'Inventory verification against purchase orders',
            'Placement according to approved floor plans',
        ],
        features: [
            {
                title: 'Receiving & Inspection',
                description: 'Count and inspect shipments before sign-off with your vendor.',
            },
            {
                title: 'Room-by-Room Setup',
                description: 'Furniture placed in assigned rooms per your space plan.',
            },
            {
                title: 'Multi-Vendor Coordination',
                description: 'Single point of contact across multiple delivery schedules.',
            },
        ],
        faqs: [],
    },
    {
        slug: 'furniture-decommissioning',
        title: 'Furniture Decommissioning',
        shortTitle: 'Decommissioning',
        navLabel: 'Decommissioning',
        featured: false,
        image: boxesImg,
        heroImage: boxesImg,
        metaDescription:
            'Office furniture decommissioning and removal in Florida. Eco-friendly disposal, donation, and recycling for outdated commercial furniture.',
        keywords:
            'office furniture decommissioning Florida, furniture removal, office cleanout, commercial furniture disposal, furniture recycling',
        headline: 'Office Furniture Decommissioning & Removal',
        subheadline:
            'Clear outdated workstations responsibly with donation, recycling, and disposal options that meet your sustainability goals.',
        intro:
            'When it is time to refresh your office or close a location, decommissioning existing furniture is a major undertaking. We dismantle, remove, and route furniture to donation centers, recyclers, or approved disposal facilities.',
        benefits: [
            'Donation coordination with local nonprofits',
            'Certificate of recycling or disposal available',
            'After-hours removal to avoid tenant disruption',
            'Broom-clean space turnover for landlords',
            'Combined with new furniture installation for single-vendor simplicity',
        ],
        features: [
            {
                title: 'Full Floor Cleanouts',
                description: 'Remove all furniture, fixtures, and cubicle systems from a space.',
            },
            {
                title: 'Selective Removal',
                description: 'Remove only outdated pieces while keeping usable inventory.',
            },
            {
                title: 'Asset Tagging & Inventory',
                description: 'Document removed items for accounting and lease compliance.',
            },
        ],
        faqs: [],
    },
    {
        slug: 'commercial-moving',
        title: 'Commercial Moving',
        shortTitle: 'Commercial Moving',
        navLabel: 'Commercial Moving',
        featured: false,
        image: dolliesImg,
        heroImage: comMvgImg,
        metaDescription:
            'Commercial office moving in Florida. Relocate your business with minimal downtime, expert equipment handling, and on-site project management.',
        keywords:
            'commercial moving Florida, office relocation, business moving company, corporate move Treasure Coast',
        headline: 'Commercial Office Moving',
        subheadline:
            'Relocate your entire business with coordinated planning, specialized equipment handling, and dedicated project management.',
        intro:
            'Office relocations demand more than trucks and muscle. We plan every phase—from packing and labeling to furniture disassembly, transport, and reinstallation at your new location.',
        benefits: [
            'Dedicated move coordinator from estimate to completion',
            'After-hours and weekend moves available',
            'Specialized handling for servers, lab equipment, and sensitive assets',
            'Insurance options for high-value items',
            'Combined moving and furniture installation services',
        ],
        features: [
            {
                title: 'Space Planning',
                description: 'Pre-move layout planning for your new office.',
            },
            {
                title: 'Equipment Handling',
                description: 'Safe transport of IT, medical, and specialty equipment.',
            },
            {
                title: 'On-Site Coordination',
                description: 'Point person managing vendors, elevators, and building rules.',
            },
        ],
        faqs: [],
    },
    {
        slug: 'residential-moving',
        title: 'Residential Moving',
        shortTitle: 'Residential Moving',
        navLabel: 'Residential',
        featured: false,
        image: wrapImg,
        heroImage: movingCouchImg,
        metaDescription:
            'Residential moving services in Florida. Full-service packing, loading, transport, and unpacking across the Treasure Coast and statewide.',
        keywords:
            'residential movers Florida, home moving company, Treasure Coast movers, packing and moving services',
        headline: 'Residential Moving Services',
        subheadline:
            'Stress-free home relocations with careful packing, secure transport, and optional storage across Florida.',
        intro:
            'Moving home should not mean moving stress. Our residential team provides full-service packing, loading, transportation, and unpacking with the same professionalism we bring to commercial clients.',
        benefits: [
            'Premium packing materials and careful handling',
            'Furniture assembly and disassembly included',
            'Short-term and long-term storage options',
            'Special handling for antiques, art, and electronics',
            'Transparent estimates with no hidden fees',
        ],
        features: [
            {
                title: 'Packing & Unpacking',
                description: 'Full-service or partial packing to fit your budget and timeline.',
            },
            {
                title: 'Loading & Transport',
                description: 'Secure loading and reliable vehicles for safe delivery.',
            },
            {
                title: 'Storage Solutions',
                description: 'Flexible storage between closings or during renovations.',
            },
        ],
        faqs: [],
    },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);

export const featuredServices = services.filter((s) => s.featured);

export const officeServices = services.filter((s) =>
    ['office-furniture-installation', 'cubicle-installation', 'office-reconfiguration', 'furniture-delivery-setup', 'furniture-decommissioning'].includes(s.slug)
);
