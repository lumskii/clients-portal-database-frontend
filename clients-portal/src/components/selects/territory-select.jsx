import { Select } from 'antd';
import options from '../../data/territories.json';

const TerritorySelect = (props) => {
  return (
    <Select
      style={{ width: 240 }}
      placeholder="Select territory"
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

export default TerritorySelect;
