# Neurovyn — Marka Kararları

Bu dosya, sitede yapılan her tasarım ve içerik seçiminin dayanağıdır.
Bir karar değişirse önce burası güncellenir, sonra kod.

## Kimlik

| Alan | Karar |
|---|---|
| Logotype (metin) | **Neurovyn** — her yerde bu yazım. `NEUROVYN` veya `NeuroVyn` kullanılmaz. |
| Alt başlık | **Nöroyaşam Tasarımı** |
| Slogan | Bilimle anlarız • Birlikte tasarlarız |
| Alan adı | **neurovyn.com.tr** |
| Kurucu | Ebru Şahin Mercimek |
| Dil | Türkçe (tek dil) |

## Teknoloji

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 — token'lar `src/app/globals.css` içinde
- next-themes — açık/koyu tema, kullanıcı seçer, varsayılan sistem tercihi
- Sanity CMS — blog ve içerik yönetimi (kurulacak)
- Vercel — hosting

## Menü Yapısı

Müşteri mockup'ına göre kesinleşti:

**Üst menü:** Ana Sayfa · Vizyonumuz · Misyonumuz · Ne Yapıyoruz · Değer Ürettiğimiz Alanlar · Hakkımızda · Blog
**Sağ buton:** Bize Ulaşın

Not: "Manifesto", "Yaklaşımımız" ve "Yaşam Alanları" üst menüde yer almaz.
Yaklaşımımız yalnızca footer'daki Kurumsal sütunundan erişilebilir.

## Renk Sistemi

Arayüz paleti (buton, bağlantı, vurgu): **İndigo `#4338ca` + Yeşil `#15803d` + Altın `#f59e0b`**
Kimlik paleti (yaşam alanları, hero, gradyanlar): **Mor → Yeşil → Altın**

Tüm metin renkleri hem açık hem koyu temada WCAG AA (4.5:1) kontrast sağlar.
Değişkenler `:root` (açık) ve `.dark` (koyu) altında tanımlıdır.

