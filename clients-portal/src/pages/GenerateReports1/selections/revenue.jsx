import { Col, DatePicker, Form, InputNumber, Switch } from 'antd';
import TerritorySelect from '../../../components/selects/territory-select';
import BuyerSelect from '../../../components/selects/buyer-select';
import GenreSelect from '../../../components/selects/genre-select';
import PlatformSelect from '../../../components/selects/platform-select';
import RetailerSelect from '../../../components/selects/retailer-select';
import TitleSelect from '../../../components/selects/title-select';
import SubDistributorSelect from '../../../components/selects/sub-distributor-select';

const { RangePicker } = DatePicker;

const Selections = () => {
  return (
    <>
      <Col span={8}>
        <Form.Item name="agreementValueTotal" label="Agreement Value Total:">
          <InputNumber />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="dealCount" label="Deal Count:">
          <InputNumber />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="receivedAmount" label="Received Amount:">
          <InputNumber />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="date" label="Date:">
          <RangePicker />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="exclude3rdPartyData" label="Exclude 3rd Party Data:">
          <Switch />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="publishedOnlyData" label="Published Only Data:">
          <Switch />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="terrtory" label="Terrtory:">
          <TerritorySelect />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="buyer" label="Buyer:">
          <BuyerSelect />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="genre" label="Genre:">
          <GenreSelect />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="platform" label="Platform:">
          <PlatformSelect />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="retailer" label="Retailer:">
          <RetailerSelect />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="title" label="Title:">
          <TitleSelect />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="subDistributor" label="Sub Distributor:">
          <SubDistributorSelect />
        </Form.Item>
      </Col>
    </>
  );
};

export default Selections;
