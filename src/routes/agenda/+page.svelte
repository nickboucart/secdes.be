<script lang="ts">
	import { formatDate } from '$lib/utils';

	const events = [
		{
			title: 'SecDes Closing Event',
			date: '2026-01-21',
			speaker: 'Nick Boucart, Pieter Philippaerts and Jonas Van de Vyver',
			location: 'Sirris, Heverlee',
			summary:
				'The closing event brought together lessons from the project, a session on building secure applications in the age of AI, an interactive exchange between participants and a look at support instruments for SMEs.',
			featured: true
		},
		{
			title: 'Making the Most of Your Pentest',
			date: '2025-12-12',
			speaker: 'Mathias Selleslach',
			location: 'Online seminar',
			summary:
				'A practical guide for SaaS teams on preparing for pentests, aligning expectations with testing partners and turning findings into improvement plans.',
			href: '/posts/seminar-pentesting'
		},
		{
			title: 'PR_D_CT Day 2025 (Ghent)',
			date: '2025-11-14',
			speaker: 'Nick Boucart',
			location: 'Ghent',
			summary:
				'Nick Boucart connected product thinking and application security, showing how small SaaS teams can shift security concerns left without derailing product delivery.',
			href: 'https://www.sirris.be/en/agenda/prdct-day-2025-ghent-product-management-impact'
		},
		{
			title: 'Cybersecurity Industry Day 2025',
			date: '2025-11-13',
			location: 'Mechelen',
			summary:
				'A broader cybersecurity event where the SECDES partners met researchers, practitioners and policy stakeholders to discuss applied impact and collaboration opportunities.',
			href: 'https://cybersecurity-industry-day.be/'
		},
		{
			title: 'PR_D_CT Day 2025 (Louvain-la-Neuve)',
			date: '2025-11-06',
			speaker: 'Nick Boucart',
			location: 'Louvain-la-Neuve',
			summary:
				'A second PR_D_CT Day session focused on how product management can help smaller SaaS companies bring security concerns into roadmap decisions earlier.',
			href: 'https://www.sirris.be/en/agenda/prdct-day-2025-louvain-la-neuve-product-management-impact'
		},
		{
			title: 'Introduction to SAMM',
			date: '2025-09-11',
			speaker: 'Aram Hovsepyan',
			location: 'Online seminar',
			summary:
				'An introduction to OWASP SAMM as a way to assess and improve secure development maturity.'
		},
		{
			title: 'NIS 2, DORA, and the likes',
			date: '2025-06-13',
			speaker: 'Koen Vranckaert and Eyup Kun',
			location: 'Online seminar',
			summary:
				'A high-level briefing on new EU cybersecurity rules and what they mean for software, hardware and process design in smaller organizations.'
		},
		{
			title: 'OpenAPI as a Security Tool',
			date: '2025-05-15',
			speaker: 'Philippe De Ryck',
			location: 'Online seminar',
			summary:
				'A session on using OpenAPI specifications as a practical input for audits, testing and security tooling.'
		},
		{
			title: 'An Overview of Threat Modeling Tools',
			date: '2025-04-24',
			speaker: 'Tatiana Galibus and Laurens Sion',
			location: 'Online seminar',
			summary:
				'A practical overview of what threat modeling tools can and cannot do, including a closer look at SPARTA.'
		},
		{
			title: 'Threat Modeling Workshop',
			date: '2025-01-15',
			speaker: 'Tatiana Galibus',
			location: 'Ghent',
			summary:
				'An in-person workshop centered on security mindset, data flows, assets and reasoning about threats before systems are deployed.'
		},
		{
			title: 'Security-by-Design User Group Meeting',
			date: '2024-11-14',
			speaker: 'Nick Boucart, Tatiana Galibus and Roeland Delrue',
			location: 'Mechelen',
			summary:
				'A user group meeting focused on supply-chain security, NIS2 and software security testing tools.'
		},
		{
			title: "Keeping pace with OAuth's evolving security practices",
			date: '2024-10-18',
			speaker: 'Pieter Philippaerts',
			location: 'Online seminar',
			summary:
				'A webinar on current OAuth security guidance and the practical implications for API authorization.'
		},
		{
			title: 'Leveraging Product Management to Shift Left in Small SaaS Teams',
			date: '2024-10-10',
			speaker: 'Nick Boucart',
			location: 'Online seminar',
			summary:
				'A talk on how product management can drive earlier security prioritization in smaller SaaS teams.'
		},
		{
			title: 'An Introduction to Threat Modeling',
			date: '2024-09-13',
			speaker: 'Koen Yskout',
			location: 'Online seminar',
			summary:
				'A foundational session introducing threat modeling in the secure software development lifecycle.'
		},
		{
			title: 'Security-by-Design User Group Meeting',
			date: '2024-05-30',
			speaker: 'Nick Boucart and Pieter Philippaerts',
			location: 'Leuven',
			summary:
				'The first user group meeting introduced the project and explained why secure design, testing and governance need to become part of everyday software delivery.'
		}
	];

	const featuredEvent = events.find((event) => event.featured) ?? events[0];
	const archiveEvents = events.filter((event) => !event.featured);
