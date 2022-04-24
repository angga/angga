import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { update } from "../../redux/keywordSlice";
import { getResult } from "../../redux/resultSlice";

const Search = () => {
	const [keyword, setKeyword] = useState("");
	const dispatch = useDispatch();

	const key = useSelector((state) => state.keyword.keyword);

	const searchHandler = (e) => {
		e.preventDefault();

		dispatch(update({ keyword }));
		dispatch(getResult());
	};

	return (
		<Paper
			component="form"
			sx={{
				p: "2px 4px",
				display: "flex",
				alignItems: "center",
				width: "100%",
			}}
		>
			<IconButton
				sx={{ p: "10px" }}
				aria-label="search"
				onClick={(e) => {
					console.log("Search button pressed");
					searchHandler(e);
				}}
			>
				<SearchIcon />
			</IconButton>
			<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
			<InputBase
				defaultValue={key}
				autoFocus
				sx={{ ml: 1, flex: 1 }}
				placeholder="Cari Butir Pranata Komputer"
				inputProps={{ "aria-label": "search prakom" }}
				onChange={(e) => setKeyword(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						console.log("enter key pressed");
						searchHandler(e);
					}
				}}
			/>
		</Paper>
	);
};

export default Search;
