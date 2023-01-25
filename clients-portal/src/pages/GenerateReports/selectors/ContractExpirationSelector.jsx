import { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, Modal as ModalAD } from 'antd';

const { RangePicker } = DatePicker;

const dateFormat = (date) => date.format('DD/MM/YYYY');

const ContractExpirationSelector = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState();

  return (
    <>
      <TextField
        variant="filled"
        fullWidth
        value={value ? `${dateFormat(value[0])} - ${dateFormat(value[1])}` : ''}
        onClick={() => {
          setOpen(true);
          setRange(value);
        }}
      />

      <ModalAD
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => {
          setOpen(false);
          setValue(range);
        }}
      >
        <RangePicker value={range} onChange={setRange} />
      </ModalAD>
    </>
  );
};

export default ContractExpirationSelector;
