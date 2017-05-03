<?php
	
	header('Content-Type: application/json');	
	require 'MyInstagramFeed/src/MyInstagramFeed.php';

	$instagram = new MyInstagramFeed(4509914945, '4509914945.1677ed0.e1deee9457f74189b0028f9fd7f0eeda', 'public_content');

	if ($_GET['hashtag'] && !empty($_GET['hashtag'])) {
		print json_encode($instagram->filterByTag($_GET['hashtag']));
	} else {
		print json_encode($instagram->getAllPhotos());
	}

  /*foreach ($instagram->filterByTag('#' . $_GET['hashtag']) as $value) {
    print '<div class="column is-one-quarter-desktop is-half-tablet is-full-mobile">';
    print '<figure class="image is-square"><img style="border-radius:3px;" src="' . $value->url . '" alt="' . $value->caption . '"/></figure>';
    print '<p><strong>' . $value->created_time . '</strong><br/>' . $value->caption . '</p></div>';
  }*/
