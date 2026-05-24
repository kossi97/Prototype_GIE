/**
 * OMORAN-GROUP
 * ─────────────────────────────────────────────────────────────────
 */

/* ═══════════════════════════════════════════════════════════════
   1.  DICTIONNAIRE DE TRADUCTIONS — EN + FR COMPLET
═══════════════════════════════════════════════════════════════ */
const TRANSLATIONS = {

  /* ─── ENGLISH ───────────────────────────────────────────────── */
  en: {

    /* ── Meta & Loader ── */
    "meta.title":              "OMORAN-GROUP — Financial Excellence ",
    "loader.text":             "OMORAN-GROUP",
    "page.services.meta":      "Services — OMORAN-GROUP",
    "page.projects.meta":      "Projects — OMORAN-GROUP",
    "page.reg.meta":           "Regulation — OMORAN-GROUP",
    "page.zft.meta":           "Free Zone — OMORAN-GROUP",
    "page.news.meta":          "News — OMORAN-GROUP",
    "page.admin.meta":         "Admin — OMORAN-GROUP",

    /* ── Navigation ── */
    "nav.sub":                 "Excellence · Finance · Legal ",
    "nav.home":                "Home",
    "nav.services":            "Services",
    "nav.projects":            "Projects",
    "nav.regulation":          "Regulation",
    "nav.zft":                 "Free Zone",
    "nav.news":                "News",
    "nav.contact":             "Contact us",

    /* ── Breadcrumbs ── */
    "bc.home":                 "Home",
    "bc.services":             "Services",
    "bc.projects":             "Projects",
    "bc.regulation":           "Regulation",
    "bc.freezone":             "Togo Free Zone",
    "bc.news":                 "News",

    /* ── Hero index — section 1 ── */
    "hero.badge":              "Togo Free Zone · UEMOA · ECOWAS ",
    "hero.title":              "Financial &amp; Legal<br>African Hub",
    "hero.subtitle":           "Serving the International",
    "hero.desc":               "OMORAN-GROUP accompanies businesses and investors in their development across West Africa —> advisory, financial engineering, acquisitions, structuring and regulatory compliance.",
    "hero.cta1":               "Discover our services",
    "hero.cta2":               "Our projects",

    /* ── Hero index — section 2 ── */
    "hero.title1":             "Structure.",
    "hero.title2":             "Invest.",
    "hero.title3":             "Prosper.",
    "hero.subtitle2":          "Economic Interest Group — Lomé, Togo",
    "hero.description2":       "OMORAN-GROUP leads strategic investment projects across West Africa —> financial engineering, institutional acquisition, and market development in full compliance with BCEAO, OHADA, and ECOWAS regulatory frameworks.",
    "hero.btnProjects":        "View Our Projects",
    "hero.btnServices":        "Our Expertise",
    "hero.regionTag":          "Regional Presence",
    "hero.regionTitle":        "Our Reach",
    "hero.uemoaStates":        "WAEMU Member States",
    "hero.uemoaSub":           "Economic and Monetary Union",
    "hero.ecowasStates":       "ECOWAS Member States",
    "hero.ecowasSub":          "Regional Economic Community",
    "hero.expertise":          "Areas of Expertise",
    "hero.expertiseSub":       "Finance · Law · Technology",
    "hero.phases":             "Development Phases",
    "hero.phasesSub":          "Acquisition · EIG · TFZ",

    /* ── Vision / Values / Objectives ── */
    "vision.title1":           "Vision",
    "vision.text1":            "To become the leading financial engineering and strategic investment hub in West Africa, bridging international capital with regional opportunities.",
    "vision.title2":           "Values",
    "vision.text2":            "Excellence, Integrity, Confidentiality, Regulatory Efficiency, and Sustainable Partnership —> the pillars guiding every operation we undertake.",
    "vision.title3":           "Objectives",
    "vision.text3":            "Strategic asset acquisition, joint venture structuring, ZFT integration, and building a sovereign-grade financial ecosystem across the UEMOA/ECOWAS space.",

    /* ── About strip ── */
    "strip.bceao":             "Reference Regulation",
    "strip.ohada":             "Unified Legal Framework",
    "strip.zft":               "Togo Free Zone",
    "strip.nda":               "Guaranteed Confidentiality",
    "strip.spv":               "Optimized Legal Structuring",

    /* ── Services page ── */
    "services.hero.title":     "Our Services &amp;",
    "services.hero.em":        "Expertise",
    "services.hero.desc":      "High-value advisory, engineering and financial technology services operating freely within the UEMOA/ECOWAS space — no banking licence required.",

    "svc.1.title":             "Financial Intermediation",
    "svc.1.desc":              "Connecting investors and project owners, structuring flows and facilitating transactions across the UEMOA/ECOWAS regional space.",
    "svc.1.tag":               "OMORAN-GROUP Expertise",
    "svc.1.pt1":               "Investor-project matchmaking across 15 ECOWAS states",
    "svc.1.pt2":               "Transaction structuring and flow management",
    "svc.1.pt3":               "Cross-border capital facilitation under UEMOA rules",
    "svc.1.pt4":               "Pre-investment advisory and opportunity screening",

    "svc.2.title":             "Financial Engineering",
    "svc.2.desc":              "Design of complex structures — holding, SPV, shareholders' agreements — optimised for large-scale operations in West Africa.",
    "svc.2.tag":               "OMORAN-GROUP Expertise",
    "svc.2.pt1":               "SPV and holding company design under OHADA law",
    "svc.2.pt2":               "Shareholders' agreement drafting and negotiation",
    "svc.2.pt3":               "Tax-optimised corporate structuring",
    "svc.2.pt4":               "Debt and equity structure optimisation",

    "svc.3.title":             "Legal Engineering",
    "svc.3.desc":              "Comprehensive legal structuring, contract drafting and regulatory compliance management for national and cross-border operations.",
    "svc.3.tag":               "OMORAN-GROUP Expertise",
    "svc.3.pt1":               "OHADA-compliant contract drafting and negotiation",
    "svc.3.pt2":               "Regulatory compliance audits (BCEAO, UEMOA, ECOWAS)",
    "svc.3.pt3":               "Risk mapping and mitigation for investments",
    "svc.3.pt4":               "Corporate governance documentation and support",

    "svc.4.title":             "Fundraising",
    "svc.4.desc":              "End-to-end capital mobilisation from public and private funding sources, with investment-grade documentation and institution negotiations.",
    "svc.4.tag":               "OMORAN-GROUP Expertise",
    "svc.4.pt1":               "Investment dossier preparation and presentation",
    "svc.4.pt2":               "Multilateral and bilateral donor engagement",
    "svc.4.pt3":               "Private equity and venture capital sourcing",
    "svc.4.pt4":               "Diaspora and crowdfunding investment structures",

    "svc.5.title":             "Sovereign Asset Management",
    "svc.5.desc":              "Strategic advisory and portfolio management for public and sovereign assets, aligned with BCEAO prudential requirements.",
    "svc.5.tag":               "OMORAN-GROUP Expertise",
    "svc.5.pt1":               "Sovereign portfolio analysis and strategic allocation",
    "svc.5.pt2":               "BCEAO prudential ratio monitoring",
    "svc.5.pt3":               "Public asset performance reporting",
    "svc.5.pt4":               "Sovereign wealth fund advisory support",

    "svc.6.title":             "Project Design",
    "svc.6.desc":              "From concept to delivery — feasibility studies, technical structuring and end-to-end operational support across West Africa.",
    "svc.6.tag":               "OMORAN-GROUP Expertise",
    "svc.6.pt1":               "Feasibility and viability studies",
    "svc.6.pt2":               "Technical and financial project structuring",
    "svc.6.pt3":               "Stakeholder mapping and partnership development",
    "svc.6.pt4":               "Operational launch and monitoring support",
    "svc.6.pt5":               "Monitoring and evaluation",

    "svc.7.title":             "Company Domiciliation",
    "svc.7.desc":              "Full domiciliation services for local and international businesses — legal address, RCCM registration and administrative support.",
    "svc.7.tag":               "OMORAN-GROUP Expertise",
    "svc.7.pt1":               "Registered legal address in Lomé, Togo",
    "svc.7.pt2":               "RCCM registration and commercial formalities",
    "svc.7.pt3":               "Administrative liaison and mail management",
    "svc.7.pt4":               "Virtual office and meeting room access",

    /* ── CTA bands ── */
    "cta.btn":                 "Contact us",
    "cta.services.title":      "Ready to work with OMORAN-GROUP?",
    "cta.services.desc":       "Our team delivers tailored solutions for investors, institutions and entrepreneurs across West Africa.",
    "cta.services.btn":        "Contact us today",
    "cta.projects.title":      "Interested in our projects?",
    "cta.projects.desc":       "Contact our team to explore partnership and co-investment opportunities.",
    "cta.projects.btn":        "Get in touch",
    "cta.reg.title":           "Need regulatory guidance?",
    "cta.reg.desc":            "Our compliance experts navigate the triple UEMOA/ECOWAS/OHADA framework on your behalf.",
    "cta.reg.btn":             "Contact our experts",
    "cta.zft.title":           "Ready to join the Togo Free Zone?",
    "cta.zft.desc":            "Our team handles the entire accreditation process from file preparation to licence receipt.",
    "cta.zft.btn":             "Start the process",

    /* ── Projects page ── */
    "projects.eyebrow":        "Project Portfolio",
    "projects.hero.title":     "Our Strategic",
    "projects.hero.em":        "Projects",
    "projects.hero.desc":      "Three flagship projects form the pillars of OMORAN-GROUP's regional development — institutional acquisition, legal structuring and free zone integration.",
    "projects.other.eyebrow":  "Projects 02 &amp; 03",
    "projects.other.title":    "Complementary<br>Development Pillars",
    "projects.phases.title":   "Acquisition Roadmap — 8 Phases",
    "projects.eyebrow.p1":     "Project 01 — Flagship",

    "proj.1.badge":            "★ Flagship Project",
    "proj.1.title":            "MUSED Acquisition",
    "proj.1.sub":              "Microfinance Institution — Access To ECOWAS Markets",
    "proj.1.desc":             "The acquisition of MUSED constitutes OMORAN-GROUP's strategic entry project into the regulated microfinance market. This buyout of a BCEAO-licensed institution opens access without starting from scratch — fast, secure and fully OHADA-compliant.",
    "proj.1.cta":              "Join",
    "proj.1.p1":               "Strategic framing &amp; letter of intent",
    "proj.1.p2":               "Due diligence — OHADA, BCEAO, fiscal audits",
    "proj.1.p3":               "Exclusive good-faith purchase offer",
    "proj.1.p4":               "Structuring — SPV, holding, shareholders' pact",
    "proj.1.p5":               "Negotiation &amp; contracting",
    "proj.1.p6":               "BCEAO, Ministry, Commission authorisations",
    "proj.1.p7":               "Finalisation — RCCM, statutes, Official Journal",
    "proj.1.p8":               "Post-acquisition &amp; operational integration",

    "proj.2.title":            "Participation in a GIE project setup",
    "proj.2.sub":              "Legal Structuring",
    "proj.2.desc":             "Structuring of the Economic Interest Grouping — business plan, partner integration, constitutive general meeting, capital contributions and legal formalities.",

    "proj.3.title":            "Joint venture in the Togo Free Zone",
    "proj.3.sub":              "Fiscal &amp; Customs Advantage",
    "proj.3.desc":             "ZFT file preparation, payment of regulatory fees, official filing and obtaining of provisional licence opening fiscal and customs benefits.",

    "proj.2.tag1":             "Business Plan",
    "proj.2.tag2":             "Constitutive GA",
    "proj.2.tag3":             "OHADA Statutes",
    "proj.2.tag4":             "Members' Pact",
    "proj.2.tag5":             "RCCM",
    "proj.3.tag1":             "ZFT File",
    "proj.3.tag2":             "Provisional Licence",
    "proj.3.tag3":             "Tax Exemptions",
    "proj.3.tag4":             "Customs Regime",

    "status.ongoing":          "Ongoing",
    "status.planned":          "Planned",

    "metric.type":             "Operation Type",
    "metric.type.val":         "Share transfer",
    "metric.type.sub":         "Or asset transfer depending on structure",
    "metric.licence":          "Target Licence",
    "metric.licence.val":      "BCEAO / UMOA",
    "metric.licence.sub":      "Microfinance — prudential ratios",
    "metric.legal":            "Legal Framework",
    "metric.legal.val":        "OHADA",
    "metric.legal.sub":        "Uniform Acts — securities, companies",
    "metric.reg":              "Applicable Regulation",
    "metric.reg.val":          "ECOWAS",
    "metric.reg.sub":          "Free movement of capital",
    "metric.conf":             "Confidentiality",
    "metric.conf.val":         "NDA signed",
    "metric.conf.sub":         "Non-disclosure agreement in force",
    "metric.phases":           "Total Phases",
    "metric.phases.val":       "8 phases",
    "metric.phases.sub":       "From letter of intent to integration",

    /* Phase labels */
    "phase.a.title":           "Strategic Framing",
    "phase.a.desc":            "Letter of intent drafted and submitted; NDA signed with target management.",
    "phase.b.title":           "Due Diligence",
    "phase.b.desc":            "OHADA legal, BCEAO regulatory, fiscal and operational audit in progress.",
    "phase.c.title":           "Purchase Offer",
    "phase.c.desc":            "Exclusive good-faith offer to be submitted upon audit completion.",
    "phase.d.title":           "Structuring",
    "phase.d.desc":            "SPV/holding design, shareholders' pact and tax-optimised structure.",
    "phase.e.title":           "Negotiation",
    "phase.e.desc":            "Price negotiations, guarantee clauses and final contract drafting.",
    "phase.f.title":           "Authorisations",
    "phase.f.desc":            "BCEAO, Ministry of Finance and Banking Commission notifications.",
    "phase.g.title":           "Finalisation",
    "phase.g.desc":            "Transfer, RCCM registration, statute modifications, Official Journal publication.",
    "phase.h.title":           "Post-Acquisition",
    "phase.h.desc":            "Operational integration, HR alignment, external communication and ongoing compliance.",

    /* ── Regulation page ── */
    "reg.eyebrow":             "Regional Legal Framework",
    "reg.eyebrow.regulated":   "Regulated Activities",
    "reg.eyebrow.comparison":  "Comparative Overview",
    "reg.hero.title":          "Regional",
    "reg.hero.em":             "Legal Framework",
    "reg.hero.desc":           "A triple regulatory architecture — UEMOA, ECOWAS and OHADA — that OMORAN-GROUP masters to position its activities in full compliance.",
    "reg.title":               "UEMOA &amp;<br>ECOWAS Regulation",
    "reg.subtitle":            "A triple regulatory architecture that OMORAN-GROUP masters to position its activities in full compliance and seize freely accessible opportunities.",
    "reg.deep.title":          "Understanding the<br>Triple Regulatory Architecture",
    "reg.comp.title":          "UEMOA vs ECOWAS<br>Regulatory Scope",
    "reg.uemoa.sub":           "Economic &amp; Monetary Union",
    "reg.ecowas.sub":          "Regional Economic Community",
    "reg.ohada.sub":           "Unified Business Law",
    "reg.u.badge":             "UEMOA — Monetary Union",
    "reg.u.title":             "Activities Regulated by the BCEAO",
    "reg.u.intro":             "UEMOA tightly governs financial activities across 8 member states through the BCEAO and regional market authorities.",
    "reg.u.1":                 "Banks, financial institutions, microfinance (mandatory licence)",
    "reg.u.2":                 "Financial markets — BRVM, securities",
    "reg.u.3":                 "Payment systems and electronic transfers",
    "reg.u.4":                 "Insurance and reinsurance",
    "reg.u.5":                 "VAT and customs duty harmonisation",
    "reg.u.6":                 "Public procurement, concessions, quality standards",
    "reg.u.7":                 "Telecommunications, energy, infrastructure",
    "reg.c.badge":             "ECOWAS — Economic Community",
    "reg.c.title":             "Regionally Regulated Activities",
    "reg.c.intro":             "ECOWAS governs cross-border activities and trade integration across 15 member states, complementing UEMOA's monetary framework.",
    "reg.c.1":                 "Free movement of goods, services and capital (Protocol A/P1/1/03)",
    "reg.c.2":                 "Road, maritime and air transport — safety standards",
    "reg.c.3":                 "Energy: electricity, hydrocarbons, mining",
    "reg.c.4":                 "Monetary policy harmonisation with UEMOA",
    "reg.c.5":                 "Anti-money laundering and counter-terrorism financing",
    "reg.c.6":                 "Cross-border telecommunications, cybersecurity",
    "reg.c.7":                 "Personal data protection",

    /* Comparison table headers */
    "reg.comp.col1":           "Domain",
    "reg.comp.col2":           "UEMOA (Monetary Union)",
    "reg.comp.col3":           "ECOWAS (Economic Community)",
    "reg.comp.col4":           "OMORAN-GROUP Exposure",

    /* Free activities */
    "free.eyebrow":            "Freely Accessible",
    "free.title":              "Free Activities — Personalized Services",
    "free.title.footer":       "Free Activities",
    "free.banner.desc":        "These activities deliver maximum value operating freely under national commercial law.",
    "free.1.title":            "Financial Education",
    "free.1.sub":              "Training, workshops, youth, women and SME financial literacy",
    "free.2.title":            "Management Advisory",
    "free.2.sub":              "Financial coaching, accounting obligations, startup support",
    "free.3.title":            "Management Technologies",
    "free.3.sub":              "Digital tracking, invoicing and budgeting solutions",
    "free.4.title":            "Savings Groups",
    "free.4.sub":              "Securing tontines, solidarity funds, community associations",
    "free.5.title":            "Economic Studies",
    "free.5.sub":              "Reports, market analysis, financial policy monitoring",
    "free.6.title":            "Domiciliation",
    "free.6.sub":              "Legal address, RCCM formalities, administrative support",

    
    /* ── Free Zone page ── */
    "zft.eyebrow":             "Competitive Advantage",
    "zft.eyebrow.why":         "Competitive Advantage",
    "zft.eyebrow.benefits":    "Key Benefits",
    "zft.eyebrow.lome":        "Strategic Location",
    "zft.eyebrow.process":     "How to Obtain the Licence",
    "zft.six.title":           "Six Strategic Advantages<br>of TFZ Status",
    "zft.hero.title.1":        "Togo Free Zone",
    "zft.hero.title.2":        "Your Secure Gateway to West Africa",
    "zft.hero.desc.page":      "The TFZ licence — the third pillar of GIE's development plan — opens a privileged fiscal and customs regime positioned at the crossroads of ECOWAS flows.",
    "zft.stat1":               "ECOWAS markets",
    "zft.stat2":               "Tax exemptions",
    "zft.stat3":               "Filing phases",
    "zft.stat4":               "Profit repatriation",
    "zft.why.title":           "Why the Togo Free Zone?",
    "zft.why.desc":            "The TFZ positions OMORAN-GROUP at the crossroads of West African commercial and financial flows, with a secure OHADA legal framework and decisive competitive advantages.",
    "zft.adv1.title":          "Tax &amp; Customs Exemptions",
    "zft.adv1.sub":            "Significant fiscal and customs advantages on export operations",
    "zft.adv2.title":          "Free Capital Repatriation",
    "zft.adv2.sub":            "Profits and capital freely repatriable without restriction",
    "zft.adv3.title":          "Access to ECOWAS markets",
    "zft.adv3.sub":            "Privileged gateway to the 15 ECOWAS member states",
    "zft.adv4.title":          "OHADA Legal Security",
    "zft.adv4.sub":            "Clear, predictable business law across 17 African states",
    "zft.adv5.title":          "Simplified Procedures",
    "zft.adv5.sub":            "Streamlined administrative procedures under the ZFT regime",
    "zft.adv6.title":          "Investment Protection",
    "zft.adv6.sub":            "Stabilisation clauses and international arbitration access",
    "zft.adv1.card.title":     "Fiscal Exemptions",
    "zft.adv1.card.desc":      "Comprehensive tax holidays covering corporate income tax, VAT on inputs and export duties for qualifying activities within the zone.",
    "zft.adv2.card.title":     "Free Capital Movement",
    "zft.adv2.card.desc":      "Unrestricted repatriation of profits, dividends, interest payments and capital, aligned with ECOWAS free movement protocols.",
    "zft.adv3.card.title":     "ECOWAS Hub Status",
    "zft.adv3.card.desc":      "Lomé's position as West Africa's premier deep-water port hub provides direct connectivity to all 15 ECOWAS member markets.",
    "zft.adv4.card.title":     "OHADA Legal Framework",
    "zft.adv4.card.desc":      "Clear, predictable business law covering company formation, insolvency, commercial contracts and dispute resolution across 17 African states.",
    "zft.adv5.card.title":     "Simplified Procedures",
    "zft.adv5.card.desc":      "Streamlined administrative procedures, single-window processing and faster licensing timelines compared to standard national procedures.",
    "zft.adv6.card.title":     "Investment Protection",
    "zft.adv6.card.desc":      "Strong investment protection guarantees, stabilisation clauses and access to international arbitration mechanisms for dispute resolution.",
    "zft.lome.eyebrow":        "Strategic Location",
    "zft.lome.title":          "Lomé — West Africa's Financial Capital",
    "zft.lome.title.span":     "West Africa's Financial Capital",
    "zft.lome.desc":           "Lomé is uniquely positioned at the heart of the ECOWAS zone, offering a stable political environment, a modern deep-water port and a rapidly growing financial services ecosystem.",
    "zft.lome.f1":             "Only deep-water port on the West African coastline accessible 24/7",
    "zft.lome.f2":             "CFA Franc monetary zone (BCEAO) — currency stability guaranteed",
    "zft.lome.f3":             "Direct access to landlocked markets: Burkina Faso, Niger, Mali",
    "zft.lome.f4":             "Growing fintech ecosystem and digital payments infrastructure",
    "zft.lome.f5":             "Investment-grade infrastructure and reliable energy supply",
    "zft.proc.eyebrow":        "How to Obtain the Licence",
    "zft.proc.title":          "TFZ Accreditation Process — 3 Phases",
    "zft.step1.title":         "Complete File Preparation",
    "zft.step1.sub":           "Statutes, business plan, investment proofs and administrative forms",
    "zft.step2.title":         "Fee Payment &amp; Official Filing",
    "zft.step2.sub":           "Payment of regulatory fees and submission to competent authorities",
    "zft.step3.title":         "Receipt of Provisional Licence",
    "zft.step3.sub":           "Start of operations under ZFT regime pending final approval",

    /* ── News page ── */
    "news.eyebrow":            "African Financial Intelligence",
    "news.eyebrow.latest":     "Latest Updates",
    "news.hero.title":         "African Financial &amp; Legal",
    "news.hero.em":            "Intelligence",
    "news.title":              "Recent News &amp;<br>Market Intelligence",
    "news.subtitle":           "Curated regulatory, monetary and strategic updates from the UEMOA, ECOWAS and continental financial ecosystem.",
    "news.badge.featured":     "★ Featured",
    "news.readmore":           "Read analysis →",
    "news.filter.all":         "All",
    "news.filter.bceao":       "BCEAO",
    "news.filter.ecowas":      "ECOWAS",
    "news.filter.togo":        "Togo",
    "news.filter.markets":     "Markets",
    "news.filter.reg":         "Regulation",
    "news.cat.monetary":       "Monetary Policy",
    "news.cat.togo":           "Togo Free Zone",
    "news.cat.markets":        "Capital Markets",
    "news.cat.digital":        "Digital Finance",
    "news.cat.legal":          "Legal Framework",
    "news.cat.microfinance":   "Microfinance",
    "news.cat.investment":     "Investment",
    "news.cat.integration":    "Regional Integration",
    "news.cat.infrastructure": "Infrastructure",
    "news.1.date":             "09 May 2026",
    "news.1.title":            "ECOWAS Greenlights Regional Digital Currency Framework",
    "news.1.excerpt":          "The ECOWAS Authority of Heads of State has approved the preliminary framework for a regional CBDC, paving the way for unified digital payment infrastructure across all 15 member states by 2028.",
    "news.2.date":             "07 May 2026",
    "news.2.title":            "BCEAO Maintains Key Interest Rate at 3.5%",
    "news.2.excerpt":          "The Monetary Policy Committee keeps the key rate unchanged, citing controlled inflation at 3.2% and resilient regional growth projections for Q3 2026.",
    "news.3.date":             "05 May 2026",
    "news.3.title":            "Togo Free Zone Reports 12% Growth in Q1",
    "news.3.excerpt":          "Foreign direct investment within the TFZ surged by 12% in Q1, driven by fintech, logistics and agribusiness sectors seeking ECOWAS hub status.",
    "news.4.date":             "02 May 2026",
    "news.4.title":            "West African Capital Markets Integration Accelerates",
    "news.4.excerpt":          "The BRVM and Nigerian Stock Exchange announce a landmark interoperability protocol, enabling cross-border securities trading and unified clearing mechanisms.",
    "news.5.date":             "28 Apr 2026",
    "news.5.title":            "Mobile Money Transactions Hit $180B Across ECOWAS in 2025",
    "news.5.excerpt":          "West Africa's mobile money ecosystem reached a record $180B in transaction value, with Togo posting the highest year-on-year growth at 34%.",
    "news.6.date":             "22 Apr 2026",
    "news.6.title":            "OHADA Launches Consultation on Uniform Act Modernisation",
    "news.6.excerpt":          "The OHADA secretariat launched a public consultation on proposed amendments to the Uniform Acts on Commercial Companies, streamlining corporate governance requirements.",
    "news.7.date":             "18 Apr 2026",
    "news.7.title":            "BCEAO Tightens Microfinance Licensing Framework",
    "news.7.excerpt":          "New BCEAO circular reinforces prudential ratios and governance requirements for licensed microfinance institutions across the WAEMU zone, effective Q3 2026.",
    "news.8.date":             "10 Apr 2026",
    "news.8.title":            "AfDB Approves $2.4B Infrastructure Package for ECOWAS",
    "news.8.excerpt":          "The African Development Bank approved a landmark $2.4B infrastructure financing package for West Africa, prioritising logistics corridors and digital connectivity.",
    "news.9.date":             "04 Apr 2026",
    "news.9.title":            "ECOWAS Summit Advances Common Currency Roadmap",
    "news.9.excerpt":          "Heads of state endorsed an accelerated roadmap for the ECO common currency, with a revised target date of 2030 and convergence criteria harmonisation agreed.",
    "news.10.date":            "28 Mar 2026",
    "news.10.title":           "Port Autonome de Lomé Inaugurates Third Container Terminal",
    "news.10.excerpt":         "Togo's Port Autonome de Lomé opened its third deep-water container terminal, increasing annual capacity to 3.5 million TEUs and cementing Lomé as West Africa's premier hub.",

    /* Ticker */
    "ticker.bceao":            "BCEAO Rate",
    "ticker.zft":              "TFZ FDI Q1",
    "ticker.ecowas":           "ECOWAS GDP",

    /* Newsletter */
    "newsletter.title":        "Stay Informed",
    "newsletter.desc":         "Subscribe to OMORAN-GROUP's weekly West Africa Financial Intelligence briefing.",
    "newsletter.placeholder":  "your@email.com",
    "newsletter.btn":          "Subscribe",
    "newsletter.success":      "Subscribed ✓",

    /* Contact */
    "contact.title":           "Let's build together<br><em>the African finance of tomorrow</em>",
    "contact.subtitle":        "OMORAN-GROUP welcomes investors, institutional partners and entrepreneurs seeking to join a dynamic of financial excellence in West Africa.",
    "contact.cta1":            "Write to us",
    "contact.cta2":            "View our projects",

    /* Footer */
    "footer.sub":              "Financial Excellence in West Africa",
    "footer.desc":             "Economic Interest Grouping structured around financial engineering, strategic asset acquisition and market development in the UEMOA/ECOWAS space, from Lomé, Togo.",
    "footer.services":         "Services",
    "footer.projects":         "Projects",
    "footer.pages":            "Pages",
    "footer.legal":            "Legal Framework",
    "footer.ecowas":           "ECOWAS Regulation",
    "footer.rights":           "All rights reserved",
    "footer.compliant":        "Compliant",
    "footer.copy.year":        "© 2025 OMORAN-GROUP —",

    "esg.eyebrow": "Green Economy &amp; ESG Commitment",
          "esg.intro.title": "Finance that builds a <em>sustainable</em> West Africa",
          "esg.intro.desc": "OMORAN-GROUP integrates Environmental, Social and Governance criteria at the heart of every investment decision. Our ESG framework aligns financial performance with positive impact — for the region, its communities and future generations.",
          "esg.stat1": "Aligned with UN Sustainable Development Goals",
          "esg.stat2": "ESG screening on all investment projects",
          "esg.stat3": "ESG pillars: Environment · Social · Governance",
          "esg.stat4": "Responsible governance under unified law",
          "esg.tab.env": "🌿 Green Economy",
          "esg.tab.soc": "🤝 Social Approach",
          "esg.tab.gov": "⚖️ ESG Governance",
          "esg.env.eyebrow": "Environmental Pillar",
          "esg.env.title": "Green Economy &amp; Climate Finance",
          "esg.env.desc": "OMORAN-GROUP actively channels capital toward green economy projects in West Africa — renewable energy, sustainable agriculture, eco-responsible infrastructure and carbon market instruments — in alignment with ECOWAS Climate Strategy and African Union Agenda 2063.",
          "esg.env.ind1": "Green FDI growth in the ECOWAS zone (2025)",
          "esg.env.ind2": "SDGs addressed by our investment framework",
          "esg.env.ind3": "Free Zone as green hub entry point",
          "esg.env.c1.title": "Renewable Energy Finance",
          "esg.env.c1.desc": "Structuring and intermediation for solar, wind and hydroelectric projects across ECOWAS member states, mobilising green bonds and climate funds.",
          "esg.env.c2.title": "Sustainable Agribusiness",
          "esg.env.c2.desc": "Investment engineering for regenerative agriculture, agroforestry value chains and food security projects aligned with ECOWAS agricultural frameworks.",
          "esg.env.c3.title": "Green Infrastructure",
          "esg.env.c3.desc": "Eco-responsible logistics, low-carbon urban development and climate-resilient infrastructure financed through innovative SPV and ZFT structures.",
          "esg.env.c4.title": "Blue Economy &amp; Water",
          "esg.env.c4.desc": "Financial engineering for water management, coastal resources and maritime economy development along the Gulf of Guinea coastline.",
          "esg.soc.eyebrow": "Social Pillar",
          "esg.soc.title": "Social Approach &amp; Inclusive Finance",
          "esg.soc.desc": "Our social commitment places human development at the centre of financial operations. Through microfinance, financial inclusion and community programmes, GIE DYNAMIC drives sustainable wealth creation for all segments of West African society.",
          "esg.soc.tl1.title": "Financial Inclusion via MUSED",
          "esg.soc.tl1.desc": "The MUSED microfinance acquisition directly extends regulated financial services to underbanked populations across the UEMOA zone.",
          "esg.soc.tl2.title": "Women &amp; Youth Entrepreneurship",
          "esg.soc.tl2.desc": "Dedicated financial literacy programmes, coaching and access-to-finance structures targeting women entrepreneurs and youth-led enterprises.",
          "esg.soc.tl3.title": "Financial Education &amp; Capacity Building",
          "esg.soc.tl3.desc": "Workshops, training and advisory services building financial autonomy in communities, SMEs and cooperative organisations across West Africa.",
          "esg.soc.tl4.title": "Diaspora Investment Mobilisation",
          "esg.soc.tl4.desc": "Structuring vehicles for diaspora capital to flow efficiently into productive regional investments — bridging global savings with local development needs.",
          "esg.soc.k1": "Population reached via ECOWAS market access",
          "esg.soc.k2": "Unbanked adults in West Africa — target for inclusion",
          "esg.soc.k3": "UEMOA states covered by inclusion strategy",
          "esg.soc.k4": "Priority focus: Small &amp; Medium Enterprises",
          "esg.soc.p1.title": "Responsible Partnerships",
          "esg.soc.p1.desc": "All partnership agreements incorporate social responsibility clauses aligned with ILO core labour standards and ECOWAS social protocols.",
          "esg.soc.p2.title": "Community Health &amp; Welfare",
          "esg.soc.p2.desc": "Investment projects are evaluated on their contribution to community health, education and social welfare outcomes in host territories.",
          "esg.gov.eyebrow": "Governance Pillar",
          "esg.gov.title": "ESG Governance &amp; Responsible Investment",
          "esg.gov.desc": "OMORAN-GROUP applies stringent governance standards across all operations — transparency, anti-corruption, regulatory compliance and long-term accountability form the non-negotiable foundation of every transaction we structure.",
          "esg.gov.c1.title": "Regulatory Compliance",
          "esg.gov.c1.desc": "Full compliance with BCEAO, UEMOA, ECOWAS and OHADA frameworks. Every structure is pre-cleared against all applicable regulatory requirements.",
          "esg.gov.c1.p1": "BCEAO prudential ratio monitoring",
          "esg.gov.c1.p2": "AML/CFT compliance screening",
          "esg.gov.c1.p3": "OHADA corporate governance standards",
          "esg.gov.c1.p4": "ECOWAS cross-border compliance",
          "esg.gov.c2.title": "Transparency &amp; Anti-Corruption",
          "esg.gov.c2.desc": "NDA-protected operations with mandatory beneficial ownership disclosure, conflict-of-interest policies and independent audit requirements.",
          "esg.gov.c2.p1": "Beneficial ownership transparency",
          "esg.gov.c2.p2": "Conflict of interest management",
          "esg.gov.c2.p3": "Independent audit requirements",
          "esg.gov.c2.p4": "Zero-tolerance anti-corruption policy",
          "esg.gov.c3.title": "ESG Reporting &amp; Impact",
          "esg.gov.c3.desc": "Systematic ESG impact measurement with reporting aligned to GRI standards and ECOWAS Sustainable Finance Initiative guidelines.",
          "esg.gov.c3.p1": "GRI-aligned impact reporting",
          "esg.gov.c3.p2": "Carbon footprint measurement",
          "esg.gov.c3.p3": "Social return on investment (SROI)",
          "esg.gov.c3.p4": "Annual ESG performance disclosure",
          "esg.prog.env": "Environmental Integration",
          "esg.prog.soc": "Social Impact Score",
          "esg.prog.gov": "Governance Compliance",
          "esg.prog.esg": "Global ESG Rating",
          "esg.footer.link": "Green Economy &amp; ESG"
  },

  /* ─── FRANÇAIS ──────────────────────────────────────────────── */
  fr: {

    /* ── Meta & Loader ── */
    "meta.title":              "OMORAN-GROUPE — Excellence Financière en Afrique de l'Ouest",
    "loader.text":             "OMORAN-GROUPE",
    "page.services.meta":      "Services — OMORAN-GROUPE",
    "page.projects.meta":      "Projets — OMORAN-GROUPE",
    "page.reg.meta":           "Réglementation — OMORAN-GROUPE",
    "page.zft.meta":           "Zone Franche — OMORAN-GROUPE",
    "page.news.meta":          "Actualités — OMORAN-GROUPE",
    "page.admin.meta":         "Admin — OMORAN-GROUPE",

    /* ── Navigation ── */
    "nav.sub":                 "Excellence · Finance · Juridique",
    "nav.home":                "Accueil",
    "nav.services":            "Services",
    "nav.projects":            "Projets",
    "nav.regulation":          "Réglementation",
    "nav.zft":                 "Zone Franche",
    "nav.news":                "Actualités",
    "nav.contact":             "Nous contacter",

    /* ── Breadcrumbs ── */
    "bc.home":                 "Accueil",
    "bc.services":             "Services",
    "bc.projects":             "Projets",
    "bc.regulation":           "Réglementation",
    "bc.freezone":             "Zone Franche du Togo",
    "bc.news":                 "Actualités",

    /* ── Hero index — section 1 ── */
    "hero.badge":              "Zone Franche du Togo · UEMOA · CEDEAO ",
    "hero.title":              "Hub Financier<br>&amp; Juridique Africain",
    "hero.subtitle":           "Au service de l'international",
    "hero.desc":               "OMORAN-GROUPE accompagne les entreprises et investisseurs dans leur développement en Afrique de l'Ouest —> conseil, ingénierie financière, acquisitions, structuration et conformité réglementaire.",
    "hero.cta1":               "Découvrir nos services",
    "hero.cta2":               "Nos projets",

    /* ── Hero index — section 2 ── */
    "hero.title1":             "Structurer.",
    "hero.title2":             "Investir.",
    "hero.title3":             "Prospérer.",
    "hero.subtitle2":          "Groupement d'Intérêt Économique — Lomé, Togo",
    "hero.description2":       "OMORAN-GROUPE pilote des projets d'investissement stratégiques en Afrique de l'Ouest —> ingénierie financière, acquisition d'institutions et développement de marchés dans le strict respect des cadres BCEAO, OHADA et CEDEAO.",
    "hero.btnProjects":        "Voir nos projets",
    "hero.btnServices":        "Nos expertises",
    "hero.regionTag":          "Présence régionale",
    "hero.regionTitle":        "Notre portée",
    "hero.uemoaStates":        "États membres UEMOA",
    "hero.uemoaSub":           "Union Économique et Monétaire",
    "hero.ecowasStates":       "États membres CEDEAO",
    "hero.ecowasSub":          "Communauté Économique Régionale",
    "hero.expertise":          "Domaines d'expertise",
    "hero.expertiseSub":       "Finance · Droit · Technologie",
    "hero.phases":             "Phases de développement",
    "hero.phasesSub":          "Acquisition · GIE · ZFT",

    /* ── Vision / Values / Objectives ── */
    "vision.title1":           "Vision",
    "vision.text1":            "Devenir le hub d'ingénierie financière et d'investissement stratégique de référence en Afrique de l'Ouest, connectant le capital international aux opportunités régionales.",
    "vision.title2":           "Valeurs",
    "vision.text2":            "Excellence, Intégrité, Confidentialité, Efficacité Réglementaire et Partenariat durable —> les piliers guidant chaque opération que nous menons.",
    "vision.title3":           "Objectifs",
    "vision.text3":            "Acquisition stratégique d'actifs, structuration de joint-venture, intégration ZFT et construction d'un écosystème financier de souveraineté dans l'espace UEMOA/CEDEAO.",

    /* ── About strip ── */
    "strip.bceao":             "Réglementation de Référence",
    "strip.ohada":             "Cadre Juridique Unifié",
    "strip.zft":               "Zone Franche du Togo",
    "strip.nda":               "Confidentialité Garantie",
    "strip.spv":               "Montage Juridique Optimisé",

    /* ── Services page ── */
    "services.hero.title":     "Nos Services &amp;",
    "services.hero.em":        "Expertises",
    "services.hero.desc":      "Services de conseil, ingénierie et technologie financière à haute valeur ajoutée opérant librement dans l'espace UEMOA/CEDEAO — aucun agrément bancaire requis.",

    "svc.1.title":             "Intermédiation Financière",
    "svc.1.desc":              "Mise en relation d'investisseurs et porteurs de projets, structuration des flux et facilitation des transactions dans l'espace régional UEMOA/CEDEAO.",
    "svc.1.tag":               "Sans agrément",
    "svc.1.pt1":               "Mise en relation investisseurs/projets dans 15 États CEDEAO",
    "svc.1.pt2":               "Structuration des transactions et gestion des flux",
    "svc.1.pt3":               "Facilitation des capitaux transfrontaliers sous les règles UEMOA",
    "svc.1.pt4":               "Conseil pré-investissement et détection d'opportunités",

    "svc.2.title":             "Ingénierie Financière",
    "svc.2.desc":              "Conception de montages complexes — holding, SPV, pacte d'actionnaires — optimisés pour les opérations d'envergure en Afrique de l'Ouest.",
    "svc.2.tag":               "Expertise OMORAN-GROUPE",
    "svc.2.pt1":               "Conception de SPV et holdings sous droit OHADA",
    "svc.2.pt2":               "Rédaction et négociation de pactes d'actionnaires",
    "svc.2.pt3":               "Structuration fiscale optimisée",
    "svc.2.pt4":               "Optimisation des structures dette/capitaux propres",

    "svc.3.title":             "Ingénierie Juridique",
    "svc.3.desc":              "Structuration juridique complète, rédaction de contrats et gestion de la conformité réglementaire pour opérations nationales et transfrontalières.",
    "svc.3.tag":               "Expertise OMORAN-GROUPE",
    "svc.3.pt1":               "Rédaction et négociation de contrats conformes OHADA",
    "svc.3.pt2":               "Audits de conformité réglementaire (BCEAO, UEMOA, CEDEAO)",
    "svc.3.pt3":               "Cartographie et atténuation des risques d'investissement",
    "svc.3.pt4":               "Documentation et support de gouvernance d'entreprise",

    "svc.4.title":             "Levée de Fonds",
    "svc.4.desc":              "Mobilisation de capitaux de bout en bout — identification des financements publics et privés, préparation de dossiers et pilotage des négociations.",
    "svc.4.tag":               "Expertise OMORAN-GROUPE",
    "svc.4.pt1":               "Préparation et présentation de dossiers d'investissement",
    "svc.4.pt2":               "Engagement auprès des bailleurs multilatéraux et bilatéraux",
    "svc.4.pt3":               "Sourcing de capital-investissement et capital-risque",
    "svc.4.pt4":               "Structures d'investissement diaspora et crowdfunding",

    "svc.5.title":             "Gestion d'Actifs Souverains",
    "svc.5.desc":              "Conseil stratégique et gestion de portefeuille pour actifs financiers publics et souverains, conformes aux exigences prudentielles BCEAO.",
    "svc.5.tag":               "Expertise OMORAN-GROUPE",
    "svc.5.pt1":               "Analyse de portefeuille souverain et allocation stratégique",
    "svc.5.pt2":               "Suivi des ratios prudentiels BCEAO",
    "svc.5.pt3":               "Reporting de performance des actifs publics",
    "svc.5.pt4":               "Conseil aux fonds souverains",

    "svc.6.title":             "Conception de Projets",
    "svc.6.desc":              "Du concept à la livraison — études de faisabilité, structuration technique et accompagnement opérationnel de bout en bout.",
    "svc.6.tag":               "Expertise OMORAN-GROUPE",
    "svc.6.pt1":               "Études de faisabilité et de viabilité",
    "svc.6.pt2":               "Structuration technique et financière des projets",
    "svc.6.pt3":               "Cartographie des parties prenantes et développement de partenariats",
    "svc.6.pt4":               "Support au lancement opérationnel et au suivi",
    "svc.6.pt5":               "Suivi et évaluation",


    "svc.7.title":             "Domiciliation d'Entreprise",
    "svc.7.desc":              "Services complets de domiciliation — adresse légale, inscription RCCM, assistance administrative pour entreprises locales et étrangères.",
    "svc.7.tag":               "Expertise OMORAN-GROUPE",
    "svc.7.pt1":               "Adresse légale enregistrée à Lomé, Togo",
    "svc.7.pt2":               "Inscription RCCM et formalités commerciales",
    "svc.7.pt3":               "Liaison administrative et gestion du courrier",
    "svc.7.pt4":               "Accès bureau virtuel et salle de réunion",

    /* ── CTA bands ── */
    "cta.btn":                 "Nous contacter",
    "cta.services.title":      "Prêt à travailler avec OMORAN-GROUP ?",
    "cta.services.desc":       "Notre équipe délivre des solutions sur mesure pour investisseurs, institutions et entrepreneurs en Afrique de l'Ouest.",
    "cta.services.btn":        "Nous contacter",
    "cta.projects.title":      "Intéressé par nos projets ?",
    "cta.projects.desc":       "Contactez notre équipe pour explorer les opportunités de partenariat et de co-investissement.",
    "cta.projects.btn":        "Prendre contact",
    "cta.reg.title":           "Besoin d'un accompagnement réglementaire ?",
    "cta.reg.desc":            "Nos experts en conformité naviguent le triple cadre UEMOA/CEDEAO/OHADA en votre nom.",
    "cta.reg.btn":             "Contacter nos experts",
    "cta.zft.title":           "Prêt à rejoindre la Zone Franche du Togo ?",
    "cta.zft.desc":            "Notre équipe gère l'intégralité du processus d'accréditation, de la constitution du dossier à la réception de l'agrément.",
    "cta.zft.btn":             "Démarrer le processus",

    /* ── Projects page ── */
    "projects.eyebrow":        "Portefeuille de Projets",
    "projects.hero.title":     "Nos Projets",
    "projects.hero.em":        "Stratégiques",
    "projects.hero.desc":      "Trois projets phares forment les piliers du développement régional de OMORAN-GROUP — acquisition institutionnelle, structuration juridique et intégration en zone franche.",
    "projects.other.eyebrow":  "Projets 02 &amp; 03",
    "projects.other.title":    "Piliers de Développement<br>Complémentaires",
    "projects.phases.title":   "Feuille de route — 8 Phases",
    "projects.eyebrow.p1":     "Projet 01 — Phare",

    "proj.1.badge":            "★ Projet Phare",
    "proj.1.title":            "Acquisition de MUSED",
    "proj.1.sub":              "Institution de Microfinance — Accès aux marchés BCEAO",
    "proj.1.desc":             "L'acquisition de MUSED constitue le projet d'entrée stratégique du OMORAN-GROUP sur le marché de la microfinance réglementée. Ce rachat d'une institution agréée BCEAO ouvre l'accès sans repartir d'un agrément à zéro — voie rapide, sécurisée et conforme aux dispositions OHADA.",
    "proj.1.cta":              "Rejoindre",
    "proj.1.p1":               "Cadrage stratégique &amp; lettre d'intention",
    "proj.1.p2":               "Due diligence — audits OHADA, BCEAO, fiscal",
    "proj.1.p3":               "Offre exclusive d'achat de bonne foi",
    "proj.1.p4":               "Structuration — SPV, holding, pacte d'actionnaires",
    "proj.1.p5":               "Négociation &amp; contractualisation",
    "proj.1.p6":               "Autorisations BCEAO, Ministère, Commission",
    "proj.1.p7":               "Finalisation — RCCM, statuts, Journal Officiel",
    "proj.1.p8":               "Post-acquisition &amp; intégration opérationnelle",

    "proj.2.title":            "Participation à un montage de projet GIE",
    "proj.2.sub":              "Structuration Juridique",
    "proj.2.desc":             "Structuration du Groupement d'Intérêt Économique — plan d'affaires, intégration des partenaires, assemblée générale constitutive, souscription des apports et formalités légales.",

    "proj.3.title":            "Joint-venture en Zone Franche du Togo",
    "proj.3.sub":              "Avantage Fiscal &amp; Douanier",
    "proj.3.desc":             "Constitution du dossier ZFT, paiement des droits réglementaires, dépôt officiel et obtention de l'agrément provisoire ouvrant les avantages fiscaux et douaniers.",

    "proj.2.tag1":             "Plan d'affaires",
    "proj.2.tag2":             "AG constitutive",
    "proj.2.tag3":             "Statuts OHADA",
    "proj.2.tag4":             "Pacte des membres",
    "proj.2.tag5":             "RCCM",
    "proj.3.tag1":             "Dossier ZFT",
    "proj.3.tag2":             "Agrément provisoire",
    "proj.3.tag3":             "Exonérations fiscales",
    "proj.3.tag4":             "Régime douanier",

    "status.ongoing":          "En cours",
    "status.planned":          "Planifié",

    "metric.type":             "Type d'opération",
    "metric.type.val":         "Cession de parts",
    "metric.type.sub":         "Ou cession d'actifs selon structuration",
    "metric.licence":          "Agrément cible",
    "metric.licence.val":      "BCEAO / UMOA",
    "metric.licence.sub":      "Microfinance — ratios prudentiels",
    "metric.legal":            "Cadre juridique",
    "metric.legal.val":        "OHADA",
    "metric.legal.sub":        "Actes Uniformes — sûretés, sociétés",
    "metric.reg":              "Régulation applicable",
    "metric.reg.val":          "CEDEAO",
    "metric.reg.sub":          "Libre circulation des capitaux",
    "metric.conf":             "Confidentialité",
    "metric.conf.val":         "NDA signé",
    "metric.conf.sub":         "Accord de non-divulgation en vigueur",
    "metric.phases":           "Phases totales",
    "metric.phases.val":       "8 phases",
    "metric.phases.sub":       "De la lettre d'intention à l'intégration",

    /* Phase labels */
    "phase.a.title":           "Cadrage Stratégique",
    "phase.a.desc":            "Lettre d'intention rédigée et soumise ; NDA signé avec la direction cible.",
    "phase.b.title":           "Due Diligence",
    "phase.b.desc":            "Audit juridique OHADA, réglementaire BCEAO, fiscal et opérationnel en cours.",
    "phase.c.title":           "Offre d'Achat",
    "phase.c.desc":            "Offre exclusive de bonne foi à soumettre à la fin de l'audit.",
    "phase.d.title":           "Structuration",
    "phase.d.desc":            "Conception SPV/holding, pacte d'actionnaires et structure fiscalement optimisée.",
    "phase.e.title":           "Négociation",
    "phase.e.desc":            "Négociation du prix, clauses de garantie et rédaction du contrat final.",
    "phase.f.title":           "Autorisations",
    "phase.f.desc":            "Notifications BCEAO, Ministère des Finances et Commission Bancaire.",
    "phase.g.title":           "Finalisation",
    "phase.g.desc":            "Cession, inscription RCCM, modifications statutaires, publication au Journal Officiel.",
    "phase.h.title":           "Post-Acquisition",
    "phase.h.desc":            "Intégration opérationnelle, alignement RH, communication externe et conformité continue.",

    /* ── Regulation page ── */
    "reg.eyebrow":             "Cadre Légal Régional",
    "reg.eyebrow.regulated":   "Activités Encadrées",
    "reg.eyebrow.comparison":  "Vue Comparative",
    "reg.hero.title":          "Cadre",
    "reg.hero.em":             "Légal Régional",
    "reg.hero.desc":           "Une triple architecture réglementaire — UEMOA, CEDEAO et OHADA — que OMORAN-GROUPE maîtrise pour positionner ses activités en conformité totale.",
    "reg.title":               "Réglementation<br>UEMOA &amp; CEDEAO",
    "reg.subtitle":            "Une triple architecture réglementaire que OMORAN-GROUPE maîtrise pour positionner ses activités en conformité totale et saisir les opportunités librement accessibles.",
    "reg.deep.title":          "Comprendre la triple<br>architecture réglementaire",
    "reg.comp.title":          "UEMOA vs CEDEAO<br>Périmètre réglementaire",
    "reg.uemoa.sub":           "Union Économique &amp; Monétaire",
    "reg.ecowas.sub":          "Communauté Économique Régionale",
    "reg.ohada.sub":           "Droit des Affaires Unifié",
    "reg.u.badge":             "UEMOA — Union Monétaire",
    "reg.u.title":             "Activités encadrées par la BCEAO",
    "reg.u.intro":             "L'UEMOA encadre étroitement les activités financières dans ses 8 États membres via la BCEAO et les autorités régionales de marché.",
    "reg.u.1":                 "Banques, établissements financiers, microfinance (agrément obligatoire)",
    "reg.u.2":                 "Marchés financiers — BRVM, valeurs mobilières",
    "reg.u.3":                 "Systèmes de paiement et transferts électroniques",
    "reg.u.4":                 "Assurance et réassurance",
    "reg.u.5":                 "Harmonisation TVA et droits de douane",
    "reg.u.6":                 "Marchés publics, concessions, normes qualité",
    "reg.u.7":                 "Télécommunications, énergie, infrastructures",
    "reg.c.badge":             "CEDEAO — Communauté Économique",
    "reg.c.title":             "Activités régulées au niveau régional",
    "reg.c.intro":             "La CEDEAO régule les activités transfrontalières et l'intégration commerciale sur ses 15 États membres, en complément du cadre monétaire de l'UEMOA.",
    "reg.c.1":                 "Libre circulation des biens, services et capitaux (Protocole A/P1/1/03)",
    "reg.c.2":                 "Transport routier, maritime, aérien — normes sécurité",
    "reg.c.3":                 "Énergie : électricité, hydrocarbures, mines",
    "reg.c.4":                 "Harmonisation monétaire avec l'UEMOA",
    "reg.c.5":                 "Lutte anti-blanchiment et financement du terrorisme",
    "reg.c.6":                 "Télécommunications transfrontalières, cybersécurité",
    "reg.c.7":                 "Protection des données personnelles",

    /* Comparison table headers */
    "reg.comp.col1":           "Domaine",
    "reg.comp.col2":           "UEMOA (Union Monétaire)",
    "reg.comp.col3":           "CEDEAO (Communauté Économique)",
    "reg.comp.col4":           "Exposition OMORAN-GROUPE",

    /* Free activities */
    "free.eyebrow":            "Librement Accessibles",
    "free.title":              "Activités libres — Services Personnalisées",
    "free.title.footer":       "Activités Libres",
    "free.banner.desc":        "Ces activités délivrent une valeur maximale opérant librement sous le droit commercial national.",
    "free.1.title":            "Éducation Financière",
    "free.1.sub":              "Formations, ateliers jeunes, femmes, PME sur la culture financière",
    "free.2.title":            "Conseil en Gestion",
    "free.2.sub":              "Coaching financier, obligations comptables, accompagnement startups",
    "free.3.title":            "Technologies de Gestion",
    "free.3.sub":              "Solutions numériques de suivi, facturation, planification budgétaire",
    "free.4.title":            "Groupes d'Épargne",
    "free.4.sub":              "Sécurisation tontines, caisses solidaires, associations communautaires",
    "free.5.title":            "Études Économiques",
    "free.5.sub":              "Rapports, analyses de marché, veille sur politiques financières",
    "free.6.title":            "Domiciliation",
    "free.6.sub":              "Adresse légale, formalités RCCM, accompagnement administratif",



    /* ── Free Zone page ── */
    "zft.eyebrow":             "Avantage Compétitif",
    "zft.eyebrow.why":         "Avantage Compétitif",
    "zft.eyebrow.benefits":    "Avantages Clés",
    "zft.eyebrow.lome":        "Localisation Stratégique",
    "zft.eyebrow.process":     "Comment obtenir l'agrément",
    "zft.six.title":           "Six avantages stratégiques<br>du statut ZFT",
    "zft.hero.title.1":        "Zone Franche du Togo",
    "zft.hero.title.2":        "Votre Porte d'Entrée sécurisée en Afrique de l'Ouest",
    "zft.hero.desc.page":      "L'agrément ZFT — troisième pilier du plan de développement du GIE — ouvre un régime fiscal et douanier privilégié positionné au carrefour des flux CEDEAO.",
    "zft.stat1":               "Marchés CEDEAO",
    "zft.stat2":               "Exonérations fiscales",
    "zft.stat3":               "Phases de dépôt",
    "zft.stat4":               "Rapatriement bénéfices",
    "zft.why.title":           "Pourquoi la Zone Franche du Togo ?",
    "zft.why.desc":            "La ZFT positionne OMORAN-GROUPE au carrefour des flux commerciaux et financiers ouest-africains, avec un cadre légal OHADA sécurisé et des avantages compétitifs décisifs.",
    "zft.adv1.title":          "Exonérations Fiscales &amp; Douanières",
    "zft.adv1.sub":            "Avantages fiscaux et douaniers significatifs sur les opérations d'export",
    "zft.adv2.title":          "Libre Rapatriement des Capitaux",
    "zft.adv2.sub":            "Bénéfices et capitaux librement rapatriables sans restriction",
    "zft.adv3.title":          "Accès aux Marchés CEDEAO",
    "zft.adv3.sub":            "Porte d'entrée privilégiée vers les 15 États membres de la CEDEAO",
    "zft.adv4.title":          "Sécurité Juridique OHADA",
    "zft.adv4.sub":            "Droit des affaires clair et prévisible dans 17 États africains",
    "zft.adv5.title":          "Formalités Simplifiées",
    "zft.adv5.sub":            "Procédures administratives allégées dans le cadre du régime ZFT",
    "zft.adv6.title":          "Protection de l'Investissement",
    "zft.adv6.sub":            "Clauses de stabilisation et accès à l'arbitrage international",
    "zft.adv1.card.title":     "Exonérations Fiscales",
    "zft.adv1.card.desc":      "Congés fiscaux couvrant l'IS, la TVA sur les intrants et les droits de douane à l'export pour les activités éligibles dans la zone.",
    "zft.adv2.card.title":     "Libre Circulation des Capitaux",
    "zft.adv2.card.desc":      "Rapatriement sans restriction des bénéfices, dividendes, intérêts et capitaux, conforme aux protocoles CEDEAO.",
    "zft.adv3.card.title":     "Statut Hub CEDEAO",
    "zft.adv3.card.desc":      "La position de Lomé en tant que premier port en eau profonde d'Afrique de l'Ouest assure une connectivité directe vers les 15 marchés CEDEAO.",
    "zft.adv4.card.title":     "Cadre Juridique OHADA",
    "zft.adv4.card.desc":      "Droit des affaires clair et prévisible couvrant la création d'entreprise, l'insolvabilité, les contrats commerciaux et le règlement des litiges dans 17 États africains.",
    "zft.adv5.card.title":     "Procédures Simplifiées",
    "zft.adv5.card.desc":      "Procédures allégées, guichet unique et délais d'agrément réduits par rapport aux procédures nationales standard.",
    "zft.adv6.card.title":     "Protection de l'Investissement",
    "zft.adv6.card.desc":      "Garanties de protection des investissements, clauses de stabilisation et accès aux mécanismes d'arbitrage international.",
    "zft.lome.eyebrow":        "Localisation Stratégique",
    "zft.lome.title":          "Lomé — Capitale Financière d'Afrique de l'Ouest",
    "zft.lome.title.span":     "Capitale Financière d'Afrique de l'Ouest",
    "zft.lome.desc":           "Lomé est idéalement positionnée au cœur de l'espace CEDEAO, offrant un environnement stable, un port en eau profonde moderne et un écosystème de services financiers en forte croissance.",
    "zft.lome.f1":             "Seul port en eau profonde accessible 24h/24 sur la côte ouest-africaine",
    "zft.lome.f2":             "Zone franc CFA (BCEAO) — stabilité monétaire garantie",
    "zft.lome.f3":             "Accès direct aux marchés enclavés : Burkina Faso, Niger, Mali",
    "zft.lome.f4":             "Écosystème fintech en croissance et infrastructure de paiements digitaux",
    "zft.lome.f5":             "Infrastructures de qualité et approvisionnement énergétique fiable",
    "zft.proc.eyebrow":        "Comment obtenir l'agrément",
    "zft.proc.title":          "Processus d'Accréditation ZFT — 3 Phases",
    "zft.step1.title":         "Constitution du dossier complet",
    "zft.step1.sub":           "Statuts, plan d'affaires, justificatifs d'investissement et formulaires",
    "zft.step2.title":         "Paiement des droits &amp; dépôt officiel",
    "zft.step2.sub":           "Acquittement des droits réglementaires et soumission aux autorités compétentes",
    "zft.step3.title":         "Réception de l'agrément provisoire",
    "zft.step3.sub":           "Démarrage des activités sous régime ZFT dans l'attente de l'agrément définitif",

    /* ── News page ── */
    "news.eyebrow":            "Intelligence Financière Africaine",
    "news.eyebrow.latest":     "Dernières Mises à Jour",
    "news.hero.title":         "Intelligence Financière &amp; Juridique",
    "news.hero.em":            "Africaine",
    "news.title":              "Dernières Actualités &amp;<br>Intelligence de Marché",
    "news.subtitle":           "Sélection réglementaire, monétaire et stratégique issue de l'écosystème financier UEMOA, CEDEAO et continental.",
    "news.badge.featured":     "★ À la Une",
    "news.readmore":           "Lire l'analyse →",
    "news.filter.all":         "Tout",
    "news.filter.bceao":       "BCEAO",
    "news.filter.ecowas":      "CEDEAO",
    "news.filter.togo":        "Togo",
    "news.filter.markets":     "Marchés",
    "news.filter.reg":         "Réglementation",
    "news.cat.monetary":       "Politique Monétaire",
    "news.cat.togo":           "Zone Franche du Togo",
    "news.cat.markets":        "Marchés de Capitaux",
    "news.cat.digital":        "Finance Digitale",
    "news.cat.legal":          "Cadre Juridique",
    "news.cat.microfinance":   "Microfinance",
    "news.cat.investment":     "Investissement",
    "news.cat.integration":    "Intégration Régionale",
    "news.cat.infrastructure": "Infrastructure",
    "news.1.date":             "09 mai 2026",
    "news.1.title":            "La CEDEAO approuve le cadre de la monnaie digitale régionale",
    "news.1.excerpt":          "La Conférence des Chefs d'État de la CEDEAO a approuvé le cadre préliminaire pour une CBDC régionale, ouvrant la voie à une infrastructure de paiement unifiée dans les 15 États membres d'ici 2028.",
    "news.2.date":             "07 mai 2026",
    "news.2.title":            "La BCEAO maintient son taux directeur à 3,5%",
    "news.2.excerpt":          "Le Comité de Politique Monétaire maintient le taux inchangé, invoquant une inflation maîtrisée à 3,2% et des projections de croissance résilientes pour le T3 2026.",
    "news.3.date":             "05 mai 2026",
    "news.3.title":            "La Zone Franche du Togo affiche une croissance de 12% au T1",
    "news.3.excerpt":          "L'investissement direct étranger au sein de la ZFT a bondi de 12% au T1, porté par les secteurs fintech, logistique et agrobusiness.",
    "news.4.date":             "02 mai 2026",
    "news.4.title":            "L'intégration des marchés de capitaux ouest-africains s'accélère",
    "news.4.excerpt":          "La BRVM et la Bourse de Lagos annoncent un protocole d'interopérabilité historique permettant le trading transfrontalier de titres et des mécanismes de compensation unifiés.",
    "news.5.date":             "28 avr. 2026",
    "news.5.title":            "Le mobile money atteint 180 Mds$ dans l'espace CEDEAO en 2025",
    "news.5.excerpt":          "L'écosystème mobile money d'Afrique de l'Ouest a atteint un record de 180 Mds$ de transactions, le Togo affichant la plus forte croissance annuelle à 34%.",
    "news.6.date":             "22 avr. 2026",
    "news.6.title":            "L'OHADA lance une consultation sur la modernisation des Actes Uniformes",
    "news.6.excerpt":          "Le secrétariat de l'OHADA a lancé une consultation sur des amendements aux Actes Uniformes sur les Sociétés Commerciales, visant à simplifier les exigences de gouvernance.",
    "news.7.date":             "18 avr. 2026",
    "news.7.title":            "La BCEAO renforce le cadre d'agrément des institutions de microfinance",
    "news.7.excerpt":          "Une nouvelle circulaire BCEAO renforce les ratios prudentiels et les exigences de gouvernance pour les IMF agréées dans la zone UEMOA, effective au T3 2026.",
    "news.8.date":             "10 avr. 2026",
    "news.8.title":            "La BAD approuve un package infrastructure de 2,4 Mds$ pour la CEDEAO",
    "news.8.excerpt":          "La Banque Africaine de Développement a approuvé un financement de 2,4 Mds$ pour l'Afrique de l'Ouest, axé sur les corridors logistiques et la connectivité digitale.",
    "news.9.date":             "04 avr. 2026",
    "news.9.title":            "Le sommet CEDEAO avance la feuille de route de la monnaie commune",
    "news.9.excerpt":          "Les Chefs d'État ont entériné une feuille de route accélérée pour la monnaie ECO, avec une date cible révisée à 2030 et un accord sur l'harmonisation des critères de convergence.",
    "news.10.date":            "28 mar. 2026",
    "news.10.title":           "Le Port Autonome de Lomé inaugure son troisième terminal à conteneurs",
    "news.10.excerpt":         "Le Port Autonome de Lomé a inauguré son troisième terminal en eau profonde, portant la capacité à 3,5 millions d'EVP et consolidant la position de Lomé comme hub de référence.",

    /* Ticker */
    "ticker.bceao":            "Taux BCEAO",
    "ticker.zft":              "IDE ZFT T1",
    "ticker.ecowas":           "PIB CEDEAO",

    /* Newsletter */
    "newsletter.title":        "Restez Informé",
    "newsletter.desc":         "Abonnez-vous à la veille hebdomadaire d'intelligence financière africaine de OMORAN-GROUPE.",
    "newsletter.placeholder":  "votre@email.com",
    "newsletter.btn":          "S'abonner",
    "newsletter.success":      "Confirmé ✓",

    /* Contact */
    "contact.title":           "Construisons ensemble<br><em>la finance africaine de demain</em>",
    "contact.subtitle":        "OMORAN-GROUPE accueille investisseurs, partenaires institutionnels et entrepreneurs souhaitant s'inscrire dans une dynamique d'excellence financière en Afrique de l'Ouest.",
    "contact.cta1":            "Nous écrire",
    "contact.cta2":            "Voir nos projets",

    /* Footer */
    "footer.sub":              "Excellence Financière en Afrique de l'Ouest",
    "footer.desc":             "Groupement d'Intérêt Économique structuré autour de l'ingénierie financière, de l'acquisition d'actifs stratégiques et du développement de marchés dans l'espace UEMOA/CEDEAO, depuis Lomé, Togo.",
    "footer.services":         "Services",
    "footer.projects":         "Projets",
    "footer.pages":            "Pages",
    "footer.legal":            "Cadre Légal",
    "footer.ecowas":           "Réglementation CEDEAO",
    "footer.rights":           "Tous droits réservés",
    "footer.compliant":        "Conforme",
    "footer.copy.year":        "© 2025 OMORAN-GROUPE —",

    "esg.eyebrow": "Économie Verte &amp; Engagement ESG",
          "esg.intro.title": "Une finance qui bâtit une Afrique de l'Ouest <em>durable</em>",
          "esg.intro.desc": "OMORAN-GROUPE intègre les critères Environnementaux, Sociaux et de Gouvernance au cœur de chaque décision d'investissement. Notre cadre ESG aligne performance financière et impact positif — pour la région, ses communautés et les générations futures.",
          "esg.stat1": "Aligné sur les Objectifs de Développement Durable de l'ONU",
          "esg.stat2": "Screening ESG sur tous les projets d'investissement",
          "esg.stat3": "Piliers ESG : Environnement · Social · Gouvernance",
          "esg.stat4": "Gouvernance responsable sous droit unifié",
          "esg.tab.env": "🌿 Économie Verte",
          "esg.tab.soc": "🤝 Approche Sociale",
          "esg.tab.gov": "⚖️ Gouvernance ESG",
          "esg.env.eyebrow": "Pilier Environnemental",
          "esg.env.title": "Économie Verte &amp; Finance Climatique",
          "esg.env.desc": "GIE DYNAMIC oriente activement les capitaux vers des projets d'économie verte en Afrique de l'Ouest — énergies renouvelables, agriculture durable, infrastructures éco-responsables et instruments de marché carbone — en cohérence avec la Stratégie Climatique de la CEDEAO et l'Agenda 2063 de l'Union Africaine.",
          "esg.env.ind1": "Croissance des IDE verts dans la zone CEDEAO (2025)",
          "esg.env.ind2": "ODD couverts par notre cadre d'investissement",
          "esg.env.ind3": "Zone Franche comme point d'entrée hub vert",
          "esg.env.c1.title": "Finance des Énergies Renouvelables",
          "esg.env.c1.desc": "Structuration et intermédiation pour projets solaires, éoliens et hydroélectriques dans les États membres CEDEAO, mobilisant obligations vertes et fonds climatiques.",
          "esg.env.c2.title": "Agrobusiness Durable",
          "esg.env.c2.desc": "Ingénierie d'investissement pour l'agriculture régénérative, les chaînes de valeur agroforestières et les projets de sécurité alimentaire alignés sur les cadres agricoles CEDEAO.",
          "esg.env.c3.title": "Infrastructures Vertes",
          "esg.env.c3.desc": "Logistique éco-responsable, développement urbain bas carbone et infrastructures résilientes au climat, financés via des structures SPV et ZFT innovantes.",
          "esg.env.c4.title": "Économie Bleue &amp; Eau",
          "esg.env.c4.desc": "Ingénierie financière pour la gestion de l'eau, les ressources côtières et le développement de l'économie maritime le long du littoral du Golfe de Guinée.",
          "esg.soc.eyebrow": "Pilier Social",
          "esg.soc.title": "Approche Sociale &amp; Finance Inclusive",
          "esg.soc.desc": "Notre engagement social place le développement humain au centre des opérations financières. Via la microfinance, l'inclusion financière et les programmes communautaires, GIE DYNAMIC crée une richesse durable pour tous les segments de la société ouest-africaine.",
          "esg.soc.tl1.title": "Inclusion Financière via MUSED",
          "esg.soc.tl1.desc": "L'acquisition de la microfinance MUSED étend directement les services financiers réglementés aux populations sous-bancarisées de la zone UEMOA.",
          "esg.soc.tl2.title": "Entrepreneuriat Féminin &amp; Jeunesse",
          "esg.soc.tl2.desc": "Programmes dédiés d'éducation financière, coaching et structures d'accès au financement ciblant les entrepreneures et les entreprises portées par des jeunes.",
          "esg.soc.tl3.title": "Éducation Financière &amp; Renforcement des Capacités",
          "esg.soc.tl3.desc": "Ateliers, formations et services de conseil renforçant l'autonomie financière des communautés, PME et organisations coopératives en Afrique de l'Ouest.",
          "esg.soc.tl4.title": "Mobilisation des Investissements Diaspora",
          "esg.soc.tl4.desc": "Structuration de véhicules permettant aux capitaux de la diaspora de s'orienter efficacement vers des investissements productifs régionaux — reliant l'épargne mondiale aux besoins de développement locaux.",
          "esg.soc.k1": "Population atteignable via l'accès au marché CEDEAO",
          "esg.soc.k2": "Adultes non bancarisés en Afrique de l'Ouest — cible d'inclusion",
          "esg.soc.k3": "États UEMOA couverts par la stratégie d'inclusion",
          "esg.soc.k4": "Priorité : Petites &amp; Moyennes Entreprises",
          "esg.soc.p1.title": "Partenariats Responsables",
          "esg.soc.p1.desc": "Tous les accords de partenariat intègrent des clauses de responsabilité sociale alignées sur les normes fondamentales de l'OIT et les protocoles sociaux CEDEAO.",
          "esg.soc.p2.title": "Santé &amp; Bien-être Communautaire",
          "esg.soc.p2.desc": "Les projets d'investissement sont évalués sur leur contribution à la santé, l'éducation et le bien-être social des communautés d'accueil.",
          "esg.gov.eyebrow": "Pilier Gouvernance",
          "esg.gov.title": "Gouvernance ESG &amp; Investissement Responsable",
          "esg.gov.desc": "OMORAN-GROUPE applique des normes de gouvernance strictes dans toutes ses opérations — transparence, anti-corruption, conformité réglementaire et responsabilité à long terme constituent le fondement non négociable de chaque transaction que nous structurons.",
          "esg.gov.c1.title": "Conformité Réglementaire",
          "esg.gov.c1.desc": "Conformité totale aux cadres BCEAO, UEMOA, CEDEAO et OHADA. Chaque structure est pré-validée au regard de toutes les exigences réglementaires applicables.",
          "esg.gov.c1.p1": "Suivi des ratios prudentiels BCEAO",
          "esg.gov.c1.p2": "Screening conformité LBC/FT",
          "esg.gov.c1.p3": "Normes de gouvernance OHADA",
          "esg.gov.c1.p4": "Conformité transfrontalière CEDEAO",
          "esg.gov.c2.title": "Transparence &amp; Anti-Corruption",
          "esg.gov.c2.desc": "Opérations protégées par NDA avec divulgation obligatoire des bénéficiaires effectifs, politiques de conflits d'intérêts et exigences d'audit indépendant.",
          "esg.gov.c2.p1": "Transparence des bénéficiaires effectifs",
          "esg.gov.c2.p2": "Gestion des conflits d'intérêts",
          "esg.gov.c2.p3": "Exigences d'audit indépendant",
          "esg.gov.c2.p4": "Politique tolérance zéro anti-corruption",
          "esg.gov.c3.title": "Reporting ESG &amp; Impact",
          "esg.gov.c3.desc": "Mesure systématique de l'impact ESG avec reporting aligné sur les normes GRI et les lignes directrices de l'Initiative Finance Durable CEDEAO.",
          "esg.gov.c3.p1": "Reporting d'impact aligné GRI",
          "esg.gov.c3.p2": "Mesure de l'empreinte carbone",
          "esg.gov.c3.p3": "Retour social sur investissement (SROI)",
          "esg.gov.c3.p4": "Divulgation annuelle de performance ESG",
          "esg.prog.env": "Intégration Environnementale",
          "esg.prog.soc": "Score d'Impact Social",
          "esg.prog.gov": "Conformité Gouvernance",
          "esg.prog.esg": "Note ESG Globale",
          "esg.footer.link": "Économie Verte &amp; ESG"
  }
};

