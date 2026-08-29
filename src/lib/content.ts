/**
 * Sayfa icerikleri. Musteriden gelen manifesto, ilke ve metodoloji
 * metinlerinin yapisallastirilmis hali.
 */

/* ---------------- Vizyon ---------------- */

export const visionStatement =
  "Her bireyin farklılığının değer gördüğü, anlaşıldığı, kabul edildiği ve desteklendiği; kendi potansiyeliyle ve yaşam ekosistemiyle uyum içinde gelişebildiği bir gelecek.";

export const visionPillars = [
  {
    title: "Birey Merkezli",
    body: "Her birey benzersizdir. Neurovyn, her bireyin nörobireysel işleyişini anlamaya odaklanır.",
    colorVar: "--area-egitim",
  },
  {
    title: "Ekosistem Odaklı",
    body: "Birey, içinde bulunduğu ekosistemin bir parçasıdır. Gelişim, birlikte ve bütüncül olarak mümkündür.",
    colorVar: "--area-toplum",
  },
  {
    title: "Etik ve Saygılı",
    body: "Etiketlemek yerine anlamak, yargılamak yerine desteklemek temel ilkemizdir.",
    colorVar: "--area-saglik",
  },
  {
    title: "Yaşam Tasarımı",
    body: "Amaç, uyum sağlamak değil; anlamlı, dengeli ve sürdürülebilir bir yaşam tasarlamaktır.",
    colorVar: "--area-anlam",
  },
  {
    title: "Bilim Temelli",
    body: "Bilimsel araştırmalar, kanıta dayalı yaklaşımlar ve sürekli öğrenme sistemimizin temelidir.",
    colorVar: "--area-kariyer",
  },
  {
    title: "Sistem Yaklaşımı",
    body: "Neurovyn; adımları, araçları ve ilkeleriyle bütünleşik bir dönüşüm sistemi sunar.",
    colorVar: "--area-gelisim",
  },
] as const;

export const corePrinciple = [
  "Anlamak, değerlendirmeden önce gelir.",
  "Farklılık, eksiklik değil; çeşitliliktir.",
  "Her bireyin potansiyeli gelişmeye değerdir.",
  "Destekleyici ekosistemle dönüşüm kalıcıdır.",
  "Bilim, etik ve uygulanabilirlik ile ilerleriz.",
] as const;

/* ---------------- Misyon: 10 Temel İlke ---------------- */

export const missionStatement =
  "Bireyin kendini ve yaşamını anlamasına, farklılıklarını ve potansiyelini keşfetmesine; yaşam ekosistemiyle birlikte daha uyumlu, anlamlı ve sürdürülebilir bir yaşam tasarlamasına rehberlik etmek.";

export const tenPrinciples = [
  { title: "Her beyin benzersizdir.", body: "Her bireyin nörolojik yapısı kendine özgüdür." },
  { title: "Tanı kimlik değildir.", body: "Tanı sadece bir bilgidir, kimliğiniz değildir." },
  { title: "Davranış, bağlamında anlam kazanır.", body: "Her davranış, içinde bulunduğu bağlamla anlamlıdır." },
  { title: "Gelişim, yaşam ekosisteminde gerçekleşir.", body: "Birey, ailesi, okulu, çevresi ve tüm yaşam ekosistemi bir bütündür." },
  { title: "Çevre değiştiğinde gelişim de değişebilir.", body: "Doğru çevre ve destekle potansiyel ortaya çıkar." },
  { title: "Güçlü yönler gelişimin başlangıç noktasıdır.", body: "Odak noktamız eksikler değil, güçlü yönlerdir." },
  { title: "Bilim, günlük yaşama dönüştüğünde değer üretir.", body: "Bilgi ancak yaşama dokunduğunda anlam kazanır." },
  { title: "Sürdürülebilir gelişim küçük ama sürekli adımlarla oluşur.", body: "Küçük adımlar, zamanla büyük dönüşümler yaratır." },
  { title: "Amaç, potansiyeli ortaya çıkarmaktır.", body: "Amaç bireyi değiştirmek değil, potansiyelini ortaya çıkarmaktır." },
  { title: "Ekosistemde kabul, dönüşümü tamamlar.", body: "Bireyin anlaşılması, değer görmesi, katılımı ve aidiyet hissetmesi esastır." },
] as const;

