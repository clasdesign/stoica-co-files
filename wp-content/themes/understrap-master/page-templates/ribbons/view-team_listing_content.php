<section>
    <div class="our-team-section">
        <div class="container">
            <div class="our-team-title-section">
                <?php the_sub_field( 'section_title' ); ?>
            </div>

            <div class="our-team-listing">
                <?php if ( have_rows( 'members_listing' ) ) : ?>
                    <div class="row">
                        <?php while ( have_rows( 'members_listing' ) ) : the_row(); ?>
                            <div class="col-lg-3 col-6">
                                <?php $member_image = get_sub_field( 'member_image' ); ?>
                                <?php if ( $member_image ) : ?>
                                    <div class="member-image">
                                        <img src="<?php echo esc_url( $member_image['url'] ); ?>" alt="<?php echo esc_attr( $member_image['alt'] ); ?>" />
                                    </div>
                                <?php endif; ?>

                                <h4 class="member-name">
                                    <?php the_sub_field( 'member_name' ); ?>
                                </h4>

                                <span class="member-role">
                                <?php the_sub_field( 'member_role' ); ?>
                            </span>
                            </div>
                        <?php endwhile; ?>
                    </div>
                <?php else : ?>
                    <?php // no rows found ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>

