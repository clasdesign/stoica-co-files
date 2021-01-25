<section>
    <div class="our-clients-section" style="background: <?php the_sub_field( 'section_background_color' ); ?>;">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="our-clients-content">
                        <?php the_sub_field( 'our_clients_left_text' ); ?>
                        <?php $our_clients_button = get_sub_field( 'our_clients_button' ); ?>
                        <?php if ( $our_clients_button ) : ?>
                        	<a class="stoica-btn ligh-blue" href="<?php echo esc_url( $our_clients_button['url'] ); ?>" target="<?php echo esc_attr( $our_clients_button['target'] ); ?>"><?php echo esc_html( $our_clients_button['title'] ); ?></a>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="col-lg-8">
                    <ul class="our-clients-list">
                        <?php if ( have_rows( 'our_clients_listing' ) ) : ?>
                            <?php while ( have_rows( 'our_clients_listing' ) ) : the_row(); ?>
                                <li onclick="document.location.href= '<?php echo esc_url( $client_link['url'] ); ?>'">
                                    <?php $client_logo_img = get_sub_field( 'client_logo_img' ); ?>
                                    <?php $client_link = get_sub_field( 'client_link' ); ?>
                                    
                        	    	<?php if ( $client_link ) : ?>
                                        <a href="<?php echo esc_url( $client_link['url'] ); ?>" target="<?php echo esc_attr( $client_link['target'] ); ?>"><img src="<?php echo esc_url( $client_logo_img['url'] ); ?>" alt="<?php echo esc_attr( $client_logo_img['alt'] ); ?>" /></a>
                                    <?php else : ?>
                                        <img src="<?php echo esc_url( $client_logo_img['url'] ); ?>" alt="<?php echo esc_attr( $client_logo_img['alt'] ); ?>" />
                                    <?php endif; ?>
                                </li>
                        	<?php endwhile; ?>
                        <?php else : ?>
                        	<?php // no rows found ?>
                        <?php endif; ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>



