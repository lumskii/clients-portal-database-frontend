import { InputLabel } from '@mui/material';
import { CustomizedSelect } from '../Styled';
import options from '../../../data/platform.json';

const PlatformSelector = ({ value, setValue }) => {
  return (
    <>
      <InputLabel>Select platform</InputLabel>
      <CustomizedSelect options={options} value={value} setValue={setValue} />
    </>
  );
};

export default PlatformSelector;
