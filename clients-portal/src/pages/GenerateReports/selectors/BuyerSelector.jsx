import { Select } from 'antd';
import useClients from '../../../hooks/use-clients';

const BuyerSelector = ({ value, setValue }) => {
  const clients = useClients();

  return (
    <Select
      fieldNames={{ value: '_id', label: 'filmName' }}
      options={clients}
      loading={!clients}
      value={value}
      onChange={setValue}
      style={{ width: 240 }}
      placeholder="Select buyer"
      showSearch
      filterOption={(input, option) =>
        (option?.filmName ?? '').toLowerCase().includes(input.toLowerCase())
      }
    />
  );
};

export default BuyerSelector;
