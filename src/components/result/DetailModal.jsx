import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const DetailModal = (props) => {
	const [modalOpen, setModalOpen] = useState(true);
	const handleOpen = () => setModalOpen(true);
	const handleClose = () => setModalOpen(false);

	return (
		<Modal
			open={modalOpen}
			onClose={handleClose}
			aria-labelledby="detail-butir"
			aria-describedby="detail-butir-description"
		>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: ["100%", "80%"],
					bgcolor: "background.paper",
					border: "2px solid #000",
					boxShadow: 24,
					p: 4,
				}}
			>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Text in a modal
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				</Typography>
			</Box>
		</Modal>
	);
};

export default DetailModal;
