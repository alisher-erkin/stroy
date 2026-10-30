// Тексты сайта на двух языках.
// Узбекский — обновлённая латиница (закон от 21.10.2026): oʻ → ö, gʻ → ğ, sh → ş, ch → ç.

const ru = {
  meta: {
    title: 'TASTROY — ремонт квартир и домов',
  },
  nav: {
    about: 'О НАС',
    design: 'ДИЗАЙН',
    repair: 'РЕМОНТ',
    contacts: 'КОНТАКТЫ',
  },
  footer: {
    nav: {
      about: 'О нас',
      design: 'Дизайн',
      repair: 'Ремонт',
      contacts: 'Контакты',
    },
    services: [
      'Капитальный ремонт',
      'Ремонт в новостройке',
      'Косметический ремонт',
      'Коммерческий ремонт',
    ],
    phone: 'Телефон',
  },
  about: {
    title: 'О НАС',
    paragraphs: [
      'Компания «TASTROY» специализируется на ремонте квартир, частных домов, дач, офисов, коммерческих и любых других помещений, а также выполнении любого вида мелкого бытового ремонта.',
      'Мы создаем уникальный дизайн интерьера и высококачественно воплощаем его в жизнь для клиентов. Мы работаем как со вторичным жильем или новостройками разной площади и класса, так и с элитными загородными коттеджами. Результатом наших стараний становится идеальный внешний вид, сочетающийся с максимальной функциональностью помещения, способный удовлетворить даже самого взыскательного клиента!',
      'Опытные мастера работают слаженно и всегда принимают взвешенные, рациональные решения, осведомлены о последних новинках строительного рынка и способны грамотно внедрять их в подходящих ситуациях. Нам под силу воплотить любые проекты в жизнь «под ключ» — от бытового ремонта сантехники и электрики до сложнейшего дизайнерского оформления интерьера. Мы скрупулезно относимся к собственности клиента и полностью компенсируем убытки, если в ходе выполнения ремонтных работ ей будет нанесен урон. Мы несем полную ответственность за оказанные услуги, что подтверждаем гарантией сроком до 12 месяцев. Мастера работают быстро и точно, владеют всей необходимой техникой и профессиональными инструментами.',
    ],
    missionTitle: 'Наша миссия',
    mission: 'Наша миссия — выполнить качественный ремонт квартиры таким образом, чтобы Заказчик оставался доволен не только результатами ремонта, но также самим ходом проведения ремонтно-отделочных работ и взаимодействием с нашими сотрудниками, мастерами и прорабами.',
  },
  advantages: {
    title: 'Преимущества нашей компании',
    cards: [
      { title: 'Договор', text: 'Договор на ремонт квартиры. Условия договора. Обязанности сторон.' },
      { title: 'Дизайн', text: 'Дизайн-проект с 3D-визуализацией и коммуникационными чертежами.' },
      { title: 'Опытные мастера', text: 'Бригада мастеров, имеющих многолетний опыт работы.' },
      { title: 'Планирование', text: 'Грамотное планирование с учетом предпочтений Заказчика.' },
      { title: 'Сроки', text: 'Соблюдение и выполнение сроков строительства.' },
      { title: 'Помощь', text: 'Квалифицированная помощь в процессе работы.' },
    ],
    processTitle: 'Порядок работы',
    process: [
      'Телефонный звонок',
      'Составление сметы по проекту',
      'Обсуждение и корректировка договора',
      'Заключение договора',
      'Выезд на объект и поставка материалов',
      'Поэтапное выполнение работ',
      'Поэтапная оплата выполненных работ',
      'Финальная уборка помещения',
      'Подписание заключительного акта',
    ],
  },
  design: {
    title: 'Дизайн-проект',
    paragraphs: [
      'Дизайн-проект — это концептуальное решение всего будущего интерьера, которое состоит из визуализаций (подробных 3D-моделей) и комплекта чертежей, где проработаны и схематично указаны все дизайнерские решения и технические моменты, необходимые для реализации всех задуманных идей в процессе ремонта. Дизайнер должен суметь воплотить желания клиента в реальность.',
      'Дизайнер интерьера полностью продумывает и прописывает вместе с Заказчиком планировочное решение: расставляет мебель в квартире, определяет, как и где ее лучше расположить, какие перепланировки возможны. Дизайнер при помощи программы предлагает различные варианты меблировки, цвет и фактуру, осветительные приборы, розетки, напольное и настенное покрытия. Все эти детали имеют большое значение, так как все это предварительно согласовывается с Заказчиком. С помощью дизайнера вы получаете хороший и качественный ремонт. Дизайнер продумывает и реализовывает дизайн-проект с учетом бюджета Заказчика! И это хорошая инвестиция!',
    ],
    supervisionTitle: 'Авторский надзор',
    supervision: [
      'Авторский надзор — это услуга по сопровождению ремонта и контролю его соответствия дизайн-проекту. Авторский надзор позволяет реализовать дизайн-проект так, как он был задуман, попасть в цвета, фактуру, текстуру и многие другие детали.',
      'Сделав дизайн-проект, Заказчик экономит время, деньги и нервы!',
    ],
    stagesTitle: 'Этапы дизайн-проекта',
    stages: [
      {
        title: 'Сбор информации',
        text: 'Выполняется замер помещения и фотосъемка объекта, определяются ваши предпочтения, разрабатываются планировочные решения, с Заказчиком согласовывается выбор отделочных материалов.',
      },
      {
        title: 'Визуализация',
        text: 'Выполняется дизайн-проект с 3D-визуализацией с учетом предпочтений Заказчика. Предлагаются идеи по разработке дизайн-проекта, а также несколько вариантов по каждому помещению.',
      },
      {
        title: 'Схемы коммуникаций',
        text: 'Разрабатываются схемы в PDF-файле для сантехнических, электрических и при необходимости вентиляционных коммуникаций, а также газового оборудования и отопления.',
      },
    ],
  },
  repair: {
    title: 'Ремонт и его виды',
    paragraphs: [
      'Ремонт — затратное и ответственное мероприятие для собственника жилья. Ремонт своими силами порой непосильная задача. Сложности возникают буквально на каждом шагу: поиск и подбор материалов, поиск качественных и недорогих материалов, понимание, на чем можно сэкономить не в ущерб качеству. В процессе работы этим занимаемся мы. Мы сотрудничаем с проверенными поставщиками.',
      'Также для собственника жилья, запланировавшего ремонт, поиск и подбор строительной бригады — нелегкая задача. Нанимать отдельных специалистов, не знающих друг друга, тоже не вариант. Как показывает опыт, они стараются быстрее сделать и уйти. Вы можете все эти вопросы доверить нам! Наши прорабы являются связующим звеном, которое контролирует и корректирует работу мастеров.',
    ],
    typesTitle: 'Виды ремонта',
    typesText: 'Основными видами ремонта являются косметический, капитальный и авторский (дизайнерский).',
    priceNote: '(Цены указаны без учёта материалов)',
    price: (from, to) => `от ${from}$ до ${to}$ за м²`,
    tariffs: [
      {
        title: 'Косметический ремонт',
        items: [
          'Демонтажные работы',
          'Малярные работы',
          'Настил напольных покрытий',
          'Замена сантехники',
          'Замена розеток и выключателей',
          'Клининговая уборка',
        ],
      },
      {
        title: 'Капитальный ремонт',
        items: [
          'Демонтажные работы',
          'Перепланировка',
          'Штукатурные работы',
          'Малярные работы',
          'Настил напольных покрытий',
          'Электромонтажные работы',
          'Сантехнические работы',
          'Потолочные работы',
          'Плиточные работы',
          'Клининговая уборка',
        ],
      },
      {
        title: 'Авторский ремонт',
        items: [
          'Дизайн-проект',
          'Демонтажные работы',
          'Планировка',
          'Штукатурные работы',
          'Малярные работы',
          'Настил напольных покрытий',
          'Электромонтажные работы',
          'Сантехнические работы',
          'Потолочные работы',
          'Плиточные работы',
          'Фигурные потолки',
          'Клининговая уборка',
        ],
      },
    ],
    materialsTitle: 'Строительные материалы',
    materials: 'Выбор строительных материалов является важным моментом. Чтобы не возникало негативных последствий, выбор строительных материалов нужно доверить профессионалам, у которых есть опыт! Мы сотрудничаем с проверенными поставщиками. Для нас важно в первую очередь качество, поэтому в процессе своей деятельности мы отобрали только лучших поставщиков. Мы поможем и грамотно проконсультируем при выборе строительных материалов! Подбор материалов детально обсуждается с Заказчиком.',
  },
  contacts: {
    title: 'Контакты',
    phone: 'Телефон',
    hoursLabel: 'Режим работы',
    hours: '10:00 до 19:00',
    email: 'Почта',
  },
};

