import {
	List,
	ListItem,
	ListItemText,
	ListSubheader,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const Home = () => {
	return (
		<div>
			<Box sx={{ marginTop: 15, marginLeft: 2, marginRight: 2 }}>
				Welcome to my site. My name is Wesley Meacham and I'm from Northwest
				Louisiana. I recently completed the Fullstack Academy course in Web
				Development and I'm currently looking for opportunities to work as a
				Junior Frontend Developer. Here you will find information from my resume
				as well as a portfolio of projects I have completed. My portfolio
				currently contains links to several of the projects from the Fullstack
				Academy course. I have also been working on some of the coding
				challenges from Frontend Mentor and in time will be adding links to
				these as well.
			</Box>
			<List>
				<ListSubheader>
					<Typography variant="h6">Education</Typography>
				</ListSubheader>
				<ListItem>
					<ListItemText
						primary="Fullstack Academy"
						secondary={
							<p>
								Completed in November of 2021, this six month Web Development
								course covered{" "}
								<strong>
									HTML, CSS, JavaScript, jQuerry, AJAX and JSON, React, Node.JS,
									Express.JS, PorstgreSQL{" "}
								</strong>{" "}
								and <strong>GitHub.</strong> Some of the software used during
								the course included VS Code, Postman. Throughout the course we
								built several projects. Most projects were completed within the
								span of a week, while some of the larger projects took two to
								three weeks. Earlier projects were single page websites built
								with HTML5, CSS, and basic JavaScript often including jQuerry.
								Later projects focused on building more complex projects in
								React, using components and manipulation of data from APIs.
								Toward the end of the course we were building fullstack
								applications. Most of the projects I completed during this
								course can be found in the <a href="/Portfolio">Portfolio</a>{" "}
								section of this site.
							</p>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Bachelor’s of Science in Psychology"
						secondary={<p>Completed in 2011 at University of Phoenix.</p>}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Associate's of General Studies"
						secondary={
							<p>Completed in 2008 at Bossier Parish Community College.</p>
						}
					/>
				</ListItem>
			</List>

			<List>
				<ListSubheader>
					<Typography variant="h6">Work History</Typography>
				</ListSubheader>
				<ListItem>
					<ListItemText
						primary="Market Coordinator - Waitr"
						secondary={
							<div>
								<p>Shreveport, LA March 2019 - July 2021</p>
								<p>
									Responsible for installation and routine maintenance of Waitr
									iPads at partner restaurants and training of restaurant staff
									on use of the Dashboard app. Responded to tech calls when
									issues were reported by restaurant partners and followed
									troubleshooting guidelines to resolve issues as quickly as
									possible. Held weekly office hours to assist new drivers.
									Distributed marketing materials and assisted with marketing
									events.
								</p>
							</div>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="English as a Second Language Teacher"
						secondary={
							<div>
								<p>Wuhan, China. September 2010 - May 2018</p>
								<p>
									I lived in China for roughly eight years. During that time I
									was a full time English Teacher at three different schools. My
									first year I was at Wuchang Experimental Primary School where
									I worked with a Chinese co-teacher and taught 5th and 6th
									grade ESL classes. When the school year ended I decided I
									wanted to try teaching in a language center. I went to New
									Dynamic Istitute where I taught for the next two years. At New
									Dynamic most of my students were working adults. A few were
									college and highschool students. While I was there I worked
									from lesson plans that were prewritten to follow a course
									which I would have to taylor to the needs of the student.
									After this I went to Hubei University of Economics (HBUE) for
									three years, where I taught ESL in a college setting. At HBUE
									I worked from textbooks and created all my own lesson plans. I
									was also responsible for tracking grades and attendence. I
									took a year off, returning home to the states afterwhich I
									returned to New Dynamic Institue for a thrid year with them.
								</p>
							</div>
						}
					/>
				</ListItem>
			</List>
			<List>
				<ListSubheader>
					<Typography variant="h6">Contact Information</Typography>
				</ListSubheader>
				<ListItem>wesleymeacham79@gmail.com</ListItem>
				<ListItem>www.linkedin.com/in/wesleymeacham</ListItem>
				<ListItem>www.github.com/WesleyMeacham</ListItem>
			</List>
		</div>
	);
};

export default Home;
