<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<section class="section" style="padding-top: 0; padding-bottom: 0;">
	<div class="site-container">
		<div class="surface-panel p-8 sm:p-10 lg:p-12">
			<a class="link-arrow" href="/posts">Back to articles</a>
			<div class="mt-8 flex flex-wrap items-center gap-3">
				<span class="tag">Article</span>
				<span class="text-sm text-slate-500">{formatDate(data.meta.date, 'long', 'en-US')}</span>
			</div>
			<h1 class="page-title mt-6 max-w-4xl">{data.meta.title}</h1>
			{#if data.meta.description}
				<p class="lead mt-6 max-w-3xl">{data.meta.description}</p>
			{/if}
		</div>
	</div>
</section>

<section class="section-tight">
	<div class="site-container">
		<article class="surface-panel p-8 sm:p-10 lg:p-12">
			<div
				class="prose prose-slate max-w-none prose-headings:font-semibold prose-a:font-semibold prose-a:text-cyan-800 prose-a:no-underline prose-blockquote:border-cyan-200 prose-blockquote:text-slate-600"
			>
				<svelte:component this={data.content} />
			</div>
		</article>
	</div>
</section>
