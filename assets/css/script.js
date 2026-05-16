/* ═══════════════════════════════════════════════════════════════════════════
   GIE DYNAMIC — script.js v3.0
   Dictionnaire i18n EN+FR · Loader · Navigation · Scroll Reveal
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. DICTIONNAIRE DE TRADUCTIONS ── */
const TRANSLATIONS = {
  en: {
    /* Navigation */
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.regulation': 'Regulation',
    'nav.zft': 'Free Zone',
    'nav.news': 'News',
    'nav.contact': 'Contact us',
    'nav.sub': 'Excellence · Finance · West Africa',

    /* Loader */
    'loader.text': 'GIE Dynamic',

    /* Hero — Page d'accueil */
    'meta.title': 'GIE DYNAMIC — Financial Excellence in West Africa',
    'hero.badge': 'UEMOA · ECOWAS · Togo Free Zone',
    'hero.title': 'Financial & Legal African Hub',
    'hero.subtitle': 'Serving the International',
    'hero.desc': 'GIE DYNAMIC accompanies businesses and investors in their development across West Africa — advisory, financial engineering, acquisition and regulatory compliance.',
    'hero.cta1': 'Discover our services',
    'hero.cta2': 'Our projects',

    /* Vision cards */
    'vision.title1': 'Vision',
    'vision.text1': 'To become the leading financial engineering and strategic investment hub in West Africa, bridging international capital with regional opportunities.',
    'vision.title2': 'Values',
    'vision.text2': 'Excellence, Integrity, Confidentiality, Regulatory Rigor, and Long-term Partnership — the pillars guiding every operation we undertake.',
    'vision.title3': 'Objectives',
    'vision.text3': 'Strategic asset acquisition, GIE structuring, ZFT integration, and building a sovereign-grade financial ecosystem across the UEMOA/ECOWAS space.',

    /* Key figures strip */
    'strip.bceao': 'Reference Regulation',
    'strip.ohada': 'Unified Legal Framework',
    'strip.zft': 'Togo Free Zone',
    'strip.nda': 'Guaranteed Confidentiality',
    'strip.spv': 'Optimized Legal Structuring',

    /* Second hero section */
    'hero.title1': 'Structure.',
    'hero.title2': 'Invest.',
    'hero.title3': 'Prosper.',
    'hero.description2': 'GIE DYNAMIC leads strategic investment projects across West Africa — financial engineering, institutional acquisitions, and market development in full compliance with BCEAO, OHADA, and ECOWAS regulatory frameworks.',
    'hero.btnProjects': 'View Our Projects',
    'hero.btnServices': 'Our Expertise',
    'hero.regionTag': 'Regional Presence',
    'hero.regionTitle': 'Our Reach',
    'hero.uemoaStates': 'WAEMU Member States',
    'hero.uemoaSub': 'Economic and Monetary Union',
    'hero.ecowasStates': 'ECOWAS Member States',
    'hero.ecowasSub': 'Regional Economic Community',
    'hero.expertise': 'Areas of Expertise',
    'hero.expertiseSub': 'Finance · Law · Technology',
    'hero.phases': 'Development Phases',
    'hero.phasesSub': 'Acquisition · EIG · TFZ',

    /* Contact */
    'contact.title': 'Let\'s build together the African finance of tomorrow',
    'contact.subtitle': 'GIE DYNAMIC welcomes investors, institutional partners and entrepreneurs seeking to join a dynamic of financial excellence in West Africa.',
    'contact.cta1': 'Write to us',
    'contact.cta2': 'View our projects',

    /* Footer */
    'footer.sub': 'Financial Excellence in West Africa',
    'footer.desc': 'Economic Interest Grouping structured around financial engineering, strategic asset acquisition and market development in the UEMOA/ECOWAS space, from Lomé, Togo.',
    'footer.services': 'Services',
    'footer.projects': 'Projects',
    'footer.legal': 'Legal Framework',
    'footer.rights': 'All rights reserved',
    'footer.compliant': 'Compliant',

    /* Services */
    'svc.1.title': 'Financial Intermediation',
    'svc.1.desc': 'Connecting investors and project owners, structuring flows and facilitating transactions across the UEMOA/ECOWAS regional space.',
    'svc.2.title': 'Financial Engineering',
    'svc.2.desc': 'Design and execution of complex financial structures — holding companies, SPVs, shareholders\' agreements — optimised for West Africa.',
    'svc.3.title': 'Legal Engineering',
    'svc.3.desc': 'Comprehensive legal structuring for national and cross-border operations under OHADA, UEMOA and national legal frameworks.',
    'svc.4.title': 'Fundraising',
    'svc.4.desc': 'End-to-end capital mobilisation from public and private sources, investment-grade documentation and negotiations with regional institutions.',
    'svc.5.title': 'Sovereign Asset Management',
    'svc.5.desc': 'Strategic advisory and portfolio management for public and sovereign financial assets, aligned with BCEAO prudential requirements.',
    'svc.6.title': 'Project Design',
    'svc.6.desc': 'From concept to delivery — feasibility studies, technical structuring and operational support for projects across West Africa.',
    'svc.7.title': 'Company Domiciliation',
    'svc.7.desc': 'Full domiciliation services in Togo — legal address, RCCM registration, administrative support and regulatory liaison.',

    /* Projects */
    'proj.1.title': 'MUSED Acquisition',
    'proj.1.desc': 'Strategic entry into the regulated microfinance market through the acquisition of a BCEAO-licensed institution.',
    'proj.2.title': 'GIE DYNAMIC Constitution',
    'proj.2.desc': 'Structuring of the Economic Interest Grouping under OHADA law — business plan, partner integration and legal formalities.',
    'proj.3.title': 'Togo Free Zone Licence',
    'proj.3.desc': 'ZFT file preparation, regulatory fee payment and obtaining the provisional licence unlocking fiscal and customs benefits.',

    /* Regulation */
    'reg.uemoa.title': 'UEMOA — Monetary Union',
    'reg.uemoa.desc': 'The West African Economic and Monetary Union governs financial activities across 8 member states through the BCEAO.',
    'reg.ecowas.title': 'ECOWAS — Economic Community',
    'reg.ecowas.desc': 'The Economic Community of West African States governs cross-border activities and trade integration across 15 member states.',
    'reg.ohada.title': 'OHADA — Unified Business Law',
    'reg.ohada.desc': 'Clear, predictable business law covering company formation, insolvency, commercial contracts and dispute resolution.',
    'reg.comparison.title': 'UEMOA vs ECOWAS Regulatory Scope',
    'reg.free.title': 'Free Activities — No Licence Required',
    'reg.free.desc': 'These activities deliver maximum value operating freely under national commercial law.',
    'reg.vigilance.title': 'Vigilance Points',
    'reg.vigilance.desc': 'Our team ensures continuous compliance with regulatory obligations at national, UEMOA and ECOWAS levels.',

    /* Free Zone */
    'zft.hero.title': 'Togo Free Zone — Your Gateway to West Africa',
    'zft.hero.desc': 'The TFZ licence opens a privileged fiscal and customs regime positioned at the crossroads of ECOWAS flows.',
    'zft.why.title': 'Why the Togo Free Zone?',
    'zft.why.desc': 'The Togo Free Zone positions GIE DYNAMIC at the crossroads of West African commercial and financial flows.',
    'zft.adv.title': 'Six Strategic Advantages of TFZ Status',
    'zft.lome.title': 'Lomé — West Africa\'s Financial Capital',
    'zft.process.title': 'TFZ Accreditation Process — 3 Phases',
    'zft.cta': 'Ready to join the Togo Free Zone?',

    /* News */
    'news.hero.title': 'African Financial Intelligence',
    'news.hero.desc': 'Curated regulatory, monetary and strategic updates from the UEMOA, ECOWAS and continental financial ecosystem.',
    'news.featured.badge': 'Featured',
    'news.featured.title': 'ECOWAS Greenlights Regional Digital Currency Framework',
    'news.featured.date': '09 May 2026',
    'news.featured.excerpt': 'The ECOWAS Authority of Heads of State has approved the preliminary framework for a regional central bank digital currency (CBDC), paving the way for unified digital payment infrastructure across all 15 member states by 2028.',
    'news.filter.all': 'All',
    'news.filter.bceao': 'BCEAO',
    'news.filter.ecowas': 'ECOWAS',
    'news.filter.togo': 'Togo',
    'news.filter.markets': 'Markets',
    'news.filter.regulation': 'Regulation',
    'news.latest.title': 'Recent News & Market Intelligence',
    'news.newsletter.title': 'Stay Informed',
    'news.newsletter.desc': 'Subscribe to GIE DYNAMIC\'s weekly West Africa Financial Intelligence briefing.',
    'news.newsletter.placeholder': 'your@email.com',
    'news.newsletter.btn': 'Subscribe',

    /* Generic / CTA */
    'cta.contact': 'Contact us today',
    'cta.start': 'Start the process',
    'cta.getintouch': 'Get in touch',
    'cta.discover': 'Discover',
    'readmore': 'Read analysis →',
    'breadcrumb.home': 'Home',

    /* Free activities */
    'free.1.title': 'Financial Education',
    'free.1.desc': 'Training, workshops, youth, women and SME financial literacy programmes',
    'free.2.title': 'Management Advisory',
    'free.2.desc': 'Financial coaching, accounting obligations, startup and SME support',
    'free.3.title': 'Management Technologies',
    'free.3.desc': 'Digital tracking, invoicing and budgeting software solutions',
    'free.4.title': 'Savings Groups',
    'free.4.desc': 'Securing tontines, solidarity funds and community associations',
    'free.5.title': 'Economic Studies',
    'free.5.desc': 'Reports, market analysis, financial policy monitoring and research',
    'free.6.title': 'Company Domiciliation',
    'free.6.desc': 'Legal address, RCCM formalities and administrative support',

    /* Vigilance */
    'vig.1.title': 'Double Regulation',
    'vig.1.desc': 'Some activities are regulated simultaneously by UEMOA and ECOWAS. A prior analysis is systematically conducted.',
    'vig.2.title': 'Mandatory Compliance',
    'vig.2.desc': 'Companies must respect community texts in addition to Togolese national laws.',
    'vig.3.title': 'Applicable Sanctions',
    'vig.3.desc': 'Non-compliance may lead to licence withdrawal, significant fines or prohibition from operating.',
  },

  fr: {
    /* Navigation */
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.regulation': 'Réglementation',
    'nav.zft': 'Zone Franche',
    'nav.news': 'Actualités',
    'nav.contact': 'Nous contacter',
    'nav.sub': 'Excellence · Finance · Afrique de l\'Ouest',

    /* Loader */
    'loader.text': 'GIE Dynamic',

    /* Hero */
    'meta.title': 'GIE DYNAMIC — Excellence Financière en Afrique de l\'Ouest',
    'hero.badge': 'UEMOA · CEDEAO · Zone Franche du Togo',
    'hero.title': 'Hub Financier & Juridique Africain',
    'hero.subtitle': 'Au service de l\'International',
    'hero.desc': 'GIE DYNAMIC accompagne les entreprises et les investisseurs dans leur développement à travers l\'Afrique de l\'Ouest — conseil, ingénierie financière, acquisition et conformité réglementaire.',
    'hero.cta1': 'Découvrir nos services',
    'hero.cta2': 'Nos projets',

    /* Vision */
    'vision.title1': 'Vision',
    'vision.text1': 'Devenir le principal hub d\'ingénierie financière et d\'investissement stratégique en Afrique de l\'Ouest, reliant les capitaux internationaux aux opportunités régionales.',
    'vision.title2': 'Valeurs',
    'vision.text2': 'Excellence, Intégrité, Confidentialité, Rigueur Réglementaire, et Partenariat à Long Terme — les piliers qui guident chaque opération.',
    'vision.title3': 'Objectifs',
    'vision.text3': 'Acquisition d\'actifs stratégiques, structuration du GIE, intégration ZFT, et construction d\'un écosystème financier souverain dans l\'espace UEMOA/CEDEAO.',

    /* Strip */
    'strip.bceao': 'Réglementation de Référence',
    'strip.ohada': 'Cadre Juridique Unifié',
    'strip.zft': 'Zone Franche du Togo',
    'strip.nda': 'Confidentialité Garantie',
    'strip.spv': 'Structuration Juridique Optimisée',

    /* Second hero */
    'hero.title1': 'Structurer.',
    'hero.title2': 'Investir.',
    'hero.title3': 'Prospérer.',
    'hero.description2': 'GIE DYNAMIC pilote des projets d\'investissement stratégique à travers l\'Afrique de l\'Ouest — ingénierie financière, acquisitions institutionnelles et développement de marchés en pleine conformité avec les cadres réglementaires BCEAO, OHADA et CEDEAO.',
    'hero.btnProjects': 'Voir Nos Projets',
    'hero.btnServices': 'Notre Expertise',
    'hero.regionTag': 'Présence Régionale',
    'hero.regionTitle': 'Notre Rayonnement',
    'hero.uemoaStates': 'États Membres de l\'UEMOA',
    'hero.uemoaSub': 'Union Économique et Monétaire',
    'hero.ecowasStates': 'États Membres de la CEDEAO',
    'hero.ecowasSub': 'Communauté Économique Régionale',
    'hero.expertise': 'Domaines d\'Expertise',
    'hero.expertiseSub': 'Finance · Droit · Technologie',
    'hero.phases': 'Phases de Développement',
    'hero.phasesSub': 'Acquisition · GIE · ZFT',

    /* Contact */
    'contact.title': 'Construisons ensemble la finance africaine de demain',
    'contact.subtitle': 'GIE DYNAMIC accueille les investisseurs, partenaires institutionnels et entrepreneurs souhaitant rejoindre une dynamique d\'excellence financière en Afrique de l\'Ouest.',
    'contact.cta1': 'Écrivez-nous',
    'contact.cta2': 'Voir nos projets',

    /* Footer */
    'footer.sub': 'Excellence Financière en Afrique de l\'Ouest',
    'footer.desc': 'Groupement d\'Intérêt Économique structuré autour de l\'ingénierie financière, de l\'acquisition d\'actifs stratégiques et du développement de marchés dans l\'espace UEMOA/CEDEAO, depuis Lomé, Togo.',
    'footer.services': 'Services',
    'footer.projects': 'Projets',
    'footer.legal': 'Cadre Juridique',
    'footer.rights': 'Tous droits réservés',
    'footer.compliant': 'Conforme',

    /* Services */
    'svc.1.title': 'Intermédiation Financière',
    'svc.1.desc': 'Mise en relation entre investisseurs et porteurs de projets, structuration des flux et facilitation des transactions dans l\'espace régional UEMOA/CEDEAO.',
    'svc.2.title': 'Ingénierie Financière',
    'svc.2.desc': 'Conception et exécution de montages financiers complexes — holdings, SPV, pactes d\'actionnaires — optimisés pour l\'Afrique de l\'Ouest.',
    'svc.3.title': 'Ingénierie Juridique',
    'svc.3.desc': 'Structuration juridique complète pour les opérations nationales et transfrontalières sous les cadres OHADA, UEMOA et droit national.',
    'svc.4.title': 'Levée de Fonds',
    'svc.4.desc': 'Mobilisation de capitaux de bout en bout — sources publiques et privées, documentation investment-grade et négociations avec les institutions régionales.',
    'svc.5.title': 'Gestion d\'Actifs Souverains',
    'svc.5.desc': 'Conseil stratégique et gestion de portefeuille pour les actifs financiers publics et souverains, alignés sur les exigences prudentielles de la BCEAO.',
    'svc.6.title': 'Conception de Projets',
    'svc.6.desc': 'De la conception à la livraison — études de faisabilité, structuration technique et support opérationnel pour les projets en Afrique de l\'Ouest.',
    'svc.7.title': 'Domiciliation d\'Entreprise',
    'svc.7.desc': 'Services complets de domiciliation au Togo — adresse légale, immatriculation RCCM, support administratif et liaison réglementaire.',

    /* Projects */
    'proj.1.title': 'Acquisition de MUSED',
    'proj.1.desc': 'Entrée stratégique sur le marché réglementé de la microfinance via l\'acquisition d\'une institution agréée par la BCEAO.',
    'proj.2.title': 'Constitution du GIE DYNAMIC',
    'proj.2.desc': 'Structuration du Groupement d\'Intérêt Économique sous le droit OHADA — business plan, intégration des partenaires et formalités légales.',
    'proj.3.title': 'Licence Zone Franche du Togo',
    'proj.3.desc': 'Préparation du dossier ZFT, paiement des frais réglementaires et obtention de l\'agrément provisoire débloquant les avantages fiscaux et douaniers.',

    /* Regulation */
    'reg.uemoa.title': 'UEMOA — Union Monétaire',
    'reg.uemoa.desc': 'L\'Union Économique et Monétaire Ouest Africaine réglemente les activités financières à travers 8 États membres via la BCEAO.',
    'reg.ecowas.title': 'CEDEAO — Communauté Économique',
    'reg.ecowas.desc': 'La Communauté Économique des États de l\'Afrique de l\'Ouest régule les activités transfrontalières et l\'intégration commerciale sur 15 États.',
    'reg.ohada.title': 'OHADA — Droit Uniforme des Affaires',
    'reg.ohada.desc': 'Un droit des affaires clair et prévisible couvrant la formation des sociétés, l\'insolvabilité, les contrats commerciaux et le règlement des litiges.',
    'reg.comparison.title': 'Portée Réglementaire UEMOA vs CEDEAO',
    'reg.free.title': 'Activités Libres — Sans Licence Requise',
    'reg.free.desc': 'Ces activités délivrent une valeur maximale en opérant librement sous le droit commercial national.',
    'reg.vigilance.title': 'Points de Vigilance',
    'reg.vigilance.desc': 'Notre équipe assure une conformité continue avec les obligations réglementaires aux niveaux national, UEMOA et CEDEAO.',

    /* Free Zone */
    'zft.hero.title': 'Zone Franche du Togo — Votre Porte sur l\'Afrique de l\'Ouest',
    'zft.hero.desc': 'La licence ZFT ouvre un régime fiscal et douanier privilégié positionné au carrefour des flux CEDEAO.',
    'zft.why.title': 'Pourquoi la Zone Franche du Togo ?',
    'zft.why.desc': 'La Zone Franche du Togo positionne GIE DYNAMIC au carrefour des flux commerciaux et financiers ouest-africains.',
    'zft.adv.title': 'Six Avantages Stratégiques du Statut ZFT',
    'zft.lome.title': 'Lomé — Capitale Financière de l\'Afrique de l\'Ouest',
    'zft.process.title': 'Processus d\'Agrémentation ZFT — 3 Phases',
    'zft.cta': 'Prêt à rejoindre la Zone Franche du Togo ?',

    /* News */
    'news.hero.title': 'Intelligence Financière Africaine',
    'news.hero.desc': 'Actualités réglementaires, monétaires et stratégiques sélectionnées de l\'UEMOA, de la CEDEAO et de l\'écosystème financier continental.',
    'news.featured.badge': 'À la Une',
    'news.featured.title': 'La CEDEAO Approuve le Cadre de Monnaie Digitale Régionale',
    'news.featured.date': '09 mai 2026',
    'news.featured.excerpt': 'La Conférence des Chefs d\'État de la CEDEAO a approuvé le cadre préliminaire pour une monnaie digitale de banque centrale régionale (CBDC), ouvrant la voie à une infrastructure de paiement digitale unifiée dans les 15 États membres d\'ici 2028.',
    'news.filter.all': 'Tout',
    'news.filter.bceao': 'BCEAO',
    'news.filter.ecowas': 'CEDEAO',
    'news.filter.togo': 'Togo',
    'news.filter.markets': 'Marchés',
    'news.filter.regulation': 'Réglementation',
    'news.latest.title': 'Actualités Récentes & Intelligence de Marché',
    'news.newsletter.title': 'Restez Informé',
    'news.newsletter.desc': 'Abonnez-vous à la lettre d\'information hebdomadaire West Africa Financial Intelligence de GIE DYNAMIC.',
    'news.newsletter.placeholder': 'votre@email.com',
    'news.newsletter.btn': 'S\'abonner',

    /* Generic / CTA */
    'cta.contact': 'Contactez-nous',
    'cta.start': 'Démarrer la démarche',
    'cta.getintouch': 'Prendre contact',
    'cta.discover': 'Découvrir',
    'readmore': 'Lire l\'analyse →',
    'breadcrumb.home': 'Accueil',

    /* Free activities */
    'free.1.title': 'Éducation Financière',
    'free.1.desc': 'Formations, ateliers, programmes d\'alphabétisation financière pour les jeunes, femmes et PME',
    'free.2.title': 'Conseil en Gestion',
    'free.2.desc': 'Accompagnement financier, obligations comptables, support aux startups et PME',
    'free.3.title': 'Technologies de Gestion',
    'free.3.desc': 'Solutions logicielles de suivi digital, facturation et budgétisation',
    'free.4.title': 'Groupes d\'Épargne',
    'free.4.desc': 'Sécurisation des tontines, fonds de solidarité et associations communautaires',
    'free.5.title': 'Études Économiques',
    'free.5.desc': 'Rapports, analyses de marché, veille politique financière et recherche',
    'free.6.title': 'Domiciliation d\'Entreprise',
    'free.6.desc': 'Adresse légale, formalités RCCM et support administratif',

    /* Vigilance */
    'vig.1.title': 'Double Réglementation',
    'vig.1.desc': 'Certaines activités sont réglementées simultanément par l\'UEMOA et la CEDEAO. Une analyse préalable est systématiquement menée.',
    'vig.2.title': 'Conformité Obligatoire',
    'vig.2.desc': 'Les entreprises doivent respecter les textes communautaires en plus du droit national togolais.',
    'vig.3.title': 'Sanctions Applicables',
    'vig.3.desc': 'Le non-respect peut entraîner le retrait d\'agrément, des amendes significatives ou l\'interdiction d\'opérer.',
  }
};

