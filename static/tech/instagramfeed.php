<?php
	
	header('Content-Type: application/json');
	header('Access-Control-Allow-Origin: *'); 
	
	require 'MyInstagramFeed/src/MyInstagramFeed.php';

	$instagram = new MyInstagramFeed(4509914945, '4509914945.1677ed0.e1deee9457f74189b0028f9fd7f0eeda', 'public_content');

	//if ($_GET['hashtag']) {
		print json_encode($instagram->filterByTag('#' . $_GET['hashtag']));
	//} 
	//else {
	//	print json_encode($instagram->getAllPhotos());
	//}
