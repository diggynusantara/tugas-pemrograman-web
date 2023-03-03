/*
    Nama     : Diggy Bani Nusantara
    NIM      : A11.2017.10729
    kelompok : A11.4320
*/

//Fungsi Untuk Menampilkan Input bilangan
function hitung()
{
    var bil1, bil2;
    var jumlah, kurang, kali, bagi;
    alert("=== Menghitung 2 Bilangan ===");
    bil1 = +prompt("Bilangan 1", bil1);
    bil2 = +prompt("Bilangan 2", bil2);
    jumlah = bil1 + bil2;
    kurang = bil1 - bil2;
    kali = bil1 * bil2;
    bagi = bil1 / bil2;
    
    var konfirmasi = confirm("Apakah Anda Ingin Melanjutkan ?");
    if(konfirmasi == true){
        document.write("Hasil Penjumlahan = " + jumlah);
        document.write("<br />");
        document.write("Hasil Pengurangan = " + kurang);
        document.write("<br />");
        document.write("Hasil Perkalian   = " + kali);
        document.write("<br />");
        document.write("Hasil Pembagian   = " + bagi);
    }
    else{
        document.location.href = "javascript.html";
    }
}

//Fungsi Untuk Menampilkan Ucapan
function tampilan()
{
    alert("Selamat Pagi Dunia !!!");
}