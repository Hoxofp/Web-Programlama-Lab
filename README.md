# Web LAB-2 - Kişisel Portföy Sayfası

## Hakkında
Bu proje, Web Tasarımı ve Programlama dersi LAB-2 kapsamında geliştirilmiştir. LAB-1'de oluşturulan Vite + React + TypeScript projesi üzerine, semantik HTML5, erişilebilirlik (a11y) ve form temelleri uygulanmıştır.

## Geliştirici
**Ad Soyad:** Ahmet Mervan Erman  
**Öğrenci No:** 235541061

## LAB-2 Kapsamında Yapılanlar

### Semantik HTML5
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` etiketleri kullanıldı
- `<figure>` ve `<figcaption>` ile profil fotoğrafı eklendi
- Doğru heading hiyerarşisi: `h1` → `h2` → `h3` → `h4`

### Erişilebilirlik (a11y)
- `<html lang="tr">` ayarlandı
- Skip navigation bağlantısı eklendi ("Ana içeriğe atla")
- `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-invalid` öznitelikleri kullanıldı
- `role="alert"` ile form hata mesajları ekran okuyuculara bildirildi
- Focus göstergesi korundu (outline asla kaldırılmadı)
- Tab ile gezinme sorunsuz çalışıyor

### İletişim Formu
- `<fieldset>` ve `<legend>` ile form gruplandırma
- Her input için `<label>` + `for/id` eşleşmesi
- `required`, `minLength`, `type="email"` doğrulama öznitelikleri
- JavaScript ile istemci tarafı form doğrulama
- Hata mesajı alanları (`role="alert"` + `aria-describedby`)

### Temel CSS
- Skip-link stili (gizli, Tab ile görünür)
- Focus göstergesi
- Form stilleri
- Responsive tasarım
- Modern gradient header

## Kullanılan Teknolojiler
- React 18
- TypeScript
- Vite
- Semantik HTML5
- CSS3

## Kurulum
```bash
npm install
```

## Çalıştırma
```bash
npm run dev
```

Tarayıcıda [http://localhost:5173](http://localhost:5173) adresini aç.

## Lighthouse Erişilebilirlik Testi
Chrome DevTools → Lighthouse → Accessibility → 90+ puan hedeflenmektedir.

## Ekran Görüntüsü
(Lighthouse raporu ekran görüntüsü buraya eklenecek)
