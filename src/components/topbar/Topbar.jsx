import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const TopBar = () => {
	return (
		<AppBar position="static" width="100%">
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				<Box>
					<Typography>Kamus Pranata Komputer</Typography>
				</Box>
				<Box sx={{ display: "flex" }}>
					<Typography>Setting Icon|</Typography>
					<Typography>Dark Icon|</Typography>
					<Typography>Account Icon</Typography>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
