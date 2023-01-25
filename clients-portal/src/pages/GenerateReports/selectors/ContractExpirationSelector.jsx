import { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, Modal as ModalAD } from 'antd';

const { RangePicker } = DatePicker;

const dateFormat = (date) => date.format('DD/MM/YYYY');

const ContractExpirationSelector = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TextField
        variant="filled"
        fullWidth
        value={value ? `${dateFormat(value[0])} - ${dateFormat(value[1])}` : ''}
        onClick={() => setOpen(true)}
      />

      <ModalAD
        open={open}
        onCancel={() => {
          setValue();
          setOpen(false);
        }}
        onOk={() => {
          setValue(value);
          setOpen(false);
        }}
      >
        <RangePicker onChange={setValue} />
      </ModalAD>
    </>
  );
};

export default ContractExpirationSelector;
