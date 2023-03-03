// fungsi untuk menampilkan spp belum terbayar
function tampilan()
{
    alert("BESOK ADALAH HARI TERAKHIR PEMBAYARAN SPP !!!!");
    var konfirmasi = confirm("Apakah Anda Sudah Membayar SPP ??");
    if(konfirmasi == true){
        document.location.href = "kemahasiswaan.html";
    }
    else{
        document.location.href = "../index.html";
    }
}