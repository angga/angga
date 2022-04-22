import {
	Box,
	Collapse,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Typography,
} from "@mui/material";
import { useState } from "react";

const resultData = [
	{
		_id: "623dc8e6e7ce31d7c2973383",
		kode: "I.A.1",
		butir: "Melakukan Pemenuhan permintaan dan layanan Teknologi Informasi",
		uraian: "Pemenuhan permintaan layanan teknologi informasi (TI)",
		tahapan: "1. menerima permintaan layanan TI;",
		satuan: "Laporan Pemenuhan permintaan dan layanan TI",
		ak: "0.15",
		batasan: "1 (satu) laporan per bulan",
		pelaksana: "11",
		bukti: "Laporan pemenuhan permintaan dan layanan TI mencakup namun",
		contoh: "Andi, A.Md., Pranata Komputer Mahir, telah menyelesaikan beberapa",
		kategori: "utama",
	},
	{
		_id: "623dc8e6e7ce31d7c2973384",
		kode: "I.A.1",
		butir: "Melakukan Pemenuhan permintaan dan layanan Teknologi Informasi",
		uraian: "Pemenuhan permintaan layanan teknologi informasi (TI)",
		tahapan: "1. menerima permintaan layanan TI;",
		satuan: "Laporan Pemenuhan permintaan dan layanan TI",
		ak: "0.15",
		batasan: "1 (satu) laporan per bulan",
		pelaksana: "11",
		bukti: "Laporan pemenuhan permintaan dan layanan TI mencakup namun",
		contoh: "Andi, A.Md., Pranata Komputer Mahir, telah menyelesaikan beberapa",
		kategori: "non-utama",
	},
];

const columns = [
	{ id: "category", label: "Kategori" },
	{ id: "code", label: "Kode" },
	{ id: "description", label: "Uraian / Tugas" },
	{ id: "ak", label: "AK" },
	{ id: "output", label: "Output" },
	{ id: "batas", label: "Batasan" },
];

const ResultTable = () => {
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
