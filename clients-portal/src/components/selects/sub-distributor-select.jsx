import { Select } from 'antd';

const SubDistributorSelect = (props) => {
  return (
    <Select
      style={{ width: 240 }}
      placeholder="Select sub distributor"
      allowClear
      {...props}
      fieldNames={{ value: 'id' }}
      options={[]}
      showSearch
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
    />
  );
};

export default SubDistributorSelect;
