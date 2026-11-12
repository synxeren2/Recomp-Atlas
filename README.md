# Recomp Atlas

Türkçe recomp, decomp ve yerel port keşif kataloğu. Build gerektirmeyen HTML/CSS/JavaScript uygulaması.

## Özellikler

- Oyun, proje, geliştirici ve açıklamada arama; platform, proje türü ve yayın durumu filtreleri
- Öneri, yıldız, tarih ve isim sıralaması; sayfalama; liste ve kart görünümleri
- Her proje için paylaşılabilir detay sayfası; genel bakış, sürümler, bağlantılar ve benzer projeler
- GitHub Releases API üzerinden güncel sürüm dosyaları; ağ hatalarında tarihli katalog kaydı
- Yerel kütüphane, açık/koyu tema ve katalog yenileme
- Mobil filtre çekmecesi, erişilebilir etiketler, klavye ile arama ve dialog desteği

## Veri

`dist/catalog.json`, SubmitGame/awesome-decomp-games topluluk verisinden (CC0 1.0) alınmıştır. Kaynak tarihi JSON içindedir. Katalog evrensel eksiksizlik veya oynanabilirlik iddiasında bulunmaz. Öne çıkan bazı kayıtlar `dist/curated.json` ile ayrıca düzenlenmiştir. `python prepare_catalog.py /tam/yol/upstream-games.json`, indirilen upstream JSON üzerinden başlangıç dosyasını yeniden oluşturur. Yalnızca genel amaçlı bir launcher kaynağında bulunan kapsam dışı kayıtlar alınmaz; dört temel decomp/recomp aracı GitHub verileriyle ayrıca eklenir. Güncelleme için uygulamadaki Kaynaklar → Kataloğu şimdi yenile kullanılabilir; yeni veri tarayıcıda saklanır.

Yıldızlar, sınıflandırmalar ve sürümler kaynak anlık görüntüsünü yansıtır. Yayın mevcut etiketi, oyunun çalışır durumda olduğu anlamına gelmez. GitHub sürümleri talep edildiğinde API üzerinden canlı alınır; hız sınırı ve ağ hatalarında kaynak bağlantıları kullanılabilir. Yer imleri ve yenilenen katalog bu tarayıcıya özgüdür.

Görsellerin kaynakları uygulamanın Kaynaklar penceresinde belirtilmiştir. Modrinth ile resmi bir bağlantısı yoktur.

## Sunum

`vercel.json` içindeki `outputDirectory` = `dist`. Framework: Other (null). Kurulum ve build adımı gerekmez. `main` dalına gönderilen güncellemeler Vercel GitHub entegrasyonu üzerinden yayınlanır. Harici JavaScript kütüphanesi veya API anahtarı gerekmez. Fontlar isteğe bağlı Google Fonts'tan alınır, sistem fontu yedeği vardır. Katalog ve görseller statik olarak sunulur. Güncel sürümler için `api.github.com`, katalog yenilemesi için `raw.githubusercontent.com` kullanılır.

## Yerel önizleme

`python -m http.server 8080 --directory dist` komutundan sonra `http://localhost:8080` adresini aç.

## Kaynak deposu

https://github.com/synxeren2/Recomp-Atlas
