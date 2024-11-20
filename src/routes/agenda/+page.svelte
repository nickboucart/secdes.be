<script lang="ts">
	import Posts from "$lib/components/Posts.svelte"

	export let data;
</script>


<svelte:head>
	<title>Agenda | Security By Design</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Agenda" />
</svelte:head>

<!-- Posts -->
<Posts posts={data.posts} />
