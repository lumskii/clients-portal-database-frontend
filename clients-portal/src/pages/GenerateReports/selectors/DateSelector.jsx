import { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, Modal as ModalAD } from 'antd';

const DateSelector = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();

  return (
    <>
      <TextField
        variant="filled"
        fullWidth
        value={value?.format('DD/MM/YYYY') || ''}
        onClick={() => {
          setOpen(true);
          setDate(value);
        }}
      />

      <ModalAD
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => {
          setOpen(false);
          setValue(date);
        }}
      >
        <DatePicker value={date} onChange={setDate} />
      </ModalAD>
    </>
  );
};

export default DateSelector;