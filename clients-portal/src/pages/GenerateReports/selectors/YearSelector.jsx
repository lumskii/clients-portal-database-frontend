import { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, Modal as ModalAD } from 'antd';

const YearSelector = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TextField
        fullWidth
        variant="filled"
        value={value?.format('YYYY') || ''}
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
        <DatePicker picker="year" onChange={setValue} />
      </ModalAD>
    </>
  );
};

export default YearSelector;
