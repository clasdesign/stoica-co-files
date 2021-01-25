<?php
/**
 * Template Name: Ribbon Page Template
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();

?>

<div class="wrapper" id="page-wrapper">

	<div id="content" tabindex="-1">

		<main class="site-main" id="main">

            <?php while (have_posts()) : the_post(); ?>
              <?php get_template_part('page-templates/content', 'sections'); ?>
            <?php endwhile; ?>
			
		</main><!-- #main -->

	</div><!-- #content -->

</div><!-- #page-wrapper -->

<?php
get_footer();