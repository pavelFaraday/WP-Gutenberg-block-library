<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ',/>SO&ske&w&iTP0:g3v5D{pxRL?u1ywFcgAS0p.14M6$_zq!Z5dDyiFP0$-mMEH' );
define( 'SECURE_AUTH_KEY',   'd#lH?e6@Qff~E`WYJ.y@EFhXV^7KHqFH<edTHXQquqozJkZ[_{{D3.vnF:.s<{XC' );
define( 'LOGGED_IN_KEY',     '?5h5vAV-K&A/JY#uhe!]kG=fWDBv?P[HQQ]37a4M?t4oTpmrIb=(cz<JP8C8[J,j' );
define( 'NONCE_KEY',         '.!>6JaNy}z(nq4Z=$r^6%US$Y1Mrt~w26a<WsyIc~-yZHx<<dJDnD-ks3Jn `7 a' );
define( 'AUTH_SALT',         '7}!fo]ZyT@{FcKqA|dz/,?VMkn)L2<NgYV3P0.1 Ym2#vmOa<G9j&}4FW>`e[|7h' );
define( 'SECURE_AUTH_SALT',  'A5r+*XPXs*/x:5LJDNISOo|x3-;4_Z[Mn4`Qp+GqKX`=xGC@wdV&Iu&}BX;KKK3I' );
define( 'LOGGED_IN_SALT',    'WLb%Gs/)oN[.d0&Z$AnEFbXFP&%9_}F+8=lwebh%uRTZO-,)5+>Y)>4a0eqrcFG9' );
define( 'NONCE_SALT',        '(Xqng=vXaYz*M}P?SZ:(@Kq?ir1Pbq.gYetZtkGo<b#;^NJk{g:=hKax^&[zT.wE' );
define( 'WP_CACHE_KEY_SALT', 'R{_lwJSwG}tvIW0*~+xb9pg?=369YX{7kn+kBrxsG6=-%X80Y-ynz)2LQ[vPN#X=' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