export const acceptanceNote =
  "Ekosistemde Kabul: Bireyin kendi nörolojik farklılığıyla ailesi, okulu, iş yaşamı ve sosyal çevresi içinde anlaşılması, değer görmesi, aktif katılım sağlayabilmesi ve aidiyet hissedebilmesidir.";

/* ---------------- Ne Yapıyoruz: Neurovyn Metodolojisi (NVM) ---------------- */

export const methodologySteps = [
  {
    title: "Anla",
    body: "Bireyin nörolojik yapısını, güçlü yönlerini, ihtiyaçlarını, ilgi alanlarını ve zorluklarını derinlemesine keşfederiz.",
    colorVar: "--area-egitim",
  },
  {
    title: "Haritala",
    body: "Yaşam ekosistemini görünür hale getiririz: aile, okul veya iş, sosyal çevre, fiziksel çevre, günlük yaşam, uyku, beslenme, hareket ve dijital yaşam.",
    colorVar: "--area-toplum",
  },
  {
    title: "Anlamlandır",
    body: "Belirtileri değil, ilişkileri analiz ederiz. “Bu neden oluyor?” sorusunun cevabını birlikte buluruz.",
    colorVar: "--area-kariyer",
  },
  {
    title: "Tasarla",
    body: "Kişiye özel nöroyaşam planı oluştururuz. Hedefleri, stratejileri, çevresel düzenlemeleri ve destek sistemlerini birlikte tasarlarız.",
    colorVar: "--area-gelisim",
  },
  {
    title: "Uygula",
    body: "Planı küçük, uygulanabilir ve sürdürülebilir adımlarla hayata geçiririz. Bireyin ritmine uygun ilerleriz.",
    colorVar: "--area-aile",
  },
  {
    title: "Takip Et",
    body: "İlerlemeyi düzenli olarak izleriz. Geri bildirimlerle planı güncelleriz. Gelişim tek seferlik değil, yaşayan bir süreçtir.",
    colorVar: "--area-anlam",
  },
  {
    title: "Ölç",
    body: "Bilimsel ve işlevsel göstergelerle değişimi değerlendiririz. Nitel ve nicel verilerle ilerlemeyi görünür kılarız.",
    colorVar: "--area-saglik",
  },
  {
    title: "Dönüştür",
    body: "Bireyin yalnızca davranışı değil, yaşam ekosistemi de dönüşür. Birey; kendi potansiyeliyle uyumlu, anlamlı ve dengeli bir yaşam kurar.",
    colorVar: "--area-egitim",
  },
] as const;

/* ---------------- Yaklaşımımız: Neurovyn Yaşam Döngüsü ---------------- */

export const lifeCycle = [
  { title: "Yaşam Pusulası", body: "Bireyin bugünkü konumunu, önceliklerini ve gitmek istediği yönü birlikte belirleriz." },
  { title: "Yaşam Profili", body: "Güçlü yönleri, öğrenme biçimini, ihtiyaçları ve nörobireysel işleyişi bütüncül olarak ortaya koyarız." },
  { title: "Yaşam Ekosistemi Haritalaması", body: "Aile, okul, iş, sosyal çevre ve fiziksel ortamı görünür kılar; aralarındaki etkileşimi haritalarız." },
  { title: "Gelişim Rotası", body: "Kişiye özel hedefleri, stratejileri ve destek sistemlerini içeren yol haritasını birlikte tasarlarız." },
  { title: "Yaşam Laboratuvarı", body: "Planı küçük denemelerle yaşamın içinde uygularız; işe yarayanı büyütür, yaramayanı birlikte değiştiririz." },
  { title: "Takip Sistemi", body: "İlerlemeyi düzenli izler, ölçer ve planı canlı tutarız. Gelişim, yaşayan bir süreçtir." },
] as const;

export const lifeCycleLead =
  "Değerlendirme, planlama, uygulama ve takip süreçlerinden oluşan “Neurovyn Yaşam Döngüsü” çalışma modelimizdir. Bu döngü süreklidir ve her adım bir sonraki aşamayı etkiler.";

export const approachClosing =
  "Yöntemler, araçlar ve uygulamalar değişebilir; ancak yaklaşımımız değişmez. Çünkü bizim için gelişim, bireyi anlamakla başlar; yaşamı bütüncül bir bakış açısıyla değerlendirmek ve bu yolculuğu birlikte tasarlamakla güçlenir.";

