<section>
	<div class="schedule-now-section" style="background: <?php the_sub_field( 'left_column_background_color' ); ?>;">
		<div class="container wide-container">
			<div class="row">
				<div class="col-lg-6">
					<div class="schedule-left-content">
						<div class="schedule-left-text">
							<?php the_sub_field( 'left_column_text' ); ?>
						</div>
						<?php $left_column_image = get_sub_field( 'left_column_image' ); ?>
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
							<?php the_sub_field( 'right_column_text' ); ?>
						</div>
						<?php $right_column_image = get_sub_field( 'right_column_image' ); ?>
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
