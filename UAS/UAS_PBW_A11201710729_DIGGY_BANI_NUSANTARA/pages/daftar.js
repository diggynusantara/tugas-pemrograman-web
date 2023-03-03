function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            myFunction(this);
        }
    };
    xhttp.open("GET", "web.xml", true);
    xhttp.send();
}
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Jurusan</th></tr>";
    var x = xmlDoc.getElementsByTagName("daftar");
    for (i = 0; i < x.length; i++) 
    { 
        table += "<tr><td>" +
        x[i].getElementsByTagName("study")[0].childNodes[0].nodeValue +


        "</td><td>" +
        "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }