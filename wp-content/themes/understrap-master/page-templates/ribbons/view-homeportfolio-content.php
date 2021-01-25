<section>
    <div class="home-portfolio-listing">
	    <div class="row no-gutters">

			<?php if ( have_rows( 'portfolio_items' ) ) : ?>
				<?php while ( have_rows( 'portfolio_items' ) ) : the_row(); ?>
                     <div class="col-md-4">

					<?php $portfolio_link = get_sub_field( 'portfolio_link' ); ?>
					<?php $portfolio_image = get_sub_field( 'portfolio_image' ); ?>
					<?php if ( $portfolio_link ) : ?>

						<a href="<?php echo esc_url( $portfolio_link['url'] ); ?>" target="<?php echo esc_attr( $portfolio_link['target'] ); ?>"><img src="<?php echo esc_url( $portfolio_image['url'] ); ?>" alt="<?php echo esc_attr( $portfolio_image['alt'] ); ?>" /></a>

					<?php else : ?>
						<img src="<?php echo esc_url( $portfolio_image['url'] ); ?>" alt="<?php echo esc_attr( $portfolio_image['alt'] ); ?>" />
					<?php endif; ?>
					 </div>

				<?php endwhile; ?>
			<?php else : ?>
				<?php // no rows found ?>
			<?php endif; ?>

		</div>    
     </div>
</section>