import { InputLabel } from '@mui/material';
import { CustomizedSelect } from '../Styled';
import options from '../../../data/genre.json';

const GenreSelector = ({ value, setValue }) => {
  return (
    <>
      <InputLabel>Select genre</InputLabel>
      <CustomizedSelect options={options} value={value} setValue={setValue} />
    </>
  );
};

export default GenreSelector;
