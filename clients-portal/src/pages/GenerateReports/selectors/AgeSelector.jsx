import { InputNumber } from 'antd';

const AgeSelector = ({ value, setValue }) => {
  return (
    <InputNumber
      min={1}
      max={30}
      value={value}
      onChange={setValue}
      placeholder="Input age"
      style={{ width: 125 }}
    />
  );
};

export default AgeSelector;