/* ---------------- Değer Ürettiğimiz Alanlar: ayrıntı ---------------- */

export type ValueAreaDetail = { lead: string; forWhom: string[] };

export const valueAreasLead =
  "Bireyin kendisiyle, çevresiyle ve yaşam ekosistemiyle kurduğu ilişkiyi güçlendirerek; farkındalık, uyum ve sürdürülebilir gelişimi destekliyoruz.";

/* TODO: asagidaki aciklamalar taslaktir; musteri onayindan sonra
   yonetim panelinden guncellenecek. */
export const valueAreaDetails: Record<string, ValueAreaDetail> = {
  "bireysel-gelisim-ve-farkindalik": {
    lead: "Bireyin kendi işleyişini tanımasına, güçlü yönlerini görmesine ve yaşamına bilinçli bir yön vermesine eşlik ederiz.",
    forWhom: [
      "Kendini daha iyi anlamak isteyen yetişkinler",
      "Yaşamında yön ve anlam arayanlar",
      "Farkındalığını derinleştirmek isteyenler",
    ],
  },
  "egitim-ve-ogrenme": {
    lead: "Öğrenmenin nasıl gerçekleştiğini bireyin kendine özgü işleyişi üzerinden ele alır; çalışma düzenini ve öğrenme ortamını birlikte tasarlarız.",
    forWhom: [
      "Öğrenciler ve aileleri",
      "Çalışma düzeni ve odaklanmada destek arayanlar",
      "Öğrenme ortamını yeniden kurmak isteyen eğitimciler",
    ],
  },
  "aile-ve-ebeveynlik": {
    lead: "Aileyi gelişimin doğal bir parçası olarak görür; iletişimi, ev içi düzeni ve karşılıklı anlayışı güçlendirmeye çalışırız.",
    forWhom: [
      "Çocuğunu daha iyi anlamak isteyen ebeveynler",
      "Ev içi düzen ve iletişimde destek arayan aileler",
      "Okul ile aile arasında köprü kurmak isteyenler",
    ],
  },
  "norocesitlilik-ve-kapsayicilik": {
    lead: "Nöroçeşitliliği düzeltilmesi gereken bir kusur değil, anlaşılması gereken bir özellik olarak ele alırız. Odağımız birey ile çevresi arasındaki uyumdur.",
    forWhom: [
      "Nöroçeşitli çocuklar, gençler ve yetişkinler",
      "Tanıyı etiket değil, bilgi olarak ele almak isteyenler",
      "Kapsayıcı ortam kurmak isteyen kurumlar",
    ],
  },
  "iliskiler-ve-sosyal-yasam": {
    lead: "Yaşam; ilişkiler, bağlar ve anlam üzerine kurulur. Bireyin sosyal çevresiyle kurduğu ilişkiyi anlamlandırmasına ve güçlendirmesine destek oluruz.",
    forWhom: [
      "İlişkilerinde daha sağlıklı bağlar kurmak isteyenler",
      "Sosyal ortamlarda zorlanan bireyler",
      "Aidiyet ve kabul arayışındaki kişiler",
    ],
  },
  "kariyer-ve-yetiskin-yasami": {
    lead: "Yetenekleri, ilgi alanlarını ve yaşam koşullarını birlikte değerlendirir; kariyerin bireyin bütününe uyumlu olmasına çalışırız.",
    forWhom: [
      "Kariyerinde yön arayan yetişkinler",
      "İş yaşamı ile özel yaşam arasında denge kurmak isteyenler",
      "Kapsayıcı çalışma kültürü kurmak isteyen ekipler",
    ],
  },
  "yasam-ekosistemleri": {
    lead: "Aile, okul, iş, sosyal çevre ve fiziksel ortamı bir bütün olarak haritalar; bireyi çevreleyen sistemin destekleyici hâle gelmesine çalışırız.",
    forWhom: [
      "Yaşam düzenini bütüncül olarak gözden geçirmek isteyenler",
      "Eğitim kurumları ve okullar",
      "Kurumlar ve iş dünyası",
    ],
  },
};

/* ---------------- Ne Yapıyoruz: hizmet açıklamaları ---------------- */

export const servicesLead =
  "Bireyi kendi yaşam ekosistemi içinde ele alıyor; kendini anlamasına, ihtiyaçlarını ve potansiyelini keşfetmesine, gelişim alanlarını belirlemesine ve yaşamını kendi ihtiyaçları doğrultusunda tasarlamasına rehberlik ediyoruz.";