Dikkat: `--secondary` (#15803d) metin için, `--secondary-bright` (#16a34a) yalnızca
büyük başlık ve dekoratif kullanım içindir. Aynı ayrım altın için de geçerlidir
(`--accent` dekoratif, `--accent-text` metin).

### Yedi Yaşam Alanı

| Alan | Değişken | Açık | Koyu |
|---|---|---|---|
| Eğitim & Öğrenme | `--area-egitim` | `#6d28d9` | `#a78bfa` |
| Aile & İlişkiler | `--area-aile` | `#047857` | `#34d399` |
| Sağlık & Beden | `--area-saglik` | `#be123c` | `#fb7185` |
| Kariyer & Üretkenlik | `--area-kariyer` | `#0e7490` | `#22d3ee` |
| Kişisel Gelişim & İç Dünya | `--area-gelisim` | `#1d4ed8` | `#60a5fa` |
| Anlam & Değerler | `--area-anlam` | `#b45309` | `#fbbf24` |
| Toplum & Çevre | `--area-toplum` | `#4d7c0f` | `#a3e635` |

## Tipografi

| Rol | Font | Neden |
|---|---|---|
| Başlıklar | **Manrope** | Geometrik, güçlü, tam Türkçe desteği (latin-ext) |
| Gövde | **Inter** | Ekran okunabilirliğinde referans font |
| Alıntı / manifesto | **Lora** | Serif ses — manifestonun tonuna sıcaklık katar |

## Erişilebilirlik İlkeleri

Marka nöroçeşitlilik üzerine kurulu; erişilebilirlik pazarlama değil, temel gerekliliktir.

- WCAG 2.2 AA hedefi (kontrast, klavye, odak görünürlüğü)
- `prefers-reduced-motion` tam desteklenir — animasyonlar kapanır
- Gövde metinlerinde `max-width: 68ch` (`.prose-measure`)
- Her sayfada "İçeriğe geç" atlama bağlantısı
- Renk tek başına anlam taşımaz; ikon veya metinle desteklenir

## Marka Rehberi v1.0 (müşteriden)

### Neurovyn Yaşam Modeli

**Zihin + Beden + Ekosistem → Kalıcı ve Sürdürülebilir Gelişim**

Tüm çalışmaların ortak omurgası budur. Ana sayfada bir bölüm olarak yer alır.

### Slogan

- Ana: **Ekosistem Temelli Nöroyaşam Tasarımı**
- Kısa: **Zihin • Beden • Ekosistem**
- Sitede kullanılan alt başlık ayrı kalır: **Nöroyaşam Tasarımı** (mockup kararı)

### Logo Anlamı

| Öge | Anlam |
|---|---|
| Beyin şeklindeki ağaç | Öğrenme, potansiyel, yaşam, sürekli gelişim |
| Mor | Zihin, bilim, farkındalık |
| Yeşil | Ekosistem, yaşam, doğa, büyüme |
| Altın gövde | Beden, denge, yaşam enerjisi |
| Işık halkası | Ekosistemle karşılıklı etkileşim |
| Kökler | Bilimsel temel |
| Sürekli büyüyen ağaç | Kalıcı ve sürdürülebilir gelişim |

Ağaç bileşeni (`brand-tree.tsx`) bu anlam haritasına birebir uyar.

### Görsel Dil

Beyaz zemin · siyah zemin · mor & yeşil ana renkler · altın detaylar ·
minimal tasarım · ince çizgiler · premium görünüm · aydınlık ve umut veren ışık.

### Ses Tonu

Bilimsel · sade · umut veren · yargılamayan · merak uyandıran · samimi · güven veren.

**Yazarken:** Etiket yerine tanım kullan ("nöroçeşitli birey", "yaramaz çocuk" değil).
Kesin vaat verme. Emir kipi yerine davet dili kullan.

### Uygulama Modları

Neurovyn Koçluğu · Neurovyn Danışmanlığı · Neurovyn Eğitimleri · Neurovyn Mentörlüğü

## ⚠ Çözülmesi Gereken: Üç Ayrı İlke Listesi

Müşteriden birbirinden farklı üç ilke listesi geldi. Şu an üçü de sitede,
ama farklı sayfalarda ve farklı rollerde duruyor:

| Liste | Kaç madde | Nerede | Rolü |
|---|---|---|---|
| Neurovyn İlkeleri | 18 | `/ilkelerimiz` | Felsefi bildirge |
| 10 Temel İlke | 10 | `/misyonumuz` | Çalışma kuralları |
| İlkelerimiz (Bilimle Anlarız…) | 7 | `/ilkelerimiz` üstünde etiket olarak | Kısa slogan seti |

İçerikleri kısmen örtüşüyor (ör. "Anlamak dönüşümün başlangıcıdır" hem 18'lik
listede hem manifestoda var). Müşteriye sorulmalı: üçü de kalsın mı, yoksa
tek bir listede birleştirilsin mi?

## Geçici Varlıklar

Müşteriden gerçek dosyalar gelene kadar yerine geçen bileşenler
(hepsinde kodda `TODO` notu var):

| Bileşen | Dosya | Ne bekliyoruz |
|---|---|---|
| Logo ağaç sembolü | `src/components/brand/tree-mark.tsx` | Gerçek logo SVG |
| Hero illüstrasyonu | `src/components/brand/hero-tree.tsx` | Gerçek hero görseli |
| Telefon numarası | `src/lib/site.ts` → `contact.phone` | Gerçek numara |
| Sosyal medya adresleri | `src/lib/site.ts` → `socialLinks` | Gerçek profil bağlantıları |

## 1. Faz Kapsamı

Ana Sayfa · Hakkımızda (Kurucu) · Manifesto · Yaklaşımımız · Yaşam Alanları · Blog · İletişim

Üyelik/panel ve değerlendirme araçları (Yaşam Pusulası, Yaşam Profili) 2. faza bırakıldı.
