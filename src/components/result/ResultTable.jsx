import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const columns = [
	{ id: "category", label: "Kategori" },
	{ id: "code", label: "Kode" },
	{ id: "description", label: "Uraian / Tugas" },
	{ id: "ak", label: "AK" },
	{ id: "output", label: "Output" },
	{ id: "batas", label: "Batasan" },
];

const ResultTable = () => {
	const { result } = useSelector((state) => state.result);

	const resultData = result.message ?? [];

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper>
			<TableContainer>
				<Table aria-label="butir-table">
					<TableHead>
						<TableRow>
							{columns.map((column, index) => (
								<TableCell key={index} align="center">
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{resultData.slice().map((row, index) => {
							return (
								<TableRow hover key={index} onClick={() => alert(row._id)}>
									<TableCell align="center">{row.kategori}</TableCell>
									<TableCell align="center">{row.kode}</TableCell>
									<TableCell>{row.uraian}</TableCell>
									<TableCell align="center">{row.ak}</TableCell>
									<TableCell align="center">{row.satuan}</TableCell>
									<TableCell align="center">{row.batasan}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={resultData.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
};

export default ResultTable;
