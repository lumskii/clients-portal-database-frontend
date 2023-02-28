import { Select } from 'antd';
import options from '../../data/genre.json';

const GenreSelect = (props) => {
  return (
    <Select
      style={{ width: 240 }}
      placeholder="Select genre"
      allowClear
      {...props}
      fieldNames={{ value: 'id' }}
      options={options}
      showSearch
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
    />
  );
};

export default GenreSelect;
