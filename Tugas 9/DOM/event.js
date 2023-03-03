//Fungsi Menampilkan Kota
function TampilKota(provinsi){
    var kota = "";
    switch(provinsi)
    {
        case "Jabar" :
        {
            kota = "<ul><li>Bandung</li><li>Bogor</li><li>Garut</li></ul>";
        } break;
        case "Jateng" :
        {
            kota = "<ul><li>Semarang</li><li>Tegal</li><li>Solo</li></ul>";
        } break;
        case "Jatim" :
        {
            kota = "<ul><li>Surabaya</li><li>Malang</li><li>Lamongan</li></ul>";
        } break;
        default : kota = " ";
    }
    document.getElementById('kota').innerHTML = kota;
}