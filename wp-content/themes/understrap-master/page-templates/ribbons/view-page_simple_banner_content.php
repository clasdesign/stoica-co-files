<section>
    <div class="page-simple-banner" style="background: <?php the_sub_field( 'banner_background_color' ); ?>;">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="page-banner-content">
                        <div class="page-banner-text">
                            <?php the_sub_field( 'banner_content' ); ?>
                        </div>
                        <?php $show_buttons_checked_values = get_sub_field( 'show_buttons' ); ?>

                        <?php
                            if ($show_buttons_checked_values) { ?>
                                <div class="page-banner-links">

                                    <?php $button_1 = get_sub_field( 'button_1' ); ?>
                                    <?php if ( $button_1 ) : ?>
                                        <a class="stoica-btn ligh-blue" href="<?php echo esc_url( $button_1['url'] ); ?>" target="<?php echo esc_attr( $button_1['target'] ); ?>"><?php echo esc_html( $button_1['title'] ); ?></a>
                                    <?php endif; ?>

                                    <?php $button_2 = get_sub_field( 'button_2' ); ?>
                                    <?php if ( $button_2 ) : ?>
                                        <a class="stoica-btn dark-blue" href="<?php echo esc_url( $button_2['url'] ); ?>" target="<?php echo esc_attr( $button_2['target'] ); ?>"><?php echo esc_html( $button_2['title'] ); ?></a>
                                    <?php endif; ?>
                                </div>
                            <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
