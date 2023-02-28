import { Select } from 'antd';
import options from '../../data/platform.json';

const PlatformSelect = (props) => {
  return (
    <Select
      style={{ width: 240 }}
      placeholder="Select platform"
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

export default PlatformSelect;
