<section>
	<div class="what-you-get-section" style="background: <?php the_sub_field( 'background_color' ); ?>;">
	    <div class="container">
	        <div class="row">
		        <div class="col-md-6">
					<div class="what-you-get-left-content">
				        <h2><?php the_sub_field( 'section_title' ); ?></h2>
					    <ul class="service-list-w-icon">
                            <?php if ( have_rows( 'you_get_list' ) ) : ?>
                            	<?php while ( have_rows( 'you_get_list' ) ) : the_row(); ?>
			                		<li>
					    			    <?php $left_icon = get_sub_field( 'left_icon' ); ?>
			                		    <?php if ( $left_icon ) : ?>						
					    			    	<div class="service-intro-icon">
					    			            <span>
					    			    	        <img src="<?php echo esc_url( $left_icon['url'] ); ?>" alt="<?php echo esc_attr( $left_icon['alt'] ); ?>" />
					    			    	    </span>
					    			        </div>
					    			    <?php endif; ?>
					    			    <div class="service-intro-right">
					    			        <?php the_sub_field( 'you_get_text' ); ?>
					    			    </div>
					    			</li>
			                	<?php endwhile; ?>
			                <?php else : ?>
			                	<?php // no rows found ?>
					    	<?php endif; ?>
					    </ul>
					</div>
				</div>
				
				<div class="col-md-6 right-img-w-bg">
		    	    <?php $right_image = get_sub_field( 'right_image' ); ?>
		    	    <?php if ( $right_image ) : ?>
                    	<img class="d-md-none" src="<?php echo esc_url( $right_image['url'] ); ?>" alt="<?php echo esc_attr( $right_image['alt'] ); ?>" />
                    <?php endif; ?>
				</div>
		    </div>  
		</div>  
		<div class="righ-background-content d-none d-md-block" style="background: url('<?php echo esc_url( $right_image['url'] ); ?>');"></div>
     </div>
</section>



