import { Col, DatePicker, Form } from 'antd';
import CompanySelect from '../../../components/selects/company-select';
import TitleSelect from '../../../components/selects/title-select';

const { RangePicker } = DatePicker;

const Selections = () => {
  return (
    <>
      <Col span={8}>
        <Form.Item name="company" label="Company:">
          <CompanySelect />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="title" label="Title:">
          <TitleSelect />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="releasedDate" label="Released Date:">
          <RangePicker />
        </Form.Item>
      </Col>
    </>
  );
};

export default Selections;
