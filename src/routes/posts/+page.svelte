<script lang="ts">
	import Posts from "$lib/components/Posts.svelte"

	export let data;
</script>


<svelte:head>
	<title>Articles | Security By Design</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Articles" />
</svelte:head>

<!-- Posts -->
<Posts posts={data.posts} />