/* ---------------- Bilimsel Temelimiz ---------------- */

export const scientificBasisLead =
  "Neurovyn; bireyi, yaşamını ve içinde bulunduğu ekosistemi bütüncül biçimde ele alan disiplinlerarası bir yaklaşımdır.";

export const scientificBasis = [
  {
    title: "Nörobilim",
    body: "Beyin, biliş, dikkat, duygu ve davranış süreçlerine ilişkin bilimsel bilgiden yararlanırız.",
    colorVar: "--area-egitim",
  },
  {
    title: "Psikoloji",
    body: "Bireyin düşünce, duygu, davranış ve gelişim süreçlerini anlamlandırmak için psikolojik yaklaşımlardan yararlanırız.",
    colorVar: "--area-toplum",
  },
  {
    title: "Eğitim Bilimleri",
    body: "Öğrenme, gelişim ve bireysel farklılıklara uygun öğrenme ortamlarının tasarımından yararlanırız.",
    colorVar: "--area-kariyer",
  },
  {
    title: "Gelişim Bilimleri",
    body: "Bireyin yaşam boyunca değişimini, gelişimini ve farklı dönemlerdeki ihtiyaçlarını ele alırız.",
    colorVar: "--area-gelisim",
  },
  {
    title: "Sosyal ve Davranış Bilimleri",
    body: "Bireyin ilişkilerini, sosyal çevresini ve davranışlarının içinde bulunduğu bağlamla ilişkisini değerlendiririz.",
    colorVar: "--area-saglik",
  },
  {
    title: "Sistem ve Ekosistem Yaklaşımı",
    body: "Bireyi çevresinden bağımsız değil; aile, eğitim, iş, sosyal çevre ve yaşam koşullarıyla birlikte ele alırız.",
    colorVar: "--area-anlam",
  },
] as const;

/* ---------------- Manifesto ---------------- */

export const manifesto = {
  lead: "Anlamak dönüşümün başlangıcıdır.",
  sections: [
    {
      title: "İnsanlar aynı şekilde öğrenmez.",
      paragraphs: [
        "İnsanlar aynı şekilde öğrenmez, gelişmez ve yaşamı aynı biçimde deneyimlemez. Buna rağmen uzun yıllardır eğitim ve gelişim sistemleri, bireylerden aynı yolu izlemelerini bekliyor.",
        "Oysa her birey; güçlü yönleri, öğrenme biçimi, deneyimleri ve içinde bulunduğu çevreyle kendine özgü bir bütündür. Neurovyn, bu gerçekten yola çıkan bütüncül bir yaklaşımdır.",
      ],
    },
    {
      title: "Birey ve çevresi canlı bir sistemdir.",
      paragraphs: [
        "Biz gelişimi yalnızca bireye odaklanarak değil; bireyin yakın çevresi, eğitim ortamı ve sosyal yaşamıyla kurduğu etkileşim içinde değerlendiririz. Çünkü birey ve çevresi birbirini sürekli etkileyen canlı bir sistemdir.",
        "İnanıyoruz ki kalıcı gelişim, bireyi değiştirmeye çalışmakla değil; onu anlamak, güçlü yönlerini görünür kılmak ve çevresiyle kurduğu ilişkiyi güçlendirmekle başlar.",
      ],
    },
    {
      title: "Merkezde önce anlamak vardır.",
      paragraphs: [
        "Her bireyin kendine özgü öğrenme biçimini, gelişim sürecini ve potansiyelini anlamaya çalışır; ardından bireysel, akademik ve sosyal gelişimi birlikte ele alırız. Gerektiğinde aileyi, eğitim ortamını ve günlük yaşamı da sürecin doğal bir parçası olarak değerlendiririz.",
        "Neurovyn, yalnızca nöroçeşitli bireyler için değil; her bireyin daha sağlıklı öğrenebilmesi, gelişebilmesi ve potansiyelini gerçekleştirebilmesi için kapsayıcı bir bakış açısı sunar. Çünkü farklılık bir istisna değil, insan olmanın doğal bir parçasıdır.",
      ],
    },
    {
      title: "Hazır kalıplar sunmayız.",
      paragraphs: [
        "Her bireyin yaşamına, ihtiyaçlarına ve hedeflerine uyum sağlayan gelişim yolları oluşturmayı amaçlarız. Danışmanlık, eğitim ve koçluk çalışmalarımızı da bu anlayışla yürütür; gelişimin yaşamın içinde, süreklilik kazanan dinamik bir süreç olduğuna inanırız.",
        "Neurovyn, yalnızca bir yöntem değil, insanı anlamaya dayalı bir düşünme biçimidir.",
      ],
    },
  ],
  creed: [
    "İnsan anlaşılırsa öğrenme güçlenir.",
    "Çevre güçlenirse gelişim desteklenir.",
    "Gelişim desteklendikçe yaşam dönüşür.",
  ],
  closing: "Ve her dönüşüm… Anlamakla başlar.",
} as const;

