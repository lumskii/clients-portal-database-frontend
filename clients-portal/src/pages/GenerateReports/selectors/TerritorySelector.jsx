import { InputLabel } from '@mui/material';
import { CustomizedSelect } from '../Styled';
import options from '../../../data/territories.json';

const TerritorySelector = ({ value, setValue }) => {
  return (
    <>
      <InputLabel>Select territory</InputLabel>
      <CustomizedSelect options={options} value={value} setValue={setValue} />
    </>
  );
};

export default TerritorySelector;