/* ── 2. MAP DES IMAGES CONFIGURABLES ── */
const GIE_IMAGES = {
  'hero.bg':        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=60',
  'svc.img.1':      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=75',
  'svc.img.2':      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=75',
  'svc.img.3':      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=700&q=75',
  'svc.img.4':      'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=700&q=75',
  'svc.img.5':      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=700&q=75',
  'svc.img.6':      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=75',
  'svc.img.7':      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=700&q=75',
  'proj.hero':      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1920&q=60',
  'proj.1.img':     'https://images.unsplash.com/photo-1579621970563-eefeb7560ff3e?auto=format&fit=crop&w=1920&q=70',
  'reg.body.uemoa': 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=700&q=70',
  'reg.body.ecowas':'https://images.unsplash.com/photo-1519181245277-cffeb31da948?auto=format&fit=crop&w=700&q=70',
  'zft.why.main':   'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=70',
  'zft.why.inset':  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=70',
  'news.featured':  'https://images.unsplash.com/photo-1518546305927-5a3bbff3565d?auto=format&fit=crop&w=1920&q=70',
};

/* ═══════════════════════════════════════════════════════════════════════════
   3. MOTEUR i18n
   ═══════════════════════════════════════════════════════════════════════════ */

let currentLang = localStorage.getItem('gie_lang') || 'en';

