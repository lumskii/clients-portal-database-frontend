import { useEffect, useState } from 'react';
import { Select } from 'antd';
import { server } from '../../../constance';

const BuyerSelector = ({ value, setValue }) => {
  const [options, setOptions] = useState();

  useEffect(() => {
    fetch(`${server}/v1/clients`)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          setOptions(res.data.clients);
        }
      });
  }, []);

  return (
    <Select
      fieldNames={{ value: '_id', label: 'filmName' }}
      options={options}
      loading={!options}
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
