import "./App.css";
import NavBar from "./Components/NavBar";
import { Container } from "@mui/material";
import Home from "./Components/Home";
import { Route, Routes } from "react-router";
import Portfolio from "./Components/Portfolio";
import NotFound from "./Components/NotFound";

function App() {
	return (
		<>
			<NavBar />
			<Container sx={{ mt: 10 }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Portfolio" element={<Portfolio />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</>
	);
}

export default App;
