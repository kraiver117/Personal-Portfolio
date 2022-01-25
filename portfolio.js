import emoji from "react-easy-emoji";

export const greetings = {
	name: "Ángel Gutiérrez",
	title: "Hi, I'm Ángel Gutierrez",
	description:
		"A passionate Frontend Web Developer having 2+ years of experience building Web applications with JavaScript / HTML / CSS / Reactjs / Nodejs  and some other cool libraries and frameworks. Looking to collaborate with a company or project to face new challenges and gain more experience.",
	resumeLink: "https://drive.google.com/drive/folders/1_lQ91EwhjUVhnwk2rJQDYffhg9eDwnHz",
};

export const openSource = {
	githubUserName: "kraiver117",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/joseangel.gtz/",
	instagram: "https://www.instagram.com/joseangel.gtz/",
	twitter: "https://twitter.com/Kraiver117",
	github: "https://github.com/kraiver117",
	linkedin: "https://www.linkedin.com/in/jos%C3%A9-%C3%A1ngel-guti%C3%A9rrez-ramos-073883116/"
};

export const skillsSection = {
	title: "What I do",
	subTitle:
	"Frontend Web Developer who wants to create quality, fast, robust and really cool apps",
	skills: [
		emoji(
			"💻 Develop highly interactive Front end / User Interfaces for your web."
		),
		emoji(
			"💻 Build declarative user interfaces for the web using React."
		),
		emoji(
			"💻 Implement new JS standards in the creation of a web app to handle remote data, consume APIs and use unit tests."
		),
		emoji(
			"💻 Use CLI, manage servers, develop and publish APIs, configure databases creating communication between the application, database and server."
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		}
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "60",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Instituto Tecnológico Superior de Puruándiro",
		subHeader: "Information and Comunication Technologies Engineering",
		duration: "February 2015 - October 2020",
		desc: "I completed an engineering degree in ICT where I acquired the following skills:",
		descBullets: [
			"Design, develop and maintain database systems ensuring the integrity, availability and confidentiality of stored information.",
			"Develop and implement information systems for control and decision making using methodologies based on international standards.",
			"Analyze, design and program applications for mobile devices and computers, innovating, updating and sharing knowledge.",
			"Work efficiently in teams that establish goals, plans, tasks and meet specific deadlines."
		],
	},
	{
		schoolName: "Bedu",
		subHeader: "Full Stack Javascript Developer",
		duration: "November 2020 - June 2021",
		desc: "Participated in a schoolarship where I acquired the following skills:",
		descBullets: [
			"Design and build from the frontend to the backend a dynamic website using HTML, CSS, and Javascript",
			"Implement new JS standards in the creation of a web app to handle remote data, consume APIs and use unit tests.",
			"Build declarative user interfaces for the web using React.",
			"Use CLI, manage servers, develop and publish APIs, configure databases creating communication between the application, database and server. Also giving maintenance to the application."
		],
	}
];

export const experience = [
	{
		role: "Full Stack Developer",
		company: "Freelancer",
		companylogo: "/img/icons/common/JA.jpg",
		date: "Jun 2018 – Present",
		desc: "I've worked building different projects such as e-commerce, admin panels, and customized software in order to help clients to have their software solution implemented, using Full Stack Technologies to implement both Front-End and Back-End infrastructure."
	},
	{
		role: "Full Stack Developer - Bootcamp",
		company: "Scio Consulting",
		companylogo: "/img/icons/common/scio.png",
		date: "Feb 2020 – Jun 2020",
		desc: "I participated in a software development Bootcamp at Scio Consulting, where I learned some of the most used technologies and tools of the moment by creating projects using Angular JS, React JS, Node JS, Bootstrap, Javascript, Node.js, Git, Git Hub, MVC, Scrum, JSON, HTML, CSS, SQL & NoSQL.",
	},
	{
		role: "Full Stack Javascript Developer",
		company: "Bedu",
		companylogo: "/img/icons/common/bedu.png",
		date: "Nov 2020 – Jun 2021",
		descBullets: [
			"Ecommerce project created using MERN Stack (MongoDB, Express, React, Node)",
			"Use CLI, manage servers, develop and publish APIs, configure databases creating communication between the application, database and server."
		]
	},
];

export const projects = [
	{
		name: "Cava Don Carlos",
		desc: "Ecommerce dedicated to the sale of alcoholic beverages.",
		technologies: ["React", "Redux", "Typescript", "Node.js", "Express", "MongoDB"],
		link: "https://cavadoncarlos-192b0.web.app/",
	},
	{
		name: "Bedu Store",
		desc: "Ecommerce dedicated to sell Bedu products, implementing paypal payment methods and email service.",
		technologies: ["React", "Redux", "Javascript", "Node.js", "Express", "MongoDB"],
		github: "https://github.com/kraiver117/Bedu-Store",
		link: "https://bedu-store.netlify.app/"
	},
	{
		name: "Natours",
		desc: "Really cool landing page design using HTML, CSS & Javascript",
		technologies: ["HTML", "CSS", "Javascript"],
		github: "https://github.com/kraiver117/Natours-landing-page",
		link: "https://kraiver117.github.io/Natours-landing-page/",
	},
	{
		name: "Pokedex",
		desc: "Pokedex made using vue.js and SASS",
		technologies: ["Vue", "SASS", "Javascript", "HTML", "CSS"],
		github: "https://github.com/kraiver117/pokedex-vue-app",
		link: "https://pokedex-app-kraiver.netlify.app/"
	},
	{
		name: "Expense Tracker",
		desc: "Expense Tracker app",
		technologies: ["React", "Context", "Javascript"],
		github: "https://github.com/kraiver117/expense-tracker-challenge"
	}
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
