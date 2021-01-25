<section >
    <div id="homepage-hero">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 col-lg-6 hero-text-content">
                    <?php the_sub_field( 'hero_text_left' ); ?>
                    <div class="hero-links">
                        <?php $left_button = get_sub_field( 'left_button' ); ?>
			            <?php if ( $left_button ) : ?>
			            	<a class="stoica-btn ligh-blue" href="<?php echo esc_url( $left_button['url'] ); ?>" target="<?php echo esc_attr( $left_button['target'] ); ?>"><?php echo esc_html( $left_button['title'] ); ?></a>
                        <?php endif; ?>

                        <?php $right_button = get_sub_field( 'right_button' ); ?>
			            <?php if ( $right_button ) : ?>
			            	<a class="stoica-btn dark-blue" href="<?php echo esc_url( $right_button['url'] ); ?>" target="<?php echo esc_attr( $right_button['target'] ); ?>"><?php echo esc_html( $right_button['title'] ); ?></a>
			            <?php endif; ?>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 text-right">
			        <?php $hero_right_image = get_sub_field( 'hero_right_image' ); ?>
			        <?php if ( $hero_right_image ) : ?>
			        	<img class="hero-canva-img" src="<?php echo esc_url( $hero_right_image['url'] ); ?>" alt="<?php echo esc_attr( $hero_right_image['alt'] ); ?>" />
			        <?php endif; ?>
                </div>
            </div>

            <div class="hero-bottom">
                <div class="row align-items-end">
                    <div class="col-md-6">
                        <div class="header-partner">
                            <h5><?php _e( 'Partnering with the best', 'homehero' )?>:</h5>
                            <img src="/wp-content/uploads/2021/01/Group-741.png" alt="Stoica partnering">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="hero-follow text-right">
                            <span><?php _e( 'Follow us:', 'homehero' ) ?></span>
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
                </div>
            </div>
        </div>
    </div>
</section>
