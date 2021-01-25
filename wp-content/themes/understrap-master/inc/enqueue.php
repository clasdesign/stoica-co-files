<?php
/**
 * UnderStrap enqueue scripts
 *
 * @package UnderStrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'understrap_scripts' ) ) {
	/**
	 * Load theme's JavaScript and CSS sources.
	 */
	function understrap_scripts() {
		// Get the theme data.
		$the_theme     = wp_get_theme();
		$theme_version = $the_theme->get( 'Version' );

		$css_version = $theme_version . '.' . filemtime( get_template_directory() . '/css/theme.min.css' );
		wp_enqueue_style( 'understrap-styles', get_template_directory_uri() . '/css/theme.min.css', array(), $css_version );
		wp_enqueue_style( 'fonts', get_template_directory_uri() . '/fonts/gilroy/MyFontsWebfontsKit.css', array(), $css_version );
		wp_enqueue_style( 'fonts-awesome', get_template_directory_uri() . '/fonts/fontawesome/css/all.min.css', array(), $css_version );
		wp_enqueue_style( 'slick', get_template_directory_uri() . '/assets/slick/slick-theme.css', array(), $css_version );
		wp_enqueue_style( 'slick-style', get_template_directory_uri() . '/assets/slick/slick.css', array(), $css_version );
		wp_enqueue_style( 'custom-style', get_template_directory_uri() . '/css/custom-style.css', array(), $css_version );

		wp_enqueue_script( 'jquery' );

		$js_version = $theme_version . '.' . filemtime( get_template_directory() . '/js/theme.min.js' );
		wp_enqueue_script( 'slick-script', get_template_directory_uri() . '/assets/slick/slick.min.js', array(), $js_version, true );
		wp_enqueue_script( 'understrap-scripts', get_template_directory_uri() . '/js/theme.min.js', array(), $js_version, true );
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}
} // End of if function_exists( 'understrap_scripts' ).

add_action( 'wp_enqueue_scripts', 'understrap_scripts' );
