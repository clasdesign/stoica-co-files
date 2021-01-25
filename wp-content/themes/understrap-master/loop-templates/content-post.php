<div id="post-<?php the_ID(); ?>" class="col-lg-4 col-md-6">
    <div <?php post_class('blog-post-item'); ?>>
        <?php $url = get_permalink(); ?>
		<?php $thumb = get_the_post_thumbnail_url(); ?>
		<div onclick="document.location.href= '<?php echo $url ?>'" class="blog-img" style="background: url('<?php echo $thumb; ?>);">
		</div>
		<div class="blog-item-content">
		    <div class="blog-post-categs">
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
			<h4 style="cursor: pointer" onclick="document.location.href= '<?php echo $url ?>'"><?php the_title(); ?></h4>
			<p><?php echo wp_trim_words( get_the_content(), 26 ); ?></p>
            <div class="blog-author" >
	        	<?php echo get_avatar( get_the_author_email(), '60' ); ?>
	        	<span class="blog-auth-name">
	                <?php 
                        $fname = get_the_author_meta('first_name');
                        $lname = get_the_author_meta('last_name'); 
                        echo $fname ." ". $lname;
	                ?>
	        	</span>
		    </div>
		</div>
	</div>
</div>