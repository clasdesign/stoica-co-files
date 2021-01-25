<section>
	<div class="clients-testimonials-section" style="background: <?php the_sub_field( 'section_background_color' ); ?>;">
		<div class="container">
			<div class="row">
				<div class="col-lg-4">
					<div class="testimonial-text-section">
						<?php the_sub_field( 'left_text' ); ?>
					</div>

                    <div class="test-nav">
                        <div class="prev"><i class="fas fa-arrow-left"></i></div>
                        <div class="next"><i class="fas fa-arrow-right"></i></div>
                    </div>
				</div>
				<div class="col-lg-8">

                    <div class="testimonials-container ">
                        <?php if ( have_rows( 'testimonials_carousel' ) ) : ?>
		            		<?php while ( have_rows( 'testimonials_carousel' ) ) : the_row(); ?>
		            		    <div class="item testimonial-element">
                                    <div class="testimonial-item">
										<div class="testimonial-icon">
                        		            <?php $testimonial_icon = get_sub_field( 'testimonial_icon' ); ?>
                        		            <?php if ( $testimonial_icon ) : ?>
                        		            	<img src="<?php echo esc_url( $testimonial_icon['url'] ); ?>" alt="<?php echo esc_attr( $testimonial_icon['alt'] ); ?>" />
										    <?php endif; ?>
										</div>

										<div class="testimonial-author">
											<span class="name">
												<?php the_sub_field( 'client_name' ); ?>
											</span>
											<p>
												<?php the_sub_field( 'client_role' ); ?>
											</p>
										</div>

										<div class="testimonial-message">
											<?php the_sub_field( 'testimonial_message' ); ?>
										</div>
										
		            				</div>
		            			</div>
                        	<?php endwhile; ?>
                        <?php else : ?>
                        	<?php // no rows found ?>
                        <?php endif; ?>
                    </div>

				</div>
			</div>
		</div>
	</div>
</section>