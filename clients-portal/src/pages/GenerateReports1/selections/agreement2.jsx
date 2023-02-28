import { Col, DatePicker, Form, Input } from 'antd';
import CompanySelect from '../../../components/selects/company-select';
import TerritorySelect from '../../../components/selects/territory-select';

const { RangePicker } = DatePicker;

const Selections = () => {
  return (
    <>
      <Col span={8}>
        <Form.Item name="terrtory" label="Terrtory:">
          <TerritorySelect />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="company" label="Company:">
          <CompanySelect />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="dateOfSignature" label="Date of Signature:">
          <RangePicker />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="renewalReminderDate" label="Renewal Reminder Date:">
          <RangePicker />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="renewalExpirationDate"
          label="Renewal Expiration Date:"
        >
          <RangePicker />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="receivedAmount" label="Expense Cap:">
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="mgPaid" label="MG Paid:">
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="deliveryFee" label="Delivery Fee:">
          <Input />
        </Form.Item>
      </Col>

      <Col span={8}>
        <Form.Item name="revenueShare" label="Revenue Share:">
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="platform" label="Accounting Terms:">
          <Input />
        </Form.Item>
      </Col>
    </>
  );
};

export default Selections;
