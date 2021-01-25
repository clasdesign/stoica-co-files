<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dbyyon41r31oy2' );

/** MySQL database username */
define( 'DB_USER', 'ua5pxvvgo16ya' );

/** MySQL database password */
define( 'DB_PASSWORD', 'omxjnevdjcgr' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ' ;-mz,vO>mH3},1xxMI|}#EiGRfN#;#r3oN7Es>5!,[FCO>sgt+FzV#gYXe>`2Rs' );
define( 'SECURE_AUTH_KEY',   '1[y3+XEiv$^Ya^MHH[9XqU{qgEU&KVhSm;#$qO}bhvt2hEUar^W|-ch*&h;|+o{R' );
define( 'LOGGED_IN_KEY',     'Su4&3[uC8a|y5.Nm9Kr`C/%8(7P~sN<WMa3Ch?bSriL0#q-`u7{6Hp!:WWvXMAc=' );
define( 'NONCE_KEY',         'nz%Tu;d>4p)0[[[:?=<yc5n7PanH-pg}L,:9=iid~CUJjw#)vv7[ P5(+sZ}yrvO' );
define( 'AUTH_SALT',         'N)iSLSxch)7%:o|YUK6i($j:j!_#I:JB11<-9`vFT+b)y8e03&{hK!N]B#7fbHA}' );
define( 'SECURE_AUTH_SALT',  'g+HD!VLZI@,^J@AX$3A>j8I7s5BN{84[Y4<#6yVp+Bb5};(7_]D3JgSIBO-xKph8' );
define( 'LOGGED_IN_SALT',    '+n4sT`Dw3nk{W.o:@Fs/0@e:7wAt9y-sr#UjO+]p2PabTiX9vB I)j=5Xp}?!qT^' );
define( 'NONCE_SALT',        'Rj?9`OUkTg+apo5&!#ySY~5iL^d(&@ 0g%.unSt>:|{nZ!iA] ZINDS=n_5^)7f$' );
define( 'WP_CACHE_KEY_SALT', '.zU0HG+l9BXFE)T,9<dF%61Z_X.^2-Kc|Eg}0#0d`)%Pg.&0Mb344~:`KYw%jH||' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ppl_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
@include_once('/var/lib/sec/wp-settings.php'); // Added by SiteGround WordPress management system
