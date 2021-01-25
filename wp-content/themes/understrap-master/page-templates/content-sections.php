<?php if ( have_rows( 'sections' ) ): ?>
	<?php while ( have_rows( 'sections' ) ) : the_row(); ?>
        <?php
            get_template_part('page-templates/ribbons/view', get_row_layout());
        ?>
	<?php endwhile; ?>
<?php else: ?>
	<?php // no layouts found ?>
<?php endif; ?>


