import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const ContractExpirationSelector = ({ value, setValue }) => {
  return <RangePicker value={value} onChange={setValue} />;
};

export default ContractExpirationSelector;
