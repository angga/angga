import React, { useEffect } from "react";

import { ThemeProvider } from "@mui/material/styles";
import { MyTheme } from "./config/theme/Theme";

import { Layout } from "./components/layout/Layout";
import TopBar from "./components/topbar/Topbar";
import { Container, CssBaseline, Grid, Grow } from "@mui/material";
import Content from "./components/content/Content";
import { useSelector } from "react-redux";

const App = () => {
	const appTitle = "Kamus Prakom";

	const keyword = useSelector((state) => state.keyword.keyword);

	useEffect(() => {
		document.title = appTitle + (keyword === "" ? "" : ": " + keyword);
	}, [keyword]);

	return (
		<React.StrictMode>
			<ThemeProvider theme={MyTheme}>
				<CssBaseline />
				<TopBar />
				<Content />
			</ThemeProvider>
		</React.StrictMode>
	);
};

export default App;
