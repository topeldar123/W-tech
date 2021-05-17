<?php
	$url = '../xml/film.xml';
	$file = file_get_contents($url);
	$xml = simplexml_load_string($file);
	$content = array();
	$i=0;
		while ($i < 6) {
				$content[$i] = $xml->film[$i+1-1];
				$i++;
		}
	echo json_encode($content);
?>