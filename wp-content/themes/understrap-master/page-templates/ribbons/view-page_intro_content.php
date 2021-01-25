<section>
    <div class="page-intro-section" style="background: <?php the_sub_field( 'background_color' ); ?>;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="page-intro-text">
                        <?php the_sub_field( 'text_content' ); ?>
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
