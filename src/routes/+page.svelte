<script lang="ts">
	const projectSignals = [
		{
			label: 'Audience',
			value: 'SaaS SMEs',
			copy: 'Built for smaller software teams that need practical security improvements, not heavyweight process.'
		},
		{
			label: 'Approach',
			value: 'Applied research',
			copy: 'We translate strong security engineering practices into formats teams can actually adopt.'
		},
		{
			label: 'Coverage',
			value: '3 workstreams',
			copy: 'The project combines knowledge transfer, practical tooling, and security reporting.'
		}
	];

	const focusAreas = [
		{
			id: '01',
			title: 'Knowledge buildup and translation',
			copy: 'Threat modeling, application security engineering, and secure software development are often documented for large organizations, not lean SaaS teams. SECDES translates those methods into practical guidance, examples, and case studies that fit smaller product organizations.'
		},
		{
			id: '02',
			title: 'Practical tooling',
			copy: 'The project compares approaches, explains trade-offs, and highlights tools that can support secure design, testing, and verification in realistic SaaS environments. The goal is to reduce adoption friction and help teams make informed tooling choices.'
		},
		{
			id: '03',
			title: 'Documentation and reporting',
			copy: 'Security work only becomes valuable to customers, auditors, and stakeholders when teams can explain it clearly. SECDES helps companies structure design decisions, evidence, and reporting so they can communicate maturity with confidence.'
		}
	];

	const outcomes = [
		{
			title: 'Design with security in mind from the start',
			copy: 'Learn how to think about architecture, trust boundaries, and risks early enough to influence product decisions.'
		},
		{
			title: 'Choose tools that fit your context',
			copy: 'Understand where scanning, testing, and threat modeling tools help, and where they create unnecessary friction.'
		},
		{
			title: 'Prepare for customer and regulatory scrutiny',
			copy: 'Build the reporting discipline needed for conversations around NIS2, supply chain security, and secure development expectations.'
		},
		{
			title: 'Move faster with stronger confidence',
			copy: 'Security by design should support delivery, not stall it. The project focuses on approaches that work for smaller teams.'
		}
	];

	const topicHighlights = [
		'Threat modeling',
		'Secure SDLC',
		'API security',
		'Security testing',
		'SBOM and supply chain',
		'Security reporting'
	];
</script>

