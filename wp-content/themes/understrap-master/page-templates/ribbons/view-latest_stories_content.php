<section>
	<div class="latest-stories-section" style="background: <?php the_sub_field( 'background_color' ); ?>;">
		<div class="container">
			<div class="latest-stories-title-section">
				<div class="row align-items-end">
					<div class="col-lg-6">
						<?php the_sub_field( 'latest_stories_title' ); ?>
					</div>
					<div class="col-lg-6 text-right">
						<div class="all-stories-link">
							<a href="/blog"><?php _e( 'Check all stories', 'latest stories' ); ?></a>
						</div>
					</div>
				</div>
			</div>

			<div class="laatest-stories-list">
			    <?php 
                    $args = array(
                        'post_type' => 'post',
                        'posts_per_page' => 3,
                    );
			    	$the_query = new WP_Query( $args ); 
			    ?>
				<div class="row">
                    <?php if ( $the_query->have_posts() ) : ?>
						<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
						<?php get_template_part( 'loop-templates/content', 'post' ); ?>
                        <?php endwhile; ?>
                        <?php wp_reset_postdata(); ?>
                    <?php else : ?>
                        <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
                    <?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</section>			


			