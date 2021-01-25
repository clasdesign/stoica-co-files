<?php
/**
 * The template for displaying all single posts
 *
 * @package UnderStrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();
?>

<div class="wrapper" id="single-wrapper">

	<div class="container" id="content" tabindex="-1">

			<main class="site-main" id="main">

				<?php
				    while ( have_posts() ) {
				    	the_post();
				    	get_template_part( 'loop-templates/content', 'single' );
				    }
				?>

			</main><!-- #main -->

	</div><!-- #content -->

<section>
	<div class="related-posts" style="background: <?php the_sub_field( 'background_color' ); ?>;">
		<div class="container">
			<div class="latest-stories-title-section">
				<div class="row align-items-end">
					<div class="col-lg-6">
						<h2><?php _e( 'Related stories', 'related post' ) ?></h2>
						<p><?php _e( 'We are helping our clients build a better online presence, create a coherent action plan based on their growth goals and implement.', 'related post' ) ?></p>
					</div>
					<div class="col-lg-6 text-right">
						<div class="all-stories-link">
							<a href="/blog"><?php _e( 'Check all stories', 'related post' ) ?></a>
						</div>
					</div>
				</div>
			</div>

			<div class="laatest-stories-list">
			    <?php 
                    $relatedPosts = array(
                        'post_status' => 'publish',
                        'post_type' => 'post',
                        'suppress_filters' => true,
                        'ignore_sticky_posts' => true,
                        'posts_per_page' => 2,
                        'post__not_in' => array($post->ID),
                        // 'category__in' => array($first_cat),
                    );
                    // the query
                    $the_query = new WP_Query( $relatedPosts); 
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

</div><!-- #single-wrapper -->

<?php
get_footer();
