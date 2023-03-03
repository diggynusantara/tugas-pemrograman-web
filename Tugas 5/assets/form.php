<html>
	<head>
		<title>HASIL FORMULIR</title>
	</head>
	<body align="center">
		<h3>Data Pendaftar</h3>
		<?php
			echo "Nama Lengkap : ".$_GET['nama_lengkap']."</br>";
			echo "Password : ".$_GET['password']."</br>";
			echo "Jenis Kelamin : ".$_GET['jenis_kelamin']."</br>";
			echo "Hobi : ".$_GET['hobi']."</br>";
			echo "Asal Kota : ".$_GET['kota']."</br>";
			echo "Alamat Lengkap : ".$_GET['alamat_lengkap']."</br></br>";
		?>
		<h3>"Selamat anda berhasil mendaftarkan diri"</h3>
	</body>
</html>