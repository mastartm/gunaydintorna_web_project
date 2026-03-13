const boxes = document.querySelectorAll(".combined-service");

// Menü butonu ve navbar öğelerini seç (Mobil Menü için)
const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

// Sayfa içeriği yüklendikten sonra işlevleri başlat
document.addEventListener("DOMContentLoaded", () => {
  // === Mobil Menü İşlevi ===
  if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
      // Navbar'a "active" sınıfını ekleyip/kaldırarak menüyü aç/kapa
      navbar.classList.toggle("active");
      // Menü açıldığında hamburger ikonunu çarpı ikonuna çevir
      menuBtn.classList.toggle("fa-times");
    });
  }

  // İlk yüklemede ve kaydırma olaylarında kutuları kontrol et
  window.addEventListener("scroll", checkBoxes);
  checkBoxes();
});

// === Kaydırma Animasyonu İşlevi ===
function checkBoxes() {
  // Görünürlük tetikleyici çizgisi: Pencere yüksekliğinin %80'i
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // Kutunun tarayıcı penceresine göre üst pozisyonunu al
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      // Görünür alana girmişse 'show' sınıfını ekle (animasyonu başlat)
      box.classList.add("show");
    } else {
      // Görünür alanda değilse 'show' sınıfını kaldır (sayfa yukarı kaydırılırsa animasyonu sıfırla)
      box.classList.remove("show");
    }
  });
}
const panels = document.querySelectorAll(".panel");
let currentActiveIndex = 0; // Başlangıçta aktif olacak kartın indeksi (0: İlk kart)
const intervalTime = 4000; // Kartın aktif kalma süresi (4 saniye = 4000 milisaniye)

// Aktif sınıflarını kaldıran mevcut fonksiyon
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// Belirtilen indeksteki kartı aktif eden fonksiyon
function setActivePanel(index) {
  removeActiveClasses();
  panels[index].classList.add("active");
  currentActiveIndex = index; // currentActiveIndex'i günceller
}

// 1. Otomatik Geçiş Fonksiyonu
function autoExpand() {
  // Mevcut aktif indeksi bir artırır
  currentActiveIndex++;

  // Eğer son karta ulaştıysa, başa (ilk karta) döner
  if (currentActiveIndex >= panels.length) {
    currentActiveIndex = 0;
  }

  // Yeni indeksteki kartı aktif hale getirir
  setActivePanel(currentActiveIndex);
}

// 2. Tıklama İşlevini Koruma (Manuel)
panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    // Tıklama olduğunda otomatik geçişi durdurur
    clearInterval(autoExpandInterval);

    // Tıklanan kartı aktif hale getirir
    setActivePanel(index);

    // Yeni otomatik geçişi tekrar başlatır
    autoExpandInterval = setInterval(autoExpand, intervalTime);
  });
});

// 3. Zamanlayıcıyı Başlatma (Otomatik)
let autoExpandInterval = setInterval(autoExpand, intervalTime);

// Sayfa yüklendiğinde ilk kartı aktif hale getir
setActivePanel(currentActiveIndex);