function applyTranslations() {
  const dict = TRANSLATIONS[currentLang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'TITLE') {
        document.title = dict[key];
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.hasAttribute('placeholder')) {
          el.placeholder = dict[key];
        } else {
          el.value = dict[key];
        }
      } else {
        el.textContent = dict[key];
      }
    }
  });

  /* Mise à jour du bouton de langue */
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'en' ? 'FR' : 'EN';
  }

  /* Direction HTML */
  document.documentElement.lang = currentLang;
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  localStorage.setItem('gie_lang', currentLang);
  applyTranslations();
}

/* ═══════════════════════════════════════════════════════════════════════════
   4. LOADER
   ═══════════════════════════════════════════════════════════════════════════ */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity .6s ease';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 600);
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   5. NAVIGATION MOBILE
   ═══════════════════════════════════════════════════════════════════════════ */
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');
  const navOverlay= document.getElementById('navOverlay');
  if (!hamburger || !navMenu) return;

  function openNav() {
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('open');
    if (navOverlay) navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    navMenu.classList.contains('open') ? closeNav() : openNav();
  });
  if (navOverlay) navOverlay.addEventListener('click', closeNav);

  /* Fermeture au clic sur un lien (ancres internes) */
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (link.getAttribute('href')?.startsWith('#')) closeNav();
    });
  });

  /* Navbar scroll effect */
  const nav = document.getElementById('main-nav');
  if (nav) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      lastScroll = y;
    }, { passive: true });
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   6. SCROLL REVEAL (IntersectionObserver)
   ═══════════════════════════════════════════════════════════════════════════ */
function initReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up, .reveal-down').forEach(el => {
    observer.observe(el);
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   7. SMOOTH SCROLL POUR ANCRES
   ═══════════════════════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('main-nav')?.offsetHeight || 0;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - navHeight - 20,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   8. NEWSLETTER (démo — empêche le rechargement)
   ═══════════════════════════════════════════════════════════════════════════ */
function initNewsletter() {
  document.querySelectorAll('.newsletter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const input = btn.parentElement?.querySelector('input[type="email"]');
      if (input && input.value) {
        btn.textContent = currentLang === 'en' ? 'Subscribed ✓' : 'Abonné ✓';
        btn.style.background = 'var(--teal, #1a8c7a)';
        input.value = '';
        setTimeout(() => {
          btn.textContent = currentLang === 'en' ? 'Subscribe' : 'S\'abonner';
          btn.style.background = '';
        }, 2500);
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   9. INITIALISATION GLOBALE
   ═══════════════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  initLoader();
  initNav();
  initReveal();
  initSmoothScroll();
  initNewsletter();
});

/* Exports pour l'admin back-office */
if (typeof window !== 'undefined') {
  window.TRANSLATIONS = TRANSLATIONS;
  window.GIE_IMAGES   = GIE_IMAGES;
  window.toggleLang   = toggleLang;
}