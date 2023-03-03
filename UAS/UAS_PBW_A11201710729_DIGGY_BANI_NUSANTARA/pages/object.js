//Fungsi Menyalin Pilihan
function pilih()
{
    var game = document.getElementById("game");
    var pilihan = document.getElementById("pilihan");
    var option = document.createElement("option");

    option.text = game.options[game.selectedIndex].text;
    try
    {
        pilihan.add(option,null);
    }
    catch(ex)
    {
        pilihan.add(option); //Khusus Internet Explorer
    }
}