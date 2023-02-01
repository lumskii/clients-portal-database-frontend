import { useState } from 'react';
import { Button, Slider, TextField } from '@mui/material';
import { StyledModal } from '../Styled';

const marks = [
  { value: 1, label: '1 year' },
  { value: 10, label: '10 years' },
  { value: 20, label: '20 years' },
  { value: 30, label: '30 years' },
];

const AgeSelector = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState(1);

  return (
    <>
      <TextField
        variant="filled"
        fullWidth
        value={value || ''}
        onClick={() => {
          setOpen(true);
          setAge(value || 1);
        }}
      />

      <StyledModal open={open} onClose={() => setOpen(false)}>
        <Slider
          value={age}
          step={1}
          marks={marks}
          valueLabelDisplay="auto"
          min={1}
          max={30}
          onChange={(e, value) => setAge(value)}
        />
        <div style={{ textAlign: 'right', marginTop: 20 }}>
          <Button
            type="button"
            variant="contained"
            onClick={() => {
              setOpen(false);
              setValue(age);
            }}
          >
            Confirm
          </Button>
        </div>
      </StyledModal>
    </>
  );
};

export default AgeSelector;
