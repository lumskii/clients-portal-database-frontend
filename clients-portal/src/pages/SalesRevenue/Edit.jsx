import { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  TextField,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Formik } from 'formik';
import * as yup from 'yup';
import { format } from 'date-fns';
import axios from 'axios';
import cogoToast from 'cogo-toast';

import { server } from '../../constance';
import Select from '../../components/Select';
import territories from '../../data/territories.json';

const schema = yup.object({
  cName: yup.string().required(),
  territory: yup.string().required(),
  salesAmount: yup.number().required(),
  receivedAmount: yup.number().required(),
  dealED: yup.date().required(),
  dealCD: yup.date().required(),
});

const SalesRevenueEdit = ({ clientId, sale, onUpdate, onClose }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (sale) {
      setData(sale);
    }
  }, [sale]);

  const submitHandle = async (values) => {
    try {
      let response;
      if (data._id) {
        response = await axios.put(
          `${server}/v1/clients/${clientId}/sales/${data._id}`,
          values
        );
        cogoToast.success('Sales revenue updated successfully');
      } else {
        response = await axios.post(
          `${server}/v1/clients/${clientId}/sales`,
          values
        );
        cogoToast.success('Sales revenue added successfully');
      }
      onClose();
      onUpdate(response.data.client.sales);
    } catch (error) {
      console.log(error);
      cogoToast.error('Something went wrong');
    }
  };

  return (
    <Dialog open={!!sale} onClose={onClose} key={data?._id}>
      <DialogTitle>{data?._id ? 'Edit' : 'Add'} Sales Revenue</DialogTitle>
      <Formik
        initialValues={{
          cName: data?.cName || '',
          territory: data?.territory || '',
          salesAmount: data?.salesAmount || '',
          receivedAmount: data?.receivedAmount || '',
          dealED: data?.dealED
            ? format(new Date(data.dealED), 'yyyy-MM-dd')
            : '',
          dealCD: data?.dealCD
            ? format(new Date(data.dealCD), 'yyyy-MM-dd')
            : '',
        }}
        validationSchema={schema}
        onSubmit={submitHandle}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <DialogContent sx={{ pt: 0 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Company name"
                    type="text"
                    name="cName"
                    value={formik.values.cName}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl sx={{ width: '100%' }} variant="filled">
                    <InputLabel>Select territory</InputLabel>
                    <Select
                      name="territory"
                      options={territories}
                      value={formik.values.territory}
                      onChange={formik.handleChange}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Sales Amount"
                    type="number"
                    name="salesAmount"
                    value={formik.values.salesAmount}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Received Amount"
                    type="number"
                    name="receivedAmount"
                    value={formik.values.receivedAmount}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Deal Entered Date"
                    variant="filled"
                    type="date"
                    name="dealED"
                    value={formik.values.dealED}
                    onChange={formik.handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Deal Closed Date"
                    variant="filled"
                    type="date"
                    name="dealCD"
                    value={formik.values.dealCD}
                    onChange={formik.handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ padding: '8px 24px 24px 24px' }}>
              <Button
                variant="outlined"
                sx={{ lineHeight: 1, padding: '8px 0', width: 100 }}
                onClick={onClose}
              >
                Cancel
              </Button>
              <LoadingButton
                variant="contained"
                color="primary"
                type="submit"
                sx={{ lineHeight: 1, padding: '10px 0', width: 100 }}
                disabled={!formik.dirty || !formik.isValid}
                loading={formik.isSubmitting}
              >
                {data?._id ? 'Save' : 'Add'}
              </LoadingButton>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
};

export default SalesRevenueEdit;
