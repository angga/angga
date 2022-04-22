import { Box, Button } from "@mui/material";

export const ActionColumnTable = (props) => {
	const { row } = props;

	return (
		<Box>
			<MoreButton />
		</Box>
	);
};

const MoreButton = (props) => {
	return <Button size="small">More</Button>;
};
