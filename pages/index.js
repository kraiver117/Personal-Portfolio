import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Ángel Gutiérrez",
					description:
						"A passionate Frontend Web Developer and React Developer.",
					image: "https://avatars.githubusercontent.com/u/31224243?s=400&u=cfdd429fbd24bd5d1413f0864b03e111aa1672ad&v=4",
					url: "https://angel-portfolio-117.netlify.app/",
					keywords: [
						"Ángel",
						"Ángel Gutiérrez",
						"@kraiver117",
						"kraiver117",
						"Portfolio",
						"Ángel Portfolio ",
						"Ángel Gutiérrez Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"frontend developer",
						"frontend web developer",
						"react developer",
						"api rest",
						"graphql",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"redux"
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
