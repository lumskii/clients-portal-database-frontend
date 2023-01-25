import React, { useEffect, useState } from 'react';
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

export default function Model({ editDist, openModal, setOpenModal, clientId }) {
  const [dist, setDist] = useState({});
  const [loading, setLoading] = useState(false);
  const [originalDist, setOriginalDist] = useState({});
  const isNonMobile = useMediaQuery('(min-width:600px)');

  console.log(dist, 'dist');

  useEffect(() => {
    const retrieveDist = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${server}/v1/clients/${clientId}/dist-rev/${editDist.id}`
        );
        if (response.status === 200) {
          setDist(response.data);
          setOriginalDist(response.data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (openModal) {
      retrieveDist();
    }
  }, [openModal, editDist.id, clientId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDist({ ...dist, [name]: value });
  };

  const handleClose = () => {
    if (JSON.stringify(dist) !== JSON.stringify(originalDist)) {
      if (
        window.confirm(
          'You have unsaved changes, are you sure you want to close?'
        )
      ) {
        setOpenModal(false);
      }
    } else {
      setOpenModal(false);
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `${server}/v1/clients/${clientId}/dist-rev/${editDist.id}`,
        dist
      );
      if (response.status === 200) {
        cogoToast.success('Distribution updated successfully');
        setOpenModal(false);
      }
    } catch (err) {
      console.log(err);
      cogoToast.error('Error updating distribution');
    }
  };

  return (
    <Modal open={openModal} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
          Edit Distribution
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
          <>
            <TextField
              label="Company Name"
              value={dist.cName}
              onChange={handleChange}
              name="cName"
              variant="filled"
              fullWidth
              sx={{ gridColumn: 'span 4' }}
            />
            <TextField
              label="Company Type"
              value={dist.cType}
              onChange={handleChange}
              name="cType"
              variant="filled"
              fullWidth
              sx={{ gridColumn: 'span 4' }}
            />
            <TextField
              label="Rights Type"
              value={dist.rType}
              onChange={handleChange}
              name="rType"
              variant="filled"
              fullWidth
              sx={{ gridColumn: 'span 4' }}
            />
            <TextField
              label="Territory"
              value={dist.territory}
              onChange={handleChange}
              name="territory"
              variant="filled"
              fullWidth
              sx={{ gridColumn: 'span 4' }}
            />
            <TextField
              label="Revenue Amount"
              value={dist.revenueAmount}
              onChange={handleChange}
              name="revenueAmount"
              variant="filled"
              fullWidth
              sx={{ gridColumn: 'span 4' }}
            />
            <TextField
              label="Received Amount"
              value={dist.receivedAmount}
              onChange={handleChange}
              name="receivedAmount"
              variant="filled"
              fullWidth
              sx={{ gridColumn: 'span 4' }}
            />
            <Button onClick={handleSave} sx={{ gridColumn: 'span 2' }}>
              Save
            </Button>
            <Button
              onClick={handleClose}
              sx={{ gridColumn: 'span 2' }}
              variant="contained"
            >
              Close
            </Button>
          </>
        </Box>
      </Box>
    </Modal>
  );
}