/* ---------------- Hakkımızda: kurucu ---------------- */

export const founderStory = {
  lead: "Bazı fikirler bir günde doğmaz. Onlar; yıllar boyunca biriken gözlemlerin, soruların, deneyimlerin ve anlam arayışının doğal sonucudur.",
  paragraphs: [
    "Neurovyn de benim için böyle başladı. Yıllar boyunca eğitim alanında çalışırken aynı soruyla tekrar tekrar karşılaştım: Neden aynı imkânlara sahip iki birey, yaşamda birbirinden tamamen farklı yollar izliyor?",
    "Bu sorunun cevabını yalnızca bireyin içinde aramanın yeterli olmadığını gördüm. Çünkü hiçbir birey tek başına gelişmez. Her insan; ailesiyle, eğitim sistemiyle, iş yaşamıyla, sosyal çevresiyle ve yaşamın görünmeyen dinamikleriyle birlikte var olur. Bir bireyi anlamaya çalışırken, onun içinde bulunduğu sistemi görmezden gelirsek resmi eksik okuruz.",
    "Özellikle nöroçeşitli bireylerle çalışırken bu gerçeği daha derinden fark ettim. Çoğu zaman sorun bireyin kendisi değildi. Sorun; bireyin kendine özgü özellikleri ile yaşadığı çevre arasındaki uyumsuzluktu. İşte bu farkındalık, zamanla Neurovyn Yaşam Tasarımı Felsefesi'nin temelini oluşturdu.",
    "Neurovyn; eğitim, nörogelişim, insan davranışı ve sistem düşüncesini bir araya getiren bütüncül bir yaşam tasarımı felsefesidir. Bu yaklaşım yalnızca çözüm üretmeyi değil; anlamayı, ilişki ve bağ kurmayı, birey ile çevresi arasında karşılıklı uyumu geliştirmeyi ve yaşamı birlikte yeniden tasarlamayı amaçlar.",
  ],
  pullQuote: "Bir adım birey, bir adım çevre birbirine yaklaşır ve karşılıklı dönüşüm başlar.",
  aims: [
    "Bireyin potansiyelini görünür kılmak",
    "Yaşamındaki ilişkileri anlamlandırmak",
    "Bireyin kendine özgü özelliklerinin ailesi, eğitim ortamı, iş yaşamı ve sosyal çevresi tarafından doğru anlaşılmasını, kabul edilmesini ve desteklenmesini sağlamak",
    "Birey ile çevresi arasında daha sağlıklı ve sürdürülebilir bağlar kurulmasına katkıda bulunmak",
    "Aileyi, okulu, iş yaşamını ve sosyal çevreyi gelişim sürecinin doğal bir parçası hâline getirmek",
    "Bireyin kendi yaşam sistemini bilinçli biçimde tasarlayabilmesini desteklemek",
    "Daha kapsayıcı, daha anlaşılır ve daha insancıl bir yaşam kültürüne katkı sunmak",
  ],
  bio: [
    "Uzun yıllar üniversitede Doktor Öğretim Üyesi olarak görev yaptım. Mimarlık alanındaki doktora eğitimim, bana yalnızca mekânları değil; sistemleri, ilişkileri ve bütüncül düşünmeyi de öğretti.",
    "Akademik yaşamım boyunca edindiğim deneyimler ile eğitim, nörogelişim, rehberlik, iletişim ve yaşam tasarımı alanlarında sürdürdüğüm çalışmalar zaman içinde ortak bir bakış açısında buluştu. Neurovyn, bu birikimin ve insanı yalnızca birey olarak değil, yaşam sistemiyle birlikte ele alma anlayışının doğal sonucudur.",
  ],
  closing:
    "Benim için her birey değerlidir. Her bireyin içinde keşfedilmeyi bekleyen bir potansiyel vardır. Ve doğru anlaşılan, kabul gören ve desteklenen her bireyin; kendi yaşam sistemiyle uyum kurduğunda dönüşebileceğine inanıyorum.",
  /** Imzanin hemen ustunde, kucuk ve italik duran ozet cumle. */
  signatureNote:
    "Bireysel koçluk ve nöroçeşitlilik alanlarındaki eğitimlerini; psikoloji ve mimarlık-tasarım bakışıyla birleştirerek Neurovyn Nöroyaşam Tasarımı yaklaşımını geliştirmektedir.",
  signature: {
    name: "Ebru Şahin Mercimek",
    role: "Neurovyn Kurucusu & Nöroyaşam Tasarımcısı",
    credentials: "Dr. Mimar · ICF Koçluk · Psikoloji Öğrencisi",
  },
} as const;

