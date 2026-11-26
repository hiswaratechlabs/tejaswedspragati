export type Language = 'en' | 'mr';
export type ChapterId = 'patrika' | 'scratch' | 'events' | 'heritage' | 'gallery' | 'venue' | 'rsvp';

export interface DressSwatch {
  nameEn: string;
  nameMr: string;
  hex: string;
}

export interface CeremonyEvent {
  id: 'mehendi' | 'haldi' | 'wedding';
  dayNumber: string;
  nameEn: string;
  nameMr: string;
  subtitleEn: string;
  subtitleMr: string;
  dateEn: string;
  dateMr: string;
  timeEn: string;
  timeMr: string;
  venueEn: string;
  venueMr: string;
  addressEn: string;
  addressMr: string;
  mapQuery: string;
  descriptionEn: string;
  descriptionMr: string;
  dressCodeEn: string;
  dressCodeMr: string;
  swatches: DressSwatch[];
  accentHex: string;
  tintBg: string;
  startIso: string;
  endIso: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  fallbackSrc: string;
  category: 'proposal' | 'garden' | 'portrait';
  orientation: 'portrait' | 'landscape';
  captionEn: string;
  captionMr: string;
  locationNoteEn: string;
  locationNoteMr: string;
}

export interface HeritageMotif {
  id: 'ganesha' | 'paithani' | 'halad' | 'antarpat' | 'saptapadi' | 'akshata';
  titleEn: string;
  titleMr: string;
  sanskritLine: string;
  shortTagEn: string;
  shortTagMr: string;
  storyEn: string;
  storyMr: string;
  roleInWeddingEn: string;
  roleInWeddingMr: string;
}

export interface TravelHub {
  id: string;
  cityEn: string;
  cityMr: string;
  type: 'rail' | 'road';
  distanceKm: number;
  durationEn: string;
  durationMr: string;
  routeNoteEn: string;
  routeNoteMr: string;
}

export interface BlessingEntry {
  id: string;
  name: string;
  relationOrCity?: string;
  events: string[];
  guests: number;
  message: string;
  sealEmoji?: string;
  timestamp: string;
  isSeeded?: boolean;
}

export const WEDDING_TARGET_ISO = '2026-12-12T12:20:00+05:30';
export const SPOTIFY_PLAYLIST_URL =
  'https://open.spotify.com/embed/playlist/12SWrJQsL67S0R2WQplWxU?utm_source=generator&theme=0';

export const FAMILY_PROFILE: {
  coupleEn: string;
  coupleMr: string;
  firstPersonEn: string;
  secondPersonEn: string;
  firstPersonMr: string;
  secondPersonMr: string;
  hashtag: string;
  editionLabelEn: string;
  editionLabelMr: string;
  hostsFullEn: string;
  hostsFullMr: string;
  hostsShortEn: string;
  hostsShortMr: string;
  groomLineEn: string;
  groomLineMr: string;
  brideLineEn: string;
  brideLineMr: string;
  helplines: { nameEn: string; nameMr: string; phoneDisplay: string; tel: string }[];
} = {
  coupleEn: 'Tejas & Pragati',
  coupleMr: 'तेजस आणि प्रगती',
  firstPersonEn: 'Tejas',
  secondPersonEn: 'Pragati',
  firstPersonMr: 'तेजस',
  secondPersonMr: 'प्रगती',
  hashtag: '#TejasWedsPragati',
  editionLabelEn: "Groom's Edition · Salunkhe Family",
  editionLabelMr: 'वरपक्ष · साळुंखे परिवार',
  hostsFullEn: 'Hosted warmly by The Salunkhe Family, Marwad, Tal. Amalner (Nashik)',
  hostsFullMr: 'निमंत्रक – समस्त साळुंखे परिवार, मु. पो. मारवड ता. अमळनेर (ह. मु. नाशिक)',
  hostsShortEn: 'The Salunkhe Family · Marwad & Nashik',
  hostsShortMr: 'समस्त साळुंखे परिवार, नाशिक',
  groomLineEn: 'Chi. Tejas — Son of Salunkhe Family, Marwad, Tal. Amalner (Nashik)',
  groomLineMr: 'चि. तेजस — मु. पो. मारवड ता. अमळनेर जि. जळगाव (ह. मु. नाशिक)',
  brideLineEn: 'Chi. Sau. Kan. Pragati — Jivrakh - Deshmukh Family, Nashik',
  brideLineMr: 'चि. सौ. कां. प्रगती — जिवरख - देशमुख परिवार, नाशिक',
  helplines: [
    {
      nameEn: 'Salunkhe Family Hospitality Desk',
      nameMr: 'साळुंखे परिवार स्वागत कक्ष',
      phoneDisplay: 'Ambika Nagar, Nashik · Bhadgaon',
      tel: '',
    },
  ],
};

