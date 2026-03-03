# CSS Kararlari

## 1. Breakpoint Secimi
- **640px** ve **1024px** breakpoint'lerini sectim cunku icerigim bu noktalarda dogal olarak degisiyor. 640px altinda navigasyon ve hakkimda bolumu dikey yiginda daha iyi okunuyor; 1024px ustunde ise genis ekranda icerik merkezleniyor ve proje kartlari 3 sutunlu izgara halinde gosteriliyor.
- Mobile-first yaklasimla `min-width` media query'leri kullandim: once mobil icin yazdim, sonra buyuk ekranlar icin genislettim.

## 2. Layout Tercihleri
- **Header icin Flexbox sectim** cunku navigasyon tek boyutlu bir duzenleme gerektiriyor: logo sol, nav linkleri sag. `justify-content: space-between` ve `align-items: center` ile kolayca hizaladim.
- **Proje kartlari icin CSS Grid sectim** cunku kartlar iki boyutlu bir izgara duzeni olusturuyor. `repeat(auto-fit, minmax(280px, 1fr))` ile media query yazmadan responsive grid elde ettim.
- `auto-fit` kullandim cunku bos sutunlarin daralmasini ve mevcut kartlarin genislemesini istedim.

## 3. Design Tokens
- **Renk paleti** olarak mavi tonlarini (`#1E3A8A` primary, `#2563EB` secondary) sectim; profesyonel ve okunabilir bir gorunum sagliyor. Accent rengi olarak mor (`#7C3AED`) kullandim.
- **Spacing skalasi** 4px'lik katlarda artan bir sistem (0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem) ile olusturdum. Bu tutarli bosluklar gorsel uyum sagliyor.
- **Fluid typography** icin `clamp()` fonksiyonunu `rem + vw` karisimi ile kullandim. Ornegin body metni `clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` — minimum 16px, maksimum 18px, arada akici gecis. Sadece `vw` kullanmadim cunku zoom'da erisilebirilk sorunu yaratir.

## 4. Responsive Stratejiler
- **Mobile-first** yaklasimini uyguladim: varsayilan CSS mobil icin, `min-width: 640px` ile tablet, `min-width: 1024px` ile masaustu kurallari ekledim.
- Breakpoint'lerde degisen elemanlar: header yonu (column → row), hakkimda bolumu (dikey → yatay), section padding'leri, buton genisligi, proje grid sutun sayisi.
- Gorselleri `max-width: 100%`, `object-fit: cover` ve `aspect-ratio` ile responsive yaptim; her ekran boyutunda orantili gorunuyorlar.
