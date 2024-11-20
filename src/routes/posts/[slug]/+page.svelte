<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="flex justify-center mt-8">
	<article class="card mt-2 w-10/12 mb-6 px-8 pb-10">
		<!-- Title -->
		<hgroup class="flex flex-col items-center">
			<h3 class="mb-8 mt-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{data.meta.title}</h3>
			<p class="mb-6 text-base font-normal text-gray-500 sm:px-16 xl:px-48 dark:text-gray-400">Published {formatDate(data.meta.date)}</p>
		</hgroup>

		<!-- Tags -->
		<!-- <div class="tags">
			{#each data.meta.categories as category}
				<span>&num;{category}</span>
			{/each}
		</div> -->

		<!-- Post -->
		<div class="prose m-auto">
			<svelte:component this={data.content} />
		</div>
	</article>
</div>