export const WEDDING_EVENTS: CeremonyEvent[] = [
  {
    id: 'mehendi',
    dayNumber: '01',
    nameEn: 'Mehendi Ceremony',
    nameMr: 'मेंहदीचा कार्यक्रम',
    subtitleEn: 'Henna, Folk Songs & Family Warmth',
    subtitleMr: 'सौभाग्याची मेंहदी आणि पारंपरिक आनंदोत्सव',
    dateEn: 'Thursday, 10 Dec 2026',
    dateMr: 'गुरुवार, १० डिसेंबर २०२६',
    timeEn: '7:00 PM Onwards',
    timeMr: 'सायं. ७:०० वाजता',
    venueEn: '2, Sai Guru Row House, Ambika Nagar, Nashik',
    venueMr: '२, साई गुरु रो हाऊसेस, अंबिका नगर, नाशिक',
    addressEn: '2, Sai Guru Row House, Ambika Nagar, Nashik, Maharashtra',
    addressMr: '२, साई गुरु रो हाऊसेस, अंबिका नगर, नाशिक, महाराष्ट्र',
    mapQuery: 'Sai Guru Row House, Ambika Nagar, Nashik, Maharashtra',
    descriptionEn:
      'An intimate evening of fragrant henna rituals, festive folk melodies, and warm family joy hosted by the Salunkhe Family in Nashik.',
    descriptionMr:
      'गुरुवार दि. १०/१२/२०२६ रोजी सायं. ७ वा. २, साई गुरु रो हाऊसेस, अंबिका नगर, नाशिक येथे साळुंखे परिवाराच्या वतीने मेंहदीचा आनंदमयी सोहळा.',
    dressCodeEn: 'Emerald Green, Pistachio & Floral Festive Wear',
    dressCodeMr: 'पाचू हिरवा, पिस्ता किंवा फ्लोरल पारंपरिक पोशाख',
    swatches: [
      { nameEn: 'Mehendi Emerald', nameMr: 'पाचू हिरवा', hex: '#1A6B52' },
      { nameEn: 'Botanical Sage', nameMr: 'पिस्ता हिरवा', hex: '#6BA083' },
      { nameEn: 'Ivory Silk', nameMr: 'रेशमी मोती', hex: '#F3EAD8' },
    ],
    accentHex: '#2E8B6E',
    tintBg: 'rgba(26, 107, 82, 0.14)',
    startIso: '20261210T190000',
    endIso: '20261210T223000',
  },
  {
    id: 'haldi',
    dayNumber: '02',
    nameEn: 'Haldi & Sangeet',
    nameMr: 'हळदी व संगीत सोहळा',
    subtitleEn: 'Golden Turmeric Blessings & Musical Evening',
    subtitleMr: 'झेंडूच्या फुलांची उधळण आणि सुरांची मैफल',
    dateEn: 'Friday, 11 Dec 2026',
    dateMr: 'शुक्रवार, ११ डिसेंबर २०२६',
    timeEn: 'Haldi: 5:00 PM  •  Sangeet: 8:00 PM',
    timeMr: 'हळद: सायं. ५ वा.  •  संगीत: रात्री ८ वा.',
    venueEn: 'Aditya Lawns, Bhadgaon',
    venueMr: 'आदित्य लॉन्स, भडगाव',
    addressEn: 'Chalisgaon Road, Bhadgaon, Tal. Bhadgaon, Dist. Jalgaon',
    addressMr: 'चाळीसगाव रोड, भडगाव, ता. भडगाव, जि. जळगाव',
    mapQuery: 'Aditya Lawns, Chalisgaon Road, Bhadgaon, Maharashtra',
    descriptionEn:
      'Golden Haldi blessings bathed in marigold petals at 5:00 PM, seamlessly flowing into a vibrant Sangeet night of dance and celebration at 8:00 PM.',
    descriptionMr:
      'शुक्रवार दि. ११/१२/२०२६ रोजी आदित्य लॉन्स, भडगाव येथे सायं. ५ वा. मंगल हळद व रात्री ८ वाजता जल्लोषपूर्ण संगीत सोहळा.',
    dressCodeEn: 'Marigold Yellow, Mustard & Shimmering Sangeet Glam',
    dressCodeMr: 'हळदी पिवळा, मस्टर्ड व संगीत पारंपरिक पोशाख',
    swatches: [
      { nameEn: 'Marigold Gold', nameMr: 'झेंडू पिवळा', hex: '#E39D25' },
      { nameEn: 'Turmeric Amber', nameMr: 'हळदी केशरी', hex: '#C67414' },
      { nameEn: 'Midnight Velvet', nameMr: 'गडद पाचू', hex: '#0D2B26' },
    ],
    accentHex: '#E39D25',
    tintBg: 'rgba(227, 157, 37, 0.14)',
    startIso: '20261211T170000',
    endIso: '20261211T230000',
  },
  {
    id: 'wedding',
    dayNumber: '03',
    nameEn: 'Shubh Vivaah',
    nameMr: 'शुभविवाह सोहळा',
    subtitleEn: 'Mangalashtak, Antarpat & Sacred Muhurat',
    subtitleMr: 'मंगलाष्टके, अंतरपाट व मंगल अक्षता मुहूर्त',
    dateEn: 'Saturday, 12 Dec 2026',
    dateMr: 'शनिवार, १२ डिसेंबर २०२६',
    timeEn: '12:20 PM IST (Abhijit Muhurat)',
    timeMr: 'दुपारी स्टॉ. टा. १२.२० मिनिटांनी',
    venueEn: 'Aditya Lawns, Bhadgaon',
    venueMr: 'आदित्य लॉन्स, भडगाव',
    addressEn: 'Chalisgaon Road, Bhadgaon, Tal. Bhadgaon, Dist. Jalgaon 424105',
    addressMr: 'चाळीसगाव रोड, भडगाव, ता. भडगाव, जि. जळगाव ४२४१०५',
    mapQuery: 'Aditya Lawns, Chalisgaon Road, Bhadgaon, Maharashtra',
    descriptionEn:
      'The auspicious Vivaah Muhurat on Margashirsha Shuddha 1, Shake 1948 — join Tejas & Pragati under the sacred Mandap for Mangalashtak and warm Akshata blessings.',
    descriptionMr:
      'मिती मार्गशीर्ष शु. १ शके १९४८, शनिवार दि. १२/१२/२०२६ रोजी दुपारी १२.२० मिनिटांनी शुभविवाह व मंगल अक्षता सोहळा.',
    dressCodeEn: 'Paithani Silk, Royal Burgundy, Gold & Dhoti-Kurta',
    dressCodeMr: 'पारंपरिक पैठणी साडी, धोती-कुर्ता आणि राजेशाही जरतारी',
    swatches: [
      { nameEn: 'Paithani Sindoor', nameMr: 'पैठणी मरून', hex: '#8F1E3C' },
      { nameEn: 'Zari Gold', nameMr: 'सुवर्ण जरी', hex: '#D4A853' },
      { nameEn: 'Peacock Teal', nameMr: 'मोरपंखी', hex: '#134B42' },
    ],
    accentHex: '#D4A853',
    tintBg: 'rgba(143, 30, 60, 0.16)',
    startIso: '20261212T122000',
    endIso: '20261212T173000',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: '1IPhrMb11O6c6XVAzbeiMnS5i_774xEQT',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/1IPhrMb11O6c6XVAzbeiMnS5i_774xEQT',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1IPhrMb11O6c6XVAzbeiMnS5i_774xEQT&sz=w1400',
    category: 'portrait',
    orientation: 'portrait',
    captionEn: 'Together in champagne & midnight charm',
    captionMr: 'साखरपुड्याच्या सोहळ्यातील अविस्मरणीय क्षण',
    locationNoteEn: 'Engagement Portraits',
    locationNoteMr: 'साखरपुडा छायाचित्र',
  },
  {
    id: '1Fw1XvWzIcD1sUX4r2KGv28t4XBONz9qk',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/1Fw1XvWzIcD1sUX4r2KGv28t4XBONz9qk',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1Fw1XvWzIcD1sUX4r2KGv28t4XBONz9qk&sz=w1400',
    category: 'garden',
    orientation: 'landscape',
    captionEn: 'Radiant smiles framed by tropical greens',
    captionMr: 'निखळ हास्य आणि स्नेहाचा सुंदर संगम',
    locationNoteEn: 'Garden Walkthrough',
    locationNoteMr: 'निसर्गरम्य आठवण',
  },
  {
    id: '1c9VlOwUdslWW4F3jBeDT0R99tTcGjBAT',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/1c9VlOwUdslWW4F3jBeDT0R99tTcGjBAT',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1c9VlOwUdslWW4F3jBeDT0R99tTcGjBAT&sz=w1400',
    category: 'proposal',
    orientation: 'portrait',
    captionEn: 'Down on one knee beneath the TP floral crest',
    captionMr: 'फुलांच्या कमानीखाली वचनाचा मंगल क्षण',
    locationNoteEn: 'Ring Ceremony',
    locationNoteMr: 'अंगठी समारंभ',
  },
  {
    id: '1b5IKH1rW5D1dmturmSP9iWWH9zrPH1Vi',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/1b5IKH1rW5D1dmturmSP9iWWH9zrPH1Vi',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1b5IKH1rW5D1dmturmSP9iWWH9zrPH1Vi&sz=w1400',
    category: 'garden',
    orientation: 'portrait',
    captionEn: 'Hand in hand into our next chapter',
    captionMr: 'हातात हात गुंफून नवजीवनाची वाटचाल',
    locationNoteEn: 'Garden Shoot',
    locationNoteMr: 'प्री-वेडिंग',
  },
  {
    id: '1ZReKpDLJ9s5oA8PpkJaCkxfyzj4F4gqy',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/1ZReKpDLJ9s5oA8PpkJaCkxfyzj4F4gqy',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1ZReKpDLJ9s5oA8PpkJaCkxfyzj4F4gqy&sz=w1400',
    category: 'portrait',
    orientation: 'portrait',
    captionEn: 'Golden hour warmth & quiet promises',
    captionMr: 'सूर्यकिरणांच्या साक्षीने प्रेमळ सहवास',
    locationNoteEn: 'Golden Hour',
    locationNoteMr: 'सांजवेळ',
  },
  {
    id: '1k_8qLY-z658q7ahvZCXcykFufvTtB1Uh',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/1k_8qLY-z658q7ahvZCXcykFufvTtB1Uh',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1k_8qLY-z658q7ahvZCXcykFufvTtB1Uh&sz=w1400',
    category: 'garden',
    orientation: 'portrait',
    captionEn: 'A shared glance worth a thousand words',
    captionMr: 'नजरेतून उमटलेले मनोगत',
    locationNoteEn: 'Garden Walkthrough',
    locationNoteMr: 'प्री-वेडिंग',
  },
  {
    id: '17o5LBN2hXOBGNp3bYdXCn_Xq4ffKM4cG',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/17o5LBN2hXOBGNp3bYdXCn_Xq4ffKM4cG',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=17o5LBN2hXOBGNp3bYdXCn_Xq4ffKM4cG&sz=w1400',
    category: 'proposal',
    orientation: 'portrait',
    captionEn: 'The joyful “Yes” beneath rose arches',
    captionMr: 'गुलाबांच्या कमानीखाली आनंदी होकार',
    locationNoteEn: 'Engagement Stage',
    locationNoteMr: 'साखरपुडा मंच',
  },
  {
    id: '1c3bZVIq9FcYBxSlysMKuxEeayo3FoA0I',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/1c3bZVIq9FcYBxSlysMKuxEeayo3FoA0I',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1c3bZVIq9FcYBxSlysMKuxEeayo3FoA0I&sz=w1400',
    category: 'garden',
    orientation: 'portrait',
    captionEn: 'Walking amidst lush botanical palms',
    captionMr: 'हिरव्यागार प्रांगणात सुखाची पावले',
    locationNoteEn: 'Courtyard Stroll',
    locationNoteMr: 'निसर्गरम्य आठवण',
  },
  {
    id: '1jIHKcVp2HRGIsTwH2Nh0dpqAai_LV3PX',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/1jIHKcVp2HRGIsTwH2Nh0dpqAai_LV3PX',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1jIHKcVp2HRGIsTwH2Nh0dpqAai_LV3PX&sz=w1400',
    category: 'portrait',
    orientation: 'portrait',
    captionEn: 'By the stone fountain & garden terrace',
    captionMr: 'अविस्मरणीय साखरपुडा सफर',
    locationNoteEn: 'Courtyard Terrace',
    locationNoteMr: 'साखरपुडा छायाचित्र',
  },
  {
    id: '16rLxJaA4L3W8aCq0tchOW76BUM_dQuuR',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/16rLxJaA4L3W8aCq0tchOW76BUM_dQuuR',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=16rLxJaA4L3W8aCq0tchOW76BUM_dQuuR&sz=w1400',
    category: 'portrait',
    orientation: 'portrait',
    captionEn: 'Candid laughter & timeless grace',
    captionMr: 'निखळ आनंद आणि आपुलकीचा भाव',
    locationNoteEn: 'Candid Portrait',
    locationNoteMr: 'कॅन्डिड क्षण',
  },
  {
    id: '1Xiei531yiszdyYH0yLsUtU0tznxbClOb',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/1Xiei531yiszdyYH0yLsUtU0tznxbClOb',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1Xiei531yiszdyYH0yLsUtU0tznxbClOb&sz=w1400',
    category: 'portrait',
    orientation: 'portrait',
    captionEn: 'Evening lounge celebration portrait',
    captionMr: 'संध्याकाळचा देखणा सहवास',
    locationNoteEn: 'Evening Lounge',
    locationNoteMr: 'साखरपुडा संध्या',
  },
  {
    id: '19XRMd_WVHwHgndOJVE4xSECWbKZCifko',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/19XRMd_WVHwHgndOJVE4xSECWbKZCifko',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=19XRMd_WVHwHgndOJVE4xSECWbKZCifko&sz=w1400',
    category: 'proposal',
    orientation: 'portrait',
    captionEn: 'Sweet celebratory cake moment',
    captionMr: 'गोड केक आणि गोड शुभेच्छा',
    locationNoteEn: 'Ring Ceremony',
    locationNoteMr: 'साखरपुडा सोहळा',
  },
  {
    id: '13HRNNQQNlfcnFivOnhDf-BvUpuyQH2eF',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/13HRNNQQNlfcnFivOnhDf-BvUpuyQH2eF',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=13HRNNQQNlfcnFivOnhDf-BvUpuyQH2eF&sz=w1400',
    category: 'proposal',
    orientation: 'portrait',
    captionEn: 'Celebrating with laughter & sparkle',
    captionMr: 'आनंदोत्सव आणि कुटुंबियांचा स्नेह',
    locationNoteEn: 'Engagement Stage',
    locationNoteMr: 'साखरपुडा मंच',
  },
  {
    id: '1rwbmymvmmTK-32TJb4jhNQNabSz3yRxb',
    src: 'https://res.cloudinary.com/sismkl0b/image/fetch/f_auto,q_auto,w_1400/https://lh3.googleusercontent.com/d/1rwbmymvmmTK-32TJb4jhNQNabSz3yRxb',
    fallbackSrc: 'https://drive.google.com/thumbnail?id=1rwbmymvmmTK-32TJb4jhNQNabSz3yRxb&sz=w1400',
    category: 'proposal',
    orientation: 'portrait',
    captionEn: 'The first cut toward forever together',
    captionMr: 'नव्या प्रवासाची गोड सुरुवात',
    locationNoteEn: 'Ring Ceremony',
    locationNoteMr: 'साखरपुडा',
  },
];