<svelte:head>
	<title>SECDES | Practical Security-by-Design Guidance</title>
	<meta
		name="description"
		content="SECDES is a collective research project by DistriNet and Sirris that helps SaaS companies adopt practical security-by-design practices."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="section" style="padding-top: 0; padding-bottom: 0;">
	<div class="site-container">
		<div class="surface-panel p-8 sm:p-10 lg:p-12">
			<div class="grid gap-8 xl:grid-cols-[minmax(0,1.4fr)_20rem] xl:items-start" style="padding-top: 1rem; padding-bottom:3rem;">
				<div>
					<h1 class="display-title max-w-4xl">Practical Security-by-Design Guidance for SaaS Teams</h1>
					<p class="lead mt-6 max-w-3xl">
						SECDES helps small and midsize software companies strengthen secure software development
						without slowing down delivery. Companies building Software-as-a-Service products face a
						difficult mix of architectural complexity, cloud deployment models, third-party
						integrations, and continuous release pressure, which makes it easy for security to be
						postponed until late in development.
					</p>
					<p class="copy mt-4 max-w-3xl">
						At the same time, customers, partners, and regulators increasingly expect clear evidence
						that software is designed, tested, and maintained securely. SECDES turns research in secure
						software engineering into events, materials, tooling guidance, and reporting practices that
						smaller teams can actually use.
					</p>

					<div class="mt-8 flex flex-wrap gap-4">
						<a class="button-primary" href="/repository">Browse project resources</a>
						<a class="button-secondary" href="/agenda">Explore the event archive</a>
					</div>
				</div>

				<div class="grid gap-4 xl:pt-2">
					{#each projectSignals as signal}
						<div class="metric">
							<p class="metric-label">{signal.label}</p>
							<p class="metric-value">{signal.value}</p>
							<p class="metric-copy">{signal.copy}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="mt-10 grid gap-6 lg:grid-cols-2">
				<div class="surface-panel p-8">
					<p class="kicker">Project scope</p>
					<h2 class="section-title mt-4">Helping companies build security into product decisions.</h2>
					<p class="copy mt-4">
						Companies that develop Software-as-a-Service solutions deal with complex architectures,
						integrations, and cloud-native deployments. Those realities make security harder to reason
						about and easier to postpone. SECDES addresses that gap by lowering the barrier to secure
						software design, testing, and evidence gathering.
					</p>
					<p class="copy mt-4">
						Customers are also more alert to software risk, data protection, and supply-chain
						exposure, while frameworks such as NIS2 and the Cyber Resilience Act raise the bar for
						showing how products are secured. For small and midsize companies, that creates a clear
						gap between what is expected and what is feasible with limited in-house security
						expertise.
					</p>
					<p class="copy mt-4">
						The project is especially relevant for software companies in Flanders that want stronger
						application security practices but do not have large dedicated security teams.
					</p>
				</div>

				<div class="surface-panel p-8">
					<p class="kicker">Core topics</p>
					<h2 class="section-title mt-4">A focused program around secure software development.</h2>
					<div class="mt-6 flex flex-wrap gap-3">
						{#each topicHighlights as topic}
							<span class="tag">{topic}</span>
						{/each}
					</div>
					<p class="copy mt-6">
						SECDES makes advanced methods from security engineering more accessible and more
						practical. The project focuses on lightweight, cost-effective approaches that help
						companies design, test, and explain the security of their products in ways that fit real
						engineering work.
					</p>
					<p class="copy mt-4">
						The goal is not only better protection. It is also stronger competitiveness, faster
						time-to-market, and more credible conversations with customers, partners, and regulators.
					</p>
				</div>
			</div>

			<div class="mt-10 surface-panel p-8 sm:p-10 lg:p-12">
				<div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
					<div>
						<p class="kicker">Why this matters now</p>
						<h2 class="section-title mt-4">
							Smaller software teams are under growing pressure to show how security is built into the
							product.
						</h2>
						<p class="copy mt-4">
							SECDES exists to help teams respond to rising customer expectations, stronger regulatory
							attention, and the practical reality of limited internal security capacity.
						</p>
					</div>

					<div class="grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-3 md:border-t-0 md:pt-0">
						<div class="border-slate-200 md:border-l md:pl-6">
							<h3 class="text-xl font-semibold text-slate-950">Security expectations are rising</h3>
							<p class="copy mt-3">
								Customers increasingly ask for evidence that software is built and operated with
								strong security practices. Many SaaS companies face that expectation before they have
								the internal structure to answer it well.
							</p>
						</div>

						<div class="border-slate-200 md:border-l md:pl-6">
							<h3 class="text-xl font-semibold text-slate-950">Regulation adds pressure</h3>
							<p class="copy mt-3">
								Frameworks such as NIS2 and the Cyber Resilience Act have made secure development,
								supply-chain awareness, and security evidence more visible business concerns.
							</p>
						</div>

						<div class="border-slate-200 md:border-l md:pl-6">
							<h3 class="text-xl font-semibold text-slate-950">Practical answers are needed</h3>
							<p class="copy mt-3">
								SECDES focuses on approaches that respect limited time, limited staff, and the need to
								keep shipping product while steadily improving security maturity.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-8 lg:py-10">
	<div class="site-container">
		<div class="max-w-3xl">
			<h2 class="section-title">Three workstreams that connect research to implementation.</h2>
			<p class="copy mt-4">
				The project covers the full path from insight to action: understanding secure development
				practices, selecting effective tools, and documenting decisions so teams can demonstrate
				security maturity.
			</p>
		</div>

		<div class="mt-8 grid gap-6 lg:grid-cols-3">
			{#each focusAreas as area}
				<article class="surface-card">
					<div class="flex items-center gap-4">
						<span class="number-chip">{area.id}</span>
						<h3 class="text-xl font-semibold text-slate-950">{area.title}</h3>
					</div>
					<p class="copy mt-5">{area.copy}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="py-8 lg:py-10">
	<div class="site-container">
		<div class="surface-panel p-8 sm:p-10 lg:p-12">
			<div class="max-w-3xl">
				<p class="kicker">What participants get</p>
				<h2 class="section-title mt-4">Practical outcomes for participating teams.</h2>
			</div>

			<div class="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
				{#each outcomes as outcome}
					<div class="surface-card">
						<h3 class="text-xl font-semibold text-slate-950">{outcome.title}</h3>
						<p class="copy mt-4">{outcome.copy}</p>
					</div>
				{/each}
			</div>

			<div class="mt-10 grid gap-8 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
				<div>
					<p class="kicker">Next steps</p>
					<h2 class="section-title mt-4">Start with the materials that fit your team today.</h2>
					<p class="copy mt-4 max-w-2xl">
						Whether you are exploring threat modeling, secure development processes, API security,
						SBOM practices, or pentesting preparation, the SECDES deliverables are designed to help
						you move from awareness to implementation.
					</p>
				</div>

				<div class="flex flex-wrap gap-4 lg:justify-end">
					<a class="button-primary" href="/repository">Open repository</a>
					<a class="button-secondary" href="/agenda">See event archive</a>
				</div>
			</div>
		</div>
	</div>
</section>
