import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from 'antd';
import companyTypes from '../../data/company-types.json';
import rightsTypes from '../../data/rights-types.json';
import territories from '../../data/territories.json';
// import platformOptions from '../../data/platform-options.json';

const Editor = ({ item, onSave, onClose }) => {
  const [data, setData] = useState();
  const isNew = !data?._id;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (item) {
      setLoading(false);
      setData(item);
    }
  }, [item]);

  const onFinish = async (values) => {
    setLoading(true);
    const success = await onSave(values);
    setLoading(false);
    if (success) {
      onClose();
    }
  };

  return (
    <Drawer
      title={isNew ? 'Add Distribution' : 'Edit Distribution'}
      width={500}
      onClose={onClose}
      open={!!item}
      closable={false}
    >
      <Form
        layout="vertical"
        initialValues={data}
        onFinish={onFinish}
        requiredMark={false}
        autoComplete="off"
        key={data ? data._id || -1 : 0}
      >
        <Form.Item
          label="Company Name"
          name="cName"
          rules={[
            {
              required: true,
              message: 'This field is required!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Company Type"
              name="cType"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <Select
                fieldNames={{ value: 'id' }}
                options={companyTypes}
                placeholder="Select company type"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            {/* <Form.Item
              label="Platform Option"
              name="platformOption"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <Select
                fieldNames={{ value: 'id' }}
                options={platformOptions}
                placeholder="Select platform option"
              />
            </Form.Item> */}
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Rights Type"
              name="rType"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <Select
                fieldNames={{ value: 'id' }}
                options={rightsTypes}
                placeholder="Select rights type"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Territory"
              name="territory"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <Select
                fieldNames={{ value: 'id' }}
                options={territories}
                placeholder="Select territory"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Revenue Amount"
              name="revenueAmount"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <InputNumber min={0} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Received Amount"
              name="receivedAmount"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <InputNumber min={0} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" htmlType="submit" loading={loading}>
              {isNew ? 'Add' : 'Save'}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default Editor;
