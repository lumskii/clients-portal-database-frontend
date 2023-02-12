import { DatePicker } from 'antd';

const YearSelector = ({ value, setValue }) => {
  return <DatePicker picker="year" value={value} onChange={setValue} />;
};

export default YearSelector;
