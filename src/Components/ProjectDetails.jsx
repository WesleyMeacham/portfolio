import ProjectCard from "./ProjectCard";

const arrayOfProjects = [
	{
		title: "Retro Draw",
		description:
			"Pixal drawing app built with HTML5, JavaScript, CSS and Flexbox.",
		date: "June 2021",
		projectImage: "/images/retrodraw.png",
		projectURL: "https://inspiring-bartik-0a2b84.netlify.app/",
	},
	{
		title: "Calculator",
		description:
			"Simple calculator designed with HTML5, JavaScript, CSS and Grid.",
		date: "June 2021",
		projectImage: "/images/calculator.png",
		projectURL: "https://laughing-pare-a07254.netlify.app/",
	},
	{
		title: "The Arcade",
		description:
			"An Arcade Page with three games, Whack a Mole, Tic Toc Toe and Connect Four. The page is built using HTML5, JavaScript CSS and Flexbox. The page design is admittedly lacking but the primary focus of this project was using JavaScript to create the functionality for each of the three games.",
		date: "July 2021",
		projectImage: "/images/arcade.png",
		projectURL: "https://agitated-volhard-6da15c.netlify.app/connect.html",
	},
	{
		title: "User Hub",
		description:
			"This project used async functions to retreive and display user posts and comments.",
		date: "July 2021",
		projectImage: "/images/userhub.png",
		projectURL: "https://cranky-yonath-9b5e28.netlify.app/",
	},
	{
		title: "The Art Collector",
		description:
			"This project consumes the API from the Harvard Museum of Art. There is a search function that allows you to do keyword searches within the museum's classification system as well as by century.",
		date: "July	2021",
		projectImage: "/images/artcollector.png",
		projectURL: "https://clever-pare-b92c8b.netlify.app/",
	},
	{
		title: "User Hub React",
		description:
			"I Believe this might have been our first React App. This is again consuming an API that was provided to us. The log in/log out function is really primative and really only serves to switch between the fake users in the database. We then loop over an array of items to display either fake posts or fake todo lists.",
		date: "July 2021",
		projectImage: "/images/userhubreact.png",
		projectURL: "https://stupefied-minsky-e420ac.netlify.app/",
	},
	{
		title: "Retro Draw React",
		description:
			"The second version of the pixal drawing game. The only major difference is that this one was built using React. ",
		date: "August 2021",
		projectImage: "/images/retrodrawreact.png",
		projectURL: "https://vigilant-brahmagupta-b9d6e7.netlify.app/",
	},
	{
		title: "Art Collector React",
		description:
			"Like the previous version this consumes the API from the Havard Museum of Art. This version was built with React. ",
		date: "August 2021",
		projectImage: "/images/artcollectorreact.png",
		projectURL: "https://vigorous-darwin-bd81c4.netlify.app/",
	},
	{
		title: "Stranger's Things",
		description:
			"This was described in the course as a Craigslist Clone. You are able to create a user account, and as a user you are able to post items for sale and send messages to other users who have posted items for sale.",
		date: "August 2021",
		projectImage: "/images/strangersthings.png",
		projectURL: "https://xenodochial-albattani-daf843.netlify.app/login",
	},
	// Templat for adding Projects above.
	// {
	//     title: "",
	//     description: "",
	//     date: "",
	//     projectImage: "",
	//     projectURL: "",
	// },
];

const ProjectDetails = () => {
	return (
		<>
			{arrayOfProjects.map((project) => {
				return (
					<ProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						date={project.date}
						projectImage={project.projectImage}
						projectURL={project.projectURL}
					/>
				);
			})}
		</>
	);
};

export default ProjectDetails;