/* ═══════════════════════════════════════════════════════════════
   2.  MOTEUR i18n
═══════════════════════════════════════════════════════════════ */
let _lang = 'en';

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.tagName === 'TITLE') {
        el.textContent = dict[key].replace(/<[^>]+>/g, '');
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  /* Placeholders traduits */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  /* Title onglet */
  if (dict['meta.title']) document.title = dict['meta.title'];

  /* Attribut lang */
  document.documentElement.lang = lang;
}

function setLang(lang) {
  _lang = lang;
  applyTranslations(lang);
  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = lang === 'en' ? 'FR' : 'EN';
  try { localStorage.setItem('gie_lang', lang); } catch (_) {}
}

function toggleLang() { setLang(_lang === 'en' ? 'fr' : 'en'); }

/* Exposition globale */
window.toggleLang       = toggleLang;
window.setLang          = setLang;
window.GIE_TRANSLATIONS = TRANSLATIONS;

/* ═══════════════════════════════════════════════════════════════
   3.  SÉCURITÉ ADMIN — hash SHA-256 côté client
   Utilisé par admin.html pour vérifier le mot de passe
═══════════════════════════════════════════════════════════════ */

/**
 * Hache une chaîne avec SHA-256 (Web Crypto API).
 * @param {string} str — mot de passe en clair
 * @returns {Promise<string>} — hash hex
 */
