import { Select } from 'antd';

const options = [
  { value: 'all', label: 'All' },
  { value: '0-30', label: '0 - 30' },
  { value: '30-60', label: '30 - 60' },
  { value: '60-90', label: '60 - 90' },
  { value: '90-120', label: '90 - 120' },
  { value: '120+', label: '120+' },
];

const RuntimeSelector = ({ value, setValue }) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={setValue}
      style={{ width: 130 }}
      placeholder="Select runtime"
    />
  );
};

export default RuntimeSelector;
