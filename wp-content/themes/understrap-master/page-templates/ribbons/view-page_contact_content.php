<section>
    <div class="page-contact-setion" style="background: <?php the_sub_field( 'background_color' ); ?>;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="page-contact-section-right">
                        <?php the_sub_field( 'right_text_content' ); ?>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="contact-section-shortcode">
                        <?php echo do_shortcode(the_sub_field( 'form_shortcode' )); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
