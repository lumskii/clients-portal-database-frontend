import { InputLabel } from '@mui/material';
import { CustomizedSelect } from '../Styled';

const options = [
  { id: 'all', label: 'All' },
  { id: 'action', label: 'Action' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'animation', label: 'Animation' },
  { id: 'comedy', label: 'Comedy' },
  { id: 'crime', label: 'Crime' },
  { id: 'documentary', label: 'Documentary' },
  { id: 'drama', label: 'Drama' },
  { id: 'family', label: 'Family' },
  { id: 'fantasy', label: 'Fantasy' },
  { id: 'history', label: 'History' },
  { id: 'horror', label: 'Horror' },
  { id: 'music', label: 'Music' },
  { id: 'mystery', label: 'Mystery' },
  { id: 'romance', label: 'Romance' },
  { id: 'science_fiction', label: 'Science Fiction' },
  { id: 'tv_movie', label: 'TV Movie' },
  { id: 'thriller', label: 'Thriller' },
  { id: 'war', label: 'War' },
  { id: 'western', label: 'Western' },
];
const GenreSelector = ({ value, setValue }) => {
  return (
    <>
      <InputLabel>Select genre</InputLabel>
      <CustomizedSelect options={options} value={value} setValue={setValue} />
    </>
  );
};

export default GenreSelector;