import { Language } from '../types';

export const translations: Record<Language, {
  header: {
    home: string;
    properties: string;
    offPlan: string;
    investorHub: string;
    contact: string;
    vipConsultation: string;
    callUs: string;
    emailUs: string;
    commercialLicense: string;
    brokerLicense: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    searchTabBuy: string;
    searchTabRent: string;
    searchTabOffPlan: string;
    locationLabel: string;
    locationPlaceholder: string;
    propertyTypeLabel: string;
    allTypes: string;
    priceRangeLabel: string;
    searchButton: string;
    allLocations: string;
  };
  stats: {
    transacted: string;
    transactedLabel: string;
    portfolio: string;
    portfolioLabel: string;
    goldenVisa: string;
    goldenVisaLabel: string;
    satisfaction: string;
    satisfactionLabel: string;
  };
  home: {
    featuredTitle: string;
    featuredSubtitle: string;
    viewAllProperties: string;
    offPlanTitle: string;
    offPlanSubtitle: string;
    exploreOffPlan: string;
    faqTitle: string;
    faqSubtitle: string;
    developerPartners: string;
    whyChooseTitle: string;
    whyChooseSubtitle: string;
  };
  property: {
    beds: string;
    baths: string;
    sqft: string;
    price: string;
    inquireNow: string;
    scheduleViewing: string;
    goldenVisaBadge: string;
    viewMap: string;
    keyDetails: string;
    amenities: string;
    developer: string;
    completion: string;
  };
  offPlan: {
    title: string;
    subtitle: string;
    startingFrom: string;
    handover: string;
    paymentPlan: string;
    requestBrochure: string;
    viewDetails: string;
  };
  investor: {
    title: string;
    subtitle: string;
    mortgageCalc: string;
    roiCalc: string;
    goldenVisaCalc: string;
    propertyPrice: string;
    downPayment: string;
    loanTenure: string;
    interestRate: string;
    monthlyPayment: string;
    totalInterest: string;
    annualRent: string;
    serviceCharge: string;
    netYield: string;
    tenYearAppreciation: string;
    calculate: string;
  };
  contact: {
    title: string;
    subtitle: string;
    fullName: string;
    phoneWhatsapp: string;
    email: string;
    message: string;
    preferredDate: string;
    preferredTime: string;
    submitRequest: string;
    dubaiOffice: string;
    abuDhabiOffice: string;
    workingHours: string;
  };
  leadPopup: {
    headline: string;
    subtitle: string;
    namePlaceholder: string;
    whatsappPlaceholder: string;
    emailPlaceholder: string;
    budgetPlaceholder: string;
    submitButton: string;
    privacyNote: string;
    successMessage: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    licensedBrokerage: string;
    allRightsReserved: string;
  };
}> = {
  en: {
    header: {
      home: 'Home',
      properties: 'Properties',
      offPlan: 'Off-Plan Hub',
      investorHub: 'Investor Hub',
      contact: 'Contact & Booking',
      vipConsultation: 'VIP Consultation',
      callUs: '+971 50 500 2896',
      emailUs: 'Info@havestproperties.com',
      commercialLicense: 'Commercial License: CN-6347100',
      brokerLicense: 'Broker License (ADM): 202600464262',
    },
    hero: {
      headline: 'DISCOVER YOUR EXCEPTIONAL HOME IN THE UAE',
      subheadline: 'Curating the finest luxury penthouses, private beach villas, and high-yield off-plan developer projects in Dubai & Abu Dhabi.',
      searchTabBuy: 'Buy',
      searchTabRent: 'Rent',
      searchTabOffPlan: 'Off-Plan',
      locationLabel: 'Location',
      locationPlaceholder: 'Palm Jumeirah, Downtown, Saadiyat...',
      propertyTypeLabel: 'Property Type',
      allTypes: 'All Property Types',
      priceRangeLabel: 'Price Range (AED)',
      searchButton: 'Search Luxury Properties',
      allLocations: 'All Locations',
    },
    stats: {
      transacted: '$2.8B+',
      transactedLabel: 'Volume Transacted',
      portfolio: '500+',
      portfolioLabel: 'Ultra-Prime Listings',
      goldenVisa: '100%',
      goldenVisaLabel: 'Golden Visa Success Rate',
      satisfaction: '99.4%',
      satisfactionLabel: 'UHNW Client Retention',
    },
    home: {
      featuredTitle: 'FEATURED LUXURY RESIDENCES',
      featuredSubtitle: 'Handpicked architectural masterpieces offering unmatched privacy, prestige, and lifestyle in prime UAE locations.',
      viewAllProperties: 'Explore All Properties',
      offPlanTitle: 'EXCLUSIVE OFF-PLAN DEVELOPMENTS',
      offPlanSubtitle: 'Direct VIP access to landmark launches by Emaar, Aldar, Sobha, and Select Group with flexible payment structures.',
      exploreOffPlan: 'View Off-Plan Projects',
      faqTitle: 'UAE REAL ESTATE FAQ & INSIGHTS',
      faqSubtitle: 'Essential answers for international investors, expats, and high-net-worth buyers acquiring property in the UAE.',
      developerPartners: 'DIRECT DEVELOPER PARTNERSHIPS',
      whyChooseTitle: 'THE HAVEST DIFFERENCE',
      whyChooseSubtitle: 'Discreet, bespoke real estate advisory serving royal families, global founders, and institutional investors.',
    },
    property: {
      beds: 'Beds',
      baths: 'Baths',
      sqft: 'Sq. Ft',
      price: 'AED',
      inquireNow: 'Inquire Now',
      scheduleViewing: 'Schedule Private Viewing',
      goldenVisaBadge: 'Golden Visa Eligible',
      viewMap: 'View on Interactive Map',
      keyDetails: 'Key Residence Details',
      amenities: 'Exclusive Amenities',
      developer: 'Developer',
      completion: 'Completion',
    },
    offPlan: {
      title: 'UAE OFF-PLAN DEVELOPMENTS HUB',
      subtitle: 'Secure prime residential units before public launch with tailored 60/40 and post-handover payment structures.',
      startingFrom: 'Starting Price',
      handover: 'Handover Date',
      paymentPlan: 'Payment Plan',
      requestBrochure: 'Request VIP Brochure & Floor Plans',
      viewDetails: 'View Project Details',
    },
    investor: {
      title: 'INVESTOR ANALYTICS HUB',
      subtitle: 'Evaluate mortgage installments, projected rental yields, net ROI, and UAE Golden Visa qualification thresholds.',
      mortgageCalc: 'Mortgage Calculator',
      roiCalc: 'ROI & Yield Estimator',
      goldenVisaCalc: 'Golden Visa Qualification',
      propertyPrice: 'Property Value (AED)',
      downPayment: 'Down Payment (AED)',
      loanTenure: 'Loan Tenure (Years)',
      interestRate: 'Interest Rate (%)',
      monthlyPayment: 'Estimated Monthly Payment',
      totalInterest: 'Total Interest Payable',
      annualRent: 'Expected Annual Rent (AED)',
      serviceCharge: 'Annual Service Charges (%)',
      netYield: 'Estimated Net Rental Yield',
      tenYearAppreciation: '10-Year Capital Growth Projection',
      calculate: 'Recalculate Projections',
    },
    contact: {
      title: 'PRIVATE CONSULTATION & BOOKING',
      subtitle: 'Schedule an in-person viewing or confidential consultation with our Senior Luxury Advisory team.',
      fullName: 'Full Name',
      phoneWhatsapp: 'WhatsApp / Phone Number',
      email: 'Email Address',
      message: 'Consultation Requirements / Specific Preferences',
      preferredDate: 'Preferred Date',
      preferredTime: 'Preferred Time',
      submitRequest: 'Confirm Consultation Request',
      dubaiOffice: 'Dubai Flagship Office: Boulevard Plaza Tower 1, Downtown Dubai',
      abuDhabiOffice: 'Abu Dhabi Branch: Saadiyat Cultural District, Abu Dhabi',
      workingHours: 'Mon - Sun: 9:00 AM - 9:00 PM (GST)',
    },
    leadPopup: {
      headline: 'Unlock Exclusive Off-Plan Opportunities',
      subtitle: 'Receive first-tier allocation, pre-launch floor plans, and zero-commission VIP pricing directly via WhatsApp.',
      namePlaceholder: 'Your Full Name',
      whatsappPlaceholder: '+971 50 000 0000 (WhatsApp)',
      emailPlaceholder: 'yourname@domain.com',
      budgetPlaceholder: 'Investment Budget (e.g. 5M - 20M AED)',
      submitButton: 'Get VIP Off-Plan Access',
      privacyNote: '100% Confidential. No spam guarantee.',
      successMessage: 'Thank you. Our Senior Director will contact you via WhatsApp shortly.',
    },
    footer: {
      about: 'HAVEST PROPERTIES is a premier luxury real estate brokerage licensed by Abu Dhabi Department of Municipalities and Transport (ADM) and Dubai Department of Economy and Tourism.',
      quickLinks: 'Quick Navigation',
      licensedBrokerage: 'Licensed & Registered UAE Brokerage',
      allRightsReserved: 'All Rights Reserved. HAVEST PROPERTIES LLC.',
    },
  },

  ar: {
    header: {
      home: 'الرئيسية',
      properties: 'العقارات',
      offPlan: 'المشاريع قيد الإنشاء',
      investorHub: 'مركز المستثمرين',
      contact: 'التواصل والحجز',
      vipConsultation: 'استشارة خاصة',
      callUs: '+971 50 500 2896',
      emailUs: 'Info@havestproperties.com',
      commercialLicense: 'الرخصة التجارية: CN-6347100',
      brokerLicense: 'رخصة الوساطة (ADM): 202600464262',
    },
    hero: {
      headline: 'اكتشف دارك الاستثنائية في دولة الإمارات',
      subheadline: 'نجمع لك أفخم البنتهاوسات، الفلل الشاطئية الخاصة، والمشاريع الاستثمارية الواعدة في دبي وأبوظبي.',
      searchTabBuy: 'شراء',
      searchTabRent: 'إيجار',
      searchTabOffPlan: 'قيد الإنشاء',
      locationLabel: 'الموقع',
      locationPlaceholder: 'نخلة جميرا، داون تاون، السعديات...',
      propertyTypeLabel: 'نوع العقار',
      allTypes: 'جميع الأنواع',
      priceRangeLabel: 'نطاق السعر (درهم)',
      searchButton: 'بحث عن العقارات الفاخرة',
      allLocations: 'جميع المواقع',
    },
    stats: {
      transacted: '+2.8 مليار$',
      transactedLabel: 'حجم التعاملات',
      portfolio: '+500',
      portfolioLabel: 'عقار فاخر حصري',
      goldenVisa: '100%',
      goldenVisaLabel: 'نسبة نجاح الإقامة الذهبية',
      satisfaction: '99.4%',
      satisfactionLabel: 'رضا كبار المستثمرين',
    },
    home: {
      featuredTitle: 'العقارات السكنية الفاخرة الحصرية',
      featuredSubtitle: 'تحف معمارية مختارة بعناية توفر أعلى مستويات الخصوصية والفخامة في أفضل مواقع الإمارات.',
      viewAllProperties: 'استكشف كافة العقارات',
      offPlanTitle: 'مشاريع متميزة قيد الإنشاء',
      offPlanSubtitle: 'وصول كبار الشخصيات المباشر لإطلاق مشاريع إعمار، الدار، صبحة، وسيلكت جروب بخطط سداد مرنة.',
      exploreOffPlan: 'عرض المشاريع قيد الإنشاء',
      faqTitle: 'الأسئلة الشائعة والمعلومات العقارية في الإمارات',
      faqSubtitle: 'إجابات شاملة للمستثمرين الدوليين والمقيمين الراغبين في التملك العقاري بدولة الإمارات.',
      developerPartners: 'شراكات مباشرة مع كبار المطورين',
      whyChooseTitle: 'تميز هافست العقارية',
      whyChooseSubtitle: 'استشارات عقارية خاصة بسرية تامة تخدم العائلات الملكية والمستثمرين الدوليين.',
    },
    property: {
      beds: 'غرف',
      baths: 'حمامات',
      sqft: 'قدم مربع',
      price: 'درهم',
      inquireNow: 'استفسر الآن',
      scheduleViewing: 'حجز معاينة خاصة',
      goldenVisaBadge: 'مؤهل للإقامة الذهبية',
      viewMap: 'عرض على الخريطة التفاعلية',
      keyDetails: 'تفاصيل العقار الرئيسية',
      amenities: 'المرافق الحصرية',
      developer: 'المطور',
      completion: 'موعد التسليم',
    },
    offPlan: {
      title: 'مركز المشاريع قيد الإنشاء في الإمارات',
      subtitle: 'احجز وحدتك السكنية قبل الطرح العام مع خطط سداد مخصصة 60/40 وما بعد التسليم.',
      startingFrom: 'الأسعار تبدأ من',
      handover: 'تاريخ التسليم',
      paymentPlan: 'خطة الدفع',
      requestBrochure: 'طلب الكتيب والمخططات',
      viewDetails: 'عرض تفاصيل المشروع',
    },
    investor: {
      title: 'مركز التحليلات والاستثمار',
      subtitle: 'احسب أقساط الرهن العقاري، العائد الإيجاري المتوقع، وشروط الحصول على الإقامة الذهبية.',
      mortgageCalc: 'حاسبة الرهن العقاري',
      roiCalc: 'حاسبة العائد الاستثماري',
      goldenVisaCalc: 'مؤشر الإقامة الذهبية',
      propertyPrice: 'قيمة العقار (درهم)',
      downPayment: 'الدفعة الأولى (درهم)',
      loanTenure: 'مدة التمويل (سنوات)',
      interestRate: 'نسبة الفائدة (%)',
      monthlyPayment: 'القسط الشهري المتوقع',
      totalInterest: 'إجمالي الفوائد',
      annualRent: 'الإيجار السنوي المتوقع (درهم)',
      serviceCharge: 'رسوم الصيانة السنوية (%)',
      netYield: 'صافي العائد الإيجاري المتوقع',
      tenYearAppreciation: 'نمو رأس المال المتوقع خلال 10 سنوات',
      calculate: 'إعادة الحساب',
    },
    contact: {
      title: 'حجز الاستشارات الخاصة',
      subtitle: 'احجز معاينة ميدانية أو جلسة استشارية مغلقة مع فريق كبار المستشارين لدينا.',
      fullName: 'الاسم الكامل',
      phoneWhatsapp: 'رقم الواتساب / الهاتف',
      email: 'البريد الإلكتروني',
      message: 'تفاصيل الاستفسار أو تفضيلات الشراء',
      preferredDate: 'التاريخ المفضل',
      preferredTime: 'الوقت المفضل',
      submitRequest: 'تأكيد طلب الاستشارة',
      dubaiOffice: 'المقر الرئيسي بدبي: برج بوليفارد بلازا 1، داون تاون دبي',
      abuDhabiOffice: 'فرع أبوظبي: المنطقة الثقافية بالسعديات، أبوظبي',
      workingHours: 'الإثنين - الأحد: 9:00 صباحاً - 9:00 مساءً (توقيت الإمارات)',
    },
    leadPopup: {
      headline: 'احصل على فرص حصريّة قيد الإنشاء',
      subtitle: 'احصل على أولوية الحجز، مخططات الطوابق، وأسعار التأسيس الحصرية مباشرة عبر الواتساب.',
      namePlaceholder: 'الاسم الكامل',
      whatsappPlaceholder: '+971 50 000 0000 (واتساب)',
      emailPlaceholder: 'name@domain.com',
      budgetPlaceholder: 'ميزانية الاستثمار (مثال: 5 - 20 مليون درهم)',
      submitButton: 'احصل على دخول VIP للمشاريع',
      privacyNote: 'سرية تامة 100%. بدون إزعاج.',
      successMessage: 'شكراً لك. سيتواصل معك مدير المستشارين عبر الواتساب قريباً.',
    },
    footer: {
      about: 'هافست العقارية هي وساطة عقارية فاخرة مرخصة من دائرة البلديات والنقل بأبوظبي وزائرة الاقتصاد والسياحة بدبي.',
      quickLinks: 'روابط السريعة',
      licensedBrokerage: 'وساطة عقارية معتمدة في دولة الإمارات',
      allRightsReserved: 'جميع الحقوق محفوظة. هافست العقارية ش.ذ.م.',
    },
  },

  ru: {
    header: {
      home: 'Главная',
      properties: 'Недвижимость',
      offPlan: 'Строящиеся объекты',
      investorHub: 'Инвесторам',
      contact: 'Контакты и бронирование',
      vipConsultation: 'VIP Консультация',
      callUs: '+971 50 500 2896',
      emailUs: 'Info@havestproperties.com',
      commercialLicense: 'Коммерческая лицензия: CN-6347100',
      brokerLicense: 'Лицензия брокера (ADM): 202600464262',
    },
    hero: {
      headline: 'ОТКРОЙТЕ ДЛЯ СЕБЯ ЭЛИТНУЮ НЕДВИЖИМОСТЬ В ОАЭ',
      subheadline: 'Эксклюзивные пентхаусы, виллы на побережье и высокодоходные строящиеся объекты в Дубае и Абу-Даби.',
      searchTabBuy: 'Купить',
      searchTabRent: 'Аренда',
      searchTabOffPlan: 'Off-Plan',
      locationLabel: 'Локация',
      locationPlaceholder: 'Palm Jumeirah, Downtown, Saadiyat...',
      propertyTypeLabel: 'Тип недвижимости',
      allTypes: 'Все типы',
      priceRangeLabel: 'Цена (AED)',
      searchButton: 'Найти элитные объекты',
      allLocations: 'Все локации',
    },
    stats: {
      transacted: '$2.8B+',
      transactedLabel: 'Объем сделок',
      portfolio: '500+',
      portfolioLabel: 'Премиальных объектов',
      goldenVisa: '100%',
      goldenVisaLabel: 'Успех получения Золотой визы',
      satisfaction: '99.4%',
      satisfactionLabel: 'Удовлетворенность клиентов',
    },
    home: {
      featuredTitle: 'ЭЛИТНЫЕ РЕЗИДЕНЦИИ',
      featuredSubtitle: 'Архитектурные шедевры с максимальным уровнем приватности в престижных районах ОАЭ.',
      viewAllProperties: 'Смотреть все объекты',
      offPlanTitle: 'ЭКСКЛЮЗИВНЫЕ ПРОЕКТЫ OFF-PLAN',
      offPlanSubtitle: 'Прямой доступ к старту продаж от Emaar, Aldar, Sobha и Select Group с гибкими планами оплаты.',
      exploreOffPlan: 'Все проекты Off-Plan',
      faqTitle: 'ВОПРОСЫ И ОТВЕТЫ О НЕДВИЖИМОСТИ ОАЭ',
      faqSubtitle: 'Важнейшая информация для инвесторов и покупателей недвижимости в Эмиратах.',
      developerPartners: 'ПРЯМОЕ ПАРТНЕРСТВО С ЗАСТРОЙЩИКАМИ',
      whyChooseTitle: 'ПРЕИМУЩЕСТВА HAVEST',
      whyChooseSubtitle: 'Конфиденциальный премиальный сервис для международных инвесторов и частных лиц.',
    },
    property: {
      beds: 'Спальни',
      baths: 'Ванные',
      sqft: 'Кв. футы',
      price: 'AED',
      inquireNow: 'Запросить детально',
      scheduleViewing: 'Записаться на просмотр',
      goldenVisaBadge: 'Подходит под Золотую визу',
      viewMap: 'Посмотреть на карте',
      keyDetails: 'Характеристики объекта',
      amenities: 'Удобства и сервисы',
      developer: 'Застройщик',
      completion: 'Срок сдачи',
    },
    offPlan: {
      title: 'КАТАЛОГ СТРОЯЩЕЙСЯ НЕДВИЖИМОСТИ',
      subtitle: 'Бронирование до официального старта продаж с удобной рассрочкой 60/40 и после сдачи объекта.',
      startingFrom: 'Цена от',
      handover: 'Срок сдачи',
      paymentPlan: 'План оплаты',
      requestBrochure: 'Запросить брошюру и планировки',
      viewDetails: 'Подробнее о проекте',
    },
    investor: {
      title: 'АНАЛИТИЧЕСКИЙ ЦЕНТР ИНВЕСТОРА',
      subtitle: 'Расчет ипотеки, арендной доходности (ROI) и условий получения Золотой Визы ОАЭ.',
      mortgageCalc: 'Ипотечный калькулятор',
      roiCalc: 'Калькулятор доходности (ROI)',
      goldenVisaCalc: 'Проверка Золотой Визы',
      propertyPrice: 'Стоимость недвижимости (AED)',
      downPayment: 'Первоначальный взнос (AED)',
      loanTenure: 'Срок кредита (лет)',
      interestRate: 'Процентная ставка (%)',
      monthlyPayment: 'Ежемесячный платеж',
      totalInterest: 'Переплата по процентам',
      annualRent: 'Ожидаемая аренда в год (AED)',
      serviceCharge: 'Обслуживание в год (%)',
      netYield: 'Чистая арендная доходность',
      tenYearAppreciation: 'Прогноз роста капитала за 10 лет',
      calculate: 'Рассчитать показатели',
    },
    contact: {
      title: 'КОНСУЛЬТАЦИЯ И БРОНИРОВАНИЕ',
      subtitle: 'Запланируйте приватный просмотр или встречу с нашим старшим инвестиционным экспертом.',
      fullName: 'Полное имя',
      phoneWhatsapp: 'Номер WhatsApp / Телефон',
      email: 'Электронная почта',
      message: 'Ваши пожелания и вопросы',
      preferredDate: 'Удобная дата',
      preferredTime: 'Удобное время',
      submitRequest: 'Подтвердить запись',
      dubaiOffice: 'Главный офис в Дубае: Boulevard Plaza Tower 1, Downtown Dubai',
      abuDhabiOffice: 'Офис в Абу-Даби: Saadiyat Cultural District, Abu Dhabi',
      workingHours: 'Пн - Вс: 9:00 - 21:00 (GST)',
    },
    leadPopup: {
      headline: 'Эксклюзивный доступ к проектам Off-Plan',
      subtitle: 'Получите закрытые планировки, цены старта продаж и персональные условия в WhatsApp.',
      namePlaceholder: 'Ваше имя',
      whatsappPlaceholder: '+971 50 000 0000 (WhatsApp)',
      emailPlaceholder: 'name@domain.com',
      budgetPlaceholder: 'Бюджет инвестиций (напр. 5M - 20M AED)',
      submitButton: 'Получить VIP доступ',
      privacyNote: '100% Конфиденциально. Без спама.',
      successMessage: 'Спасибо! Наш старший директор свяжется с вами в WhatsApp.',
    },
    footer: {
      about: 'HAVEST PROPERTIES — лицензированный брокер премиальной недвижимости в Дубае и Абу-Даби (ADM).',
      quickLinks: 'Быстрая навигация',
      licensedBrokerage: 'Лицензированное брокерское агентство ОАЭ',
      allRightsReserved: 'Все права защищены. HAVEST PROPERTIES LLC.',
    },
  },

  zh: {
    header: {
      home: '首页',
      properties: '豪宅房源',
      offPlan: '期房中心',
      investorHub: '投资中心',
      contact: '联系与预约',
      vipConsultation: 'VIP 私人咨询',
      callUs: '+971 50 500 2896',
      emailUs: 'Info@havestproperties.com',
      commercialLicense: '商业许可证: CN-6347100',
      brokerLicense: '经纪人许可证 (ADM): 202600464262',
    },
    hero: {
      headline: '探索您在阿联酋的尊贵顶奢府邸',
      subheadline: '精选迪拜与阿布扎比顶层大宅、私人海滩别墅以及高投资回报的期房地标项目。',
      searchTabBuy: '买房',
      searchTabRent: '租房',
      searchTabOffPlan: '期房地标',
      locationLabel: '区域位置',
      locationPlaceholder: '朱美拉棕榈岛、市中心 Downtown...',
      propertyTypeLabel: '物业类型',
      allTypes: '所有类型',
      priceRangeLabel: '价格区间 (AED)',
      searchButton: '搜索尊享豪宅',
      allLocations: '所有区域',
    },
    stats: {
      transacted: '$2.8B+',
      transactedLabel: '成交总额',
      portfolio: '500+',
      portfolioLabel: '独家顶奢房源',
      goldenVisa: '100%',
      goldenVisaLabel: '黄金签证获批率',
      satisfaction: '99.4%',
      satisfactionLabel: '高净值客户满意度',
    },
    home: {
      featuredTitle: '臻选顶奢住宅',
      featuredSubtitle: '严选兼具极致私密与地标景观的建筑杰作，坐落于阿联酋核心地段。',
      viewAllProperties: '查看全部房源',
      offPlanTitle: '独家期房地标项目',
      offPlanSubtitle: '直连 Emaar、Aldar、Sobha 与 Select Group 官方最高优先级选房与分期付款。',
      exploreOffPlan: '探索期房项目',
      faqTitle: '阿联酋房产常见问题与指南',
      faqSubtitle: '为全球投资者及高净值买家提供专业权威的阿联酋购房答疑。',
      developerPartners: '开发商官方直接合作',
      whyChooseTitle: 'HAVEST 独家优势',
      whyChooseSubtitle: '为皇室成员、全球创始人及机构投资者提供高度保密的定制化地产顾问服务。',
    },
    property: {
      beds: '卧室',
      baths: '浴室',
      sqft: '平方英尺',
      price: 'AED',
      inquireNow: '立即咨询',
      scheduleViewing: '预约私人看房',
      goldenVisaBadge: '符合黄金签证资格',
      viewMap: '在地图中查看',
      keyDetails: '豪宅核心参数',
      amenities: '尊享设施',
      developer: '开发商',
      completion: '交付时间',
    },
    offPlan: {
      title: '阿联酋期房地标中心',
      subtitle: '在公开发售前优先锁房，享受 60/40 及交付后灵活付款计划。',
      startingFrom: '起售价',
      handover: '交付日期',
      paymentPlan: '付款计划',
      requestBrochure: '索取 VIP 楼书与户型图',
      viewDetails: '查看项目详情',
    },
    investor: {
      title: '投资者智能分析中心',
      subtitle: '计算按揭月供、预期租金收益率 (ROI)、净收益与阿联酋 10 年黄金签证申请门槛。',
      mortgageCalc: '房贷计算器',
      roiCalc: 'ROI 租金收益计算',
      goldenVisaCalc: '黄金签证评估',
      propertyPrice: '房产总价 (AED)',
      downPayment: '首付款 (AED)',
      loanTenure: '贷款年限 (年)',
      interestRate: '贷款利率 (%)',
      monthlyPayment: '预计每月还款',
      totalInterest: '总利息支出',
      annualRent: '预计年租金收入 (AED)',
      serviceCharge: '每年物业管理费 (%)',
      netYield: '预计净租金收益率',
      tenYearAppreciation: '10 年资本增值预测',
      calculate: '重新计算数据',
    },
    contact: {
      title: '私人咨询与预约',
      subtitle: '安排实地看房或与我们的资深豪宅顾问进行保密会谈。',
      fullName: '您的姓名',
      phoneWhatsapp: 'WhatsApp / 电话号码',
      email: '电子邮箱',
      message: '咨询需求或特定偏好',
      preferredDate: '希望日期',
      preferredTime: '希望时间',
      submitRequest: '确认提交预约',
      dubaiOffice: '迪拜旗舰办公室: Downtown Dubai, Boulevard Plaza Tower 1',
      abuDhabiOffice: '阿布扎比办公室: Saadiyat Cultural District, Abu Dhabi',
      workingHours: '周一至周日: 9:00 - 21:00 (GST)',
    },
    leadPopup: {
      headline: '解锁独家期房优先选房通道',
      subtitle: '直接在 WhatsApp 接收开盘前户型图、官方底价与零佣金 VIP 优惠。',
      namePlaceholder: '您的姓名',
      whatsappPlaceholder: '+971 50 000 0000 (WhatsApp)',
      emailPlaceholder: 'name@domain.com',
      budgetPlaceholder: '投资预算 (例如 500万 - 2000万 AED)',
      submitButton: '获取 VIP 优先通道',
      privacyNote: '100% 高度保密。绝无垃圾信息。',
      successMessage: '感谢您的提交。我们的高级总监将很快通过 WhatsApp 与您联系。',
    },
    footer: {
      about: 'HAVEST PROPERTIES 是获得阿布扎比市政与交通部 (ADM) 及迪拜经济旅游部认证的顶奢房地产经纪机构。',
      quickLinks: '快速导航',
      licensedBrokerage: '阿联酋持牌官方认证房产经纪',
      allRightsReserved: '版权所有。HAVEST PROPERTIES LLC.',
    },
  },
};
