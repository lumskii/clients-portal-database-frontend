import { Select } from 'antd';

const RetailerSelect = (props) => {
  return (
    <Select
      style={{ width: 240 }}
      placeholder="Select retailer"
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

export default RetailerSelect;
