import { InputLabel } from '@mui/material';
import { CustomizedSelect } from '../Styled';

const options = [
  { id: 'all', label: 'All' },
  { id: '0-30', label: '0-30' },
  { id: '30-60', label: '30-60' },
  { id: '60-90', label: '60-90' },
  { id: '90-120', label: '90-120' },
  { id: '120+', label: '120+' },
];

const RuntimeSelector = ({ value, setValue }) => {
  return (
    <>
      <InputLabel>Select runtime</InputLabel>
      <CustomizedSelect options={options} value={value} setValue={setValue} />
    </>
  );
};

export default RuntimeSelector;
