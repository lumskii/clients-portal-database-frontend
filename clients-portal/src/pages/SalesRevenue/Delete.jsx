import { useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import axios from 'axios';
import { server } from '../../constance';
import cogoToast from 'cogo-toast';

const SalesRevenueDelete = ({ clientId, sale, onClose }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (sale) {
      setData(sale);
    }
  }, [sale]);

  const handleDelete = (id) => {
    axios
      .delete(`${server}/v1/clients/${clientId}/sales/${sale._id}`)
      .then((res) => {
        if (res.status === 200) {
          cogoToast.success(data?.cName + ' has been deleted successfully', {
            position: 'top-center',
          });
          setData(data.filter((item) => item._id !== id));
        }
      });
  };

  return (
    <Dialog open={!!sale} onClose={onClose}>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete <strong>{data?.cName}</strong>?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: '0px 24px 16px 24px' }}>
        <Button
          variant="outlined"
          sx={{ lineHeight: 1, padding: '8px 0', width: 100 }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <LoadingButton
          variant="contained"
          color="error"
          sx={{ lineHeight: 1, padding: '8px 0', width: 100 }}
          loading={false}
          onClick={() => {
            handleDelete(data._id);
            onClose();
          }}
        >
          Delete
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default SalesRevenueDelete;
