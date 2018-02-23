<?php
require_once dirname(__FILE__) . '/twitter-php/OAuth.php';
require_once dirname(__FILE__) . '/twitter-php/Twitter.php';

//Twitter OAuth Settings, enter your settings here:
$CONSUMER_KEY = 'SYWZf4OBqoETc8hDH4qDENKRl';
$CONSUMER_SECRET = 'qS1sA9izlrtNcHoG0zFTWxEDwrYgELvR95NrJCJ09MQ4FKNu2E';
$ACCESS_TOKEN = '1286536478-9qgExRuKPtzS5d4CQbz5D8o1cNXXDYKhbs6ULhC';
$ACCESS_TOKEN_SECRET = 'cD0c6OSiwO7t3GLpWeiv5XbDZvCNsTpbCvgkB8UcXT5rv';

// ENTER HERE YOUR CREDENTIALS (see readme.txt)
$twitter = new Twitter($CONSUMER_KEY, $CONSUMER_SECRET, $ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);

// retrieve data
$q = $_GET['screen_name'];
$count = $_GET['count'];
$api = 'statuses/user_timeline';

// api data
$params = array(
	'screen_name' => $q,
	'count' => $count,
  'includes_rts' => true
);

$results = $twitter->request($api, 'GET', $params);

// output as JSON
echo json_encode($results);
?>