export const HERITAGE_MOTIFS: HeritageMotif[] = [
  {
    id: 'ganesha',
    titleEn: 'Shri Ganesh Vandana',
    titleMr: '॥ श्री गणेश वंदना ॥',
    sanskritLine: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
    shortTagEn: 'Auspicious Invocation',
    shortTagMr: 'मंगल आरंभ',
    storyEn:
      'Every Maharashtrian wedding Patrika begins by bowing to Lord Ganesha, invoking clarity, harmony, and hurdle-free grace upon the new household.',
    storyMr:
      'प्रत्येक मराठी लग्नपत्रिकेची सुरुवात श्री गणरायाच्या वंदनेने होते; नवरदेव-नवरीच्या नवजीवनात सुख, शांती व निर्विघ्न यश लाभो हीच प्रार्थना.',
    roleInWeddingEn: 'Chanted at the dawn of Haldi & before the 12:20 PM Muhurat',
    roleInWeddingMr: 'हळदीपासून ते दुपारी १२.२० च्या शुभमुहूर्तापर्यंत सर्व विधींचे पूजन',
  },
  {
    id: 'antarpat',
    titleEn: 'Antarpat & Mangalashtak',
    titleMr: 'अंतरपाट व मंगलाष्टके',
    sanskritLine: 'शुभमंगल सावधान — तदेव लग्नं सुदिनं तदेव!',
    shortTagEn: 'Sacred 12:20 PM Moment',
    shortTagMr: 'शुभ घटिका १२.२०',
    storyEn:
      'A ceremonial handwoven cloth separates the bride and groom while elders recite poetic Mangalashtak verses. At the exact Muhurat of 12:20 PM, the veil drops to applause and garlands.',
    storyMr:
      'वधू-वरांमध्ये धरलेला रेशमी अंतरपाट व स्वस्तिवाचनाची मंगलाष्टके! बरोबर १२.२० वाजता “शुभमंगल सावधान” होताच अंतरपाट दूर होतो व वरमाला अर्पण होते.',
    roleInWeddingEn: 'Central ceremony at Aditya Lawns, Saturday 12 December',
    roleInWeddingMr: 'शनिवार दि. १२ डिसेंबर रोजी आदित्य लॉन्स, भडगाव येथे मुख्य सोहळा',
  },
  {
    id: 'paithani',
    titleEn: 'Paithani Peacock & Lotus',
    titleMr: 'पैठणी मोर व कमळ नक्षी',
    sanskritLine: 'सौभाग्य व समृद्धीचे राजेशाही प्रतीक',
    shortTagEn: 'Maharashtra Heritage',
    shortTagMr: 'महाराष्ट्रीयन वारसा',
    storyEn:
      'Inspired by Yeola and Paithan’s handloom gold-zari weaves, the dancing peacock and blooming lotus symbolize dignity, artistic devotion, and eternal companionship.',
    storyMr:
      'महाराष्ट्राच्या अभिमानास्पद पैठणीवरील मोर व कमळाची सुवर्ण जरी नक्षी ही सौंदर्य, ऐश्वर्य आणि अखंड सहजीवनाचे प्रतीक मानली जाते.',
    roleInWeddingEn: 'Echoed across our emerald-and-gold Mandap aesthetic & bridal attire',
    roleInWeddingMr: 'मंडपाची सजावट व पारंपरिक वेशभूषेतील सुवर्ण नक्षी',
  },
  {
    id: 'halad',
    titleEn: 'Halad Chadavane',
    titleMr: 'मंगल हळद व झेंडू उधळण',
    sanskritLine: 'हरिद्रा कुंकुमं चैव सौभाग्यं वर्धते सदा',
    shortTagEn: 'Golden Purification',
    shortTagMr: 'तेज व मांगल्य',
    storyEn:
      'Suhasinis apply fragrant golden turmeric paste with mango leaves to bless the couple with radiance, protection, and warmth before their sacred vows.',
    storyMr:
      'आंब्याच्या पानांनी वर-वधूस मंगल हळदीचा लेप लावून त्यांना आरोग्य, तेज व दीर्घायुष्याचे शुभाशीर्वाद दिले जातात.',
    roleInWeddingEn: 'Friday, 11 December at 5:00 PM at Aditya Lawns, Bhadgaon',
    roleInWeddingMr: 'शुक्रवार, ११ डिसेंबर सायं. ५ वा. आदित्य लॉन्स, भडगाव येथे',
  },
  {
    id: 'saptapadi',
    titleEn: 'Saptapadi (Seven Steps)',
    titleMr: 'सप्तपदी (सात पवित्र पावले)',
    sanskritLine: 'सखा सप्तपदा भव — एकमेकांचे आजीवन सखा व्हा',
    shortTagEn: 'Eternal Vows',
    shortTagMr: 'सप्त वचने',
    storyEn:
      'Walking seven steps together around the sacred Agni, Tejas & Pragati vow nourishment, strength, prosperity, harmony, family, health, and lifelong friendship.',
    storyMr:
      'अग्नीच्या साक्षीने घेतलेली सात पावले म्हणजे अन्न, बळ, समृद्धी, सौख्य, संतती, आरोग्य आणि आजन्म मैत्रीची पवित्र शपथ.',
    roleInWeddingEn: 'Performed immediately following Varmala & Kanyadaan',
    roleInWeddingMr: 'कन्यादान व वरमालेनंतर अग्नीच्या साक्षीने होणारा पवित्र विधी',
  },
  {
    id: 'akshata',
    titleEn: 'Mangal Akshata',
    titleMr: 'मंगल अक्षता व आशीर्वाद',
    sanskritLine: 'अक्षतानि समर्पयामि — अखंड सौभाग्याचा वर्षाव',
    shortTagEn: 'Collective Blessings',
    shortTagMr: 'शुभाशीर्वाद वर्षाव',
    storyEn:
      'Unbroken rice grains coated in turmeric and kumkum are showered by every guest present — turning the blessings of family and elders into a living golden canopy.',
    storyMr:
      'हळद-कुंकवाने रंगवलेले अखंड तांदळाचे दाणे म्हणजे सर्व आप्तस्वकीयांचे अखंड प्रेम व मंगल आशीर्वाद!',
    roleInWeddingEn: 'Tap our "Shower Akshata" button anywhere on this invite!',
    roleInWeddingMr: 'या निमंत्रण पत्रिकेतही आपण “अक्षता वर्षाव” करू शकता!',
  },
];

