// ==========================================================================
// GLOBAL PRODUCTS DATABASE (Loaded on all pages for Cart & Detail Modals)
// ==========================================================================
const defaultProducts = [
    {
        id: 1,
        name: "Apple iPhone 15 Pro 128 GB",
        brand: "Apple",
        category: "telefon",
        priceOriginal: 84999,
        priceCurrent: 79999,
        rating: 4.8,
        reviewsCount: 154,
        tag: "Çok Satan",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
        description: "Titanyum tasarımı, çığır açan A17 Pro çipi, özelleştirilebilir Eylem düğmesi ve şimdiye kadarki en güçlü iPhone kamera sistemiyle sınırları zorlayın.",
        specs: {
            "Ekran Boyutu": "6.1 inç Super Retina XDR OLED",
            "İşlemci": "Apple A17 Pro Çip",
            "Arka Kamera": "48 MP + 12 MP + 12 MP",
            "Garanti": "2 Yıl Apple Türkiye Garantili"
        }
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra 512 GB",
        brand: "Samsung",
        category: "telefon",
        priceOriginal: 74999,
        priceCurrent: 69999,
        rating: 4.7,
        reviewsCount: 98,
        tag: "Yeni",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80",
        description: "Galaxy AI ile yapay zekanın gücünü cebinizde hissedin. S Pen entegrasyonu, Titanyum gövde ve 200 MP çözünürlüklü ultra kamera kalitesi.",
        specs: {
            "Ekran Boyutu": "6.8 inç Dynamic AMOLED 2X",
            "İşlemci": "Snapdragon 8 Gen 3",
            "Arka Kamera": "200 MP + 50 MP + 12 MP + 10 MP",
            "Garanti": "2 Yıl Samsung Türkiye Garantili"
        }
    },
    {
        id: 9,
        name: "Xiaomi Redmi Note 13 Pro 256 GB",
        brand: "Xiaomi",
        category: "telefon",
        priceOriginal: 18999,
        priceCurrent: 16999,
        rating: 4.5,
        reviewsCount: 112,
        tag: "Fırsat",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80",
        description: "200 MP ultra net kamera, 120 Hz AMOLED ekran ve 67W turbo şarj ile üst düzey performans ve şık tasarım bir arada.",
        specs: {
            "Ekran Boyutu": "6.67 inç AMOLED",
            "İşlemci": "MediaTek Helio G99-Ultra",
            "Arka Kamera": "200 MP + 8 MP + 2 MP",
            "Batarya": "5000 mAh"
        }
    },
    {
        id: 10,
        name: "OnePlus 12 512 GB",
        brand: "OnePlus",
        category: "telefon",
        priceOriginal: 48999,
        priceCurrent: 44999,
        rating: 4.6,
        reviewsCount: 34,
        tag: "Premium",
        image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?w=400&q=80",
        description: "4. Nesil Hasselblad Kamera Sistemi, Snapdragon 8 Gen 3 ve 100W SUPERVOOC hızlı şarj ile ödün vermeyen performans.",
        specs: {
            "Ekran Boyutu": "6.82 inç 2K 120Hz AMOLED",
            "İşlemci": "Snapdragon 8 Gen 3",
            "RAM": "16 GB",
            "Garanti": "2 Yıl Türkiye Garantili"
        }
    },
    {
        id: 3,
        name: "Asus ROG Zephyrus G16 Gaming Laptop",
        brand: "Asus",
        category: "bilgisayar",
        priceOriginal: 64999,
        priceCurrent: 59999,
        rating: 4.9,
        reviewsCount: 45,
        tag: "Fırsat",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80",
        description: "Ultra ince ve hafif gövdede üstün RTX 4070 grafik gücü. Intel Core Ultra işlemci ve büyüleyici OLED ekranıyla sınırları zorlayan oyun performansı.",
        specs: {
            "Ekran": "16 inç OLED 240Hz QHD+",
            "İşlemci": "Intel Core Ultra 7 155H",
            "RAM / Depolama": "16 GB LPDDR5X / 512 GB PCIe 4.0 SSD",
            "Ekran Kartı": "NVIDIA GeForce RTX 4070 (8GB)"
        }
    },
    {
        id: 4,
        name: "HP Pavilion 15-eg3000nt Intel i7",
        brand: "HP",
        category: "bilgisayar",
        priceOriginal: 29999,
        priceCurrent: 26999,
        rating: 4.4,
        reviewsCount: 112,
        tag: "İndirim",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&q=80",
        description: "Günlük işleriniz, ödevleriniz ve ofis projeleriniz için yüksek verimli şık dizüstü bilgisayar. Hızlı şarj ve uzun pil ömrü avantajı.",
        specs: {
            "Ekran": "15.6 inç IPS Full HD (1920x1080)",
            "İşlemci": "Intel Core i7-1355U",
            "RAM / Depolama": "16 GB DDR4 / 512 GB M.2 NVMe SSD",
            "İşletim Sistemi": "FreeDOS (Kurulabilir)"
        }
    },
    {
        id: 11,
        name: "Apple MacBook Air M3 13 inç",
        brand: "Apple",
        category: "bilgisayar",
        priceOriginal: 49999,
        priceCurrent: 45999,
        rating: 4.8,
        reviewsCount: 78,
        tag: "Çok Satan",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
        description: "M3 çip ile MacBook Air şimdi her zamankinden daha yetenekli. Taşınabilir tasarımı ve 18 saate varan pil ömrü ile her yerde çalışın.",
        specs: {
            "Ekran": "13.6 inç Liquid Retina",
            "İşlemci": "Apple M3 Çip (8 Çekirdekli CPU, 10 Çekirdekli GPU)",
            "RAM / Depolama": "8 GB Birleşik Bellek / 256 GB SSD",
            "Pil Ömrü": "18 Saate Kadar"
        }
    },
    {
        id: 12,
        name: "Lenovo Legion Pro 5 Gaming Laptop",
        brand: "Lenovo",
        category: "bilgisayar",
        priceOriginal: 58999,
        priceCurrent: 54999,
        rating: 4.7,
        reviewsCount: 39,
        tag: "Yeni",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80",
        description: "AI ayarlı performans ve gelişmiş soğutma sistemi ile e-spor seviyesinde oyun oynayın. RTX 4060 ekran kartı ile kusursuz grafikler.",
        specs: {
            "Ekran": "16 inç WQXGA (2560x1600) IPS 165Hz",
            "İşlemci": "AMD Ryzen 7 7745HX",
            "RAM / Depolama": "16 GB DDR5 / 1 TB SSD",
            "Ekran Kartı": "NVIDIA GeForce RTX 4060 (8GB)"
        }
    },
    {
        id: 5,
        name: "Sony Bravia 65 Inch 4K Ultra HD Smart OLED TV",
        brand: "Sony",
        category: "tv-ses",
        priceOriginal: 54999,
        priceCurrent: 49999,
        rating: 4.8,
        reviewsCount: 76,
        tag: "Premium",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&q=80",
        description: "Cognitive Processor XR ile gerçek dünyaya en yakın renk tonları ve kusursuz derin siyahlar. Google TV ile binlerce uygulamaya anında erişim.",
        specs: {
            "Ekran Tipi": "65 inç 4K OLED (3840x2160)",
            "Yenileme Hızı": "120 Hz",
            "Ses Çıkışı": "Acoustic Surface Audio+ (50W)",
            "Bağlantılar": "4x HDMI 2.1, 2x USB"
        }
    },
    {
        id: 6,
        name: "JBL Tune 520BT Wireless Headphones",
        brand: "JBL",
        category: "tv-ses",
        priceOriginal: 2499,
        priceCurrent: 1999,
        rating: 4.5,
        reviewsCount: 340,
        tag: "Çok Satan",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
        description: "JBL Pure Bass ses kalitesi, kablosuz Bluetooth 5.3 bağlantısı ve 57 saate varan muazzam pil ömrüyle müziğinizi gün boyu yanınızda taşıyın.",
        specs: {
            "Bağlantı Tipi": "Bluetooth 5.3 Kablosuz",
            "Pil Ömrü": "57 Saate Kadar (Hızlı şarj ile 5 dk şarj = 3 saat müzik)",
            "Ağırlık": "157 gram",
            "Frekans Tepkisi": "20Hz - 20kHz"
        }
    },
    {
        id: 13,
        name: "LG OLED C3 55 inç Smart TV",
        brand: "LG",
        category: "tv-ses",
        priceOriginal: 42999,
        priceCurrent: 38999,
        rating: 4.7,
        reviewsCount: 52,
        tag: "Fırsat",
        image: "https://images.unsplash.com/photo-1552975084-6e027cd345c2?w=400&q=80",
        description: "α9 AI İşlemci Gen6 ile güçlendirilen LG OLED TV ile üstün kontrast, olağanüstü ses kalitesi ve evde sinema keyfi.",
        specs: {
            "Ekran Tipi": "55 inç 4K OLED",
            "İşlemci": "α9 AI İşlemci Gen6",
            "HDR": "Dolby Vision / HDR10 Pro",
            "İşletim Sistemi": "webOS 23"
        }
    },
    {
        id: 14,
        name: "Sennheiser Accentum Wireless Kulaklık",
        brand: "Sennheiser",
        category: "tv-ses",
        priceOriginal: 8999,
        priceCurrent: 7999,
        rating: 4.6,
        reviewsCount: 28,
        tag: "Yeni",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80",
        description: "Hibrit Aktif Gürültü Engelleme (ANC) ve 50 saatlik pil ömrü ile Sennheiser imzalı kaliteli ses deneyiminin keyfini çıkarın.",
        specs: {
            "Bağlantı": "Bluetooth 5.2",
            "Pil Ömrü": "50 Saate Kadar",
            "Gürültü Engelleme": "Hibrit Aktif Gürültü Engelleme (ANC)",
            "Renk": "Siyah / Beyaz"
        }
    },
    {
        id: 7,
        name: "Bosch Serie 6 9 kg 1400 Devir Çamaşır Makinesi",
        brand: "Bosch",
        category: "beyaz-esya",
        priceOriginal: 21999,
        priceCurrent: 18999,
        rating: 4.6,
        reviewsCount: 88,
        tag: "Fırsat",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80",
        description: "EcoSilence Drive motor teknolojisi sayesinde ekstra sessiz ve yüksek enerji tasarruflu yıkama. Leke çıkarma ve akıllı yük algılama programları.",
        specs: {
            "Yıkama Kapasitesi": "9 kg",
            "Maksimum Devir": "1400 Devir/Dakika",
            "Enerji Sınıfı": "A Sınıfı Süper Tasarruflu",
            "Motor Tipi": "EcoSilence Drive Sessiz Inverter"
        }
    },
    {
        id: 8,
        name: "Samsung No-Frost 450 Litre Buzdolabı",
        brand: "Samsung",
        category: "beyaz-esya",
        priceOriginal: 28999,
        priceCurrent: 25499,
        rating: 4.5,
        reviewsCount: 62,
        tag: "Yeni",
        image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=400&q=80",
        description: "Twin Cooling Plus teknolojisiyle gıdaları kokuları karışmadan ve iki kat daha uzun süre taze tutun. Dijital Inverter kompresör garantisiyle.",
        specs: {
            "Toplam Hacim": "450 Litre Net Hacim",
            "Soğutma Sistemi": "No-Frost Twin Cooling (Çiftli Soğutma)",
            "Renk / Tasarım": "Kolay Temizlenir Inox Çelik",
            "Boyutlar (GxYxD)": "70 x 186 x 72 cm"
        }
    },
    {
        id: 15,
        name: "Siemens iQ500 Bulaşık Makinesi",
        brand: "Siemens",
        category: "beyaz-esya",
        priceOriginal: 19999,
        priceCurrent: 17499,
        rating: 4.6,
        reviewsCount: 43,
        tag: "İndirim",
        image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&q=80",
        description: "Home Connect destekli akıllı bulaşık makinesi. varioSpeed Plus ile bulaşıklarınızı 3 kata kadar daha hızlı yıkayın.",
        specs: {
            "Kapasite": "13 Kişilik Yemek Takımı",
            "Program Sayısı": "6 Programlı",
            "Enerji Sınıfı": "C",
            "Bağlantı": "Wi-Fi (Home Connect ile uzaktan kontrol)"
        }
    },
    {
        id: 16,
        name: "Arçelik Inox Mikrodalga Fırın",
        brand: "Arçelik",
        category: "beyaz-esya",
        priceOriginal: 4999,
        priceCurrent: 4299,
        rating: 4.3,
        reviewsCount: 91,
        tag: "En Ucuz",
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&q=80",
        description: "Şık paslanmaz çelik tasarımı ve pratik kullanımı ile mutfaktaki en büyük yardımcınız. Farklı güç kademeleri ve buz çözme modu.",
        specs: {
            "Hacim": "20 Litre",
            "Güç": "700 W",
            "Kontrol Tipi": "Mekanik Kontrol",
            "Malzeme": "Inox Paslanmaz Çelik"
        }
    },
    {
        id: 17,
        name: "Philips Lumea IPL Tüy Alma Cihazı",
        brand: "Philips",
        category: "kisisel-bakim",
        priceOriginal: 15999,
        priceCurrent: 13999,
        rating: 4.6,
        reviewsCount: 142,
        tag: "Fırsat",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80",
        description: "SenseIQ teknolojisine sahip Philips Lumea IPL, evde acısız ve kalıcı pürüzsüzlük sunar. Vücut kıvrımlarına özel aparatlar.",
        specs: {
            "Teknoloji": "SenseIQ Teknolojili IPL",
            "Uygulama Alanı": "Vücut, Yüz, Hassas Bölgeler",
            "Kullanım Tipi": "Kablolu / Kablosuz",
            "Atış Ömrü": "450.000 Atış"
        }
    },
    {
        id: 18,
        name: "Dyson Airwrap Saç Şekillendirici",
        brand: "Dyson",
        category: "kisisel-bakim",
        priceOriginal: 19999,
        priceCurrent: 18499,
        rating: 4.8,
        reviewsCount: 95,
        tag: "Çok Satan",
        image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&q=80",
        description: "Aşırı ısı olmadan Coanda etkisiyle saçları şekillendirir, bukleler oluşturur ve pürüzsüzleştirir. Farklı saç tiplerine uygun başlıklar.",
        specs: {
            "Hava Akımı Hızı": "3 Kademe",
            "Sıcaklık Ayarı": "3 Kademe + Soğuk Üfleme",
            "Güç": "1300 W",
            "Kutu İçeriği": "Şekillendirme Başlıkları, Saklama Kutusu"
        }
    },
    {
        id: 19,
        name: "Braun Series 9 Pro Tıraş Makinesi",
        brand: "Braun",
        category: "kisisel-bakim",
        priceOriginal: 9999,
        priceCurrent: 8499,
        rating: 4.7,
        reviewsCount: 61,
        tag: "Premium",
        image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&q=80",
        description: "Braun'un şimdiye kadarki en iyi tıraş makinesi. 1, 3 veya 7 günlük sakalları etkili ve nazikçe kesen ProHead başlık.",
        specs: {
            "Tıraş Tipi": "Islak / Kuru Kullanım",
            "Çalışma Süresi": "60 Dakika Kablosuz",
            "Başlık Yapısı": "5 Tıraş Elemanlı Esnek Başlık",
            "Temizleme": "Clean&Charge Temizlik İstasyonu Dahil"
        }
    },
    {
        id: 20,
        name: "Oral-B iO Series 9 Şarjlı Diş Fırçası",
        brand: "Oral-B",
        category: "kisisel-bakim",
        priceOriginal: 7999,
        priceCurrent: 6999,
        rating: 4.8,
        reviewsCount: 75,
        tag: "Yeni",
        image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&q=80",
        description: "Devrim niteliğindeki iO teknolojisi ve 3D diş takibi ile diş hekimlerinin tavsiye ettiği profesyonel temizlik hissi.",
        specs: {
            "Fırçalama Modu": "7 Farklı Temizlik Modu",
            "Ekran": "Renkli İnteraktif Ekran",
            "Şarj Süresi": "3 Saat Hızlı Manyetik Şarj",
            "Basınç Sensörü": "Akıllı Basınç Sensörlü"
        }
    },
    {
        id: 21,
        name: "Dyson V15 Detect Kablosuz Süpürge",
        brand: "Dyson",
        category: "ev-aletleri",
        priceOriginal: 27999,
        priceCurrent: 24999,
        rating: 4.9,
        reviewsCount: 184,
        tag: "Çok Satan",
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&q=80",
        description: "Lazer aydınlatma teknolojisi ile gözle görülmeyen tozları ortaya çıkarır. Akıllı emiş gücü ayarı ve LCD bilgi ekranı.",
        specs: {
            "Emiş Gücü": "240 AW",
            "Çalışma Süresi": "60 Dakikaya Kadar",
            "Filtreleme": "Tam Makine Filtrasyon Sistemi",
            "Hazne Kapasitesi": "0.76 Litre"
        }
    },
    {
        id: 22,
        name: "Philips Airfryer XXL Fritöz",
        brand: "Philips",
        category: "ev-aletleri",
        priceOriginal: 7999,
        priceCurrent: 6499,
        rating: 4.8,
        reviewsCount: 420,
        tag: "Çok Satan",
        image: "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?w=400&q=80",
        description: "Sıcak hava ile az yağlı veya yağsız, çıtır çıtır ve lezzetli yemekler pişirin. Rapid Air hava teknolojisi ve XXL geniş hazne.",
        specs: {
            "Kapasite": "1.4 kg / 7.3 Litre (XXL)",
            "Güç": "2225 W",
            "Pişirme Teknolojisi": "Fat Removal (Yağ Azaltıcı)",
            "Temizlik": "Bulaşık Makinesinde Yıkanabilir Parçalar"
        }
    },
    {
        id: 23,
        name: "Nespresso Vertuo Kahve Makinesi",
        brand: "Nespresso",
        category: "ev-aletleri",
        priceOriginal: 6499,
        priceCurrent: 5499,
        rating: 4.6,
        reviewsCount: 68,
        tag: "Fırsat",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&q=80",
        description: "Centrifusion teknolojisiyle her bardakta zengin krema ve nefis lezzet. Farklı fincan boyutlarına uygun akıllı barkod okuma.",
        specs: {
            "Su Haznesi Kapasitesi": "1.1 Litre",
            "Kullanılan Kahve": "Vertuo Kapsülleri",
            "Teknoloji": "Centrifusion Barkod Okuma",
            "Garanti": "2 Yıl Türkiye Garantili"
        }
    },
    {
        id: 24,
        name: "Tefal Ultimate Kırışık Önleyici Ütü",
        brand: "Tefal",
        category: "ev-aletleri",
        priceOriginal: 3499,
        priceCurrent: 2999,
        rating: 4.5,
        reviewsCount: 115,
        tag: "Fırsat",
        image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=400&q=80",
        description: "Durilium Airglide Autoclean taban yapısı sayesinde üstün kayganlık. Yoğun şok buhar gücüyle inatçı kırışıklıklara son.",
        specs: {
            "Sürekli Buhar Çıkışı": "60 g/dk",
            "Şok Buhar": "260 g/dk",
            "Güç": "3000 W",
            "Taban Teknolojisi": "Durilium Airglide Autoclean"
        }
    },
    {
        id: 25,
        name: "Sony PlayStation 5 Slim 1 TB",
        brand: "Sony",
        category: "hobi-oyun",
        priceOriginal: 22999,
        priceCurrent: 19999,
        rating: 4.9,
        reviewsCount: 156,
        tag: "Çok Satan",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&q=80",
        description: "Daha ince ve hafif PS5 tasarımı. Ultra hızlı SSD, dokunsal geri bildirim ve 3D ses desteği ile oyunun içinde hissedin.",
        specs: {
            "Depolama Kapasitesi": "1 TB Custom SSD",
            "Grafik İşlemci": "AMD Radeon RDNA 2 tabanlı GPU",
            "Çözünürlük": "8K / 4K 120Hz Desteği",
            "Kutu İçeriği": "DualSense Kontrol Cihazı, HDMI Kablosu"
        }
    },
    {
        id: 26,
        name: "Nintendo Switch OLED Konsol",
        brand: "Nintendo",
        category: "hobi-oyun",
        priceOriginal: 14999,
        priceCurrent: 12999,
        rating: 4.8,
        reviewsCount: 88,
        tag: "Yeni",
        image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&q=80",
        description: "7 inç büyüleyici OLED ekran, geniş ayarlanabilir stand, kablolu LAN bağlantı noktasına sahip dock ve 64 GB dahili depolama.",
        specs: {
            "Ekran Tipi": "7.0 inç OLED Ekran",
            "Dahili Depolama": "64 GB",
            "Modlar": "Televizyon Modu / Masaüstü Modu / Avuçiçi Modu",
            "Garanti": "2 Yıl İthalatçı / Distribütör Garantili"
        }
    },
    {
        id: 27,
        name: "ASUS ROG Ally El Konsolu",
        brand: "Asus",
        category: "hobi-oyun",
        priceOriginal: 28999,
        priceCurrent: 24999,
        rating: 4.6,
        reviewsCount: 47,
        tag: "Premium",
        image: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=400&q=80",
        description: "Windows 11 tabanlı, AMD Ryzen Z1 Extreme işlemcili canavar el konsolu. Steam, Xbox Game Pass ve Epic Games kütüphaneleriniz her an yanınızda.",
        specs: {
            "Ekran": "7 inç Full HD (1920x1080) 120Hz IPS Touch",
            "İşlemci": "AMD Ryzen Z1 Extreme (8 çekirdekli)",
            "RAM / Depolama": "16 GB LPDDR5 / 512 GB PCIe 4.0 SSD",
            "İşletim Sistemi": "Windows 11 Home"
        }
    },
    {
        id: 28,
        name: "DualSense Kablosuz PS5 Oyun Kolu",
        brand: "Sony",
        category: "hobi-oyun",
        priceOriginal: 3499,
        priceCurrent: 2999,
        rating: 4.7,
        reviewsCount: 220,
        tag: "Fırsat",
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&q=80",
        description: "Dokunsal geri bildirim, dinamik tetik efektleri ve dahili mikrofon özellikleriyle oyunlarda derin hisler yaşayın.",
        specs: {
            "Bağlantı": "Bluetooth Kablosuz / USB-C",
            "Özellikler": "Dokunsal Geri Bildirim, Uyarlanabilir Tetikler",
            "Batarya": "Dahili Şarj Edilebilir Pil",
            "Renk": "Klasik Beyaz"
        }
    },
    {
        id: 29,
        name: "Apple Watch Series 9 GPS 45mm",
        brand: "Apple",
        category: "aksesuar",
        priceOriginal: 16999,
        priceCurrent: 14999,
        rating: 4.8,
        reviewsCount: 65,
        tag: "Çok Satan",
        image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&q=80",
        description: "Yeni S9 SiP işlemci, çift dokunuş hareketi, daha parlak ekran ve gelişmiş sağlık/antrenman takip özellikleri.",
        specs: {
            "Kasa Boyutu": "45 mm Alüminyum Kasa",
            "Ekran": "Her Zaman Açık Retina Ekran (2000 nit)",
            "Sensörler": "EKG, Kanda Oksijen, Sıcaklık Algılama",
            "Batarya Ömrü": "18 Saate Kadar (Düşük güç modunda 36 saat)"
        }
    },
    {
        id: 30,
        name: "Samsung Galaxy Watch 6 Classic",
        brand: "Samsung",
        category: "aksesuar",
        priceOriginal: 12999,
        priceCurrent: 10999,
        rating: 4.6,
        reviewsCount: 42,
        tag: "Yeni",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80",
        description: "Dönen fiziksel çerçeve tasarımı, daha büyük ekran ve vücut kompozisyonu analizi (BIA) ile şıklık ve sağlık takibi bir arada.",
        specs: {
            "Kasa Boyutu": "47 mm Paslanmaz Çelik",
            "İşletim Sistemi": "Wear OS (Samsung ortaklığıyla)",
            "Ekran": "Safir Kristal Cam Super AMOLED",
            "Takip": "Uyku Analizi, Tansiyon, EKG"
        }
    },
    {
        id: 31,
        name: "Anker PowerCore 20000mAh Powerbank",
        brand: "Anker",
        category: "aksesuar",
        priceOriginal: 1999,
        priceCurrent: 1499,
        rating: 4.7,
        reviewsCount: 512,
        tag: "Çok Satan",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&q=80",
        description: "PowerIQ şarj teknolojisine sahip ultra yüksek kapasiteli taşınabilir şarj cihazı. Aynı anda iki cihazı güvenle şarj edin.",
        specs: {
            "Kapasite": "20.000 mAh",
            "Çıkış Portları": "2x USB-A, 1x USB-C (Giriş/Çıkış)",
            "Hızlı Şarj": "PowerIQ Teknolojili Akıllı Akım",
            "Koruma": "MultiProtect Güvenlik Sistemi"
        }
    },
    {
        id: 32,
        name: "Spigen 3'ü 1 Arada Kablosuz Şarj Standı",
        brand: "Spigen",
        category: "aksesuar",
        priceOriginal: 2499,
        priceCurrent: 1999,
        rating: 4.5,
        reviewsCount: 54,
        tag: "Fırsat",
        image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&q=80",
        description: "iPhone, Apple Watch ve AirPods cihazlarınızı aynı anda tek bir istasyonda kablosuz ve şık bir biçimde şarj edin.",
        specs: {
            "Şarj Gücü": "Maksimum 15W Hızlı Kablosuz Şarj",
            "Uyumluluk": "MagSafe Uyumlu iPhone / Apple Watch / AirPods",
            "Tasarım": "Ergonomik Masaüstü Standı",
            "Kutu İçeriği": "Şarj Standı, Güç Adaptörü ve Kablo"
        }
    },
    {
        id: 33,
        name: "DJI Mini 4 Pro Drone (Fly More Combo)",
        brand: "DJI",
        category: "foto-kamera",
        priceOriginal: 45999,
        priceCurrent: 41999,
        rating: 4.9,
        reviewsCount: 38,
        tag: "Premium",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=400&q=80",
        description: "249 gram altı ultralight drone. Her yönden engel algılama, 4K/60fps HDR dikey çekim ve 34 dakika uçuş süresi.",
        specs: {
            "Ağırlık": "249 gram",
            "Kamera Çözünürlüğü": "48 MP 4K/60fps HDR Video",
            "Maksimum Uçuş Süresi": "34 Dakika (Combo paket ile 3 pil)",
            "Kontrol Cihazı": "DJI RC 2 Ekranlı Kumanda Dahil"
        }
    },
    {
        id: 34,
        name: "GoPro HERO12 Black Aksiyon Kamerası",
        brand: "GoPro",
        category: "foto-kamera",
        priceOriginal: 18999,
        priceCurrent: 16499,
        rating: 4.7,
        reviewsCount: 79,
        tag: "Yeni",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&q=80",
        description: "HyperSmooth 6.0 stabilizasyon teknolojisi, 5.3K video kalitesi ve Bluetooth ses desteği ile en zorlu anlarınızı kaydedin.",
        specs: {
            "Video Çözünürlüğü": "5.3K 60fps / 4K 120fps",
            "Fotoğraf Çözünürlüğü": "27 MP",
            "Su Geçirmezlik": "10 Metreye Kadar (Kılıfsız)",
            "Stabilizasyon": "HyperSmooth 6.0"
        }
    },
    {
        id: 35,
        name: "Sony Alpha 7 IV Aynasız Fotoğraf Makinesi",
        brand: "Sony",
        category: "foto-kamera",
        priceOriginal: 89999,
        priceCurrent: 84999,
        rating: 4.9,
        reviewsCount: 22,
        tag: "Premium",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80",
        description: "Yeni geliştirilen 33 MP Exmor R CMOS sensör, gerçek zamanlı Eye AF ve 4K 60p video kaydı ile profesyonel hibrit kamera.",
        specs: {
            "Sensör Çözünürlüğü": "33 Megapiksel Full Frame",
            "Odaklama Noktası": "759 Noktalı Hibrit AF",
            "Video Formatı": "4K 60p 10-bit 4:2:2",
            "Bağlantı": "Wi-Fi / Bluetooth / USB-C Akış Desteği"
        }
    },
    {
        id: 36,
        name: "Instax Mini 12 Anlık Fotoğraf Makinesi",
        brand: "Fujifilm",
        category: "foto-kamera",
        priceOriginal: 3499,
        priceCurrent: 2999,
        rating: 4.6,
        reviewsCount: 145,
        tag: "Fırsat",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80",
        description: "Otomatik pozlama ve yakın çekim moduyla şipşak fotoğraf çekmenin en eğlenceli ve popüler yolu. Mini filmler ile anıları basılı tutun.",
        specs: {
            "Film Tipi": "Fujifilm Instax Mini Film",
            "Çekim Mesafesi": "0.3 m ve ötesi (0.3m - 0.5m arası yakın çekim)",
            "Güç Kaynağı": "2 Adet AA Alkalin Pil",
            "Flaş": "Otomatik Flaş Ayarı"
        }
    },
    {
        id: 37,
        name: "HP Smart Tank 580 Kablosuz Yazıcı",
        brand: "HP",
        category: "ofis-kirtasiye",
        priceOriginal: 7999,
        priceCurrent: 6999,
        rating: 4.5,
        reviewsCount: 118,
        tag: "Çok Satan",
        image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&q=80",
        description: "Kutudan çıkan mürekkeple 18.000 sayfaya kadar siyah veya 8.000 sayfa renkli baskı alın. Mobil uygulama ile telefondan kolay çıktı.",
        specs: {
            "Fonksiyonlar": "Baskı, Tarama, Fotokopi",
            "Bağlantı": "Wi-Fi Kablosuz, USB 2.0",
            "Baskı Teknolojisi": "HP Mürekkep Tankı Sistemi",
            "Baskı Hızı (Siyah)": "Saatte 12 Sayfaya Kadar"
        }
    },
    {
        id: 38,
        name: "Epson EcoTank L3250 Tanklı Yazıcı",
        brand: "Epson",
        category: "ofis-kirtasiye",
        priceOriginal: 8499,
        priceCurrent: 7499,
        rating: 4.7,
        reviewsCount: 93,
        tag: "Çok Satan",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80",
        description: "Kartuşsuz baskı ile baskı maliyetlerinde %90'a varan tasarruf sağlayın. Epson Smart Panel uygulamasından tam yönetim.",
        specs: {
            "Fonksiyonlar": "Yazıcı, Tarayıcı, Fotokopi",
            "Bağlantı Türü": "Wi-Fi ve Wi-Fi Direct",
            "Mürekkep Verimi": "8.100 sayfa siyah / 6.500 sayfa renkli baskı",
            "Tasarım": "Kompakt Entegre Tank Tasarımı"
        }
    },
    {
        id: 39,
        name: "Xiaomi Mi Akıllı Projeksiyon Cihazı 2",
        brand: "Xiaomi",
        category: "ofis-kirtasiye",
        priceOriginal: 18999,
        priceCurrent: 16999,
        rating: 4.6,
        reviewsCount: 31,
        tag: "Yeni",
        image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&q=80",
        description: "Evde veya ofiste dev ekran keyfi. Android TV işletim sistemi, çok açılı otomatik keystone düzeltme ve net Full HD görüntü kalitesi.",
        specs: {
            "Işık Kaynağı": "LED (500 ANSI lümen)",
            "Çözünürlük": "1920x1080 Full HD",
            "İşletim Sistemi": "Android TV",
            "Ses": "Dolby Audio Çift Hoparlör"
        }
    },
    {
        id: 40,
        name: "ViewSonic 24 inç IPS Ofis Monitörü",
        brand: "ViewSonic",
        category: "ofis-kirtasiye",
        priceOriginal: 4999,
        priceCurrent: 4299,
        rating: 4.4,
        reviewsCount: 84,
        tag: "Fırsat",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80",
        description: "İnce çerçeveli SuperClear IPS panel, Flicker-Free ve Mavi Işık Filtresi göz koruma teknolojileriyle uzun çalışma saatleri için ideal.",
        specs: {
            "Ekran Boyutu": "23.8 inç",
            "Panel Tipi": "IPS Teknolojisi",
            "Tazeleme Hızı": "75 Hz",
            "Bağlantılar": "HDMI, VGA"
        }
    }
];

