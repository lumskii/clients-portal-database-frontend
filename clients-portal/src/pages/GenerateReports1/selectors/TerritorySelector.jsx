import { Select } from 'antd';
import options from '../../../data/territories.json';

const TerritorySelector = ({ value, setValue }) => {
  return (
    <Select
      fieldNames={{ value: 'id' }}
      options={options}
      value={value}
      onChange={setValue}
      style={{ width: 240 }}
      placeholder="Select territory"
      showSearch
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
    />
  );
};

export default TerritorySelector;
