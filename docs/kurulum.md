# Neurovyn — Kurulum Rehberi

Bu dosya, sitenin yayına çıkması için yapılması gereken hesap açma ve
anahtar tanımlama adımlarını anlatır. Kod tarafı hazır; eksik olan yalnızca
hesaplar ve anahtarlar.

Sıra önemli: **1 → 2 → 3 → 4**

---

## 1. Sanity (yönetim paneli ve içerik)

Yönetim paneli sitenin içine gömülü çalışır: **neurovyn.com.tr/studio**
Ayrı bir uygulama kurmanıza veya ayrı ücret ödemenize gerek yok.

### 1.1 Hesap ve proje açın

1. [sanity.io/manage](https://www.sanity.io/manage) adresine gidin
2. Google veya GitHub ile ücretsiz kaydolun
3. **Create new project** deyin
   - Project name: `Neurovyn`
   - Dataset: `production` (varsayılan, değiştirmeyin)
   - Plan: **Free** yeterli
4. Proje açıldıktan sonra **Project ID**'yi kopyalayın (örnek: `a1b2c3d4`)

### 1.2 Yazma anahtarı üretin

İletişim formundan gelen mesajların panelde görünmesi için gerekli.

1. Projede **API** sekmesi → **Tokens** → **Add API token**
2. Name: `Website write`
3. Permissions: **Editor**
4. **Save** deyin ve çıkan anahtarı kopyalayın —
   **bu anahtar bir daha gösterilmez**, hemen kaydedin

### 1.3 Siteye izin verin (CORS)

1. **API** sekmesi → **CORS origins** → **Add CORS origin**
2. Şu adresleri tek tek ekleyin, her birinde
   **Allow credentials** işaretli olsun:
   - `http://localhost:3000`
   - `https://neurovyn.com.tr`
   - `https://www.neurovyn.com.tr`
   - Vercel'in verdiği adres (örnek: `https://neurovyn.vercel.app`)

### 1.4 Ebru Hanım'ı panele davet edin

1. Projede **Members** sekmesi → **Invite members**
2. E-posta adresini yazın, rol olarak **Editor** seçin

Editor rolü: içerik ekler, düzenler, yayınlar — ama proje ayarlarını
veya faturayı değiştiremez. Doğru rol budur.

---

## 2. Resend (form e-postaları)

**Vercel e-posta göndermez.** Vercel bir barındırma servisidir, posta sunucusu
değildir. Bu yüzden ayrı bir e-posta servisi gerekir. Resend'i seçtim çünkü
ücretsiz katmanı bu ölçek için fazlasıyla yeterli (ayda 3.000 e-posta) ve
kurulumu en sade olanı.

### 2.1 Hesap açın

1. [resend.com](https://resend.com) → ücretsiz kaydolun
2. **API Keys** → **Create API Key**
   - Name: `Neurovyn website`
   - Permission: **Sending access**
3. Anahtarı kopyalayın (`re_` ile başlar)

### 2.2 Alan adını doğrulayın

Bu adım olmadan da form çalışır, ama gönderen adresi
`onboarding@resend.dev` görünür — kurumsal durmaz.

1. **Domains** → **Add Domain** → `neurovyn.com.tr`
2. Resend size 3 DNS kaydı verir (SPF, DKIM, DMARC)
3. Bu kayıtları alan adınızın DNS panelinde oluşturun
4. Resend'de **Verify** deyin — genelde 5-30 dakika sürer

Doğrulandıktan sonra `CONTACT_FROM` değerini
`Neurovyn <bildirim@neurovyn.com.tr>` yapabilirsiniz.

> **Not:** Formdan gelen mesaj hem e-posta olarak gider **hem de** panele
> kaydedilir. Biri çalışmazsa diğeri mesajı yakalar; mesaj kaybolmaz.

---

## 3. Yerel geliştirme

Proje klasöründe `.env.local` adında bir dosya oluşturun
(`.env.example` dosyasını kopyalayıp doldurun):

```bash
cp .env.example .env.local
```

İçini doldurun:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=buraya_proje_kimligi
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_WRITE_TOKEN=buraya_yazma_anahtari
RESEND_API_KEY=buraya_resend_anahtari
CONTACT_FROM="Neurovyn <onboarding@resend.dev>"
CONTACT_TO=info@neurovyn.com.tr
```

Sonra sunucuyu yeniden başlatın:

```bash
npm run dev
```

- Site: `http://localhost:3000`
- Panel: `http://localhost:3000/studio`

`.env.local` dosyası `.gitignore` içindedir — anahtarlar depoya gitmez.

---

## 4. Vercel (yayına alma)

1. [vercel.com](https://vercel.com) → GitHub ile giriş yapın
2. Projeyi GitHub'a gönderin, sonra Vercel'de **Add New → Project** ile içe aktarın
3. **Environment Variables** bölümüne yukarıdaki beş değişkeni tek tek ekleyin
   - Her biri için **Production**, **Preview** ve **Development** kutularının
     üçünü de işaretleyin
4. **Deploy** deyin
5. Yayına çıktıktan sonra **Settings → Domains** ile `neurovyn.com.tr` bağlayın
6. Sanity'de CORS listesine gerçek adresi eklemeyi unutmayın (adım 1.3)

---

## Panelden neler yönetilebiliyor?

| Bölüm | Ne yapılabilir | Durum |
|---|---|---|
| **Site Ayarları** | Telefon, e-posta, WhatsApp, adres, sosyal medya, footer metni, slogan | Panel hazır |
| **Sayfa Metinleri** | Her sayfanın başlığı, giriş metni ve serbest metni | Panel hazır |
| **Değer Ürettiğimiz Alanlar** | Altı alanın başlığı, açıklaması, "kimler için" listesi, rengi, ikonu | Panel hazır |
| **Blog Yazıları** | Yazı ekleme, düzenleme, görsel yükleme, kategori | **Siteye bağlı** |
| **Blog Kategorileri** | Kategori ekleme | **Siteye bağlı** |
| **Gelen Mesajlar** | Formdan gelen mesajları okuma, durum işaretleme, not alma | **Siteye bağlı** |

**"Panel hazır" ne demek:** Şema yazıldı, panelde alan görünüyor ve
düzenlenebiliyor — ama site şu an bu içeriği hâlâ koddaki dosyalardan
(`src/lib/content.ts`, `src/lib/site.ts`) okuyor. Bağlama işi sıradaki adım.

Bu kademeli geçiş bilinçli bir tercih: site CMS kurulmadan da çalışır,
CMS'te kayıt yoksa koddaki metne düşer. Böylece hiçbir aşamada site bozulmaz.

---

## Sık karşılaşılanlar

**Panel açılmıyor, "henüz bağlı değil" yazıyor**
`NEXT_PUBLIC_SANITY_PROJECT_ID` tanımlı değil ya da sunucu yeniden
başlatılmadı. `.env.local` dosyasını kaydedip `npm run dev` komutunu
yeniden çalıştırın.

**Panelde "Unauthorized" hatası**
CORS adresi eklenmemiş (adım 1.3) veya o adres için
**Allow credentials** işaretlenmemiş.

**Form "iletilemedi" diyor**
Ne `RESEND_API_KEY` ne de `SANITY_API_WRITE_TOKEN` tanımlı demektir.
En az biri gerekli.

**Form çalışıyor ama e-posta gelmiyor**
Spam klasörüne bakın. Alan adı doğrulanmadıysa `onboarding@resend.dev`
adresinden gelen postalar sık sık spam'e düşer — adım 2.2'yi tamamlayın.

**Blog yazısı ekledim, sitede görünmüyor**
Yazıyı **Publish** ettiğinizden emin olun (taslak kalmasın). Site içeriği
saatte bir tazeler; hemen görmek için Vercel'de yeniden deploy edin.