let localProducts = JSON.parse(localStorage.getItem('teknosa_products'));
if (!localProducts) {
    localProducts = defaultProducts;
    localStorage.setItem('teknosa_products', JSON.stringify(localProducts));
}
window.PRODUCTS_DATA = localProducts;

// ==========================================================================
// GLOBAL POPUP / TOAST NOTIFICATION SYSTEM
// ==========================================================================
window.showToast = (message, type = 'success') => {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconSVG = '';
    if (type === 'success') {
        iconSVG = `
            <svg class="toast-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>`;
    } else {
        iconSVG = `
            <svg class="toast-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>`;
    }

    toast.innerHTML = `${iconSVG}<span>${message}</span>`;
    container.appendChild(toast);

    // Slide in
    setTimeout(() => {
        toast.classList.add('show');
    }, 50);

    // Auto remove after 3s
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
};

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. MOBILE MENU / HAMBURGER LOGIC
    // ==========================================================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // ==========================================================================
    // 2. STATISTICS COUNTER ANIMATION
    // ==========================================================================
    const statsSection = document.querySelector('.stats-section');
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const runCounters = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            const suffix = stat.getAttribute('data-suffix') || '';
            const duration = 2000;
            const stepTime = 30;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + suffix;
                }
            }, stepTime);
        });
    };

    if (statsSection && statNumbers.length > 0) {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !animated) {
                        runCounters();
                        animated = true;
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            observer.observe(statsSection);
        } else {
            runCounters();
        }
    }

    // ==========================================================================
    // 3. HEADER AUTHENTICATION NAVIGATION (Supports local & session storage)
    // ==========================================================================
    const authNavItem = document.getElementById('auth-nav-item');
    if (authNavItem) {
        const session = JSON.parse(localStorage.getItem('teknosa_session')) || JSON.parse(sessionStorage.getItem('teknosa_session'));
        
        if (session) {
            const adminLink = session.role === 'admin' ? `
                <a href="admin.html" class="user-nav-badge" style="background-color: var(--secondary); color: #fff;" title="Yönetim Paneli">
                    <svg viewBox="0 0 24 24" style="fill: currentColor;"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
                </a>
            ` : '';
            authNavItem.innerHTML = `
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    ${adminLink}
                    <a href="profil.html" class="user-nav-badge" title="Profilim (${session.fullName})">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                    </a>
                    <button class="logout-nav-btn" id="logout-btn" title="Çıkış Yap">
                        <svg viewBox="0 0 24 24"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
                    </button>
                </div>
            `;
            
            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    localStorage.removeItem('teknosa_session');
                    sessionStorage.removeItem('teknosa_session');
                    window.showToast('Başarıyla çıkış yapıldı.', 'success');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                });
            }
        } else {
            const isAuthPage = window.location.href.includes('giris.html');
            const activeClass = isAuthPage ? 'active' : '';
            authNavItem.innerHTML = `
                <a href="giris.html" class="nav-link ${activeClass}" id="nav-login">Giriş Yap / Üye Ol</a>
            `;
        }
    }

    // ==========================================================================
    // 4. SHOPPING CART (CART DRAWER) MANAGEMENT
    // ==========================================================================
    let cart = JSON.parse(localStorage.getItem('teknosa_cart')) || [];

    const saveCart = () => {
        localStorage.setItem('teknosa_cart', JSON.stringify(cart));
        updateCartBadge();
        renderCart();
    };

    const updateCartBadge = () => {
        const badge = document.getElementById('cart-badge-count');
        if (badge) {
            const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            badge.textContent = totalCount;
        }
    };

    // Format currency helper
    const formatPrice = (value) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            maximumFractionDigits: 0
        }).format(value);
    };

    const renderCart = () => {
        const container = document.getElementById('cart-items-container');
        const totalPriceEl = document.getElementById('cart-total-price');
        const checkoutBtn = document.getElementById('checkout-btn');
        
        if (!container) return;

        if (cart.length === 0) {
            container.innerHTML = `
                <div class="cart-empty-state">
                    <svg viewBox="0 0 24 24">
                        <path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h.3l1.85 9.24c.15.76.81 1.3 1.58 1.3h12.54c.77 0 1.43-.53 1.58-1.3L21.7 12h.3c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-4.79zM9 9l3-4.5L15 9H9zm7.5 11h-9l-1.4-7h11.8l-1.4 7z"/>
                    </svg>
                    <p>Sepetiniz henüz boş.</p>
                </div>
            `;
            if (totalPriceEl) totalPriceEl.textContent = '0 TL';
            if (checkoutBtn) checkoutBtn.disabled = true;
            return;
        }

        if (checkoutBtn) checkoutBtn.disabled = false;
        container.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const rowTotal = item.price * item.quantity;
            total += rowTotal;

            const rowHTML = `
                <div class="cart-item-row">
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <div class="cart-item-pricing">
                            <div class="cart-item-qty-selector">
                                <button class="cart-item-qty-btn decrease-qty" data-id="${item.id}">-</button>
                                <span class="cart-item-qty-val">${item.quantity}</span>
                                <button class="cart-item-qty-btn increase-qty" data-id="${item.id}">+</button>
                            </div>
                            <span class="cart-item-price">${formatPrice(rowTotal)}</span>
                        </div>
                    </div>
                    <button class="cart-item-remove remove-item" data-id="${item.id}" title="Ürünü Sil">
                        <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                    </button>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', rowHTML);
        });

        if (totalPriceEl) totalPriceEl.textContent = formatPrice(total);

        // Bind events inside the list
        document.querySelectorAll('.increase-qty').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'), 10);
                const item = cart.find(p => p.id === id);
                if (item) {
                    item.quantity += 1;
                    saveCart();
                }
            });
        });

        document.querySelectorAll('.decrease-qty').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'), 10);
                const item = cart.find(p => p.id === id);
                if (item) {
                    item.quantity -= 1;
                    if (item.quantity <= 0) {
                        cart = cart.filter(p => p.id !== id);
                    }
                    saveCart();
                }
            });
        });

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'), 10);
                cart = cart.filter(p => p.id !== id);
                saveCart();
                window.showToast('Ürün sepetinizden çıkarıldı.', 'error');
            });
        });
    };

    // Add to cart helper function
    window.addToCart = (productId) => {
        const product = window.PRODUCTS_DATA.find(p => p.id === productId);
        if (!product) return;

        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.priceCurrent,
                image: product.image,
                quantity: 1
            });
        }

        saveCart();
        window.showToast(`${product.name} sepetinize eklendi!`, 'success');
        
        // Auto open drawer to show success
        const drawerOverlay = document.getElementById('cart-drawer-overlay');
        if (drawerOverlay) drawerOverlay.classList.add('open');
    };

    // Drawer triggers
    const cartToggle = document.getElementById('cart-toggle-btn');
    const drawerOverlay = document.getElementById('cart-drawer-overlay');
    const drawerClose = document.getElementById('cart-drawer-close-btn');

    if (cartToggle && drawerOverlay) {
        cartToggle.addEventListener('click', (e) => {
            e.preventDefault();
            drawerOverlay.classList.add('open');
        });
    }

    if (drawerClose && drawerOverlay) {
        drawerClose.addEventListener('click', () => {
            drawerOverlay.classList.remove('open');
        });

        drawerOverlay.addEventListener('click', (e) => {
            if (e.target === drawerOverlay) {
                drawerOverlay.classList.remove('open');
            }
        });
    }

    // ==========================================================================
    // 4.5. CHECKOUT WIZARD MODAL SYSTEM
    // ==========================================================================
    let selectedAddressId = null;
    let selectedCardId = null;

    const initCheckoutModal = () => {
        let modal = document.getElementById('checkout-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'checkout-modal';
            modal.className = 'modal-overlay';
            modal.innerHTML = `
                <div class="modal-content checkout-modal-content" style="position: relative;">
                    <button class="cart-drawer-close" id="checkout-modal-close-btn" style="position: absolute; top: 15px; right: 15px;" aria-label="Kapat">
                        <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                    </button>
                    <div class="checkout-steps-indicator">
                        <div class="step-indicator active" id="checkout-ind-1">1. Adres Seçimi</div>
                        <div class="step-indicator-line"></div>
                        <div class="step-indicator" id="checkout-ind-2">2. Ödeme Bilgileri</div>
                        <div class="step-indicator-line"></div>
                        <div class="step-indicator" id="checkout-ind-3">3. Sipariş Onayı</div>
                    </div>
                    <div class="checkout-step-content" id="checkout-step-1"></div>
                    <div class="checkout-step-content" id="checkout-step-2" style="display:none;"></div>
                    <div class="checkout-step-content" id="checkout-step-3" style="display:none;"></div>
                </div>
            `;
            document.body.appendChild(modal);
            
            const closeBtn = document.getElementById('checkout-modal-close-btn');
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('open');
            });
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('open');
                }
            });
        }
        return modal;
    };

    const renderCheckoutStep1 = (session) => {
        const step1El = document.getElementById('checkout-step-1');
        if (!step1El) return;

        const allAddresses = JSON.parse(localStorage.getItem('teknosa_addresses')) || [];
        const userAddresses = allAddresses.filter(a => a.userEmail === session.email);

        let listHTML = '';
        if (userAddresses.length > 0) {
            listHTML = `
                <div class="checkout-selection-grid">
                    ${userAddresses.map(addr => {
                        const isSelected = selectedAddressId === addr.id;
                        return `
                            <div class="selectable-item-card ${isSelected ? 'selected' : ''}" data-type="address" data-id="${addr.id}">
                                <div class="select-badge"></div>
                                <div>
                                    <h4 style="font-weight:700; color:var(--secondary); font-size:0.95rem; margin-bottom:0.25rem;">${addr.title}</h4>
                                    <p style="font-size:0.8rem; color:var(--text-color); line-height:1.3; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">${addr.detail}</p>
                                </div>
                                <span style="font-size:0.75rem; color:var(--text-muted); font-weight:500; margin-top:0.5rem; display:block;">${addr.district} / ${addr.city}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div style="text-align: right; margin-bottom: 1rem;">
                    <button class="btn btn-outline" id="btn-show-new-address" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;">+ Yeni Adres Ekle</button>
                </div>
            `;
        }

        step1El.innerHTML = `
            <h3>Teslimat Adresi Seçimi</h3>
            <p class="step-desc">Lütfen siparişinizin gönderilmesini istediğiniz adresi seçin veya yeni bir adres tanımlayın.</p>
            
            <div id="address-selection-area">
                ${listHTML}
            </div>
            
            <div class="checkout-form-box" id="new-address-form-box" style="${userAddresses.length > 0 ? 'display:none;' : ''}">
                <h4 style="font-weight: 700; margin-bottom: 1rem; color: var(--primary);">Yeni Adres Bilgileri</h4>
                <div class="form-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                    <div class="form-group" style="grid-column: span 2;">
                        <label style="font-size:0.8rem; font-weight:600; display:block; margin-bottom:3px;">Adres Başlığı</label>
                        <input type="text" id="chk-addr-title" placeholder="Örn: Ev Adresim" style="width:100%; padding:0.5rem; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                    </div>
                    <div class="form-group">
                        <label style="font-size:0.8rem; font-weight:600; display:block; margin-bottom:3px;">Şehir</label>
                        <input type="text" id="chk-addr-city" placeholder="Örn: İstanbul" style="width:100%; padding:0.5rem; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                    </div>
                    <div class="form-group">
                        <label style="font-size:0.8rem; font-weight:600; display:block; margin-bottom:3px;">İlçe</label>
                        <input type="text" id="chk-addr-district" placeholder="Örn: Kadıköy" style="width:100%; padding:0.5rem; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                    </div>
                    <div class="form-group" style="grid-column: span 2;">
                        <label style="font-size:0.8rem; font-weight:600; display:block; margin-bottom:3px;">Telefon Numarası</label>
                        <input type="text" id="chk-addr-phone" placeholder="Örn: 05551234567" style="width:100%; padding:0.5rem; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                    </div>
                    <div class="form-group" style="grid-column: span 2;">
                        <label style="font-size:0.8rem; font-weight:600; display:block; margin-bottom:3px;">Açık Adres</label>
                        <textarea id="chk-addr-detail" rows="2" placeholder="Mahalle, cadde, no..." style="width:100%; padding:0.5rem; border:1px solid var(--border-color); border-radius:var(--radius-sm); font-family:inherit;"></textarea>
                    </div>
                </div>
                ${userAddresses.length > 0 ? `
                    <div style="text-align: right; margin-top: 1rem;">
                        <button class="btn btn-outline" id="btn-cancel-new-address" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; margin-right: 0.5rem;">İptal Et</button>
                        <button class="btn btn-primary" id="btn-save-new-address" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;">Adresi Kaydet</button>
                    </div>
                ` : ''}
            </div>

            <div class="checkout-footer-buttons">
                <span style="font-size:0.9rem; color:var(--text-muted);">Adım 1 / 3</span>
                <button class="btn btn-primary" id="btn-step-1-next">Ödeme Adımına Geç &gt;</button>
            </div>
        `;

        const selectableCards = step1El.querySelectorAll('.selectable-item-card[data-type="address"]');
        selectableCards.forEach(card => {
            card.addEventListener('click', () => {
                selectableCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                selectedAddressId = card.getAttribute('data-id');
            });
        });

        if (userAddresses.length > 0 && !selectedAddressId) {
            const firstCard = step1El.querySelector('.selectable-item-card[data-type="address"]');
            if (firstCard) firstCard.click();
        }

        const btnShowNew = document.getElementById('btn-show-new-address');
        const formBox = document.getElementById('new-address-form-box');
        const selectionArea = document.getElementById('address-selection-area');
        
        if (btnShowNew) {
            btnShowNew.addEventListener('click', () => {
                formBox.style.display = 'block';
                selectionArea.style.display = 'none';
                btnShowNew.style.display = 'none';
                selectableCards.forEach(c => c.classList.remove('selected'));
                selectedAddressId = null;
            });
        }

        const btnCancelNew = document.getElementById('btn-cancel-new-address');
        if (btnCancelNew) {
            btnCancelNew.addEventListener('click', () => {
                formBox.style.display = 'none';
                selectionArea.style.display = 'block';
                btnShowNew.style.display = 'inline-block';
                const firstCard = step1El.querySelector('.selectable-item-card[data-type="address"]');
                if (firstCard) firstCard.click();
            });
        }

        const btnSaveNew = document.getElementById('btn-save-new-address');
        if (btnSaveNew) {
            btnSaveNew.addEventListener('click', () => {
                const title = document.getElementById('chk-addr-title').value.trim();
                const city = document.getElementById('chk-addr-city').value.trim();
                const district = document.getElementById('chk-addr-district').value.trim();
                const phone = document.getElementById('chk-addr-phone').value.trim();
                const detail = document.getElementById('chk-addr-detail').value.trim();

                if (!title || !city || !district || !phone || !detail) {
                    window.showToast('Lütfen tüm adres alanlarını doldurunuz.', 'error');
                    return;
                }

                const newAddr = {
                    userEmail: session.email,
                    id: 'addr-' + Date.now(),
                    title: title,
                    city: city,
                    district: district,
                    phone: phone,
                    detail: detail
                };
                allAddresses.push(newAddr);
                localStorage.setItem('teknosa_addresses', JSON.stringify(allAddresses));
                selectedAddressId = newAddr.id;
                
                window.showToast('Adresiniz başarıyla kaydedildi.', 'success');
                renderCheckoutStep1(session);
            });
        }

        const btnNext = document.getElementById('btn-step-1-next');
        btnNext.addEventListener('click', () => {
            if (!selectedAddressId) {
                const title = document.getElementById('chk-addr-title').value.trim();
                const city = document.getElementById('chk-addr-city').value.trim();
                const district = document.getElementById('chk-addr-district').value.trim();
                const phone = document.getElementById('chk-addr-phone').value.trim();
                const detail = document.getElementById('chk-addr-detail').value.trim();

                if (!title || !city || !district || !phone || !detail) {
                    window.showToast('Lütfen geçerli bir teslimat adresi seçin veya alanları doldurun.', 'error');
                    return;
                }

                const newAddr = {
                    userEmail: session.email,
                    id: 'addr-' + Date.now(),
                    title: title,
                    city: city,
                    district: district,
                    phone: phone,
                    detail: detail
                };
                allAddresses.push(newAddr);
                localStorage.setItem('teknosa_addresses', JSON.stringify(allAddresses));
                selectedAddressId = newAddr.id;
            }

            document.getElementById('checkout-ind-1').classList.remove('active');
            document.getElementById('checkout-ind-1').classList.add('completed');
            document.getElementById('checkout-ind-2').classList.add('active');
            document.getElementById('checkout-step-1').style.display = 'none';
            document.getElementById('checkout-step-2').style.display = 'block';
            
            renderCheckoutStep2(session);
        });
    };

    const renderCheckoutStep2 = (session) => {
        const step2El = document.getElementById('checkout-step-2');
        if (!step2El) return;

        const allCards = JSON.parse(localStorage.getItem('teknosa_cards')) || [];
        const userCards = allCards.filter(c => c.userEmail === session.email);

        let listHTML = '';
        if (userCards.length > 0) {
            listHTML = `
                <div class="checkout-selection-grid">
                    ${userCards.map(card => {
                        const isSelected = selectedCardId === card.id;
                        const maskedNum = '•••• •••• •••• ' + card.number.slice(-4);
                        return `
                            <div class="checkout-card-preview ${isSelected ? 'selected' : ''}" data-type="card" data-id="${card.id}">
                                <div class="select-badge"></div>
                                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                                    <div>
                                        <span style="font-size:0.6rem; text-transform:uppercase; opacity:0.8; letter-spacing:1px; color:#fff;">Kayıtlı Kart</span>
                                        <h4 style="font-size:0.85rem; margin-top:2px; font-weight:700; color:#fff; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:140px;">${card.holder}</h4>
                                    </div>
                                    <svg viewBox="0 0 24 24" style="width: 20px; height: 20px; fill: var(--primary);"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                                </div>
                                <div>
                                    <div style="font-family: monospace; font-size: 0.95rem; letter-spacing: 1.5px; margin-bottom: 0.25rem; color:#fff;">${maskedNum}</div>
                                    <span style="font-size:0.75rem; font-weight:700; opacity:0.9; color:#fff;">SKT: ${card.expiry}</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div style="text-align: right; margin-bottom: 1rem;">
                    <button class="btn btn-outline" id="btn-show-new-card" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;">+ Yeni Kart Ekle</button>
                </div>
            `;
        }

        step2El.innerHTML = `
            <h3>Ödeme Yöntemi Seçimi</h3>
            <p class="step-desc">Lütfen kayıtlı kartlarınızdan birini seçin veya yeni bir kredi/banka kartı tanımlayın.</p>
            
            <div id="card-selection-area">
                ${listHTML}
            </div>
            
            <div class="checkout-form-box" id="new-card-form-box" style="${userCards.length > 0 ? 'display:none;' : ''}">
                <h4 style="font-weight: 700; margin-bottom: 1rem; color: var(--primary);">Yeni Kart Bilgileri</h4>
                <div class="form-grid" style="display:grid; grid-template-columns: 2fr 1fr 1fr; gap: 0.75rem;">
                    <div class="form-group" style="grid-column: span 3;">
                        <label style="font-size:0.8rem; font-weight:600; display:block; margin-bottom:3px;">Kart Üzerindeki İsim</label>
                        <input type="text" id="chk-card-holder" placeholder="Ahmet Yılmaz" style="width:100%; padding:0.5rem; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                    </div>
                    <div class="form-group" style="grid-column: span 3;">
                        <label style="font-size:0.8rem; font-weight:600; display:block; margin-bottom:3px;">Kart Numarası</label>
                        <input type="text" id="chk-card-number" placeholder="16 Haneli Kart Numarası" maxlength="16" style="width:100%; padding:0.5rem; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                    </div>
                    <div class="form-group" style="grid-column: span 2;">
                        <label style="font-size:0.8rem; font-weight:600; display:block; margin-bottom:3px;">Son Kullanma Tarihi</label>
                        <input type="text" id="chk-card-expiry" placeholder="AA/YY" maxlength="5" style="width:100%; padding:0.5rem; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                    </div>
                    <div class="form-group">
                        <label style="font-size:0.8rem; font-weight:600; display:block; margin-bottom:3px;">CVC/CVV</label>
                        <input type="text" id="chk-card-cvc" placeholder="3 Hane" maxlength="3" style="width:100%; padding:0.5rem; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                    </div>
                </div>
                ${userCards.length > 0 ? `
                    <div style="text-align: right; margin-top: 1rem;">
                        <button class="btn btn-outline" id="btn-cancel-new-card" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; margin-right: 0.5rem;">İptal Et</button>
                        <button class="btn btn-primary" id="btn-save-new-card" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;">Kartı Kaydet</button>
                    </div>
                ` : ''}
            </div>

            <div class="checkout-footer-buttons">
                <button class="btn btn-outline" id="btn-step-2-back">&lt; Geri Dön</button>
                <button class="btn btn-primary" id="btn-step-2-next">Sipariş Özetine Geç &gt;</button>
            </div>
        `;

        const selectableCards = step2El.querySelectorAll('.checkout-card-preview[data-type="card"]');
        selectableCards.forEach(card => {
            card.addEventListener('click', () => {
                selectableCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                selectedCardId = card.getAttribute('data-id');
            });
        });

        if (userCards.length > 0 && !selectedCardId) {
            const firstCard = step2El.querySelector('.checkout-card-preview[data-type="card"]');
            if (firstCard) firstCard.click();
        }

        const btnShowNew = document.getElementById('btn-show-new-card');
        const formBox = document.getElementById('new-card-form-box');
        const selectionArea = document.getElementById('card-selection-area');
        
        if (btnShowNew) {
            btnShowNew.addEventListener('click', () => {
                formBox.style.display = 'block';
                selectionArea.style.display = 'none';
                btnShowNew.style.display = 'none';
                selectableCards.forEach(c => c.classList.remove('selected'));
                selectedCardId = null;
            });
        }

        const btnCancelNew = document.getElementById('btn-cancel-new-card');
        if (btnCancelNew) {
            btnCancelNew.addEventListener('click', () => {
                formBox.style.display = 'none';
                selectionArea.style.display = 'block';
                btnShowNew.style.display = 'inline-block';
                const firstCard = step2El.querySelector('.checkout-card-preview[data-type="card"]');
                if (firstCard) firstCard.click();
            });
        }

        const btnSaveNew = document.getElementById('btn-save-new-card');
        if (btnSaveNew) {
            btnSaveNew.addEventListener('click', () => {
                const holder = document.getElementById('chk-card-holder').value.trim();
                const num = document.getElementById('chk-card-number').value.trim();
                const expiry = document.getElementById('chk-card-expiry').value.trim();
                const cvc = document.getElementById('chk-card-cvc').value.trim();

                if (!holder || !num || !expiry || !cvc) {
                    window.showToast('Lütfen tüm kart alanlarını doldurunuz.', 'error');
                    return;
                }
                if (num.length !== 16 || isNaN(num)) {
                    window.showToast('Lütfen geçerli 16 haneli kart numarası giriniz.', 'error');
                    return;
                }
                if (!/^\d{2}\/\d{2}$/.test(expiry)) {
                    window.showToast('Geçerli son kullanma tarihi giriniz (AA/YY).', 'error');
                    return;
                }
                if (cvc.length !== 3 || isNaN(cvc)) {
                    window.showToast('Geçerli 3 haneli CVC giriniz.', 'error');
                    return;
                }

                const newCard = {
                    userEmail: session.email,
                    id: 'card-' + Date.now(),
                    holder: holder,
                    number: num,
                    expiry: expiry,
                    cvc: cvc
                };
                allCards.push(newCard);
                localStorage.setItem('teknosa_cards', JSON.stringify(allCards));
                selectedCardId = newCard.id;

                window.showToast('Kredi kartınız başarıyla kaydedildi.', 'success');
                renderCheckoutStep2(session);
            });
        }

        const btnBack = document.getElementById('btn-step-2-back');
        btnBack.addEventListener('click', () => {
            document.getElementById('checkout-ind-2').classList.remove('active');
            document.getElementById('checkout-ind-1').classList.remove('completed');
            document.getElementById('checkout-ind-1').classList.add('active');
            document.getElementById('checkout-step-2').style.display = 'none';
            document.getElementById('checkout-step-1').style.display = 'block';
        });

        const btnNext = document.getElementById('btn-step-2-next');
        btnNext.addEventListener('click', () => {
            if (!selectedCardId) {
                const holder = document.getElementById('chk-card-holder').value.trim();
                const num = document.getElementById('chk-card-number').value.trim();
                const expiry = document.getElementById('chk-card-expiry').value.trim();
                const cvc = document.getElementById('chk-card-cvc').value.trim();

                if (!holder || !num || !expiry || !cvc) {
                    window.showToast('Lütfen geçerli bir ödeme yöntemi seçin veya kart tanımlayın.', 'error');
                    return;
                }
                if (num.length !== 16 || isNaN(num)) {
                    window.showToast('Lütfen geçerli 16 haneli kart numarası giriniz.', 'error');
                    return;
                }
                if (!/^\d{2}\/\d{2}$/.test(expiry)) {
                    window.showToast('Geçerli son kullanma tarihi giriniz (AA/YY).', 'error');
                    return;
                }
                if (cvc.length !== 3 || isNaN(cvc)) {
                    window.showToast('Geçerli 3 haneli CVC giriniz.', 'error');
                    return;
                }

                const newCard = {
                    userEmail: session.email,
                    id: 'card-' + Date.now(),
                    holder: holder,
                    number: num,
                    expiry: expiry,
                    cvc: cvc
                };
                allCards.push(newCard);
                localStorage.setItem('teknosa_cards', JSON.stringify(allCards));
                selectedCardId = newCard.id;
            }

            document.getElementById('checkout-ind-2').classList.remove('active');
            document.getElementById('checkout-ind-2').classList.add('completed');
            document.getElementById('checkout-ind-3').classList.add('active');
            document.getElementById('checkout-step-2').style.display = 'none';
            document.getElementById('checkout-step-3').style.display = 'block';

            renderCheckoutStep3(session);
        });
    };

    const renderCheckoutStep3 = (session) => {
        const step3El = document.getElementById('checkout-step-3');
        if (!step3El) return;

        const allAddresses = JSON.parse(localStorage.getItem('teknosa_addresses')) || [];
        const address = allAddresses.find(a => a.id === selectedAddressId) || {};

        const allCards = JSON.parse(localStorage.getItem('teknosa_cards')) || [];
        const card = allCards.find(c => c.id === selectedCardId) || {};
        const maskedNum = card.number ? '•••• •••• •••• ' + card.number.slice(-4) : '';

        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        step3El.innerHTML = `
            <h3>Sipariş Özeti & Onay</h3>
            <p class="step-desc">Lütfen teslimat adresi, fatura/ödeme yöntemi ve sepetinizdeki ürünleri kontrol ederek siparişi onaylayın.</p>
            
            <div class="summary-details-box">
                <div>
                    <h4 style="font-weight:700; color:var(--primary); font-size:0.95rem; margin-bottom:0.5rem; border-bottom:1px solid var(--border-color); padding-bottom:3px;">Teslimat Adresi</h4>
                    <strong style="font-size:0.9rem; color:var(--secondary);">${address.title || ''}</strong>
                    <p style="font-size:0.8rem; color:var(--text-color); margin-top:3px; line-height:1.4;">${address.detail || ''}</p>
                    <span style="font-size:0.75rem; color:var(--text-muted); display:block; margin-top:2px;">${address.district || ''} / ${address.city || ''}</span>
                    <span style="font-size:0.75rem; color:var(--text-muted); display:block; margin-top:2px;">Tlf: ${address.phone || ''}</span>
                </div>
                <div>
                    <h4 style="font-weight:700; color:var(--primary); font-size:0.95rem; margin-bottom:0.5rem; border-bottom:1px solid var(--border-color); padding-bottom:3px;">Ödeme Yöntemi</h4>
                    <strong style="font-size:0.9rem; color:var(--secondary);">Kredi / Banka Kartı</strong>
                    <p style="font-size:0.8rem; color:var(--text-color); margin-top:3px;">Kart Sahibi: ${card.holder || ''}</p>
                    <p style="font-size:0.8rem; color:var(--text-color); margin-top:1px;">Kart Numarası: ${maskedNum}</p>
                    <span style="font-size:0.75rem; color:var(--text-muted); display:block; margin-top:2px;">SKT: ${card.expiry || ''}</span>
                </div>
            </div>

            <div style="border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1rem; background-color:var(--card-bg); margin-bottom:1.5rem;">
                <h4 style="font-weight:700; color:var(--secondary); font-size:0.95rem; margin-bottom:0.5rem; border-bottom:1px solid var(--border-color); padding-bottom:3px;">Sepetteki Ürünler</h4>
                <div style="max-height: 150px; overflow-y: auto; padding-right:5px;">
                    ${cart.map(item => `
                        <div style="display:flex; justify-content:space-between; align-items:center; padding: 0.4rem 0; border-bottom: 1px dotted var(--border-color);">
                            <span style="font-size:0.85rem; color:var(--text-color); font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:280px;" title="${item.name}">${item.name}</span>
                            <span style="font-size:0.85rem; color:var(--primary); font-weight:700;">${item.quantity} x ${formatPrice(item.price)}</span>
                        </div>
                    `).join('')}
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.75rem; padding-top:0.5rem; border-top:1px solid var(--border-color);">
                    <strong style="font-size:1rem; color:var(--secondary);">Toplam Ödeme Tutarı:</strong>
                    <strong style="font-size:1.15rem; color:var(--primary); font-weight:900;">${formatPrice(totalPrice)}</strong>
                </div>
            </div>

            <div class="checkout-footer-buttons">
                <button class="btn btn-outline" id="btn-step-3-back">&lt; Geri Dön</button>
                <button class="btn btn-primary" id="btn-confirm-order" style="background-color:#2ecc71; border-color:#2ecc71;">Siparişi Onayla ve Tamamla</button>
            </div>
        `;

        const btnBack = document.getElementById('btn-step-3-back');
        btnBack.addEventListener('click', () => {
            document.getElementById('checkout-ind-3').classList.remove('active');
            document.getElementById('checkout-ind-2').classList.remove('completed');
            document.getElementById('checkout-ind-2').classList.add('active');
            document.getElementById('checkout-step-3').style.display = 'none';
            document.getElementById('checkout-step-2').style.display = 'block';
        });

        const btnConfirm = document.getElementById('btn-confirm-order');
        btnConfirm.addEventListener('click', () => {
            const orders = JSON.parse(localStorage.getItem('teknosa_orders')) || [];
            const orderId = '#TS-' + Math.floor(10000 + Math.random() * 90000);
            const newOrder = {
                orderId: orderId,
                userEmail: session.email,
                date: new Date().toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
                items: [...cart],
                total: totalPrice,
                status: 'Sipariş Alındı'
            };
            orders.push(newOrder);
            localStorage.setItem('teknosa_orders', JSON.stringify(orders));

            cart = [];
            saveCart();

            const modal = document.getElementById('checkout-modal');
            if (modal) modal.classList.remove('open');

            window.showToast('Siparişiniz başarıyla onaylandı ve alındı! Teşekkür ederiz.', 'success');
        });
    };

    // Checkout operation
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                window.showToast('Sepetinizde ürün bulunmamaktadır.', 'error');
                return;
            }
            const session = JSON.parse(localStorage.getItem('teknosa_session')) || JSON.parse(sessionStorage.getItem('teknosa_session'));
            if (!session) {
                window.showToast('Sipariş verebilmek için lütfen önce giriş yapınız.', 'error');
                if (drawerOverlay) drawerOverlay.classList.remove('open');
                setTimeout(() => {
                    window.location.href = 'giris.html';
                }, 1500);
                return;
            }
            
            selectedAddressId = null;
            selectedCardId = null;

            if (drawerOverlay) drawerOverlay.classList.remove('open');

            const checkoutModal = initCheckoutModal();
            
            document.getElementById('checkout-ind-1').className = 'step-indicator active';
            document.getElementById('checkout-ind-2').className = 'step-indicator';
            document.getElementById('checkout-ind-3').className = 'step-indicator';
            
            document.getElementById('checkout-step-1').style.display = 'block';
            document.getElementById('checkout-step-2').style.display = 'none';
            document.getElementById('checkout-step-3').style.display = 'none';

            checkoutModal.classList.add('open');

            renderCheckoutStep1(session);
        });
    }

    // ==========================================================================
    // 5. PRODUCT DETAIL MODAL MANAGEMENT
    // ==========================================================================
    const detailModal = document.getElementById('product-detail-modal');
    const detailClose = document.getElementById('product-detail-close-btn');
    const detailContent = document.getElementById('product-detail-content');

    window.openProductDetail = (productId) => {
        const product = window.PRODUCTS_DATA.find(p => p.id === productId);
        if (!product || !detailContent || !detailModal) return;

        // Construct specs rows
        let specsHTML = '';
        for (const [key, value] of Object.entries(product.specs || {})) {
            specsHTML += `
                <div class="details-modal-spec-row">
                    <span class="details-modal-spec-label">${key}</span>
                    <span class="details-modal-spec-val">${value}</span>
                </div>
            `;
        }

        detailContent.innerHTML = `
            <div class="details-modal-grid">
                <div class="details-modal-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="details-modal-info">
                    <div>
                        <div class="details-modal-brand">${product.brand}</div>
                        <h2 class="details-modal-name">${product.name}</h2>
                        <p class="details-modal-desc">${product.description || "En son teknoloji özellikleriyle donatılmış, yüksek performanslı ve güvenilir Teknosa güvenceli ürün."}</p>
                        
                        <div class="details-modal-specs">
                            ${specsHTML || "<p>Teknik özellik bilgisi bulunmamaktadır.</p>"}
                        </div>
                    </div>
                    
                    <div class="details-modal-footer">
                        <div class="details-modal-price">${formatPrice(product.priceCurrent)}</div>
                        <button class="btn btn-primary" onclick="window.addToCart(${product.id}); document.getElementById('product-detail-modal').classList.remove('open');">
                            Sepete Ekle
                            <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.9 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        `;

        detailModal.classList.add('open');
    };

    if (detailClose && detailModal) {
        detailClose.addEventListener('click', () => {
            detailModal.classList.remove('open');
        });

        detailModal.addEventListener('click', (e) => {
            if (e.target === detailModal) {
                detailModal.classList.remove('open');
            }
        });
    }

    // Attach click events on document for product cards
    document.addEventListener('click', (e) => {
        // Find if clicked element is inside a product-card
        const card = e.target.closest('.product-card');
        
        // Make sure it's not the buy-btn click or inside buy-btn
        const isBuyBtn = e.target.closest('.buy-btn') || e.target.closest('.service-link');
        
        if (card && !isBuyBtn) {
            // Get product ID. On index.html: feat-prod-1 -> ID 1. On urunler: product-card has data-id or is matching.
            let productId = null;
            if (card.hasAttribute('data-id')) {
                productId = parseInt(card.getAttribute('data-id'), 10);
            } else {
                const idAttr = card.getAttribute('id');
                if (idAttr && idAttr.startsWith('feat-prod-')) {
                    productId = parseInt(idAttr.replace('feat-prod-', ''), 10);
                }
            }

            if (productId) {
                window.openProductDetail(productId);
            }
        }
    });

    // Run badge init
    updateCartBadge();
    renderCart();
});
