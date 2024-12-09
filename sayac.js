// Bir string alın ve kelimeleri bir array'e ayır.
// Her kelimenin kaç kez geçtiğini hesapla ve bir obje olarak sakla.

const metin = prompt("Bir cümle giriniz.");

const kelimeler = metin.split(' ');

const kelimeSayilari = [];

for (let i = 0; i < kelimeler.length; i++) {
    const kelime = kelimeler[i];
    if (kelimeSayilari[kelime]) {
        kelimeSayilari[kelime]++;
    } else {
        kelimeSayilari[kelime] = 1;
    }
}

console.log(kelimeSayilari);
