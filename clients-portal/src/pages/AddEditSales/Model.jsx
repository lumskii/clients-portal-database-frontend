import { useState } from 'react';
import { Modal, Button, TextField, Box } from '@mui/material';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import { server } from '../../constance';

export default function Model({
  editSale,
  handleChange,
  handleSave,
  openModal,
  setOpenModal,
}) {
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSaveClick = () => {
    handleSave(editSale);
    setOpenModal(false);
  };

  // const handleModalSave = async () => {
  //   try {
  //     const response = await axios.put(
  //       `${server}/v1/clients/${clientId}/sales/${sale._id}`,
  //       sale
  //     );
  //     if (response.data.success) {
  //       setOpen(false);
  //       cogoToast.success('Sale updated successfully');
  //     } else {
  //       cogoToast.error('Error updating sale');
  //     }
  //   } catch (err) {
  //     cogoToast.error('Error updating sale');
  //   }
  // };

  return (
    <Modal open={openModal} onClose={handleClose}>
      <Box p={3}>
        <TextField
          label="Company Name"
          value={editSale.cName}
          onChange={handleChange}
          name="cName"
          varient="filled"
          fullWidth
        />
        <TextField
          label="Territory"
          value={editSale.territory}
          onChange={handleChange}
          name="territory"
          fullWidth
        />
        <TextField
          label="Sales Amount"
          value={editSale.salesAmount}
          onChange={handleChange}
          name="salesAmount"
          fullWidth
        />
        <TextField
          label="Received Amount"
          value={editSale.receivedAmount}
          onChange={handleChange}
          name="receivedAmount"
          fullWidth
        />
        <TextField
          label="Deal CD"
          value={editSale.dealCD}
          onChange={handleChange}
          name="dealCD"
          fullWidth
        />
        <TextField
          label="Deal ED"
          value={editSale.dealED}
          onChange={handleChange}
          name="dealED"
          fullWidth
        />
        <Button onClick={handleSaveClick}>Save</Button>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}
