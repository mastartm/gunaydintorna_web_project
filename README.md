# Günaydın Torna — Kurumsal Tanıtım Sitesi

Niğde/Bor merkezli, 1930'dan beri hizmet veren bir torna/metal işleme atölyesi için geliştirilmiş, tamamen responsive kurumsal tanıtım sitesi.

**🔗 Canlı Site:** [gunaydintorna.com](https://gunaydintorna.com)

---

## 📌 Proje Hakkında

Bu proje, gerçek bir müşteri (Günaydın Torna) için sıfırdan tasarlanıp geliştirilmiş, canlıya alınmış ve bakımı devam eden bir web sitesidir. Statik bir HTML/CSS/JS projesi olarak geliştirilmiş, kendi domain ve hosting altyapısında (Natro cPanel) yayınlanmıştır.

## ✨ Özellikler

- **Tam Responsive Tasarım** — mobil, tablet ve masaüstü için optimize edilmiş, hamburger menü ile mobil navigasyon
- **4 Sayfa** — Ana Sayfa, Projelerimiz, Ürünlerimiz, İletişim
- **Otomatik Geçişli Görsel Slider** — projeler sayfasında hem otomatik hem tıklama ile kontrol edilebilen panel/slider yapısı
- **Scroll Animasyonları** — hizmet kutuları, kullanıcı sayfayı kaydırdıkça görünüme giriyor
- **WhatsApp Entegrasyonu** — sabit (floating) buton ve doğrudan mesajlaşma linkleri ile hızlı iletişim
- **SEO Optimizasyonu** — her sayfada özel title/meta description, semantik başlık yapısı (h1/h2), canonical URL'ler
- **Google Haritalar Entegrasyonu** — iletişim sayfasında konum gösterimi
- **Sticky Footer** — içerik kısa olsa da footer'ın her zaman viewport altına sabitlenmesi (flexbox ile)

## 🛠️ Kullanılan Teknolojiler

- **HTML5** — semantik yapı
- **CSS3** — Flexbox, CSS Grid, CSS Variables (custom properties), medya sorguları ile responsive tasarım
- **Vanilla JavaScript** — DOM manipülasyonu, IntersectionObserver benzeri scroll-tabanlı animasyon mantığı, otomatik slider mantığı
- **Google Fonts** (Poppins)
- **Font Awesome** — ikonlar

## 📁 Proje Yapısı

```
gunaydintorna_web_project/
├── index.html          # Ana sayfa (hero video, hizmetler)
├── projects.html       # Tamamlanan projeler + görsel slider
├── products.html       # Ürün kataloğu
├── contact.html         # İletişim bilgileri + harita
├── style.css            # Tüm stiller
├── script.js             # Slider, mobil menü, scroll animasyonları
└── imgs/
    ├── main/             # Ana sayfa görselleri ve tanıtım videosu
    ├── projects/         # Proje slider görselleri
    └── products/         # Ürün görselleri
```

## 🚀 Kurulum ve Çalıştırma

Bu proje herhangi bir build aracı veya bağımlılık gerektirmez, tamamen statik dosyalardır.

```bash
git clone https://github.com/mastartm/gunaydintorna_web_project.git
cd gunaydintorna_web_project
```

Ardından `index.html` dosyasını bir tarayıcıda açabilir, veya VSCode'da **Live Server** eklentisiyle canlı önizleme yapabilirsiniz:

1. VSCode'da Live Server eklentisini kurun
2. `index.html`'e sağ tık → "Open with Live Server"

## 🌐 Deployment

Site, Natro hosting üzerinde cPanel ile yönetilen bir Linux/LiteSpeed sunucusunda barındırılmaktadır. Dağıtım süreci:

1. Proje dosyaları zip'lenir
2. cPanel Dosya Yöneticisi üzerinden `public_html` dizinine yüklenir
3. Zip dosyası çıkartılır (extract)
4. SSL/HTTPS, AutoSSL (Let's Encrypt) ile aktive edilir

## 📈 SEO Stratejisi

- Her sayfa için benzersiz, anahtar kelime odaklı `<title>` ve `<meta description>`
- Yerel SEO: Niğde ve Orta Anadolu bölgesi (Konya, Kayseri, Adana, Mersin, Ankara) hedefli içerik
- Google İşletme Profili entegrasyonu için altyapı hazır
- Semantik HTML (doğru başlık hiyerarşisi, `lang="tr"`)

## 👤 Geliştirici

**Burak Kaan Gök**

---

*Bu proje, gerçek bir işletme için üretim ortamında canlı olarak kullanılmaktadır.*
