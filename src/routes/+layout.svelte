<script lang="ts">
	import { page } from '$app/stores';
	import '../app.postcss';

	type NavigationItem = {
		href: string;
		label: string;
	};

	const headerNavigation: NavigationItem[] = [
		{ href: '/', label: 'Overview' },
		{ href: '/consortium', label: 'Consortium' },
		{ href: '/agenda', label: 'Agenda' }
	];

	const footerNavigation: NavigationItem[] = [
		{ href: '/', label: 'Overview' },
		{ href: '/agenda', label: 'Agenda' },
		{ href: '/repository', label: 'Repository' },
		{ href: '/media', label: 'Media' },
		{ href: '/consortium', label: 'Consortium' }
	];

	let navigationOpen = false;
	const currentYear = new Date().getFullYear();

	const isActive = (item: NavigationItem, pathname: string) =>
		item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

	const navLinkClass = (item: NavigationItem, pathname: string) =>
		[
			'rounded-full px-4 py-2 text-sm font-medium no-underline transition',
			isActive(item, pathname)
				? 'bg-white text-slate-950 shadow-sm'
				: 'text-slate-300 hover:bg-white/10 hover:text-white'
		].join(' ');

	const closeNavigation = () => {
		navigationOpen = false;
	};
</script>

<svelte:window on:keydown={(event) => event.key === 'Escape' && (navigationOpen = false)} />

<div class="site-shell">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_34%),radial-gradient(circle_at_right,_rgba(15,23,42,0.15),_transparent_24%)] blur-3xl"
	></div>

	<header
		class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur-xl"
	>
		<div class="site-container">
			<div class="flex min-h-[5.5rem] items-center justify-between gap-6">
				<a
					href="/"
					class="flex items-center gap-4 text-white no-underline"
					on:click={closeNavigation}
				>
					<img alt="SECDES logo" class="h-16 w-auto lg:h-20" src="/secdess.png" />
					<div class="space-y-1">
						<p class="text-base font-semibold uppercase tracking-[0.2em]">SecDes</p>
						<p class="text-sm text-slate-300">Security by design for modern software teams</p>
					</div>
				</a>

				<nav class="hidden items-center gap-1 rounded-full bg-white/5 p-1 lg:flex">
					{#each headerNavigation as item}
						<a class={navLinkClass(item, $page.url.pathname)} href={item.href}>
							{item.label}
						</a>
					{/each}
				</nav>

				<div class="hidden items-center gap-3 lg:flex">
					<a
						class="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white no-underline transition hover:border-white/30 hover:bg-white/10"
						href="/media"
					>
						Recordings
					</a>
					<a
						class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-semibold text-slate-950 no-underline transition duration-200 hover:-translate-y-0.5 hover:border-white/50 hover:text-slate-950"
						href="/repository"
					>
						Browse Resources
					</a>
				</div>

				<button
					aria-expanded={navigationOpen}
					aria-label="Toggle navigation"
					class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 lg:hidden"
					type="button"
					on:click={() => (navigationOpen = !navigationOpen)}
				>
					Menu
				</button>
			</div>

			{#if navigationOpen}
				<div class="border-t border-white/10 py-4 lg:hidden">
					<nav class="flex flex-col gap-2">
						{#each headerNavigation as item}
							<a
								class={navLinkClass(item, $page.url.pathname)}
								href={item.href}
								on:click={closeNavigation}
							>
								{item.label}
							</a>
						{/each}
						<div class="mt-3 grid gap-2 sm:grid-cols-2">
							<a
								class="rounded-full border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white no-underline transition hover:bg-white/10"
								href="/media"
								on:click={closeNavigation}
							>
								Watch Recordings
							</a>
							<a
								class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-center text-sm font-semibold text-slate-800 no-underline transition duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:text-slate-950"
								href="/repository"
								on:click={closeNavigation}
							>
								Browse Resources
							</a>
						</div>
					</nav>
				</div>
			{/if}
		</div>
	</header>

	<main class="pb-16">
		<slot />
	</main>

	<footer class="border-t border-slate-200/80 bg-slate-950 text-slate-200">
		<div class="site-container py-12 lg:py-16">
			<div class="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
				<div class="space-y-4">
					<p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">SecDes</p>
					<h2 class="max-w-md text-2xl font-semibold tracking-tight text-white lg:text-[1.75rem]">
						Security by design, translated into practical guidance for software teams.
					</h2>
					<p class="text-sm text-slate-400">&copy; 2024-{currentYear} SECDES. All rights reserved.</p>
				</div>

				<div class="space-y-4">
					<p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Explore</p>
					<div class="flex flex-col gap-3">
						{#each footerNavigation as item}
							<a class="text-sm text-slate-300 no-underline hover:text-white" href={item.href}>
								{item.label}
							</a>
						{/each}
					</div>
				</div>

				<div class="space-y-4">
					<p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Project</p>
					<p class="text-sm leading-7 text-slate-300">
						Led by Sirris and DistriNet, with support from VLAIO. The project focuses on helping
						smaller software companies turn secure software development into repeatable practice.
					</p>
					<a
						class="text-sm font-semibold text-white no-underline hover:text-cyan-300"
						href="/repository"
					>
						View repository
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>
