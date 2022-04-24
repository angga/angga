import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import {
	AccountCircle,
	Brightness4,
	CollectionsBookmark,
	Settings,
} from "@mui/icons-material";

const TopBar = () => {
	return (
		<AppBar position="static" width="100%">
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				<Box>
					<Typography>Kamus Pranata Komputer</Typography>
				</Box>
				<Box sx={{ display: "flex" }}>
					<IconButton color="inherit">
						<CollectionsBookmark />
					</IconButton>
					<IconButton color="inherit">
						<Settings />
					</IconButton>
					<IconButton color="inherit">
						<Brightness4 />
					</IconButton>
					<IconButton color="inherit">
						<AccountCircle />
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