async function hashPassword(str) {
  const buf  = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

/**
 * Vérifie un mot de passe contre un hash stocké.
 * @param {string} plain   — saisi par l'utilisateur
 * @param {string} stored  — hash enregistré
 * @returns {Promise<boolean>}
 */
async function verifyPassword(plain, stored) {
  return (await hashPassword(plain)) === stored;
}

window.hashPassword   = hashPassword;
window.verifyPassword = verifyPassword;

/* ═══════════════════════════════════════════════════════════════
   4.  FONCTIONS UI
═══════════════════════════════════════════════════════════════ */

/* Loader */
function initLoader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const l = document.getElementById('loader');
      if (l) l.classList.add('hide');
    }, 800);
  });
}

/* Nav scroll */
function initNavScroll() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  const check = () => nav.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', check, { passive: true });
  check();
}

/* Menu mobile */
function initMobileMenu() {
  const btn     = document.getElementById('hamburger');
  const menu    = document.getElementById('navMenu');
  const overlay = document.getElementById('navOverlay');
  if (!btn || !menu) return;

  const open = () => {
    btn.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  btn.addEventListener('click', () => menu.classList.contains('open') ? close() : open());
  if (overlay) overlay.addEventListener('click', close);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  let tx = 0;
  menu.addEventListener('touchstart', e => { tx = e.changedTouches[0].screenX; }, { passive: true });
  menu.addEventListener('touchend',   e => { if (tx - e.changedTouches[0].screenX > 60) close(); }, { passive: true });
}

/* Lien actif */
function initActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop().split('#')[0];
    a.classList.toggle('active', href === page || (page === '' && href === 'index.html'));
  });
}

