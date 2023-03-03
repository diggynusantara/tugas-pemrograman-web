/*
var kata;
kata ="HEY TAYO DIA BIS KECIL RAMAH";
document.write(kata);

var angka_1, angka_2;
angka_1 ="10";
angka_2 ="20";
document.write(angka_1*angka_2);

var x =19, y =20;
x += 20;
x++;
x -= y;
x /= 20;
document.write(x);

var jam=22;
if(jam <= 10){
    document.write("Selamat Pagi");
}
else if(jam > 10 && jam <= 15){
    document.write("Selamat Siang");
}
else if(jam > 15 && jam <= 20){
    document.write("Selamat Sore");
}
else{
    document.write("Selamat Malam");
}

var jam = 20;
var pesan = "";

pesan = (jam <= 10) ? "Selamat Pagi." : "Selamat Siang";
document.write(pesan);

var i;
for(i=0; i<=100; i++){
    if(i%2==0){
        document.write("Nomor : " + i);
        document.write("<br />");
    }
}

var i;
for(i=0; i<=10; i++){
    if(i==3){
        break; //berhenti saat mencapai batas
        //continue -> melanjutan dengan skip yg dibatas
    }
    document.write("Nomor : " + i);
    document.write("<br />");
}
document.write("Akhir Pengulangan");

var jam = 17;
if(jam <= 10){
    alert("Selamat Pagi");
}
else if(jam > 01 && jam <= 15){
    alert("Selamat Siang");
}
else{
    alert("Selamat Sore");
}

var konfirmasi = confirm("Apakah Anda Ingin Membuka Halaman Ini ?");
if(konfirmasi == true){
    document.location.href = "javascript.html";
}
else{
    document.location.href = "#";
    document.write("Hasil Perkalian = " + hasil);
    var bil1, bil2, hasil;
}

var bil1, bil2, jml;
alert("=== Menghitung 2 Bilangan ===");
bil1 = +prompt("Bilangan 1", bil1);
bil2 = +prompt("Bilangan 2", bil2);
jml = bil1 + bil2;

var konfirmasi = confirm("Apakah Anda Ingin Melanjutkan ?");
if(konfirmasi == true){
    document.write("Hasil Penjumlahan = " + jml);
}
else{
    document.location.href = "javascript.html";
}

.jam{
    font-size:24px;
    color:cyan;
}

function time()
{
    var today = Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('jam').innerHTML=h+";"+m";"+s;
    t = setTimeout('time()', 300);
}

function checkTime()
{
    if(i<10)
    {
        i="0" + 1;
    }
    return i;
}
*/
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

function DisplayMessage()
{
    alert("Selamat Pagi Dunia !!!");
}