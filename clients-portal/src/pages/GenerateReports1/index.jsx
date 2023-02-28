import React, { useState } from 'react';
import { Button, Card, Col, Empty, Form, Row, Select } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { find, values } from 'lodash';

import Page from '../../components/MainLayout/page';
import { reports } from './data';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const GenerateReports = () => {
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(true);
  const [report, setReport] = useState();
  const [selection, setSelection] = useState();
  const [tableInfo, setTableInfo] = useState();

  const selections = report?.selections || [];

  const onValuesChange = ({ report, selection }, allValues) => {
    if (report) {
      setReport(find(reports, { value: report }));
      form.setFieldsValue({ report });
    }
    if (selection) {
      setSelection(find(selections, { value: selection }));
      form.setFieldsValue({
        report: allValues.report,
        selection,
      });
    }
  };

  const onFinish = (values) => {
    setTableInfo({ component: report?.table, values });
  };

  const SubSelections = selection?.subSelections || report?.subSelections;
  const Table = tableInfo?.component;

  return (
    <Page
      title="Generate Reports"
      subtitle="Generate reports based on specified criterias"
    >
      <Card bodyStyle={{ paddingBottom: 0 }} style={{ marginBottom: 12 }}>
        <Form
          form={form}
          onFinish={onFinish}
          onValuesChange={onValuesChange}
          {...layout}
        >
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name="report" label="Report:">
                <Select
                  options={reports}
                  virtual={false}
                  style={{ width: 240 }}
                  placeholder="Select..."
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="selection" label="Selection:">
                <Select
                  options={selections}
                  virtual={false}
                  style={{ width: 240 }}
                  placeholder="Select..."
                />
              </Form.Item>
            </Col>

            <Col span={8} style={{ textAlign: 'right' }}>
              <Button
                type="primary"
                htmlType="submit"
                disabled={!report?.table}
              >
                Get Reports
              </Button>
              <Button
                type="link"
                onClick={(e) => setExpand(!expand)}
                style={{ width: 100 }}
              >
                {expand ? (
                  <>
                    <UpOutlined style={{ marginRight: 4 }} />
                    Collapse
                  </>
                ) : (
                  <>
                    <DownOutlined style={{ marginRight: 4 }} />
                    Expand
                  </>
                )}
              </Button>
            </Col>
            {expand && SubSelections && <SubSelections />}
          </Row>
        </Form>
      </Card>

      <Card>{Table ? <Table values={values} /> : <Empty />}</Card>
    </Page>
  );
};

export default GenerateReports;
