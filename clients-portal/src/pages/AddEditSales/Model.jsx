import { useState } from 'react';
import { Modal, Button, TextField, Box } from '@mui/material';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import { server } from '../../constance';

export default function Model({ open, setOpen, editSale, clientId }) {
  const [sale, setSale] = useState(editSale);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSale((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleModalSave = async () => {
    try {
      const response = await axios.put(
        `${server}/v1/clients/${clientId}/sales/${sale._id}`,
        sale
      );
      if (response.data.success) {
        setOpen(false);
        cogoToast.success('Sale updated successfully');
      } else {
        cogoToast.error('Error updating sale');
      }
    } catch (err) {
      cogoToast.error('Error updating sale');
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box p={3}>
        <TextField
          label="Company Name"
          value={sale.cName}
          onChange={handleChange}
          name="cName"
          fullWidth
        />
        <TextField
          label="Territory"
          value={sale.territory}
          onChange={handleChange}
          name="territory"
          fullWidth
        />
        <TextField
          label="Sales Amount"
          value={sale.salesAmount}
          onChange={handleChange}
          name="salesAmount"
          fullWidth
        />
        <TextField
          label="Received Amount"
          value={sale.receivedAmount}
          onChange={handleChange}
          name="receivedAmount"
          fullWidth
        />
        <TextField
          label="Deal CD"
          value={sale.dealCD}
          onChange={handleChange}
          name="dealCD"
          fullWidth
        />
        <TextField
          label="Deal ED"
          value={sale.dealED}
          onChange={handleChange}
          name="dealED"
          fullWidth
        />
        <Button onClick={handleModalSave}>Save</Button>
      </Box>
    </Modal>
  );
}
