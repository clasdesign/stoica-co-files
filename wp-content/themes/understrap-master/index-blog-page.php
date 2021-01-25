<?php
/**
 * Template Name: Listing Blog Posts
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();

// Setup variables
$post_type = 'post';
$post_per_page = 9;
$postid = get_the_ID();

?>

<div class="wrapper" id="page-wrapper">

	<div id="content" tabindex="-1">

		<main class="site-main" id="main">
			<section>
                <div class="listing-blog-header">
                    <div class="container">
                        <div class="row align-items-end">
                            <div class="col-lg-7">
                                <div class="listing-blog-header-text">
                                    <?php the_content(); ?>
                                </div>
                            </div>
                            <div class="col-lg-5">

                                <div class="hero-follow text-right">
                                    <span><?php _e( 'Follow us on social media', 'Blog page' ) ?>:</span>
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
            </section>

            <section>
                <div class="blog-posts">
                    <div class="featured-posts">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2><?php _e( 'Featured stories', 'Blog page' ) ?></h2>
                                </div>
                            </div>

                            <div class="featured-posts-container">
                                <?php 
                                    $featuredPosts = array(
                                        'post_status' => 'publish',
                                        'post_type' => 'post',
                                        'suppress_filters' => true,
                                        'ignore_sticky_posts' => true,
                                        'posts_per_page' => -3,
                                    );
                                    // the query
                                    $the_query = new WP_Query( $featuredPosts ); 
                                    // Array featured posts IDs
                                    $skipePosts = array();
                                ?>
                                <div class="row">
                                    <?php if ( $the_query->have_posts() ) : ?>
                                        <!-- the loop -->
                                        <?php while ( $the_query->have_posts() ) : $the_query->the_post(); $i++ ?>
                                            <?php 
                                                // Store featured posts IDs
                                                $skipePosts[] = get_the_ID();
                                                get_template_part( 'loop-templates/content', 'post' );
                                            ?>
                                           <?php endwhile; ?>
                                    <?php wp_reset_postdata();?>
                                    <?php else : ?>
                                        <p><?php esc_html_e( 'Sorry, no latest news.' ); ?></p>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="more-posts">
                        <div class="container">
                            <div id="posts-filter" class="anchor-link"></div>

                                <?php  
                                    $argsFilters = [
                                        'type' => 'post',
                                        'child_of' => 0,
                                        'parent' => '',
                                        'orderby' => 'name',
                                        'order' => 'ASC',
                                        'hide_empty' => true,
                                        'hierarchical' => true,
                                        'pad_counts' => false
                                    ];

                                    // Get terms
                                    $categories = get_categories($argsFilters);
                                    // Get url parameters
                                    $catselected = $_GET['categorie'];
                                    $search = trim( $_GET['q'] );
                                    // Get selected options
                                    $categorie = $_GET['categorie'];
                                    if( $categorie ) {
                                        $categorie = str_replace('+', ' ', $categorie);
                                        $categorie = explode(',', $categorie);
                                    }
                               ?>

                            <div class="filter-change">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <!-- Search -->
                                        <div class="search-bar">
                                            <div class="filter filter-search-posts">
                                                <div class="search-form blog-search-form">
                                                    <i class="fas fa-search"></i>
                                                    <form><input type="text" placeholder="Search" value="<?=$_GET['q']?>"></form> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="categorie text-right">
                                            <span><?php _e( 'Categories', 'Blog page' ) ?>:</span>
				                            <?php
				                            	foreach($categories as $element) {
				                            		$checked = false;
				                            		if( $categorie ) {
				                            			foreach($categorie as $ind) {
				                            				if( $ind == $element->term_id ) $checked = true;
				                            			}
				                            		}
				                            		print '<div class="filter-element"><input type="checkbox" class="industry-checkbox" value="'.$element->term_id.'" id="industry-'.$element->name.'" '.($checked ? 'checked' : '').'> <label for="industry-'.$element->name .'" class="'.($checked ? 'active' : '').'">' . $element->name . "</label></div>";
				                            	}
                                            ?> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <?php 
                            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

                            $items = array(
                              'post_type' => 'post',
                              'post_status' => 'publish',
                              'posts_per_page' => $post_per_page,
                              'orderby' => 'publish_date', 
                              'paged' => $paged,
                              'taxonomy' => 'category',
                              'suppress_filters' => true,
                              'ignore_sticky_posts' => true,
                              'post__not_in' => $skipePosts, 
                            );

                            if ($catselected) {
                                $items['cat'] = $catselected;
                            }
                            if( !empty( $search ) ) {
                                $items['s'] = $search;
                            }
                            $loop_items = new WP_Query($items);      
                        ?>

                        <div class="row">

                            <?php if ( $loop_items->have_posts() ) : ?>
                                <!-- the loop -->
                                <?php while ( $loop_items->have_posts() ) : $loop_items->the_post(); $i++ ?>
                                    <!-- Get thumbnail image -->

                                    <?php get_template_part( 'loop-templates/content', 'post' ); ?>

                                <?php endwhile; ?>

                                <div class="col-12">
                                    <div id='pagination' class="pagination">
                                        <?php
                                        $total_pages = $loop_items->max_num_pages;
                                        if ($total_pages > 1){ ?>
                                            <div class="pagination-nav">

                                            <?php 
                                                $current_page = max(1, get_query_var('paged'));
                                                $big = 999999999; // need an unlikely integer
                                                echo paginate_links(array(
                                                    'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                                                    'format' => '/page/%#%',
                                                    'current' => $current_page,
                                                    'total' => $total_pages,
                                                    'prev_text' => __('<i class="fal fa-angle-double-left"></i>'),
                                                    'next_text' => __('<i class="fal fa-angle-double-right"></i>'),
                                                ));
                                            ?>

                                            </div>
                                       <?php } ?>
                                        
                                    </div>
                                </div>
                                <?php wp_reset_postdata(); ?>
                                <?php else : ?>
                                    <div class="col-12">
                                        <p class="no-posts"><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
                                    </div>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
            	<div class="schedule-now-section" style="background: <?php the_field( 'left_column_background_color' ); ?>;">
            		<div class="container wide-container">
            			<div class="row">
            				<div class="col-lg-6">
            					<div class="schedule-left-content">
            						<div class="schedule-left-text">
            							<?php the_field( 'left_column_text' ); ?>
            						</div>
            						<?php $left_column_image = get_field( 'left_column_image' ); ?>
                                    <?php if ( $left_column_image ) : ?>
                                    	<img class="schedule-left-img" src="<?php echo esc_url( $left_column_image['url'] ); ?>" alt="<?php echo esc_attr( $left_column_image['alt'] ); ?>" />
                                    <?php endif; ?>
            					</div>
            					<div class="schedule-float-left-img">
            						<img class="schedule-left-img" src="<?php echo esc_url( $left_column_image['url'] ); ?>" alt="<?php echo esc_attr( $left_column_image['alt'] ); ?>" />
            					</div>
            				</div>
            				<div class="col-lg-6">
            					<div class="schedule-right-content">
            						<div class="schedule-right-text">
            							<?php the_field( 'right_column_text' ); ?>
            						</div>
                                    <?php $right_column_image = get_field( 'right_column_image' ); ?>
                                    
                                    <?php if ( $right_column_image ) : ?>
                                    	<img class="schedule-right-img" src="<?php echo esc_url( $right_column_image['url'] ); ?>" alt="<?php echo esc_attr( $right_column_image['alt'] ); ?>" />
                                    <?php endif; ?>
            					</div>
            				</div>
            			</div>
            		</div>
            		<div class="schedule-float-img">
            			<?php if ( $right_column_image ) : ?>
                        	<img src="<?php echo esc_url( $right_column_image['url'] ); ?>" alt="<?php echo esc_attr( $right_column_image['alt'] ); ?>" />
                        <?php endif; ?>
            		</div>
            	</div>
            </section>
		</main><!-- #main -->

	</div><!-- #content -->

</div><!-- #page-wrapper -->

<?php

add_action('wp_footer', 'add_this_script_footer');

function add_this_script_footer(){ 
?>

<script>
(function($){
    $(document).ready(function() {
        var args = {};

        $(".filter form").on("submit", function(e) {
            e.preventDefault();
            args['q'] = $(this).find('input').val();
            updateFilters();
            updateUrl();
        });

        $('.filter-change').on('change', function() {
            updateFilters();
            updateUrl();
        });

        function updateFilters() {
            
            // Filter by categories
            if ($('.categorie').find('input:checked').val() === "") {

            } else {
                filter = [];
                $('.categorie').find('input:checked').each(function(){
                
                    filter.push( $(this).val() );

                });

                args['categorie'] = filter.join(','); 
            }

        }

        function updateUrl() {
            var url = getNewUrl();
            window.location.replace( url );
        }

        function getNewUrl() {
            var url = '/<?php echo basename(get_permalink()); ?>';
            url += '?';
            $.each(args, function( name, value ){
                if(value != '')
                    url += name + '=' + value + '&';
            });
            url = url.slice(0, -1) + "#posts-filter";
            return url;
        }
    });
})(jQuery);
</script>

<?php
}

get_footer();