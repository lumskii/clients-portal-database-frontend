import React, { useCallback, useState } from 'react';
import { Button, Select } from 'antd';
import styled from 'styled-components';
import Header from '../../components/Heading';
import { reportsInfo, reportsMenuOptions } from './data';

const ToolBar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  > .ant-btn {
    margin-left: auto;
  }
`;

const GenerateReports = () => {
  const [type, setType] = useState();
  const info = reportsInfo[type];
  const Selector = info?.selector;

  const [value, setValue] = useState();
  const [tableInfo, setTableInfo] = useState();

  const changeType = useCallback((type) => {
    setType(type);
    setValue();
  }, []);

  const getReport = useCallback(() => {
    setTableInfo({ component: info.table, value });
  }, [info, value]);

  const Table = tableInfo?.component;

  return (
    <>
      <Header
        title="Generate Reports"
        subtitle="Generate reports based on specified criterias"
      />

      <ToolBar>
        <Select
          options={reportsMenuOptions}
          value={type}
          onChange={changeType}
          virtual={false}
          style={{ width: 240 }}
          placeholder="Select report"
        />
        {Selector && <Selector value={value} setValue={setValue} />}

        <Button type="primary" disabled={!value} onClick={getReport}>
          Get Reports
        </Button>
      </ToolBar>

      {Table && <Table value={tableInfo.value} />}
    </>
  );
};

export default GenerateReports;