</script>

<svelte:head>
	<title>Agenda | Security by Design</title>
	<meta
		name="description"
		content="Browse the SECDES event archive, including webinars, workshops and talks on secure software development."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="section" style="padding-top: 0; padding-bottom: 0;">
	<div class="site-container">
		<div class="surface-panel p-8 sm:p-10 lg:p-12">
			<h1 class="page-title mt-6 max-w-4xl">SECDES Event Archive</h1>
			<p class="lead mt-6 max-w-3xl">
				SECDES brought together webinars, workshops and partner events focused on secure software
				development for SaaS teams. The live program concluded on January 21, 2026, but the archive
				remains available here together with links to recordings and supporting materials.
			</p>
			<div class="mt-8 flex flex-wrap gap-4">
				<a class="button-primary" href="/media">Watch recordings</a>
				<a class="button-secondary" href="/repository">Browse materials</a>
			</div>
			<div class="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
				<article class="surface-card">
					<span class="tag">Final event</span>
					<h2 class="section-title mt-5">{featuredEvent.title}</h2>
					<div class="mt-5 grid gap-3 text-sm text-slate-500 sm:grid-cols-2">
						<p>
							<strong class="text-slate-700">Date:</strong>
							{formatDate(featuredEvent.date, 'long', 'en-US')}
						</p>
						<p>
							<strong class="text-slate-700">Location:</strong>
							{featuredEvent.location}
						</p>
						{#if featuredEvent.speaker}
							<p class="sm:col-span-2">
								<strong class="text-slate-700">Speakers:</strong>
								{featuredEvent.speaker}
							</p>
						{/if}
					</div>
					<p class="copy mt-5">{featuredEvent.summary}</p>
				</article>

				<div class="surface-panel p-6">
					<p class="kicker">Archive overview</p>
					<div class="mt-5 space-y-4">
						<div class="info-panel">
							<h2 class="text-xl font-semibold text-slate-950">Talks and webinars</h2>
							<p class="copy mt-3">
								Most sessions focused on specific secure software topics such as threat modeling,
								OAuth, API security, pentesting and secure development maturity.
							</p>
						</div>
						<div class="info-panel">
							<h2 class="text-xl font-semibold text-slate-950">Community moments</h2>
							<p class="copy mt-3">
								The program also included user group meetings and partner events that helped connect
								research with industry needs.
							</p>
						</div>
						<div class="info-panel">
							<h2 class="text-xl font-semibold text-slate-950">Still useful today</h2>
							<p class="copy mt-3">
								The recordings and slide decks remain relevant if you are building up a security by
								design practice inside a software team.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="site-container">
		<div class="max-w-3xl">
			<h2 class="section-title mt-6">Program history from 2024 to 2026.</h2>
			<p class="copy mt-4">
				Events are listed in reverse chronological order, beginning with the closing event in
				January 2026 and tracing back to the first user group sessions in 2024.
			</p>
		</div>

		<div class="mt-10 grid gap-6 lg:grid-cols-2">
			{#each archiveEvents as event}
				<article class="surface-card">
					<div class="flex flex-wrap items-center gap-3">
						<span class="tag">Archive</span>
						<span class="text-sm text-slate-500">{formatDate(event.date, 'long', 'en-US')}</span>
					</div>
					<h3 class="mt-5 text-2xl font-semibold text-slate-950">{event.title}</h3>
					<div class="mt-4 space-y-2 text-sm text-slate-500">
						<p><strong class="text-slate-700">Location:</strong> {event.location}</p>
						{#if event.speaker}
							<p><strong class="text-slate-700">Speaker:</strong> {event.speaker}</p>
						{/if}
					</div>
					<p class="copy mt-4">{event.summary}</p>
					{#if event.href}
						<a
							class="link-arrow mt-6"
							href={event.href}
							rel={event.href.startsWith('http') ? 'noreferrer' : undefined}
							target={event.href.startsWith('http') ? '_blank' : undefined}
						>
							More information
						</a>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>
