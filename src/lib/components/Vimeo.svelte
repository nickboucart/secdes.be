<script>
	export let videoId;
	export let token;
</script>

<svelte:head>
	<script src="https://player.vimeo.com/api/player.js"></script>
</svelte:head>

<div style="padding:56.25% 0 0 0;position:relative;">
	<iframe
		src="https://player.vimeo.com/video/{videoId}?h={token}&badge=0&autopause=0&player_id=0&app_id=58479"
		frameborder="0"
		allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
		style="position:absolute;top:0;left:0;width:100%;height:100%;"
		title="[SecDes] Introductiesessie threat modelling - 20240/9/13"
	></iframe>
</div>

<!-- src="https://player.vimeo.com/video/1020503411?h=0d0b041583&badge=0&autopause=0&player_id=0&app_id=58479" -->

