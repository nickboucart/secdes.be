<script lang="ts">
	const partners = [
		{
			name: 'DistriNet',
			role: 'Research partner',
			image: '/logo-distrinet.jpg',
			href: 'https://distrinet.cs.kuleuven.be',
			contactHref: 'https://distrinet.cs.kuleuven.be/people/PieterPhilippaerts',
			contactLabel: 'Pieter Philippaerts',
			copy: "DistriNet is the KU Leuven research group behind much of the project's secure software engineering expertise. Its work spans ICT security, secure software, secure systems, and distributed systems, with a strong international profile in software and systems security."
		},
		{
			name: 'Sirris',
			role: 'Industry partner',
			image: '/logo-sirris.jpg',
			href: 'https://www.sirris.be',
			contactHref: 'https://www.sirris.be/en/expert/nick-boucart',
			contactLabel: 'Nick Boucart',
			copy: 'Sirris is the collective knowledge center of the Belgian technology industry. Through its software engineering expertise, Sirris helps turn research insights into practical guidance and support for companies that want to improve how they build secure software.'
		},
		{
			name: 'VLAIO',
			role: 'Funding support',
			image: '/logo-vlaio.png',
			href: 'https://www.vlaio.be',
			copy: 'VLAIO supports innovation and entrepreneurship in Flanders. Through the COOCK program, it helps make applied research accessible to broader groups of companies so that new knowledge can reach industry faster.'
		}
	];
</script>

<svelte:head>
	<title>Consortium | Security by Design</title>
	<meta
		name="description"
		content="Meet the partners behind the SECDES project: DistriNet, Sirris, and VLAIO."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="pb-8 lg:pb-10" style="padding-top: 0; padding-bottom: 0;">
	<div class="site-container">
		<div class="surface-panel p-8 sm:p-10 lg:p-12">
			<h1 class="page-title max-w-4xl">The Organizations Behind SECDES</h1>
			<p class="lead mt-6 max-w-3xl">
				SECDES is a collaboration between the DistriNet Research Group and Sirris, funded through
				the VLAIO COOCK program. The project is designed to move strong research results into usable
				guidance for software companies.
			</p>
			<p class="copy mt-4 max-w-3xl">
				The consortium reflects the full path from security research to company-facing guidance.
				DistriNet contributes academic depth in secure software engineering, Sirris brings
				industry-facing support and practical translation, and VLAIO enables applied impact through
				public innovation funding.
			</p>
			<div class="mt-10 grid gap-6 lg:grid-cols-3">
				{#each partners as partner}
					<article class="surface-card flex h-full flex-col">
						<div class="flex items-center justify-between gap-4">
							<span class="tag">{partner.role}</span>
							<img
								alt={`${partner.name} logo`}
								class="max-h-16 object-contain"
								src={partner.image}
							/>
						</div>

						<h3 class="mt-6 text-2xl font-semibold text-slate-950">{partner.name}</h3>
						<p class="copy mt-4 flex-1">{partner.copy}</p>

						<div class="mt-6 space-y-3">
							<a class="link-arrow" href={partner.href} rel="noreferrer" target="_blank">
								Visit organization
							</a>
							{#if partner.contactHref}
								<a class="link-arrow" href={partner.contactHref} rel="noreferrer" target="_blank">
									Contact {partner.contactLabel}
								</a>
							{/if}
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
