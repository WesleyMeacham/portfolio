import { AppBar, Button, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<AppBar
			sx={{ alignItems: { xs: "center", sm: "center", md: "flex-end" } }}
			position="fixed"
		>
			<Toolbar>
				<Link to="/" style={{ textDecoration: "none" }}>
					<Button variant="contained">Home</Button>
				</Link>
				<Link to="/Portfolio" style={{ textDecoration: "none" }}>
					<Button variant="contained">Portfolio</Button>
				</Link>
			</Toolbar>

			<Box sx={{ width: "100%", minHeight: 20, backgroundColor: "grey" }}>
				{" "}
			</Box>
		</AppBar>
	);
};

export default NavBar;
