import { Select } from 'antd';

const TitleSelect = (props) => {
  return (
    <Select
      style={{ width: 240 }}
      placeholder="Select title"
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

export default TitleSelect;
