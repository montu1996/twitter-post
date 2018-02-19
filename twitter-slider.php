<?php
/**
 * Created by PhpStorm.
 * User: rtcamp
 * Date: 19/2/18
 * Time: 2:52 PM
 */

/**
 * Plugin Name: Twitter Slider Block For Gutenberg
 * Description: Display your up to 10 Tweets in Slider
 */

// For Direct Access
if( ! defined( ABSPATH ) ) {
	exit;
}

// Check below function is alreact include or not
if( ! function_exists( 'is plugin active' ) ) {
	include_once ABSPATH . 'wp-admin/includes/plugin.php';
}

// check if gutenberg is activate or not
if( ! is_plugin_active( 'gutenberg/gutenberg.php' ) ) {
	exit;
}

/**
 * Class Twitter_Slider
 */
class Twitter_Slider {
	/**
	 * Twitter_Slider constructor.
	 */
	public function __construct() {
	}
}
// Initilize the object
$twitter_slider = new Twitter_Slider();
