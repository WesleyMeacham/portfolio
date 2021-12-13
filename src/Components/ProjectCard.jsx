import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from "@mui/material";

// title, description, image, projectURL, date

// const title = "Retro Draw";
// const description = "Generic Description here";
// const date = "June 2021";
// const projectImage = "/images/retrodraw.png";
// const projectURL = "https://inspiring-bartik-0a2b84.netlify.app/";

const ProjectCard = (props) => {
	const { title, description, date, projectImage, projectURL } = props;
	return (
		<>
			<Card sx={{ maxWidth: 350 }}>
				<CardMedia
					component="img"
					// height="37"
					image={projectImage}
					alt={`${title} Website`}
				/>
				<CardContent>
					<p> Completed: {date} </p>
					<p>{description}</p>
				</CardContent>
				<CardActions>
					<a href={projectURL} style={{ textDecoration: "none" }}>
						<Button>{title} Project</Button>
					</a>
				</CardActions>
			</Card>
		</>
	);
};

export default ProjectCard;
