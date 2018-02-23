<?php
/**
 * Plugin Name: Twitter Slider Block For Gutenberg
 * Description: Display your up to 10 Tweets in Slider
 * Text Domain: twitter-slider
 */

// For Direct Access.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Check below function is alreact include or not.
if ( ! function_exists( 'is plugin active' ) ) {
	include_once ABSPATH . 'wp-admin/includes/plugin.php';
}

// check if gutenberg is activate or not.
if ( ! is_plugin_active( 'gutenberg/gutenberg.php' ) ) {
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
		add_action( 'init', [ $this, 'register_twitter_block' ] );
	}

	/**
	 * Register Twitter Blocks
	 */
	public function register_twitter_block() {
		wp_register_style(
			'twitter-editor-style', plugins_url( 'css/editor.css', __FILE__ )
		);
		wp_register_style(
			'twitter-client-style', plugins_url( 'css/style.css', __FILE__ )
		);
		wp_register_script(
			'twitter-editor-script', plugins_url( 'js/block.build.js', __FILE__ )
		);
		wp_register_script(
			'twitter-slider', plugins_url( 'js/slider.js', __FILE__ )
		);
		register_block_type(
			'twitter-post/twitter',
			array(
				'editor_style'  => 'twitter-editor-style',
				'style'         => 'twitter-client-style',
				'editor_script' => 'twitter-editor-script',
				'script'        => [ 'jquery', 'twitter-slider' ],
			)
		);
		wp_localize_script( 'twitter-editor-script', 'twitter_posts', array(
			'URL' => plugin_dir_url( __FILE__ ),
		) );
	}
}
// Initilize the object.
$twitter_slider = new Twitter_Slider();
