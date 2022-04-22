import { Container, Grid, Grow, Toolbar } from "@mui/material";
import Search from "../search/Search";
import Results from "../result/Results";

const Content = () => {
	return (
		<Grow in>
			<Container>
				<Toolbar variant="dense" />
				<Grid container justifyContent={"space-between"} sx={{ my: 2 }}>
					<Search />
				</Grid>
				<Grid>
					<Results />
				</Grid>
			</Container>
		</Grow>
	);
};

export default Content;
