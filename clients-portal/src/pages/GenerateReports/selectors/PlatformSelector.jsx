import { InputLabel } from '@mui/material';
import { CustomizedSelect } from '../Styled';

const options = [
  { id: 'all', label: 'All Platforms' },
  { id: 'amazon', label: 'Amazon' },
  { id: 'apple', label: 'Apple' },
  { id: 'hbo', label: 'HBO' },
  { id: 'disney', label: 'Disney' },
  { id: 'tubi', label: 'Tubi' },
  { id: 'hulu', label: 'Hulu' },
  { id: 'netflix', label: 'Netflix' },
  { id: 'vudu', label: 'Vudu' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'other', label: 'Other' },
];

const PlatformSelector = ({ value, setValue }) => {
  return (
    <>
      <InputLabel>Select platform</InputLabel>
      <CustomizedSelect options={options} value={value} setValue={setValue} />
    </>
  );
};

export default PlatformSelector;