/* ---------------- Marka Rehberi v1.0: Yaşam Modeli ---------------- */

export const brandIntro =
  "Neurovyn; zihin, beden ve ekosistemi bir bütün olarak ele alan, bilimsel temelli yaşam tasarımı metodolojisidir. Amacı yalnızca sorun çözmek değil; bireyin potansiyelini ortaya çıkarmak, iyi oluşunu desteklemek ve kalıcı gelişim sağlamaktır.";

export const brandVision =
  "Nöroçeşitliliği ve insan gelişimini bilimsel, etik ve bütüncül bir bakış açısıyla ele alan öncü yaşam tasarımı markası olmak.";

export const brandMission =
  "Bilimi günlük yaşama taşıyan araçlar geliştirerek bireylerin, ailelerin ve kurumların sürdürülebilir gelişimini desteklemek.";

/** Zihin + Beden + Ekosistem → Kalıcı ve Sürdürülebilir Gelişim */
export const lifeModel = {
  parts: [
    {
      title: "Zihin",
      body: "Düşünme, öğrenme, farkındalık, duygular ve potansiyelin merkezidir.",
      colorVar: "--area-egitim",
      icon: "brain",
    },
    {
      title: "Beden",
      body: "Yaşam enerjisini, bedensel sağlığı ve sinir sistemini besleyen temel kaynaktır.",
      colorVar: "--area-saglik",
      icon: "heart",
    },
    {
      title: "Ekosistem",
      body: "Aile, eğitim, iş, sosyal çevre ve fiziksel ortam bireyi saran destekleyici ağdır.",
      colorVar: "--area-toplum",
      icon: "ecosystem",
    },
  ],
  outcome: {
    title: "Kalıcı ve Sürdürülebilir Gelişim",
    body: "Kısa süreli çözümler değil; yaşam boyu süren, anlamlı ve sürdürülebilir gelişim.",
    colorVar: "--area-anlam",
    icon: "growth",
  },
} as const;

export const philosophy = [
  "İnsan yalnızca zihninden ibaret değildir.",
  "Zihin, beden ve yaşadığı ekosistem sürekli etkileşim içindedir.",
  "Kalıcı gelişim; bu üç alanın birlikte anlaşılması ve desteklenmesiyle mümkündür.",
] as const;

export const brandClosing =
  "Her birey farklıdır. Her yaşam bir bütündür. Kalıcı gelişim; zihin, beden ve ekosistemin uyumuyla başlar.";

/* ---------------- Logo Anlamı ---------------- */

export const logoMeaning = [
  { symbol: "Işıldayan beyin şeklinde ağaç", meaning: "Öğrenme, potansiyel, yaşam ve sürekli gelişim.", colorVar: "--area-anlam" },
  { symbol: "Mor", meaning: "Zihin, bilim ve farkındalık.", colorVar: "--area-egitim" },
  { symbol: "Yeşil", meaning: "Ekosistem, yaşam, doğa ve büyüme.", colorVar: "--area-toplum" },
  { symbol: "Altın gövde", meaning: "Beden, denge ve yaşam enerjisi.", colorVar: "--area-anlam" },
  { symbol: "Işık halkası", meaning: "Ekosistemle karşılıklı etkileşim.", colorVar: "--area-gelisim" },
  { symbol: "Kökler", meaning: "Bilimsel temel.", colorVar: "--area-saglik" },
  { symbol: "Sürekli büyüyen ağaç", meaning: "Kalıcı ve sürdürülebilir gelişim.", colorVar: "--area-kariyer" },
] as const;