/* Scroll reveal */
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => el.classList.add('up'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('up'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
}

/* Smooth scroll */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
      }
    });
  });
}

/* Filtres actualités */
function initNewsFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

/* Newsletter */
function initNewsletter() {
  const form = document.querySelector('.newsletter-form, .nl-form');
  if (!form) return;
  const btn   = form.querySelector('[class*="newsletter-btn"],[class*="nl-btn"]');
  const input = form.querySelector('input[type="email"]');
  if (!btn || !input) return;
  btn.addEventListener('click', () => {
    if (!input.value.includes('@')) {
      input.style.borderColor = 'rgba(201,168,76,.6)';
      input.focus();
      return;
    }
    input.style.borderColor = '';
    const successKey = 'newsletter.success';
    btn.textContent = (TRANSLATIONS[_lang] && TRANSLATIONS[_lang][successKey])
      ? TRANSLATIONS[_lang][successKey]
      : (_lang === 'fr' ? 'Confirmé ✓' : 'Subscribed ✓');
    btn.style.background = '#1a8c7a';
    btn.disabled = true;
    input.value = '';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // === 1. Compteurs animés (Intersection Observer) ===
  const counters = document.querySelectorAll('.stat-num[data-value]');
  
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-value'), 10);
    if (isNaN(target)) return;
    
    const duration = 1500; // ms
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.ceil(current);
      }
    }, stepTime);
  };
  document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.stats-scroll-track');
    if (!track) return;

    // Duplique les enfants pour avoir un cycle continu
    const items = Array.from(track.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  });
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // ne lancer qu'une fois
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // === 2. Apparition "reveal-right" au scroll ===
  const revealElements = document.querySelectorAll('.reveal-right');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => revealObserver.observe(el));
});