const uz = {
  meta: {
    title: 'TASTROY — kvartira va uylarni taʼmirlaş',
  },
  nav: {
    about: 'BIZ HAQIMIZDA',
    design: 'DIZAYN',
    repair: 'TAʼMIR',
    contacts: 'KONTAKTLAR',
  },
  footer: {
    nav: {
      about: 'Biz haqimizda',
      design: 'Dizayn',
      repair: 'Taʼmir',
      contacts: 'Kontaktlar',
    },
    services: [
      'Kapital taʼmir',
      'Yangi uylarda taʼmir',
      'Kosmetik taʼmir',
      'Tijorat binolarini taʼmirlaş',
    ],
    phone: 'Telefon',
  },
  about: {
    title: 'BIZ HAQIMIZDA',
    paragraphs: [
      '«TASTROY» kompaniyasi kvartiralar, xususiy uylar, dala hovlilar, ofislar, tijorat va boşqa har qanday binolarni taʼmirlaşga, şuningdek, har qanday mayda maişiy taʼmirlaş işlarini bajarişga ixtisoslaşgan.',
      'Biz mijozlar uçun betakror interyer dizaynini yaratamiz va uni yuqori sifat bilan hayotga tatbiq etamiz. Turli maydon va toifadagi ikkilamçi uy-joylar va yangi binolar, şuningdek, şahar taşqarisidagi haşamatli kottejlar bilan işlaymiz. Harakatlarimiz natijasi — xonaning maksimal funksionalligi bilan uyğunlaşgan mukammal taşqi köriniş bölib, u eng talabçan mijozni ham qoniqtira oladi!',
      'Tajribali ustalar hamjihatlikda işlaydi va doimo puxta öylangan, oqilona qarorlar qabul qiladi, qurilish bozoridagi eng sönggi yangiliklardan xabardor va ularni örinli vaziyatlarda malakali qöllay oladi. Biz har qanday loyihani «kalit topşiriş» asosida amalga oşira olamiz — santexnika va elektrni oddiy maişiy taʼmirlaşdan tortib eng murakkab dizaynerlik interyer bezagigaça. Mijozning mulkiga ehtiyotkorlik bilan munosabatda bölamiz va taʼmirlaş işlari davomida unga zarar yetkazilsa, zararni töliq qoplaymiz. Körsatilgan xizmatlar uçun töliq javobgarlikni öz zimmamizga olamiz va buni 12 oygaça kafolat bilan tasdiqlaymiz. Ustalar tez va aniq işlaydi, barça zarur texnika va professional asboblarga ega.',
    ],
    missionTitle: 'Bizning missiyamiz',
    mission: 'Bizning missiyamiz — kvartirani şunday sifatli taʼmirlaşki, Buyurtmaçi nafaqat taʼmir natijalaridan, balki taʼmir-pardozlaş işlarining borişidan hamda xodimlarimiz, ustalarimiz va prorablarimiz bilan muloqotdan ham mamnun bölsin.',
  },
  advantages: {
    title: 'Kompaniyamizning afzalliklari',
    cards: [
      { title: 'Şartnoma', text: 'Kvartirani taʼmirlaş böyiça şartnoma. Şartnoma şartlari. Tomonlarning majburiyatlari.' },
      { title: 'Dizayn', text: '3D vizualizatsiya va kommunikatsiya çizmalari bilan dizayn loyiha.' },
      { title: 'Tajribali ustalar', text: 'Köp yillik iş tajribasiga ega ustalar brigadasi.' },
      { title: 'Rejalaştiriş', text: 'Buyurtmaçining xohişlarini hisobga olgan holda puxta rejalaştiriş.' },
      { title: 'Muddatlar', text: 'Qurilish muddatlariga rioya qiliş va işlarni öz vaqtida bajariş.' },
      { title: 'Yordam', text: 'Iş jarayonida malakali yordam.' },
    ],
    processTitle: 'Iş tartibi',
    process: [
      'Telefon orqali boğlaniş',
      'Loyiha böyiça smeta tuziş',
      'Şartnomani muhokama qiliş va tuzatiş',
      'Şartnoma tuziş',
      'Obyektga çiqiş va materiallarni yetkazib beriş',
      'Işlarni bosqiçma-bosqiç bajariş',
      'Bajarilgan işlar uçun bosqiçma-bosqiç tölov',
      'Xonani yakuniy tozalaş',
      'Yakuniy dalolatnomani imzolaş',
    ],
  },
  design: {
    title: 'Dizayn loyiha',
    paragraphs: [
      'Dizayn loyiha — bu kelajakdagi butun interyerning konseptual yeçimi bölib, u vizualizatsiyalar (batafsil 3D modellar) va çizmalar töplamidan iborat. Unda taʼmir jarayonida barça ğoyalarni amalga oşiriş uçun zarur bölgan dizaynerlik yeçimlari va texnik jihatlar puxta işlab çiqilgan va sxematik körsatilgan. Dizayner mijozning istaklarini haqiqatga aylantira olişi kerak.',
      'Interyer dizayneri Buyurtmaçi bilan birgalikda reja yeçimini töliq öylab çiqadi: kvartiradagi mebellarni joylaştiradi, ularni qayerga va qanday joylaştiriş yaxşiroq ekanini, qanday qayta rejalaştirişlar mumkinligini belgilaydi. Dizayner maxsus dastur yordamida mebel joylaşuvi, rang va faktura, yoritiş moslamalari, rozetkalar, pol va devor qoplamalarining turli variantlarini taklif qiladi. Bu detallarning barçasi katta ahamiyatga ega, çunki ularning hammasi Buyurtmaçi bilan oldindan kelişib olinadi. Dizayner yordamida siz yaxşi va sifatli taʼmirga ega bölasiz. Dizayner dizayn loyihani Buyurtmaçining budjetini hisobga olgan holda işlab çiqadi va amalga oşiradi! Bu esa yaxşi investitsiya!',
    ],
    supervisionTitle: 'Mualliflik nazorati',
    supervision: [
      'Mualliflik nazorati — taʼmirning dizayn loyihaga mosligini kuzatib boriş xizmati. Mualliflik nazorati dizayn loyihani aynan öylanganidek amalga oşiriş, ranglar, faktura, tekstura va boşqa köplab detallarda adaşmaslik imkonini beradi.',
      'Dizayn loyiha buyurtma qilib, Buyurtmaçi vaqt, pul va asablarini tejaydi!',
    ],
    stagesTitle: 'Dizayn loyiha bosqiçlari',
    stages: [
      {
        title: 'Maʼlumot yiğiş',
        text: 'Xona ölçanadi va obyekt suratga olinadi, sizning xohişlaringiz aniqlanadi, reja yeçimlari işlab çiqiladi, pardozlaş materiallarini tanlaş Buyurtmaçi bilan kelişiladi.',
      },
      {
        title: 'Vizualizatsiya',
        text: 'Buyurtmaçining xohişlarini hisobga olgan holda 3D vizualizatsiyali dizayn loyiha bajariladi. Dizayn loyiha böyiça ğoyalar, şuningdek, har bir xona uçun bir neçta variant taklif etiladi.',
      },
      {
        title: 'Kommunikatsiya sxemalari',
        text: 'Santexnika, elektr va zarur bölganda ventilyatsiya kommunikatsiyalari, şuningdek, gaz uskunalari va isitiş tizimi uçun PDF-fayldagi sxemalar işlab çiqiladi.',
      },
    ],
  },
  repair: {
    title: 'Taʼmir va uning turlari',
    paragraphs: [
      'Taʼmir — uy egasi uçun xarajatli va masʼuliyatli tadbir. Taʼmirni öz kuçingiz bilan qiliş baʼzan imkonsiz vazifa. Qiyinçiliklar deyarli har qadamda yuzaga keladi: materiallarni qidiriş va tanlaş, sifatli va arzon materiallarni topiş, sifatga zarar yetkazmasdan nimani tejaş mumkinligini biliş. Iş jarayonida bu bilan biz şuğullanamiz. Biz işonçli yetkazib beruvçilar bilan hamkorlik qilamiz.',
      'Şuningdek, taʼmirni rejalaştirgan uy egasi uçun qurilish brigadasini qidiriş va tanlaş ham oson emas. Bir-birini tanimaydigan alohida mutaxassislarni yollaş ham yaxşi variant emas. Tajriba körsatişiça, ular işni tezroq bitirib ketişga harakat qiladi. Bu masalalarning barçasini bizga işonib topşirişingiz mumkin! Prorablarimiz ustalar işini nazorat qiladigan va tuzatib boradigan boğlovçi böğin hisoblanadi.',
    ],
    typesTitle: 'Taʼmir turlari',
    typesText: 'Taʼmirning asosiy turlari — kosmetik, kapital va mualliflik (dizaynerlik) taʼmiri.',
    priceNote: '(Narxlar materiallarsiz körsatilgan)',
    price: (from, to) => `1 m² uçun ${from}$ dan ${to}$ gaça`,
    tariffs: [
      {
        title: 'Kosmetik taʼmir',
        items: [
          'Demontaj işlari',
          'Böyoq işlari',
          'Pol qoplamalarini yotqiziş',
          'Santexnikani almaştiriş',
          'Rozetka va kalitlarni almaştiriş',
          'Professional tozalaş',
        ],
      },
      {
        title: 'Kapital taʼmir',
        items: [
          'Demontaj işlari',
          'Qayta rejalaştiriş',
          'Şuvoq işlari',
          'Böyoq işlari',
          'Pol qoplamalarini yotqiziş',
          'Elektr montaj işlari',
          'Santexnika işlari',
          'Şift işlari',
          'Kafel işlari',
          'Professional tozalaş',
        ],
      },
      {
        title: 'Mualliflik taʼmiri',
        items: [
          'Dizayn loyiha',
          'Demontaj işlari',
          'Rejalaştiriş',
          'Şuvoq işlari',
          'Böyoq işlari',
          'Pol qoplamalarini yotqiziş',
          'Elektr montaj işlari',
          'Santexnika işlari',
          'Şift işlari',
          'Kafel işlari',
          'Figurali şiftlar',
          'Professional tozalaş',
        ],
      },
    ],
    materialsTitle: 'Qurilish materiallari',
    materials: 'Qurilish materiallarini tanlaş muhim jihat hisoblanadi. Salbiy oqibatlar yuzaga kelmasligi uçun materiallar tanlovini tajribali mutaxassislarga işonib topşiriş kerak! Biz işonçli yetkazib beruvçilar bilan hamkorlik qilamiz. Biz uçun eng avvalo sifat muhim, şuning uçun faoliyatimiz davomida faqat eng yaxşi yetkazib beruvçilarni tanlab oldik. Qurilish materiallarini tanlaşda malakali maslahat beramiz! Materiallar tanlovi Buyurtmaçi bilan batafsil muhokama qilinadi.',
  },
  contacts: {
    title: 'Kontaktlar',
    phone: 'Telefon',
    hoursLabel: 'Iş vaqti',
    hours: '10:00 dan 19:00 gaça',
    email: 'Poçta',
  },
};

const translations = { ru, uz };

export default translations;
