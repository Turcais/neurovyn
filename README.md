# Neurovyn

**Nöroyaşam Tasarımı** — kurumsal tanıtım sitesi ve blog.

Bilimle anlarız • Birlikte tasarlarız

## Teknoloji

| Katman | Seçim |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript |
| Stil | Tailwind CSS v4 |
| İçerik yönetimi | Sanity — `/studio` adresinde gömülü panel |
| Form e-postası | Resend |
| Hosting | Vercel |

## Geliştirme

```bash
npm install
cp .env.example .env.local   # değerleri doldurun
npm run dev
```

- Site: http://localhost:3000
- Yönetim paneli: http://localhost:3000/studio

Ortam değişkenlerinin nasıl alınacağı [docs/kurulum.md](docs/kurulum.md) içinde adım adım anlatılıyor.

## Sayfalar

Ana Sayfa · Vizyonumuz · Misyonumuz · Ne Yapıyoruz · Değer Ürettiğimiz Alanlar (+6 alt sayfa) · Hakkımızda · Manifesto · İlkelerimiz · Yaklaşımımız · Ekibimiz · Blog · Bize Ulaşın · Gizlilik Politikası · Kullanım Koşulları

## Belgeler

- [docs/brand.md](docs/brand.md) — marka kararları, renk sistemi, tipografi, görsel varlıklar
- [docs/kurulum.md](docs/kurulum.md) — Sanity, Resend ve Vercel kurulum adımları

## Erişilebilirlik

Marka nöroçeşitlilik üzerine kurulu; erişilebilirlik temel gerekliliktir.

- WCAG 2.2 AA kontrast hedefi — açık ve koyu temada doğrulandı
- `prefers-reduced-motion` desteği
- Klavye navigasyonu ve görünür odak halkası
- Her sayfada "İçeriğe geç" atlama bağlantısı
- Gövde metinlerinde 68 karakterlik okuma genişliği

## Komutlar

```bash
npm run dev     # geliştirme sunucusu
npm run build   # üretim derlemesi
npm run lint    # kod denetimi
```
