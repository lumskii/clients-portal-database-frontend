import { DatePicker } from 'antd';

const DateSelector = ({ value, setValue }) => {
  return <DatePicker value={value} onChange={setValue} />;
};

export default DateSelector;
