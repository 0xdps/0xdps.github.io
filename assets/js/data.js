// Site data in JSON format for easy management
const siteData = {
	personal: {
		name: "Devendra Pratap Singh",
		title: "Software Engineer / Engineering Manager • Backend • System Design",
		logo: "DPS",
		tagline: "I build scalable systems & explain them clearly.",
		description:
			"Engineer focused on backend systems, cloud migrations, and developer-friendly documentation. I prefer pragmatic trade-offs and clean architecture.",
		location: "Based in India • Vegetarian • Loves clear diagrams & concise explanations",
		email: "dps.manit@gmail.com",
		phone: "+91-9424475996",
		resumeUrl: "./Devendra_Pratap_Singh_Resume.pdf",
	},

	about: {
		title: "About Me",
		subtitle: "Building scalable systems with clean architecture",
		description: [
			"I have 9+ years of experience in backend development, system design, and cloud migrations. My work focuses on building reliable, maintainable systems that scale for real-world traffic.",
			"I emphasize pragmatic trade-offs, clear documentation, and developer experience. I aim to deliver robust solutions and improve engineering processes across teams.",
			"Outside of work I contribute to side projects, explore new technologies, and mentor engineers through mock interviews and 1:1 sessions.",
		],
		technologies: [
			"Java",
			"Python",
			"Go",
			"Node.js",
			"Spring Boot",
			"Django",
			"PostgreSQL",
			"Redis",
			"Kafka",
			"Docker",
			"Kubernetes",
			"GCP",
			"AWS",
		],
		interests: ["System Design", "Microservices", "Performance", "DevOps", "Cloud Migrations", "Observability"],
	},

	services: {
		title: "Services I offer on Topmate",
		subtitle: "Hand-picked calls to help you move faster — technical, interview-focused, and quick doubt resolution.",
		topmateUrl: "https://topmate.io/devendrapratap02",
		offerings: [
			{
				icon: "MI",
				title: "Mock Interviews (60 min)",
				description:
					"Live, structured mock interviews with feedback — system design rounds, backend, and Java/Python deep dives. Includes written notes and improvement plan.",
			},
			{
				icon: "1-1",
				title: "One-on-One Mentorship (30/60 min)",
				description:
					"Focused sessions for career guidance, system design walkthroughs, and code review with actionable suggestions.",
			},
			{
				icon: "QD",
				title: "Quick Doubt Call (15–20 min)",
				description:
					"Short, focused calls to clear a single problem — debugging help, architecture questions, interview doubt clarifications.",
			},
		],
	},

	projects: {
		title: "Featured Projects",
		subtitle: "A selection of projects showcasing system design and engineering skills",
		items: [
			{
				title: "Scalable Feed Generation System",
				technologies: ["Java", "Redis", "Kafka"],
				description:
					"Built a high-throughput feed generation system handling 10M+ daily requests. Implemented real-time ranking algorithms, distributed caching, and event-driven architecture to ensure sub-200ms response times.",
				achievements: "60% reduction in latency, 5x increase in throughput, zero-downtime deployments",
			},
			{
				title: "Cloud Migration & NFT Platform Re-architecture",
				technologies: ["GCP", "Postgres", "Background Workers"],
				description:
					"Led cloud migration from AWS to GCP and re-architected an NFT platform to use the database as the primary source of truth with background synchronization for blockchain data.",
				achievements:
					"Reduced transaction times from minutes to seconds; implemented secure secret management with GCP Secret Manager",
			},
			{
				title: "Real-time Analytics Pipeline",
				technologies: ["Python", "Apache Spark", "ClickHouse"],
				description:
					"Developed a real-time analytics pipeline handling TBs of daily data with optimized time-series aggregation and automated alerting.",
				achievements: "Reduced analytics latency from hours to minutes; maintained 99.9% data accuracy",
			},
		],
	},

	experience: {
		title: "Professional Experience",
		subtitle: "Building scalable systems and leading technical initiatives",
		items: [
			{
				role: "Engineering Manager",
				company: "Faze Technologies (Official Cricket NFT Provider)",
				period: "April 2024 - Present",
				technologies: ["GCP", "Postgres", "Background Workers", "Secret Manager"],
				achievements: [
					"Led migration from AWS to GCP improving scalability and cost efficiency",
					"Re-architected system to decouple blockchain dependency, making DB the source of truth and implementing background sync for NFTs and funds",
					"Designed and implemented an accounting system to track user transactions, platform revenue and fees",
					"Integrated GCP Secret Manager for secure handling of configuration and secrets",
				],
			},
			{
				role: "Senior Software Engineer",
				company: "Zynga Gaming",
				period: "Sept 2018 - July 2023",
				technologies: ["C++/JS tooling", "Backend automation", "Performance Optimization"],
				achievements: [
					"Optimized in-game memory usage drastically via asset data refactor",
					"Reduced pre-release execution times from ~2 hours to 15 minutes through process improvements",
					"Designed dynamic modular game-settings and automation for reskin feature",
					"Built systems to run custom scripts during game load without new releases",
				],
			},
			{
				role: "Software Engineer",
				company: "BookMyShow",
				period: "Nov 2016 - Sept 2018",
				technologies: ["Java", "LDAP", "Middleware"],
				achievements: [
					"Engineered an Identity Access Management (IAM) tool with LDAP",
					"Developed a Universal Access Portal for internal projects",
					"Built a real-time cinema health monitoring tool",
					"Led development of a Queue Manager middleware with monitoring",
				],
			},
			{
				role: "Software Engineer",
				company: "Incture Technologies",
				period: "July 2015 - Oct 2016",
				technologies: ["Integration", "Mobile services", "SAP"],
				achievements: [
					"Contributed to systems for seamless data access from SAP to non-SAP backends",
					"Worked on mobile client for SAP PO monitoring and HR Admin module features",
				],
			},
		],
	},

	sideProjects: {
		title: "Side Projects",
		subtitle: "Independent explorations, utilities & experiments",
		items: [
			{
				name: "Object Data Model for Google Sheets",
				year: 2018,
				description:
					"Python library to fetch Google Sheets data and convert it into class objects resembling Django ORM models.",
				technologies: ["Python", "Google Sheets API"],
			},
			{
				name: "Windows Phone App for GeeksforGeeks",
				year: 2014,
				description: "Mobile client providing GeeksforGeeks content with offline access (legacy project).",
				technologies: ["C#", "Windows Phone"],
			},
			{
				name: "Facebook Logout Script",
				year: 2013,
				description: "Browser userscript enabling instant logout using a keyboard shortcut.",
				technologies: ["JavaScript", "GreaseMonkey"],
			},
		],
	},

	education: {
		degree: "B.Tech in Computer Science and Engineering",
		institution: "National Institute of Technology, Bhopal",
		period: "2011 - 2015",
		grade: "6.4 CGPA",
	},

	skills: {
		primary: ["Java", "Python", "Go", "Node.js", "Spring Boot", "Django"],
		databases: ["PostgreSQL", "Redis", "MongoDB"],
		devops: ["Docker", "Kubernetes", "GCP", "AWS"],
		others: ["Kafka", "Observability", "Performance Tuning"],
	},

	socialLinks: [
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/devendrapratap",
			icon: "linkedin",
		},
		{
			name: "GitHub",
			url: "https://github.com/devendrapratap02",
			icon: "github",
		},
		{
			name: "Twitter",
			url: "https://twitter.com/_devendrapratap",
			icon: "twitter",
		},
		{
			name: "Medium",
			url: "https://medium.com/@devendrapratap02",
			icon: "medium",
		},
	],
};