export const TRAVEL_HUBS: TravelHub[] = [
  {
    id: 'pachora',
    cityEn: 'Pachora Junction',
    cityMr: 'पाचोरा जंक्शन',
    type: 'rail',
    distanceKm: 20,
    durationEn: '~28 mins via Bhadgaon Rd',
    durationMr: 'सुमारे २८ मिनिटे (भडगाव रोड)',
    routeNoteEn: 'Nearest major rail stop on Central Railway; frequent cabs, autos & MSRTC buses straight to Aditya Lawns.',
    routeNoteMr: 'सर्वात जवळचे रेल्वे जंक्शन; येथून आदित्य लॉन्सपर्यंत टॅक्सी, रिक्षा व बसची नियमित सोय उपलब्ध.',
  },
  {
    id: 'chalisgaon',
    cityEn: 'Chalisgaon Junction',
    cityMr: 'चाळीसगाव जंक्शन',
    type: 'rail',
    distanceKm: 22,
    durationEn: '~30 mins via Chalisgaon–Bhadgaon Hwy',
    durationMr: 'सुमारे ३० मिनिटे (चाळीसगाव-भडगाव मार्ग)',
    routeNoteEn: 'Direct express rail connectivity from Mumbai, Pune & Nashik; Aditya Lawns sits right on Chalisgaon Road.',
    routeNoteMr: 'मुंबई, पुणे व नाशिकहून थेट रेल्वे संपर्क; आदित्य लॉन्स थेट चाळीसगाव रोडवरच स्थित आहे.',
  },
  {
    id: 'jalgaon',
    cityEn: 'Jalgaon Junction',
    cityMr: 'जळगाव जंक्शन',
    type: 'rail',
    distanceKm: 60,
    durationEn: '~1 hr 15 mins',
    durationMr: 'सुमारे १ तास १५ मिनिटे',
    routeNoteEn: 'Major trunk railway station with round-the-clock private cab availability toward Pachora & Bhadgaon.',
    routeNoteMr: 'प्रमुख रेल्वे जंक्शन; पाचोरा-भडगाव मार्गावर २४ तास खाजगी टॅक्सी सेवा उपलब्ध.',
  },
  {
    id: 'nashik',
    cityEn: 'Nashik (Mehendi City)',
    cityMr: 'नाशिक (मेंहदी सोहळा स्थळ)',
    type: 'road',
    distanceKm: 155,
    durationEn: '~3 hrs via Malegaon–Chalisgaon',
    durationMr: 'सुमारे ३ तास (मालेगाव-चाळीसगाव मार्गे)',
    routeNoteEn: 'Smooth highway drive from Salunkhe Family’s Ambika Nagar residence straight onto Chalisgaon Road, Bhadgaon.',
    routeNoteMr: 'साळुंखे परिवाराच्या अंबिका नगर, नाशिक येथून मालेगाव-चाळीसगाव मार्गे भडगावकडे प्रशस्त महामार्ग.',
  },
  {
    id: 'pune',
    cityEn: 'Pune',
    cityMr: 'पुणे',
    type: 'road',
    distanceKm: 315,
    durationEn: '~6 hrs via Ahilyanagar–Chhatrapati Sambhajinagar–Chalisgaon',
    durationMr: 'सुमारे ६ तास (संभाजीनगर-चाळीसगाव मार्गे)',
    routeNoteEn: 'Overnight trains to Chalisgaon/Manmad or scenic highway drive through Kannad Ghat into Chalisgaon.',
    routeNoteMr: 'पुण्याहून चाळीसगाव/मनमाड रेल्वेने किंवा कन्नड घाटातून थेट रस्ते प्रवास.',
  },
  {
    id: 'mumbai',
    cityEn: 'Mumbai / Borivali',
    cityMr: 'मुंबई / बोरीवली',
    type: 'road',
    distanceKm: 355,
    durationEn: '~6.5 hrs via Samruddhi / Nashik–Chalisgaon',
    durationMr: 'सुमारे ६.५ तास (नाशिक-चाळीसगाव मार्गे)',
    routeNoteEn: 'Multiple daily express trains (Panchavati, Mahanagari, Devagiri, Vidarbha) directly to Chalisgaon Jn or Pachora Jn.',
    routeNoteMr: 'मुंबईहून चाळीसगाव किंवा पाचोरा जंक्शनसाठी दररोज अनेक सुपरफास्ट रेल्वे गाड्या उपलब्ध.',
  },
];

