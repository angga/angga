import { Box, Paper } from "@mui/material";
import { useSelector } from "react-redux";

import DetailModal from "./DetailModal";
import ResultTable from "./ResultTable";

const Results = () => {
	const keyword = useSelector((state) => state.keyword.keyword);

	return (
		<Box sx={{ width: "100%" }}>
			<div>&nbsp;{keyword === "" ? "" : "Hasil pencarian: " + keyword}</div>
			<ResultTable />
			<DetailModal />
		</Box>
	);
};

export default Results;
