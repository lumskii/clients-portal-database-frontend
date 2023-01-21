import { useEffect, useState } from 'react';
import {
  Modal,
  Button,
  TextField,
  Box,
  useMediaQuery,
  Typography,
} from '@mui/material';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import { server } from '../../constance';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Model({ editSale, openModal, setOpenModal, clientId }) {
  const [sale, setSale] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [originalSale, setOriginalSale] = useState({});
  const isNonMobile = useMediaQuery('(min-width:600px)');

  console.log(sale, 'sale');

  useEffect(() => {
    const retrieveSale = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${server}/v1/clients/${clientId}/sales/${editSale.id}`
        );
        if (response.status === 200) {
          setSale(response.data);
          setOriginalSale(response.data);
          setLoading(false);
        }
      } catch (err) {
        setError(true);
        console.log(err);
      }
    };
    if (openModal) {
      retrieveSale();
    }
  }, [openModal, editSale.id, clientId]);

  const handleClose = () => {
    if (JSON.stringify(sale) !== JSON.stringify(originalSale)) {
      if (
        window.confirm(
          'You have unsaved changes, are you sure you want to close?'
        )
      ) {
        setSale(originalSale);
        setOpenModal(false);
      }
    } else {
      setOpenModal(false);
    }
  };

  const handleChange = (e) => {
    setSale({ ...sale, [e.target.name]: e.target.value });
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        `${server}/v1/clients/${clientId}/sales/${editSale.id}`,
        editSale
      );
      if (response.status === 200) {
        setSuccess(true);
        setOpenModal(false);
      }
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <Modal open={openModal} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ fontWeight: 'bold' }}
        >
          Edit Sale
        </Typography>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
            p: 3,
          }}
        >
          {loading && <p>Loading...</p>}
          {success && <p>Sale updated successfully</p>}
          {error && <p>An error occurred, please try again</p>}
          {!loading && !success && !error && (
            <>
              <TextField
                label="Company Name"
                value={editSale.cName}
                onChange={handleChange}
                name="cName"
                variant="filled"
                fullWidth
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                label="Territory"
                value={editSale.territory}
                onChange={handleChange}
                variant="filled"
                name="territory"
                fullWidth
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                label="Sales Amount"
                value={editSale.salesAmount}
                onChange={handleChange}
                variant="filled"
                name="salesAmount"
                fullWidth
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                label="Received Amount"
                value={editSale.receivedAmount}
                onChange={handleChange}
                variant="filled"
                name="receivedAmount"
                fullWidth
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                label="Deal CD"
                value={editSale.dealCD}
                onChange={handleChange}
                variant="filled"
                name="dealCD"
                fullWidth
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                label="Deal ED"
                value={editSale.dealED}
                onChange={handleChange}
                variant="filled"
                name="dealED"
                fullWidth
                sx={{ gridColumn: 'span 4' }}
              />
              <Button onClick={handleSaveClick} sx={{ gridColumn: 'span 2' }}>
                Save
              </Button>
              <Button
                variant="contained"
                onClick={handleClose}
                sx={{ gridColumn: 'span 2' }}
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
}