export const SEEDED_BLESSINGS: BlessingEntry[] = [];

export const PRESET_ASHIRWAD: { id: string; labelEn: string; labelMr: string; textEn: string; textMr: string }[] = [
  {
    id: 'eternal-bond',
    labelEn: '✨ Eternal Bond',
    labelMr: '✨ अखंड सौभाग्य',
    textEn: 'Wishing Tejas & Pragati an eternal bond filled with love, laughter, and lifelong harmony!',
    textMr: 'तेजस व प्रगती यांना अखंड सौभाग्य, प्रेम आणि आनंदी सहजीवनासाठी मनःपूर्वक शुभाशीर्वाद!',
  },
  {
    id: 'ganesha-grace',
    labelEn: '🙏 Ganesha’s Grace',
    labelMr: '🙏 गणरायाचा आशीर्वाद',
    textEn: 'May Lord Ganesha shower endless wisdom, prosperity, and warmth upon your new home.',
    textMr: 'श्री गणरायाच्या कृपेने तुमचा नवा संसार सुख, समृद्धी आणि आनंदाने बहरून जावो!',
  },
  {
    id: 'shubh-vivaah',
    labelEn: '💐 Shubh Vivaah',
    labelMr: '💐 शुभमंगल सावधान',
    textEn: 'Heartiest congratulations to the Salunkhe & Jivrakh - Deshmukh families — see you under the Mandap!',
    textMr: 'साळुंखे आणि जिवरख - देशमुख परिवारास हार्दिक शुभेच्छा! मंगल सोहळ्यात नक्की भेटूया.',
  },
];

