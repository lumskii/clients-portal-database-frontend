import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from 'antd';
import dayjs from 'dayjs';
import territories from '../../data/territories.json';

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
    const success = await onSave({
      ...values,
      dealED: values.dealED.format(),
      dealCD: values.dealCD.format(),
    });
    setLoading(false);
    if (success) {
      onClose();
    }
  };

  return (
    <Drawer
      title={isNew ? 'Add Sales Revenue' : 'Edit Sales Revenue'}
      width={500}
      onClose={onClose}
      open={!!item}
      closable={false}
    >
      <Form
        layout="vertical"
        initialValues={{
          ...data,
          dealED: data?.dealED ? dayjs(data.dealED) : undefined,
          dealCD: data?.dealCD ? dayjs(data.dealCD) : undefined,
        }}
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

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Sales Amount"
              name="salesAmount"
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

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Deal Entered Date"
              name="dealED"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Deal Closed Date"
              name="dealCD"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <DatePicker />
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
