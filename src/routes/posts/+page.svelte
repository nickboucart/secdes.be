<script lang="ts">
	import Posts from '$lib/components/Posts.svelte';

	export let data;
</script>

<svelte:head>
	<title>Articles | Security by Design</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Articles" />
</svelte:head>

<section class="section" style="padding-top: 0; padding-bottom: 0;">
	<div class="site-container">
		<div class="surface-panel p-8 sm:p-10 lg:p-12">
			<span class="eyebrow">Articles</span>
			<h1 class="page-title mt-6 max-w-4xl">
				Project articles and deeper takes on secure software development.
			</h1>
			<p class="lead mt-6 max-w-3xl">
				This section collects the written posts published as part of the SECDES project. For slide
				decks and other downloadable materials, head to the repository.
			</p>
		</div>
	</div>
</section>

<section class="section-tight">
	<div class="site-container">
		<Posts posts={data.posts} />
	</div>
</section>