export const UI_COPY = {
  en: {
    ganeshaInvocation: '|| Shree Ganeshay Namah ||',
    shloka: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
    invitedLine: 'Together with our families, we joyfully invite you to celebrate the wedding of',
    tagline: 'Two Hearts, Sacred Traditions, One Eternal Promise',
    dateBadge: 'Saturday, 12 December 2026 • 12:20 PM IST',
    panchangBadge: 'Margashirsha Shuddha 1, Shake 1948',
    venueShort: 'Aditya Lawns, Chalisgaon Road, Bhadgaon',
    heroExploreBtn: 'Explore 3-Day Itinerary',
    heroRsvpBtn: 'RSVP & Blessings',
    unsealTitle: 'Shubh Vivaah Nimantran',
    unsealHint: 'Tap the golden seal to open your personal invitation',
    unsealBtn: 'Open Invitation',
    unsealSilentBtn: 'Open Silently',
    navLabels: {
      patrika: 'Patrika',
      scratch: 'Muhurat',
      events: 'Celebrations',
      heritage: 'Traditions',
      gallery: 'Moments',
      venue: 'Travel & Venue',
      rsvp: 'RSVP',
    },
    scratchEyebrow: 'Royal Save-The-Date Envelope',
    scratchTitle: 'Unveil the Auspicious Muhurat',
    scratchSubtitle:
      'Tap the golden wax-sealed envelope below to open your invitation letter — then save or download your keepsake pass.',
    scratchHint: 'Tap seal to open envelope',
    scratchRevealBtn: 'Open Envelope',
    scratchResetBtn: 'Close Envelope',
    downloadPassBtn: 'Download Keepsake Card (PNG)',
    googleCalBtn: 'Add to Google Calendar',
    icsBtn: 'Download Apple / Outlook (.ics)',
    countdownEyebrow: 'Countdown to Shubh Vivaah',
    countdownTitle: 'Moments Until Mangalashtak',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    eventsEyebrow: 'Three Days of Joy',
    eventsTitle: 'The Wedding Passbook',
    eventsSubtitle:
      'From emerald-hued Mehendi and marigold-drenched Haldi to the sacred 12:20 PM Muhurat.',
    allDays: 'All 3 Celebrations',
    attireLabel: 'Curated Attire Palette',
    directionsBtn: 'Directions',
    heritageEyebrow: 'Sacred Heritage',
    heritageTitle: 'The Soul of a Marathi Wedding',
    heritageSubtitle:
      'Tap any ritual jewel to explore the timeless Vedic traditions blessing this union.',
    galleryEyebrow: 'Pre-Wedding & Engagement',
    galleryTitle: 'Moments of Love',
    gallerySubtitle: '14 curated frames capturing Tejas & Pragati’s journey toward forever.',
    venueEyebrow: 'Destinations & Arrival Concierge',
    venueTitle: 'Venues & Travel Guide',
    venueSubtitle:
      'Plan your arrival smoothly across Nashik, Pachora, Chalisgaon, and Aditya Lawns in Bhadgaon.',
    rsvpEyebrow: 'Grace Us With Your Presence',
    rsvpTitle: 'RSVP & Ashirwad Wall',
    rsvpSubtitle:
      'Kindly confirm your attendance ahead of the festivities so our families can welcome you with warmth and comfort.',
    blessingsWallTitle: 'Live Blessings Wall',
    showerAkshata: 'Shower Akshata',
    musicLabel: 'Wedding Song',
    playlistLabel: 'Wedding Playlist',
    copyLink: 'Copy Invite Link',
    copiedLink: 'Link Copied!',
    shareWhatsApp: 'Share on WhatsApp',
  },
  mr: {
    ganeshaInvocation: '॥ श्री गणेशाय नमः ॥',
    shloka: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
    invitedLine: 'आमच्या परिवारासह, आपण आमच्या शुभविवाह सोहळ्यात उपस्थित राहून वधू-वरांस शुभाशीर्वाद द्यावेत ही सस्नेह विनंती',
    tagline: 'दोन मनांचे मंगल मीलन आणि नवजीवनाची सुवर्ण सुरुवात',
    dateBadge: 'शनिवार, १२ डिसेंबर २०२६ • दुपारी १२.२० वा.',
    panchangBadge: 'मिती मार्गशीर्ष शु. १, शके १९४८',
    venueShort: 'आदित्य लॉन्स, चाळीसगाव रोड, भडगाव (जि. जळगाव)',
    heroExploreBtn: 'कार्यक्रमांची रूपरेषा पहा',
    heroRsvpBtn: 'उपस्थिती नोंदवा',
    unsealTitle: 'सस्नेह शुभविवाह निमंत्रण',
    unsealHint: 'निमंत्रण पत्रिका उघडण्यासाठी सुवर्ण मुद्रेवर स्पर्श करा',
    unsealBtn: 'निमंत्रण उघडा',
    unsealSilentBtn: 'संगीताशिवाय उघडा',
    navLabels: {
      patrika: 'पत्रिका',
      scratch: 'शुभ मुहूर्त',
      events: 'कार्यक्रम',
      heritage: 'संस्कृती',
      gallery: 'आठवणी',
      venue: 'विवाह स्थळ',
      rsvp: 'उपस्थिती',
    },
    scratchEyebrow: 'शाही निमंत्रण लिफाफा',
    scratchTitle: 'शुभविवाह मुहूर्त जाणून घ्या',
    scratchSubtitle:
      'खालील सुवर्ण मुद्रेवर स्पर्श करून शुभविवाह निमंत्रणाचा लिफाफा उघडा आणि आपली आठवणीची निमंत्रण प्रत जतन करा.',
    scratchHint: 'लिफाफा उघडण्यासाठी स्पर्श करा',
    scratchRevealBtn: 'लिफाफा उघडा',
    scratchResetBtn: 'पुन्हा बंद करा',
    downloadPassBtn: 'निमंत्रण कार्ड डाउनलोड करा (PNG)',
    googleCalBtn: 'गुगल कॅलेंडरमध्ये जोडा',
    icsBtn: 'Apple / Outlook (.ics) डाउनलोड',
    countdownEyebrow: 'घटिका मोजणी',
    countdownTitle: 'मंगलाष्टकांची मंगल घटिका समीप',
    days: 'दिवस',
    hours: 'तास',
    minutes: 'मिनिटे',
    seconds: 'सेकंद',
    eventsEyebrow: 'तीन दिवसांचा आनंदोत्सव',
    eventsTitle: 'विवाह सोहळ्याची रूपरेषा',
    eventsSubtitle:
      'हिरवीगार मेंहदी, झेंडूची हळद, सप्तसुरांचा संगीत सोहळा आणि दुपारी १२.२० चा शुभविवाह मुहूर्त.',
    allDays: 'सर्व ३ कार्यक्रम',
    attireLabel: 'पारंपरिक वेशभूषा रंगसंगती',
    directionsBtn: 'नकाशा पहा',
    heritageEyebrow: 'वैदिक संस्कृती व वारसा',
    heritageTitle: 'मराठी लग्नसोहळ्याची मंगल परंपरा',
    heritageSubtitle:
      'या पवित्र विवाहास आशीर्वाद देणाऱ्या पारंपरिक विधी व प्रतीकांची माहिती जाणून घ्या.',
    galleryEyebrow: 'साखरपुडा व गोड आठवणी',
    galleryTitle: 'प्रेमाचे अविस्मरणीय क्षण',
    gallerySubtitle: 'तेजस आणि प्रगती यांच्या सहप्रवासातील १४ निवडक छायाचित्रे.',
    venueEyebrow: 'विवाह स्थळ व प्रवास मार्गदर्शिका',
    venueTitle: 'स्थळ व कसे पोहोचावे',
    venueSubtitle:
      'नाशिक, पाचोरा, चाळीसगाव आणि आदित्य लॉन्स भडगाव येथे पोहोचण्यासाठी सोपी प्रवास माहिती.',
    rsvpEyebrow: 'सस्नेह उपस्थिती नोंदणी',
    rsvpTitle: 'सप्रेम उपस्थिती व शुभाशीर्वाद',
    rsvpSubtitle:
      'आपल्या आदरातिथ्याची उत्तम व्यवस्था करता यावी यासाठी कृपया आपली उपस्थिती व आशीर्वाद नोंदवा.',
    blessingsWallTitle: 'शुभाशीर्वाद भिंत',
    showerAkshata: 'अक्षता वर्षाव',
    musicLabel: 'मंगल गीत',
    playlistLabel: 'लग्न गीते',
    copyLink: 'लिंक कॉपी करा',
    copiedLink: 'लिंक कॉपी झाली!',
    shareWhatsApp: 'व्हॉट्सॲपवर पाठवा',
  },
};
