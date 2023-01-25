import { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, Modal as ModalAD } from 'antd';

const DateSelector = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TextField
        fullWidth
        variant="filled"
        onClick={() => setOpen(true)}
        value={value?.format('DD/MM/YYYY') || ''}
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
        <DatePicker onChange={setValue} />
      </ModalAD>
    </>
  );
};

export default DateSelector;
