<section>
    <div class="short-our-service" style="background-color: <?php the_sub_field( 'services_basckground_color' ); ?>;">
        <div class="container">
	        <div class="row">
			    <div class="col-md-4">
				    <?php the_sub_field( 'our_services_left_text' ); ?>
				</div>
				<div class="col-md-8">
				    <ul class="service-list-w-icon">
			            <?php if ( have_rows( 'our_services_right_list' ) ) : ?>
							<?php while ( have_rows( 'our_services_right_list' ) ) : the_row(); ?>
			            		<li>
								    <?php $icon = get_sub_field( 'icon' ); ?>
			            		    <?php if ( $icon ) : ?>									
								    	<div class="service-intro-icon">
								            <span>
								    	        <img src="<?php echo esc_url( $icon['url'] ); ?>" alt="<?php echo esc_attr( $icon['alt'] ); ?>" />
								    	    </span>
								        </div>
								    <?php endif; ?>
								    <div class="service-intro-right">
								        <?php the_sub_field( 'service_text' ); ?>
								    </div>
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