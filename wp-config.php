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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ecommerce' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Id)aSuMb8|Yh{(cb]?JdrXlV;xyRoo4$R,%{kusiYC(iX&S)rb.pZFTB9UkjPU<%' );
define( 'SECURE_AUTH_KEY',  'znHjg-RmbVq=t13 #1+<c;ayv(zqLf;G(VKVs(FD7P}*^4r6t3!gR@+[c8VxYHkt' );
define( 'LOGGED_IN_KEY',    'ys7yGR?f 9O?%!0vEI!sqw]DzT3DwWCOEo+&P ;|O%3f[y<&SEJ^k_4~{u%drAs:' );
define( 'NONCE_KEY',        'JWuVMluw:d9g5*;/HX90i(_OD%/@0S(G(NfDz8K&aFGY_MR]![f|f.knmi2WqL^U' );
define( 'AUTH_SALT',        ' I4{u93om0-k*aZg!DU59P,;c)8_.I!6{~2RC@^jAjv!AI}V=,t(l1-B1aO?.avf' );
define( 'SECURE_AUTH_SALT', 'aF5~ 9s[x^l-+fTbz0uQv-?#G&SkRZ9rqT<q~YC/`jo ngC}8`ebEcl ZW2Fh_pR' );
define( 'LOGGED_IN_SALT',   '7!%m}avVx7^~+|i^CGq~vh_)CWQ+jt1(,=I=5_aRQY|H4_j]lVbB($!]Th0%%.^:' );
define( 'NONCE_SALT',       '#Pl.cq%.7OZzuSow +D8[!]&}V;| 9JqEyxY2e3BKsdCZ{{-[4E+8|P|RB[;Jlzw' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_1';

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
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
