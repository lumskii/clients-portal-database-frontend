import { Select } from 'antd';

const CompanySelect = (props) => {
  return (
    <Select
      style={{ width: 240 }}
      placeholder="Select company"
      allowClear
      {...props}
      fieldNames={{ value: '_id', label: 'filmName' }}
      options={[]}
      showSearch
      filterOption={(input, option) =>
        (option?.filmName ?? '').toLowerCase().includes(input.toLowerCase())
      }
    />
  );
};

export default CompanySelect;
