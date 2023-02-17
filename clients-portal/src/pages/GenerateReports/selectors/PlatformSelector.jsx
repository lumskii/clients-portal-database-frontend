import { Select } from 'antd';
import options from '../../../data/platform.json';

const PlatformSelector = ({ value, setValue }) => {
  return (
    <Select
      fieldNames={{ value: 'id' }}
      options={options}
      value={value}
      onChange={setValue}
      style={{ width: 240 }}
      placeholder="Select platform"
      showSearch
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
    />
  );
};

export default PlatformSelector;
