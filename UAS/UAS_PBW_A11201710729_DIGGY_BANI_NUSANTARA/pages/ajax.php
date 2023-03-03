 <?php
// nama - nama
$a[] = "Adinda";
$a[] = "Bella";
$a[] = "Cinta";
$a[] = "Diggy";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gebi";
$a[] = "Hilda";
$a[] = "Ingrid";
$a[] = "Jenny";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Olivia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Dory";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunny";
$a[] = "Tere";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Lisa";
$a[] = "Elizabeth";
$a[] = "Ella";
$a[] = "Wendy";
$a[] = "Vicky";

// parameter
$q = $_REQUEST["q"];

$hint = "";

if ($q !== "") {
    $q = strtolower($q);
    $len=strlen($q);
    foreach($a as $name) {
        if (stristr($q, substr($name, 0, $len))) {
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
        }
    }
}

// jika tidak ada
echo $hint === "" ? "no suggestion" : $hint;
?> 