import { DatePicker } from 'antd';

const MonthSelector = ({ value, setValue }) => {
  return <DatePicker picker="month" value={value} onChange={setValue} />;
};

export default MonthSelector;
