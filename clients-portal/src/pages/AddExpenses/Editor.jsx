import { useEffect, useState } from 'react';
import {
  Button,
  DatePicker,
  Drawer,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
} from 'antd';
import dayjs from 'dayjs';
import companyTypes from '../../data/company-type.json';

const { TextArea } = Input;

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
    onSave({
      ...values,
      dateExp: values.dateExp.format(),
    });
  };

  return (
    <Drawer
      title={isNew ? 'Add Exppenses' : 'Edit Exppenses'}
      width={400}
      onClose={onClose}
      open={!!item}
      closable={false}
    >
      <Form
        layout="vertical"
        initialValues={{
          ...data,
          dateExp: data?.dateExp ? dayjs(data.dateExp) : undefined,
        }}
        onFinish={onFinish}
        requiredMark={false}
        autoComplete="off"
        key={data ? data._id || -1 : 0}
      >
        <Form.Item
          label="Date Expensed"
          name="dateExp"
          rules={[
            {
              required: true,
              message: 'This field is required!',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

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

        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              message: 'This field is required!',
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item label="Description" name="describe">
          <TextArea autoSize={{ minRows: 4, maxRows: 4 }} />
        </Form.Item>

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
