<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package UnderStrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$container = get_theme_mod( 'understrap_container_type' );
?>

<?php get_template_part( 'sidebar-templates/sidebar', 'footerfull' ); ?>

<div class="wrapper" id="wrapper-footer">

	<div class="<?php echo esc_attr( $container ); ?>">

		<footer class="site-footer" id="colophon">
		    <div class="row">
			    <div class="col-lg-5">
					<img class="footer-logo" src="<?php echo get_theme_mod('footer_logo', get_bloginfo('template_url').'/img/banner.jpg'); ?>" alt="">
					<div class="about-us-footer">
						<?php echo get_theme_mod('about_footer', 'About footer'); ?>
					</div>

					<div class="footer-socials text-left">
						<ul class="social-media-list">
							
							<?php if(get_theme_mod('facebook_url', 'http://www.facebook.com') != '') : ?>
								<li>
									<a href="<?php echo get_theme_mod('facebook_url', 'http://www.facebook.com'); ?>"><i class="fab fa-facebook-f"></i></a>
								</li>
						    <?php endif; ?>
							
							<?php if(get_theme_mod('youtube_url', 'http://www.youtube.com') != '') : ?>
								<li>
									<a href="<?php echo get_theme_mod('youtube_url', 'http://www.youtube.com'); ?>"><i class="fab fa-youtube"></i></a>
								</li>
						    <?php endif; ?>
						
							<?php if(get_theme_mod('linkedin_url', 'http://www.linkedin.com') != '') : ?>
								<li>
									<a href="<?php echo get_theme_mod('linkedin_url', 'http://www.linkedin.com'); ?>"><i class="fab fa-linkedin-in"></i></a>
								</li>
						    <?php endif; ?>
							
							<?php if(get_theme_mod('insta_url', 'http://www.twitter.com') != '') : ?>
								<li>
									<a href="<?php echo get_theme_mod('insta_url', 'http://www.twitter.com'); ?>"><i class="fab fa-instagram"></i></a>
								</li>
						    <?php endif; ?>
						</ul>
                    </div>
				
				</div>
			    <div class="col-lg-2">
					<?php if ( is_active_sidebar( 'footermenu' )) { ?>
		                <div class="footer-widgets">
							<?php dynamic_sidebar( 'footermenu' ); ?>
		                </div>
	                <?php } ?>
				</div>
			    <div class="col-lg-3">
					<?php if ( is_active_sidebar( 'footermenu2' )) { ?>
		                <div class="footer-widgets">
							<?php dynamic_sidebar( 'footermenu2' ); ?>
		                </div>
	                <?php } ?>
				</div>
			    <div class="col-lg-2">
					<?php if ( is_active_sidebar( 'footermenu3' )) { ?>
		                <div class="footer-widgets">
							<?php dynamic_sidebar( 'footermenu3' ); ?>
		                </div>
	                <?php } ?>
				</div>
			</div>

			<div class="bottom-footer">
			    <div class="row align-items-center">
				    <div class="col-md-6">
						<div class="bottom-footer-left">
							<p><?php echo get_theme_mod('footer_address', 'Footer Copy'); ?></p>
						</div>
					</div>
					<div class="col-md-6">
						<div class="bootom-footer-certification text-right d-flex align-items-center">
							<span>Certifications</span>
							<ul>
								<li><a href=""><img src="/wp-content/uploads/2021/01/logo-21-1.svg" alt=""></a></li>
								<li><a href=""><img src="/wp-content/uploads/2021/01/logo-20.svg" alt=""></a></li>
								<li><a href=""><img src="/wp-content/uploads/2021/01/logo-19.svg" alt=""></a></li>
								<li><a href=""><img src="/wp-content/uploads/2021/01/logo-21.svg" alt=""></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer><!-- #colophon -->

	</div><!-- container end -->

</div><!-- wrapper end -->

</div><!-- #page we need this extra closing tag here -->

<?php wp_footer(); ?>

</body>

</html>

