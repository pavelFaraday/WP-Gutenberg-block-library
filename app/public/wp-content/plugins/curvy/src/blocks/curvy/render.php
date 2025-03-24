<?
$block_wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'alignfull'
]);
// wp_send_json($content)
?>

<div <? echo $block_wrapper_attributes; ?>>
    <? echo $content; ?>
</div>