/* Réduction de mouvement */
function initReducedMotion() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => el.classList.add('up'));
    document.documentElement.style.scrollBehavior = 'auto';
  }
}


/* ══════════════════════════════════════
         LOGIQUE ESG — Tabs + Progress bars
      ══════════════════════════════════════ */

      /* Switcheur d'onglets ESG */
      function switchEsgTab(tab) {
        /* Désactiver tous */
        document.querySelectorAll('.esg-tab').forEach(t => {
          t.classList.remove('active', 'active-env', 'active-soc', 'active-gov');
        });
        document.querySelectorAll('.esg-panel').forEach(p => p.classList.remove('active'));

        /* Activer l'onglet sélectionné */
        const btn = document.getElementById('tab-' + tab);
        const panel = document.getElementById('panel-' + tab);
        if (btn) btn.classList.add('active', 'active-' + tab);
        if (panel) panel.classList.add('active');
      }

      /* Animation des barres de progression au scroll */
      (function initProgressBars() {
        const band = document.getElementById('esgProgressBand');
        if (!band) return;

        const obs = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              band.querySelectorAll('.esg-progress-bar').forEach((bar, i) => {
                setTimeout(() => bar.classList.add('animated'), i * 150);
              });
              obs.unobserve(band);
            }
          });
        }, { threshold: 0.3 });

        obs.observe(band);
      })();

/* ═══════════════════════════════════════════════════════════════
   5.  BOOT
═══════════════════════════════════════════════════════════════ */
function boot() {
  initLoader();
  initNavScroll();
  initMobileMenu();
  initReveal();
  initActiveNav();
  initSmoothScroll();
  initNewsFilter();
  initNewsletter();
  initReducedMotion();

  let saved = null;
  try { saved = localStorage.getItem('gie_lang'); } catch (_) {}
  const pref = saved || (navigator.language || '').slice(0, 2).toLowerCase();
  setLang(pref === 'fr' ? 'fr' : 'en');
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', boot)
  : boot();
