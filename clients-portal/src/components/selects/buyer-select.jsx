import { Select } from 'antd';
import useClients from '../../hooks/use-clients';

const BuyerSelect = (props) => {
  const clients = useClients();

  return (
    <Select
      style={{ width: 240 }}
      placeholder="Select buyer"
      allowClear
      {...props}
      fieldNames={{ value: '_id', label: 'filmName' }}
      options={clients}
      loading={!clients}
      showSearch
      filterOption={(input, option) =>
        (option?.filmName ?? '').toLowerCase().includes(input.toLowerCase())
      }
    />
  );
};

export default BuyerSelect;
