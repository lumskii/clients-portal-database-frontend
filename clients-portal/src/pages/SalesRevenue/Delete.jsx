import { useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

const SalesRevenueDelete = ({ clientId, sale, onClose }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (sale) {
      setData(sale);
    }
  }, [sale]);

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
          onClick={onClose}
        >
          Delete
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default SalesRevenueDelete;
