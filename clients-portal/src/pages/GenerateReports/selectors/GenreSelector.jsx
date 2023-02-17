import { Select } from 'antd';
import options from '../../../data/genre.json';

const GenreSelector = ({ value, setValue }) => {
  return (
    <Select
      fieldNames={{ value: 'id' }}
      options={options}
      value={value}
      onChange={setValue}
      style={{ width: 240 }}
      placeholder="Select genre"
      showSearch
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
    />
  );
};

export default GenreSelector;
