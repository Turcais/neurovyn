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

## Renk Sistemi

Marka omurgası: **Mor (zihin) → Yeşil (ekosistem) → Altın (potansiyel)**

Tüm renkler hem açık hem koyu temada WCAG AA (4.5:1) kontrast sağlar.
Değişkenler `:root` (açık) ve `.dark` (koyu) altında tanımlıdır.

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

## 1. Faz Kapsamı

Ana Sayfa · Hakkımızda (Kurucu) · Manifesto · Yaklaşımımız · Yaşam Alanları · Blog · İletişim

Üyelik/panel ve değerlendirme araçları (Yaşam Pusulası, Yaşam Profili) 2. faza bırakıldı.