/* ---------------- Çalışma İlkelerimiz ---------------- */

export const workingPrinciples = [
  { title: "Bilimle Anlarız", colorVar: "--area-egitim" },
  { title: "Etikle Yaklaşırız", colorVar: "--area-saglik" },
  { title: "Ekosistemle Düşünürüz", colorVar: "--area-toplum" },
  { title: "Güçlü Yönleri Görürüz", colorVar: "--area-anlam" },
  { title: "Birlikte Tasarlarız", colorVar: "--area-gelisim" },
  { title: "Sürekli Gelişiriz", colorVar: "--area-aile" },
  { title: "Anlamlı Yaşama Odaklanırız", colorVar: "--area-kariyer" },
] as const;

/* ---------------- Nöroçeşitliliğe Bakışımız ---------------- */

export const neurodiversityView = {
  lead: "Nöroçeşitlilik düzeltilmesi gereken bir kusur değildir. İnsanlığın doğal çeşitliliğinin bir parçasıdır.",
  body: "Biz tanıyı reddetmeyiz. Ama bireyi yalnızca tanısıyla tanımlamayız.",
} as const;

/* ---------------- Uygulama Modları ---------------- */

export const applicationModes = [
  {
    title: "Neurovyn Koçluğu",
    body: "Bireyin kendi yaşam sistemini tanıması, hedeflerini netleştirmesi ve adımlarını birlikte tasarlaması için yürütülen birebir çalışmadır.",
    colorVar: "--area-gelisim",
  },
  {
    title: "Neurovyn Danışmanlığı",
    body: "Aileler, okullar ve kurumlar için değerlendirme, haritalama ve çözüm tasarımı içeren yapılandırılmış süreçtir.",
    colorVar: "--area-kariyer",
  },
  {
    title: "Neurovyn Eğitimleri",
    body: "Eğitimciler, uzmanlar ve ekipler için nöroyaşam bakış açısını uygulamaya dönüştüren atölye ve programlardır.",
    colorVar: "--area-toplum",
  },
  {
    title: "Neurovyn Mentörlüğü",
    body: "Uzun soluklu eşlik: gelişim rotasının uygulanması boyunca düzenli izleme, geri bildirim ve yön ayarı.",
    colorVar: "--area-anlam",
  },
] as const;

/* ---------------- Neurovyn İlkeleri (18 madde) ---------------- */

export const neurovynPrinciples = [
  "Anlamak, dönüşümün başlangıcıdır.",
  "Hiçbir birey tek başına gelişmez.",
  "Sorun birey değildir; sorun, birey ile yaşam sistemi arasındaki uyumun bozulmasıdır.",
  "Her birey, kendine özgü bir gelişim mimarisine sahiptir.",
  "Bir adım birey, bir adım çevre birbirine yaklaşır ve karşılıklı dönüşüm başlar.",
  "Potansiyel, doğru yaşam sistemi içinde görünür olur.",
  "Farklılık, düzeltilmesi gereken bir kusur değil; anlaşılması gereken bir özelliktir.",
  "Kabul görmek, gelişimin en güçlü zeminidir.",
  "Gerçek değişim, birey ve çevre birlikte dönüşebildiğinde kalıcı olur.",
  "Her yaşam yeniden tasarlanabilir.",
  "Bireyi değiştirmekten önce, onu anlamaya çalış.",
  "Yaşam; ilişkiler, bağlar ve anlam üzerine inşa edilir.",
  "Her davranışın arkasında anlaşılmayı bekleyen bir ihtiyaç vardır.",
  "Çözüm, bireyi değiştirmekte değil; yaşam sistemiyle uyumunu güçlendirmektedir.",
  "Dönüşüm, mükemmelleşmek değil; kendinle ve çevrenle uyum kurabilmektir.",
  "İnsan, ait olduğu sistem kadar güçlenir.",
  "Gelişim, bir hedef değil; yaşam boyu süren bilinçli bir tasarım yolculuğudur.",
  "Neurovyn; bireyin, çevrenin ve yaşamın birlikte gelişebileceğine inanır.",
] as const;
