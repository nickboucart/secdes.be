<script lang="ts">
	import { formatDate } from '$lib/utils';

	const recordings = [
		{
			title: 'Getting the most out of your pentest',
			date: '2025-12-12',
			speaker: 'Mathias Selleslach',
			summary:
				'A practical webinar for SaaS teams that want to prepare better for a pentest, collaborate effectively with pentesting companies and turn findings into concrete product improvements.',
			videoHref: 'https://secdes.pieterp.be/2025-12-12-Pentesting.mp4'
		},
		{
			title: 'Introduction to SAMM',
			date: '2025-09-11',
			speaker: 'Aram Hovsepyan',
			summary:
				'An accessible introduction to OWASP SAMM and the role it can play in measuring and improving secure software development maturity.',
			videoHref: 'https://secdes.pieterp.be/2025-09-11-SAMM.mp4'
		},
		{
			title: 'NIS 2, DORA, and the likes',
			date: '2025-06-13',
			speaker: 'Koen Vranckaert and Eyup Kun',
			summary:
				'A broad overview of emerging EU cybersecurity regulation, with particular attention to what it means for smaller software companies and product teams.',
			videoHref: 'https://secdes.pieterp.be/2025-06-13-NIS2_and_DORA.mp4'
		},
		{
			title: 'OpenAPI as a Security Tool',
			date: '2025-05-15',
			speaker: 'Philippe De Ryck',
			summary:
				'A focused session on using OpenAPI specifications not only for documentation, but also for security analysis, testing and runtime protection.',
			videoHref: 'https://secdes.pieterp.be/2025-05-15-OpenAPI.mp4'
		},
		{
			title: 'An Overview of Threat Modeling Tools',
			date: '2025-04-24',
			speaker: 'Tatiana Galibus and Laurens Sion',
			summary:
				'An exploration of practical tooling for threat modeling, including expectations, trade-offs and an introduction to the SPARTA tool from DistriNet.',
			videoHref: 'https://secdes.pieterp.be/2025-04-24-Threat_Modeling_Tools.mp4'
		},
		{
			title: "Keeping pace with OAuth's evolving security practices",
			date: '2024-10-18',
			speaker: 'Pieter Philippaerts',
			summary:
				'A practical look at how OAuth security guidance has evolved and what application teams should know to keep API authorization implementations up to date.',
			videoHref: 'https://secdes.pieterp.be/2024-10-18-OAuth.mp4'
		},
		{
			title: 'Leveraging Product Management to Shift Left in Small SaaS Teams',
			date: '2024-10-10',
			speaker: 'Nick Boucart',
			summary:
				'A session connecting product management, application security and customer expectations, with a strong focus on how smaller SaaS teams can prioritize security earlier.',
			videoHref: 'https://secdes.pieterp.be/2024-10-10-Leveraging_Product_Management.mp4'
		},
		{
			title: 'An Introduction to Threat Modeling',
			date: '2024-09-13',
			speaker: 'Koen Yskout',
			summary:
				'A foundational introduction to threat modeling, where it fits into the software development lifecycle and why it matters for secure software engineering.',
			videoHref: 'https://secdes.pieterp.be/2024-09-13-Threat_Modeling.mp4'
		}
	];

	const [featuredRecording, ...archive] = recordings;
</script>

<svelte:head>
	<title>Media | Security by Design</title>
	<meta
		name="description"
		content="Watch recordings of SECDES presentations and webinars on secure software development, threat modeling, API security and more."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="section" style="padding-top: 0; padding-bottom: 0;">
	<div class="site-container">
		<div class="surface-panel p-8 sm:p-10 lg:p-12">
			<h1 class="page-title mt-6 max-w-4xl">
				Recorded sessions covering threat modeling, API security, secure development and more.
			</h1>
			<p class="lead mt-6 max-w-3xl">
				This page collects the available screen recordings from SECDES webinars and project
				sessions. If you are looking for slide decks, whitepapers or downloadable materials, head to
				the repository.
			</p>
			<div class="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
				<article class="surface-card">
					<span class="tag">Latest recording</span>
					<h2 class="section-title mt-5">{featuredRecording.title}</h2>
					<div class="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
						<span>{formatDate(featuredRecording.date, 'long', 'en-US')}</span>
						<span>&middot;</span>
						<span>{featuredRecording.speaker}</span>
					</div>
					<p class="copy mt-5">{featuredRecording.summary}</p>
					<a
						class="link-arrow mt-6"
						href={featuredRecording.videoHref}
						rel="noreferrer"
						target="_blank"
					>
						Open recording
					</a>
				</article>

				<div class="surface-panel p-6">
					<p class="kicker">What you will find here</p>
					<div class="mt-5 space-y-4">
						<div class="info-panel">
							<h2 class="text-xl font-semibold text-slate-950">Technical webinars</h2>
							<p class="copy mt-3">
								Short, focused sessions on specific secure software development topics.
							</p>
						</div>
						<div class="info-panel">
							<h2 class="text-xl font-semibold text-slate-950">Applied guidance</h2>
							<p class="copy mt-3">
								Content aimed at helping software teams make practical choices in architecture,
								testing and security process design.
							</p>
						</div>
						<div class="info-panel">
							<h2 class="text-xl font-semibold text-slate-950">Supporting materials</h2>
							<p class="copy mt-3">
								Most talks also have related slides or downloads on the repository page.
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
			<h2 class="section-title mt-6">Browse the available sessions.</h2>
			<p class="copy mt-4">
				The archive below brings together recordings from 2024 and 2025. Each session focuses on a
				specific area of secure software design or application security practice.
			</p>
		</div>

		<div class="mt-10 grid gap-6 lg:grid-cols-2">
			{#each archive as recording}
				<article class="surface-card">
					<div class="flex flex-wrap items-center gap-3">
						<span class="tag">Recording</span>
						<span class="text-sm text-slate-500">
							{formatDate(recording.date, 'long', 'en-US')}
						</span>
					</div>
					<h3 class="mt-5 text-2xl font-semibold text-slate-950">{recording.title}</h3>
					<p class="mt-3 text-sm font-medium text-slate-500">{recording.speaker}</p>
					<p class="copy mt-4">{recording.summary}</p>
					<a class="link-arrow mt-6" href={recording.videoHref} rel="noreferrer" target="_blank">
						Watch recording
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>
