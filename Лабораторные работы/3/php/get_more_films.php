<?php
	$tek = $_POST['tek'];
	$kol = $_POST['kol'];
	$url = '../xml/film.xml';
	$file = file_get_contents($url);
	$xml = simplexml_load_string($file);

	$content = array();

	for($i = $tek;$i<=($tek+$kol-1);$i++)
	$content[$i]  = $xml->film[$i+1-1];

	echo json_encode($content);
?>