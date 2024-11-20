<script lang="ts">
    import type { Post } from '$lib/types'

    import { formatDate } from "$lib/utils";
    export let posts: Post[];
</script>


<div class="flex justify-center">
	<div class="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
		{#each posts as post}
			<a class="card card-hover overflow-hidden mt-8" href="posts/{post.slug}">
				<div class="p-4 space-y-4">
					<h3 class="h3">{post.title}</h3>
					<article>
						<p>
							{post.description}
						</p>
					</article>
				</div>
				<hr class="opacity-50" />
				<footer class="p-4 flex justify-start items-center space-x-4">
					<div class="flex-auto flex justify-between items-center">
						<small>On {formatDate(post.date)}</small>
					</div>
				</footer>
			</a>
		{/each}
	</div>
</div>
