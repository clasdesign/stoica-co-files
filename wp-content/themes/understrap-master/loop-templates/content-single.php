<?php
/**
 * Single post partial template
 *
 * @package UnderStrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">

	<div class="single-post-container">
		<div class="row justify-content-center">

			<div class="col-lg-8">
	            <header class="single-post-title-section">
			        <div class="single-post-categs">
						<?php 
						
		            		$cats = array();
                            foreach (get_the_category($post_id) as $c) {
                                $cat = get_category($c);
                                array_push($cats, $cat->name);
		            		}
                            if (sizeOf($cats) > 0) {
                                $post_categories = implode(', ', $cats);
                            } else {
                                $post_categories = 'Not Category Assigned';
		            		}
		            		echo $post_categories;
		            	?>

		            </div>
					
	            	<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>

	            	<div class="entry-meta">
                        <?php echo get_avatar( get_the_author_email(), '60' ); ?>
	            		<?php understrap_posted_on(); ?>
	            	</div><!-- .entry-meta -->

	            </header><!-- .single-post-title-section -->
			</div>

			<div class="col-lg-10">
			    <?php echo get_the_post_thumbnail( $post->ID, 'full' ); ?>
			</div>

			<div class="col-lg-8">
				<div class="share-single-post">
				    <span><?php _e( 'Share this article:', 'single post' ); ?></span> <?php echo do_shortcode("[Sassy_Social_Share]"); ?>
				</div>
			    <div class="single-post-content">
	                <?php the_content(); ?>
				</div>
			</div>

		</div>
	</div>

</article><!-- #post-## -->
