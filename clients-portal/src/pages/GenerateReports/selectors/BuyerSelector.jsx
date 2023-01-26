import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import RSelect from 'react-select';
import { server } from '../../../constance';
import { StyledModal } from '../Styled';

const BuyerSelector = ({ value, setValue }) => {
  const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`${server}/v1/clients`)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          setOptions(
            res.data.clients.map((client) => ({
              label: client.filmName,
              value: client.filmName,
              key: client._id,
            }))
          );
        }
      });
  }, []);

  const selectedOption = options.find((o) => o.key === value);

  return (
    <>
      <TextField
        variant="filled"
        fullWidth
        value={selectedOption?.value || ''}
        onClick={() => setOpen(true)}
      />

      <StyledModal open={open} onClose={() => setOpen(false)}>
        <RSelect
          options={options}
          onChange={(option) => {
            setValue(option.key);
            setOpen(false);
          }}
          value={selectedOption}
        />
      </StyledModal>
    </>
  );
};

export default BuyerSelector;
