<?php
/**
 * Plugin Name:       Blockylicious
 * Description:       A Plugin of funky blocks.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Giorgi Epitashvili
 * Author URI:        https://github.com/pavelFaraday
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blockylicious
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

 function create_custom_block_category ($categories) {
	// wp_send_json($categories);
	array_unshift($categories, [
		'slug' => 'blockyilicious',
		'title' => 'Blockyilicious'
	]);
	return $categories;
 }

function create_block_blockylicious_block_init() {
	add_filter('block_categories_all', 'create_custom_block_category');
	register_block_type( __DIR__ . '/build/blocks/curvy' );
}
add_action( 'init', 'create_block_blockylicious_block_init' );
