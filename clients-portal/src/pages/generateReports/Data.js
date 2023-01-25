import { server } from '../../constance';
import AgeSelector from './selectors/AgeSelector';
import BuyerSelector from './selectors/BuyerSelector';
import ContractExpirationSelector from './selectors/ContractExpirationSelector';
import DateSelector from './selectors/DateSelector';
import GenreSelector from './selectors/GenreSelector';
import MonthSelector from './selectors/MonthSelector';
import PlatformSelector from './selectors/PlatformSelector';
import RuntimeSelector from './selectors/RuntimeSelector';
import TerritorySelector from './selectors/TerritorySelector';
import YearSelector from './selectors/YearSelector';

export const types = [
  {
    label: 'Film Report',
    options: [
      {
        label: 'Film by Buyer',
        selector: BuyerSelector,
        getUrl: (value) => `${server}/v1/clients/sales?client=${value}`,
      },
      {
        label: 'Film by Territory',
        selector: TerritorySelector,
        getUrl: (value) => `${server}/v1/clients/sales?territory=${value}`,
      },
      {
        label: 'Film by Age',
        selector: AgeSelector,
        getUrl: (value) => `${server}/v1/clients/sales?age=${value}`,
      },
      {
        label: 'Film by Contract Expiration',
        selector: ContractExpirationSelector,
        getUrl: (value) =>
          `${server}/v1/clients/sales?expiration=${value[0]}&expiration=${value[1]}`,
      },
      {
        label: 'Film by Genre',
        selector: GenreSelector,
        getUrl: (value) => `${server}/v1/clients/sales?genre=${value}`,
      },
    ],
  },
  {
    label: 'Revenue Report',
    options: [
      { label: 'Revenue by Territory', selector: TerritorySelector },
      { label: 'Revenue by Platform', selector: PlatformSelector },
      { label: 'Revenue by Year', selector: YearSelector },
      { label: 'Revenue by Month', selector: MonthSelector },
    ],
  },
  {
    label: 'Sales Report',
    options: [
      { label: 'Sales by Buyer', selector: BuyerSelector },
      { label: 'Sales by Territory', selector: TerritorySelector },
      { label: 'Sales by Year', selector: YearSelector },
      { label: 'Sales by Runtime', selector: RuntimeSelector },
      { label: 'Sales by Genre', selector: GenreSelector },
    ],
  },
  {
    label: 'Client Report',
    options: [
      { label: 'Client by Birthday', selector: DateSelector },
      { label: 'Client by Territory', selector: TerritorySelector },
      { label: 'Client by Age', selector: AgeSelector },
    ],
  },
];
