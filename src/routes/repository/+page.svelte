<script lang="ts">
	type ResourceItem = {
		title: string;
		description: string;
		href: string;
		actionLabel: string;
		kind: string;
		language?: string;
	};

	const featuredResources: ResourceItem[] = [
		{
			title: 'Building Secure Applications in the Age of AI',
			description:
				'A concise presentation on how AI-assisted development can introduce insecure code, risky dependencies and unsafe workflows, and what teams need to do to keep secure software practices intact.',
			href: '/content/2026-01-21_Writing_Secure_Software_in_the_Age_of_AI.pdf',
			actionLabel: 'Download PDF',
			kind: 'Featured deck'
		},
		{
			title: 'Practical Comparison of Threat Modeling Tools and Approaches for Small Teams',
			description:
				'A whitepaper exploring several threat modeling approaches and the trade-offs that matter when smaller teams need an approach that is both lightweight and useful.',
			href: '/content/Threat_Modeling_Tools_Whitepaper.pdf',
			actionLabel: 'Download whitepaper',
			kind: 'Whitepaper'
		},
		{
			title: 'Dependency Tracking and SBOM: Strengthening Software Supply Chain Security',
			description:
				'A whitepaper on software supply-chain visibility, SBOM benefits, adoption challenges and practical guidance for stronger dependency governance.',
			href: '/content/SBOM_Whitepaper.pdf',
			actionLabel: 'Download whitepaper',
			kind: 'Whitepaper'
		},
		{
			title: 'Threat Modeling Workshop Starter Kit',
			description:
				'A starter kit for teams that want practical assets for running threat modeling activities and building a stronger security mindset.',
			href: '/content/TM_start-up_kit.zip',
			actionLabel: 'Download ZIP',
			kind: 'Starter kit'
		}
	];

	const resourceSections: { title: string; description: string; items: ResourceItem[] }[] = [
		{
			title: 'Articles and online reading.',
			description:
				'External articles and explainers that expand on secure software development, SecDevOps, API security and maturity models.',
			items: [
				{
					title: "Zeven essentiele principes voor het schrijven van veilige programma's",
					description:
						'A Dutch article explaining why secure coding practices need to be embedded early in development rather than added as a late-stage correction.',
					href: 'https://cybersecurity-bites.be/cybersecuritybydesign/zeven-essentiele-principes-voor-het-schrijven-van-veilige-programmas/',
					actionLabel: 'Read online',
					kind: 'Article',
					language: 'Dutch'
				},
				{
					title: 'Softwarebeveiliging meten met OWASP SAMM',
					description:
						'A Dutch introduction to OWASP SAMM as a practical model for assessing and improving software security maturity.',
					href: 'https://cybersecurity-bites.be/cybersecuritybydesign/softwarebeveiliging-meten-met-owasp-samm/',
					actionLabel: 'Read online',
					kind: 'Article',
					language: 'Dutch'
				},
				{
					title: 'Strategieen voor softwarebeveiliging in de ontwikkelingscyclus',
					description:
						'A Dutch article comparing DevOpsSec, DevSecOps and SecDevOps approaches and the trade-offs between them.',
					href: 'https://cybersecurity-bites.be/cybersecuritybydesign/strategieen-voor-softwarebeveiliging-in-de-ontwikkelingscyclus/',
					actionLabel: 'Read online',
					kind: 'Article',
					language: 'Dutch'
				},
				{
					title: 'SecDevOps: beveiliging als cruciaal deel van het ontwikkelingsproces',
					description:
						'A Dutch article on treating security as a foundational design concern rather than a late addition to the delivery pipeline.',
					href: 'https://cybersecurity-bites.be/cybersecuritybydesign/secdevops-beveiliging-als-cruciaal-deel-van-het-ontwikkelingsproces/',
					actionLabel: 'Read online',
					kind: 'Article',
					language: 'Dutch'
				},
				{
					title: 'De 4 belangrijkste SecDevOps-uitdagingen aangepakt',
					description:
						'A Dutch article on common organizational and tooling challenges that arise when teams adopt SecDevOps practices.',
					href: 'https://cybersecurity-bites.be/cybersecuritybydesign/de-4-belangrijkste-secdevops-uitdagingen-aangepakt/',
					actionLabel: 'Read online',
					kind: 'Article',
					language: 'Dutch'
				},
				{
					title: 'Waarom API-beveiliging essentieel is voor elke organisatie',
					description:
						'A Dutch article explaining why API security deserves focused attention in modern application portfolios.',
					href: 'https://cybersecurity-bites.be/ict-beheer/waarom-api-beveiliging-essentieel-is-voor-elke-organisatie/',
					actionLabel: 'Read online',
					kind: 'Article',
					language: 'Dutch'
				},
				{
					title: 'Hoe stel je een API-beveiligingsplan op?',
					description:
						'A Dutch article describing how to create a structured API security plan that fits broader secure software practices.',
					href: 'https://cybersecurity-bites.be/cyberwijs/hoe-stel-je-een-api-beveiligingsplan-op/',
					actionLabel: 'Read online',
					kind: 'Article',
					language: 'Dutch'
				},
				{
					title: "Concrete maatregelen voor het beveiligen van je API's",
					description:
						'A Dutch article with practical technical measures such as access control, validation, encrypted communication and testing for API security.',
					href: 'https://cybersecurity-bites.be/cybersecuritybydesign/concrete-maatregelen-voor-het-beveiligen-van-je-apis/',
					actionLabel: 'Read online',
					kind: 'Article',
					language: 'Dutch'
				}
			]
		},
		{
			title: 'Presentations and downloadable materials',
			description:
				'Slide decks, whitepapers, workshop materials and practical resources produced during the project.',
			items: [
				{
					title: 'By-design Cybersecure Digital Products',
					description:
						'An introduction to the SECDES project and the case for integrating security into architecture, testing and governance practices from the start.',
					href: '/content/2024-05-30_IntroToSECDES.pdf',
					actionLabel: 'Download PDF',
					kind: 'Presentation'
				},
				{
					title: 'An Introduction to Threat Modeling',
					description:
						'A presentation explaining the role of threat modeling in the secure software development lifecycle and why it matters for SaaS teams.',
					href: '/content/2024-09-13_Intro_to_Threat%20modeling.pdf',
					actionLabel: 'Download PDF',
					kind: 'Presentation'
				},
				{
					title: 'Leveraging Product Management to Shift Left in Small SaaS Teams',
					description:
						'A deck on how product leaders can help integrate security concerns earlier by understanding customer risk, value and delivery trade-offs.',
					href: 'https://www.slideshare.net/slideshow/leveraging-product-management-to-shift-left-in-small-saas-teams/272491879',
					actionLabel: 'View on SlideShare',
					kind: 'Presentation'
				},
				{
					title: "Keeping pace with OAuth's evolving security practices",
					description:
						'A practical deck covering current OAuth security recommendations and the direction of the standard.',
					href: '/content/2024-10-18_Keeping_Pace_with_OAuth.pdf',
					actionLabel: 'Download PDF',
					kind: 'Presentation'
				},
				{
					title: 'Automated Security Testing',
					description:
						'A presentation on weaving static analysis, dynamic testing and scanning into delivery pipelines so security checks become repeatable and useful.',
					href: '/content/2024-11-14_Aikido.pdf',
					actionLabel: 'Download PDF',
					kind: 'Presentation'
				},
				{
					title: 'Software supply chain security, NIS2 and SBOM',
					description:
						'A deck connecting supply-chain incidents, new regulations and the role of SBOMs in improving visibility and governance.',
					href: '/content/2024-11-14_SBOM.pdf',
					actionLabel: 'Download PDF',
					kind: 'Presentation'
				},
				{
					title: 'An Overview of Threat Modeling Tools',
					description:
						'A presentation comparing what threat modeling tools can help with in practice and how to evaluate them as a smaller team.',
					href: '/content/2025-04-24_TM_tooling.pdf',
					actionLabel: 'Download PDF',
					kind: 'Presentation'
				},
				{
					title: 'Security and Privacy Architecture through Risk-driven Threat Assessment',
					description:
						'A presentation introducing SPARTA and explaining how risk-driven threat assessment can support reuse and prioritization in security architecture work.',
					href: '/content/2025-04-24_Sparta_demo.pdf',
					actionLabel: 'Download PDF',
					kind: 'Presentation'
				},
				{
					title: 'OpenAPI as a Security Tool',
					description:
						'A presentation on using OpenAPI specifications for security review, testing, automation and runtime support.',
					href: '/content/2025-05-15_OpenAPI_security.pdf',
					actionLabel: 'Download PDF',
					kind: 'Presentation'
				},
				{
					title: 'Introduction to SAMM',
					description:
						'A practical introduction to the OWASP SAMM framework and how it can guide targeted security improvement work.',
					href: '/content/2025-09-11_Introduction_to_SAMM.pdf',
					actionLabel: 'Download PDF',
					kind: 'Presentation'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Repository | Security by Design</title>
	<meta
		name="description"
		content="Browse SECDES deliverables, including whitepapers, starter kits, articles and presentations on secure software development."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="section" style="padding-top: 0; padding-bottom: 0;">
	<div class="site-container">
		<div class="surface-panel p-8 sm:p-10 lg:p-12">
			<h1 class="page-title mt-6 max-w-4xl">Project Resources and Deliverables</h1>
			<p class="lead mt-6 max-w-3xl">
				The repository brings together the outputs of the SECDES project: practical presentations,
				whitepapers, starter kits and external articles. If you want recordings of past webinars,
				you can find them on the media page.
			</p>

			<div class="mt-10 grid gap-6 lg:grid-cols-2">
				{#each featuredResources as resource}
					<article class="surface-card">
						<div class="flex flex-wrap items-center gap-3">
							<span class="tag">{resource.kind}</span>
							{#if resource.language}
								<span class="tag">{resource.language}</span>
							{/if}
						</div>
						<h3 class="mt-5 text-2xl font-semibold text-slate-950">{resource.title}</h3>
						<p class="copy mt-4">{resource.description}</p>
						<a
							class="link-arrow mt-6"
							href={resource.href}
							rel={resource.href.startsWith('http') ? 'noreferrer' : undefined}
							target={resource.href.startsWith('http') ? '_blank' : undefined}
						>
							{resource.actionLabel}
						</a>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="site-container space-y-16">
		{#each resourceSections as section}
			<div>
				<div class="max-w-3xl">
					<h2 class="section-title">{section.title}</h2>
					<p class="copy mt-4">{section.description}</p>
				</div>

				<div class="mt-8 grid gap-6 lg:grid-cols-2">
					{#each section.items as item}
						<article class="surface-card">
							<div class="flex flex-wrap items-center gap-3">
								<span class="tag">{item.kind}</span>
								{#if item.language}
									<span class="tag">{item.language}</span>
								{/if}
							</div>
							<h3 class="mt-5 text-2xl font-semibold text-slate-950">{item.title}</h3>
							<p class="copy mt-4">{item.description}</p>
							<a
								class="link-arrow mt-6"
								href={item.href}
								rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
								target={item.href.startsWith('http') ? '_blank' : undefined}
							>
								{item.actionLabel}
							</a>
						</article>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
