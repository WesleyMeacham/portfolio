// import { ExpandMore } from "@mui/icons-material";
// import {
// 	Accordion,
// 	AccordionDetails,
// 	AccordionSummary,
// 	Typography,
// } from "@mui/material";
import { Box } from "@mui/system";
import ProjectDetails from "./ProjectDetails";

const Portfolio = () => {
	return (
		<>
			<Box sx={{ marginTop: 15, marginBottom: 5 }}>
				At the moment the accordion dropdown below contains links to projects
				that I completed with Fullstack Academy. I am also currently working on
				a number of personal projects as well as some of the coding challenges
				from Frnotend Mentor. Time permitting as I complete these projects this
				page will be updated to include them as well. This portfolio site was
				built in React using Material UI for all of the styling. This site was
				my first experience with Material UI and I'm sure that it's look will
				evolve as I continue to learn.
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "column", md: "row" },
					flexWrap: "wrap",
					justifyContent: "space-evenly",
					alignItems: "center",
				}}
			>
				<ProjectDetails />
			</Box>

			{/* Had originally planned to have Accordian Dropdowns for different categories of projects. The breakdown was going to be Fullstack Academy, Frontend Mentor and Personal Projects to start with. At this moment everything I have is for Fullstack Academy. The Accordion works but it looks a little silly with there just being the one of them. So for the time being it looks better with just a page full of all the Fullstack projects. The way I have this set up though, it should be easy enough to change how they're orginized at a later time.   */}

			{/* <Accordion>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography>Projects from Fullstack Academy</Typography>
				</AccordionSummary>
				<AccordionDetails
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "column", md: "row" },
						justifyContent: "space-evenly",
						alignItems: "center",
					}}
				>
					<ProjectDetails />
				</AccordionDetails>
			</Accordion> */}
		</>
	);
};

export default Portfolio;
