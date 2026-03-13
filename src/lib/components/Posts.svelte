<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let posts: Post[];
</script>

{#if posts.length === 0}
	<div class="surface-panel p-8 text-center sm:p-10">
		<h2 class="section-title">No articles published yet.</h2>
		<p class="copy mt-4">Check back later for updates from the project.</p>
	</div>
{:else}
	<div class="grid gap-6 lg:grid-cols-3">
		{#each posts as post}
			<a class="surface-card flex h-full flex-col no-underline" href={`posts/${post.slug}`}>
				<div class="flex flex-wrap items-center gap-3">
					<span class="tag">Article</span>
					<span class="text-sm text-slate-500">{formatDate(post.date, 'long', 'en-US')}</span>
				</div>

				<h2 class="mt-5 text-2xl font-semibold text-slate-950">{post.title}</h2>
				<p class="copy mt-4 flex-1">{post.description}</p>

				<span class="link-arrow mt-6">Read article</span>
			</a>
		{/each}
	</div>
{/if}
