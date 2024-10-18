<script>
	export let presentationId
    export let presentationTitle
    export let url


</script>

<iframe
    title="Presentation"
	src="https://www.slideshare.net/slideshow/embed_code/key/{presentationId}?startSlide=1"
	width="597"
	height="486"
	frameborder="0"
	marginwidth="0"
	marginheight="0"
	scrolling="no"
	style="border:1px solid #CCC; border-width:1px;   margin-bottom:5px;max-width: 100%;"
	allowfullscreen
></iframe>
<div style="margin-bottom:5px">
	<strong
		><a
			href="{url}"
			title="{presentationTitle}"
			target="_blank">{presentationTitle}</a
		></strong
	>
</div>
