import { Col, DatePicker, Form, Input, InputNumber } from 'antd';

const { RangePicker } = DatePicker;

const Selections = () => {
  return (
    <>
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
        <Form.Item name="marketingExpenseCap" label="Marketing Expense Cap:">
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="publishedData" label="Market Expense Cap:">
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="distributionExpenseCap"
          label="Distribution Expense Cap:"
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="otherExpenseCap" label="Other Expense Cap:">
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="keyArtExpenseCap" label="Key Art Expense Cap:">
          <Input />
        </Form.Item>
      </Col>

      <Col span={8}>
        <Form.Item name="trailerExpenseCap" label="Trailer Expense Cap:">
          <InputNumber />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="grossCorridor" label="Gross Corridor %:">
          <InputNumber />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="grossCorridorRights" label="Gross Corridor Rights:">
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="portalLastUpdatedDate"
          label="Portal Last Updated Date:"
        >
          <RangePicker />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="distributionCommission"
          label="Distribution Commission:"
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={8}>
        <Form.Item name="salesCommission" label="Sales Commission:">
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="countryOfOrigin" label="Country of Origin:">
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="accountingTerms" label="Accounting Terms:">
          <Input />
        </Form.Item>
      </Col>
    </>
  );
};

export default Selections;
