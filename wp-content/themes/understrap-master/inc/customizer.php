<?php
/**
 * UnderStrap Theme Customizer
 *
 * @package UnderStrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
if ( ! function_exists( 'understrap_customize_register' ) ) {
	/**
	 * Register basic customizer support.
	 *
	 * @param object $wp_customize Customizer reference.
	 */
	function understrap_customize_register( $wp_customize ) {
		$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
		$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
		$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';
	}
}
add_action( 'customize_register', 'understrap_customize_register' );

if ( ! function_exists( 'understrap_theme_customize_register' ) ) {
	/**
	 * Register individual settings through customizer's API.
	 *
	 * @param WP_Customize_Manager $wp_customize Customizer reference.
	 */
	function understrap_theme_customize_register( $wp_customize ) {

		// Theme layout settings.
		$wp_customize->add_section(
			'understrap_theme_layout_options',
			array(
				'title'       => __( 'Theme Layout Settings', 'understrap' ),
				'capability'  => 'edit_theme_options',
				'description' => __( 'Container width and sidebar defaults', 'understrap' ),
				'priority'    => apply_filters( 'understrap_theme_layout_options_priority', 160 ),
			)
		);

		/**
		 * Select sanitization function
		 *
		 * @param string               $input   Slug to sanitize.
		 * @param WP_Customize_Setting $setting Setting instance.
		 * @return string Sanitized slug if it is a valid choice; otherwise, the setting default.
		 */
		function understrap_theme_slug_sanitize_select( $input, $setting ) {

			// Ensure input is a slug (lowercase alphanumeric characters, dashes and underscores are allowed only).
			$input = sanitize_key( $input );

			// Get the list of possible select options.
			$choices = $setting->manager->get_control( $setting->id )->choices;

			// If the input is a valid key, return it; otherwise, return the default.
			return ( array_key_exists( $input, $choices ) ? $input : $setting->default );

		}

		$wp_customize->add_setting(
			'understrap_container_type',
			array(
				'default'           => 'container',
				'type'              => 'theme_mod',
				'sanitize_callback' => 'understrap_theme_slug_sanitize_select',
				'capability'        => 'edit_theme_options',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Control(
				$wp_customize,
				'understrap_container_type',
				array(
					'label'       => __( 'Container Width', 'understrap' ),
					'description' => __( 'Choose between Bootstrap\'s container and container-fluid', 'understrap' ),
					'section'     => 'understrap_theme_layout_options',
					'settings'    => 'understrap_container_type',
					'type'        => 'select',
					'choices'     => array(
						'container'       => __( 'Fixed width container', 'understrap' ),
						'container-fluid' => __( 'Full width container', 'understrap' ),
					),
					'priority'    => apply_filters( 'understrap_container_type_priority', 10 ),
				)
			)
		);

		$wp_customize->add_setting(
			'understrap_sidebar_position',
			array(
				'default'           => 'right',
				'type'              => 'theme_mod',
				'sanitize_callback' => 'sanitize_text_field',
				'capability'        => 'edit_theme_options',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Control(
				$wp_customize,
				'understrap_sidebar_position',
				array(
					'label'             => __( 'Sidebar Positioning', 'understrap' ),
					'description'       => __(
						'Set sidebar\'s default position. Can either be: right, left, both or none. Note: this can be overridden on individual pages.',
						'understrap'
					),
					'section'           => 'understrap_theme_layout_options',
					'settings'          => 'understrap_sidebar_position',
					'type'              => 'select',
					'sanitize_callback' => 'understrap_theme_slug_sanitize_select',
					'choices'           => array(
						'right' => __( 'Right sidebar', 'understrap' ),
						'left'  => __( 'Left sidebar', 'understrap' ),
						'both'  => __( 'Left & Right sidebars', 'understrap' ),
						'none'  => __( 'No sidebar', 'understrap' ),
					),
					'priority'          => apply_filters( 'understrap_sidebar_position_priority', 20 ),
				)
			)
		);
	}
} // End of if function_exists( 'understrap_theme_customize_register' ).
add_action( 'customize_register', 'understrap_theme_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
if ( ! function_exists( 'understrap_customize_preview_js' ) ) {
	/**
	 * Setup JS integration for live previewing.
	 */
	function understrap_customize_preview_js() {
		wp_enqueue_script(
			'understrap_customizer',
			get_template_directory_uri() . '/js/customizer.js',
			array( 'customize-preview' ),
			'20130508',
			true
		);
	}
}
add_action( 'customize_preview_init', 'understrap_customize_preview_js' );

// Customizer
function business_customize_register($wp_customize) {

// Socials

    // Register Section: Top Page.
    $wp_customize->add_section( 'top_page', array(
        'priority'       => 30,
        'title'          => __( 'Footer info', 'claudiu-theme' ),
        'description'    => __( 'Options to set options in footer', 'claudiu-theme' ),
	));

    $wp_customize->add_setting( 'footer_logo', array(
        'type'                 => 'theme_mod',
        'default'              => get_bloginfo('template_directory').'/img/banner.jpg',
    ) );

    // Banner Logo
    $wp_customize->add_control( new WP_Customize_Image_Control(
        $wp_customize,
        'footer_logo',
        array(
            'label'      => __( 'Footer Logo', 'claudiu-theme' ),
            'section'    => 'top_page',
            'settings'   => 'footer_logo',
            'priority'    => 1
        )
    ));

	// Setting: Text.
    $wp_customize->add_setting( 'about_footer', array(
        'type'                 => 'theme_mod',
        'default'              => _x('Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.', 'claudiu-theme')
    ));

    // Control: Text.
    $wp_customize->add_control( 'about_footer', array(
        'label'       => __( 'Footer text', 'claudiu-theme' ),
        // 'description' => __( 'About us', 'claudiu-theme' ),
        'section'     => 'top_page',
        'priority'    => 2,
        'type'        => 'textarea'
	));
	

    // Register Section: Top Page.
    $wp_customize->add_section( 'social_links', array(
        'priority'       => 30,
        'title'          => __( 'Social Media Links', 'claudiu-theme' ),
        'description'    => __( 'Social Media Links', 'claudiu-theme' ),
	));

    // Facebook URL Setting
     $wp_customize->add_setting('facebook_url', array(
       'default'              => _x('http://www.facebook.com', 'fourcorners'),
       'type'                 => 'theme_mod'
     ));

    // Facebook URL Control
    $wp_customize->add_control( 'facebook_url', array(
      'label'    => __('Facebook URL', 'fourcorners'),
      'section'  => 'social_links',
      'priority' => 3,
    ));

    // insta URL Setting
    $wp_customize->add_setting('insta_url', array(
      'default'              => _x('http://www.insta.com', 'fourcorners'),
      'type'                 => 'theme_mod'
    ));

    // insta URL Control
    $wp_customize->add_control( 'insta_url', array(
      'label'    => __('Instagram URL', 'fourcorners'),
      'section'  => 'social_links',
      'priority' =>4,
    ));

    // Linkedin URL Setting
    $wp_customize->add_setting('linkedin_url', array(
      'default'              => _x('http://www.linkedin.com', 'fourcorners'),
      'type'                 => 'theme_mod'
    ));

    // Linkedin URL Control
    $wp_customize->add_control( 'linkedin_url', array(
      'label'    => __('LinkedIn URL', 'fourcorners'),
      'section'  => 'social_links',
      'priority' =>3,
    ));

    // Youtube URL Setting
    $wp_customize->add_setting('youtube_url', array(
      'default'              => _x('http://www.youtube.com', 'claudiu-theme'),
      'type'                 => 'theme_mod'
    ));

    // Youtube URL Control
    $wp_customize->add_control( 'youtube_url', array(
      'label'    => __('YouTube URL', 'fourcorners'),
      'section'  => 'social_links',
      'priority' =>5,
	));

	    // Setting: Text.
    $wp_customize->add_setting( 'footer_address', array(
        'type'                 => 'theme_mod',
        'default'              => _x('Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.', 'claudiu-theme')
    ));

    // Control: Text.
    $wp_customize->add_control( 'footer_address', array(
        'label'       => __( 'Footer Copy', 'claudiu-theme' ),
        'section'     => 'top_page',
        'priority'    => 20,
        'type'        => 'textarea'
	));

}

add_action('customize_register', 'business_customize_register');
