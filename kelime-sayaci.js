
// Kullanıcıdan metin alıyoruz
const metin = prompt("Bir metin girin:");

// String'i küçük harfe çevirip, noktalama işaretlerini kaldırıyoruz
const temizlenmisStr = metin.toLowerCase().replace(/[^\w\s]/g, '');

// Kelimeleri ayırıyoruz
const kelimeler = temizlenmisStr.split(' ');

// Her kelimenin kaç kez geçtiğini tutacak nesne
const kelimeSayilari = {};

// Kelimeler üzerinde döngü
for (let i = 0; i < kelimeler.length; i++) {
    const kelime = kelimeler[i];

    // Eğer kelime nesnede varsa sayısını arttır, yoksa 1 olarak başlat
    if (kelimeSayilari[kelime]) {
        kelimeSayilari[kelime]++;
    } else {
        kelimeSayilari[kelime] = 1;
    }
}

// Sonucu konsola yazdırıyoruz
console.log(kelimeSayilari);
