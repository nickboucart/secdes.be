<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { setModeUserPrefers, setModeCurrent } from '@skeletonlabs/skeleton';

	onMount(() => {
		//always go for light mode, so I don't have to style everything twice ;)
		setModeUserPrefers(true);
		setModeCurrent(true);
	});
	// // Highlight JS
	// import hljs from 'highlight.js/lib/core';
	// import 'highlight.js/styles/github-dark.css';
	// import { storeHighlightJs } from '@skeletonlabs/skeleton';
	// import xml from 'highlight.js/lib/languages/xml'; // for HTML
	// import css from 'highlight.js/lib/languages/css';
	// import javascript from 'highlight.js/lib/languages/javascript';
	// import typescript from 'highlight.js/lib/languages/typescript';

	// hljs.registerLanguage('xml', xml); // for HTML
	// hljs.registerLanguage('css', css);
	// hljs.registerLanguage('javascript', javascript);
	// hljs.registerLanguage('typescript', typescript);
	// storeHighlightJs.set(hljs);

	// // Floating UI for Popups
	// import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	// import { storePopup } from '@skeletonlabs/skeleton';
	// storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex flex-col">
					<a href="/"><strong class="text-4xl uppercase">SecDes</strong></a>
					<a href="/"><span class="text-xs uppercase">Coock+ Project</span></a>
				</div>
			</svelte:fragment>
		 <svelte:fragment slot="trail">
			 <a class="btn btn-md variant-filled-secondary" href="/">
				 project details
			 </a>
			 <a class="btn btn-md variant-filled-secondary" href="/consortium">
				 consortium
			 </a>
			 <a class="btn btn-md variant-filled-secondary" href="/media">
				 media
			 </a>
			 <a class="btn btn-md variant-filled-secondary" href="/repository">
				repository
			</a>
			<a class="btn btn-md variant-filled-secondary" href="/posts">
				community
			</a>
			 <a class="btn btn-md variant-filled-secondary" href="/agenda">
				 calendar
			 </a>
		 </svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<div class="flex flex-col bg-surface-300 h-24 mt-10  justify-center items-center">
			<div class="text-center">
				&copy; 2024-2025 SECDES &mdash; <a href="/consortium" target="_blank">DistriNet &amp; sirris</a>. All rights reserved.
			</div>

</div>
	</svelte:fragment>

</AppShell>
