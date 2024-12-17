
// 1. Kullanıcı Yönetimi
let kullaniciYonetimi = {
    kullanicilar: [], // Kullanıcı bilgilerini saklayan dizi

    // Yeni kullanıcı ekleme
    ekle: function(isim, email, yas) {
        this.kullanicilar.push({ isim: isim, email: email, yas: yas });
        console.log(isim + " başarıyla eklendi.");
    },

    // Kullanıcıları listeleme
    listele: function() {
        console.log("Kullanıcı Listesi:");
        for (let i = 0; i < this.kullanicilar.length; i++) {
            console.log(
                (i + 1) + ". " + this.kullanicilar[i].isim + " - " + 
                this.kullanicilar[i].email + " - " + 
                this.kullanicilar[i].yas
            );
        }
    },

    // Kullanıcı silme
    sil: function(email) {
        for (let i = 0; i < this.kullanicilar.length; i++) {
            if (this.kullanicilar[i].email === email) {
                this.kullanicilar.splice(i, 1); // Silme işlemi
                console.log(email + " silindi.");
                break;
            }
        }
    }
};

// Kullanıcı Yönetimi Kullanımı
kullaniciYonetimi.ekle("Ali", "ali@example.com", 25);
kullaniciYonetimi.ekle("Ayşe", "ayse@example.com", 22);
kullaniciYonetimi.listele();
kullaniciYonetimi.sil("ali@example.com");
kullaniciYonetimi.listele();

// 2. Görev Yönetim Sistemi
let gorevYonetimi = {
    gorevler: [], // Görevleri saklayan dizi

    // Yeni görev ekleme
    ekle: function(baslik) {
        let id = this.gorevler.length + 1;
        this.gorevler.push({ id: id, baslik: baslik, tamamlandi: false });
        console.log(baslik + " eklendi.");
    },

    // Görevleri listeleme
    listele: function() {
        console.log("Görevler:");
        for (let i = 0; i < this.gorevler.length; i++) {
            console.log(
                "ID: " + this.gorevler[i].id +
                " - Başlık: " + this.gorevler[i].baslik +
                " - Tamamlandı: " + (this.gorevler[i].tamamlandi ? "Evet" : "Hayır")
            );
        }
    },

    // Görevi tamamla
    tamamla: function(id) {
        for (let i = 0; i < this.gorevler.length; i++) {
            if (this.gorevler[i].id === id) {
                this.gorevler[i].tamamlandi = true;
                console.log(this.gorevler[i].baslik + " tamamlandı!");
                break;
            }
        }
    },

    // Görev silme
    sil: function(id) {
        for (let i = 0; i < this.gorevler.length; i++) {
            if (this.gorevler[i].id === id) {
                console.log(this.gorevler[i].baslik + " silindi.");
                this.gorevler.splice(i, 1);
                break;
            }
        }
    }
};

// Görev Yönetimi Kullanımı
gorevYonetimi.ekle("JavaScript öğren");
gorevYonetimi.ekle("Proje tasarla");
gorevYonetimi.listele();
gorevYonetimi.tamamla(1);
gorevYonetimi.sil(2);
gorevYonetimi.listele();

// 3. Alışveriş Sepeti
let sepet = {
    urunler: [], // Sepetteki ürünleri saklayan dizi

    // Yeni ürün ekleme
    urunEkle: function(isim, fiyat, adet) {
        this.urunler.push({ isim: isim, fiyat: fiyat, adet: adet });
        console.log(isim + " sepete eklendi.");
    },

    // Sepeti listeleme
    listele: function() {
        console.log("Sepet:");
        for (let i = 0; i < this.urunler.length; i++) {
            console.log(
                this.urunler[i].adet + " x " + 
                this.urunler[i].isim + " - " + 
                this.urunler[i].fiyat + " TL"
            );
        }
    },

    // Toplam fiyat hesaplama
    toplamFiyat: function() {
        let toplam = 0;
        for (let i = 0; i < this.urunler.length; i++) {
            toplam += this.urunler[i].fiyat * this.urunler[i].adet;
        }
        console.log("Toplam Fiyat: " + toplam + " TL");
    }
};

// Alışveriş Sepeti Kullanımı
sepet.urunEkle("Kitap", 50, 2);
sepet.urunEkle("Defter", 20, 3);
sepet.listele();
sepet.toplamFiyat();
