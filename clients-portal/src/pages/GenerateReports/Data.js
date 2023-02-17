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
import FilmByBuyer from './tables/film-by-buyer';
import FilmByTerritory from './tables/film-by-territory';
import FilmByAge from './tables/film-by-age';
import FilmByContractExpiration from './tables/film-by-contract-expiration';
import FilmByGenre from './tables/film-by-genre';
import RevenueByTerritory from './tables/revenue-by-territory';
import RevenueByPlatform from './tables/revenue-by-platform';
import RevenueByYear from './tables/revenue-by-year';

const groupNames = {
  film: 'Film Report',
  revenue: 'Revenue Report',
  sales: 'Sales Report',
  client: 'Client Report',
};

export const reportsInfo = {
  filmByBuyer: {
    group: 'film',
    label: 'Film by Buyer',
    selector: BuyerSelector,
    table: FilmByBuyer,
  },
  filmByTerritory: {
    group: 'film',
    label: 'Film by Territory',
    selector: TerritorySelector,
    table: FilmByTerritory,
  },
  filmByAge: {
    group: 'film',
    label: 'Film by Age',
    selector: AgeSelector,
    table: FilmByAge,
  },
  filmByContractExpiration: {
    group: 'film',
    label: 'Film by Contract Expiration',
    selector: ContractExpirationSelector,
    table: FilmByContractExpiration,
  },
  filmByGenre: {
    group: 'film',
    label: 'Film by Genre',
    selector: GenreSelector,
    table: FilmByGenre,
  },
  revenueByTerritory: {
    group: 'revenue',
    label: 'Revenue by Territory',
    selector: TerritorySelector,
    table: RevenueByTerritory,
  },
  revenueByPlatform: {
    group: 'revenue',
    label: 'Revenue by Platform',
    selector: PlatformSelector,
    table: RevenueByPlatform,
  },
  revenueByYear: {
    label: 'Revenue by Year',
    selector: YearSelector,
    table: RevenueByYear,
  },
  revenueByMonth: {
    group: 'revenue',
    label: 'Revenue by Month',
    selector: MonthSelector,
  },
  salesByBuyer: {
    group: 'sales',
    label: 'Sales by Buyer',
    selector: BuyerSelector,
  },
  salesByTerritory: {
    group: 'sales',
    label: 'Sales by Territory',
    selector: TerritorySelector,
  },
  salesByYear: {
    group: 'sales',
    label: 'Sales by Year',
    selector: YearSelector,
  },
  salesByRuntime: {
    group: 'sales',
    label: 'Sales by Runtime',
    selector: RuntimeSelector,
  },
  salesByGenre: {
    group: 'sales',
    label: 'Sales by Genre',
    selector: GenreSelector,
  },
  clientByBirthday: {
    group: 'client',
    label: 'Client by Birthday',
    selector: DateSelector,
  },
  clientByTerritory: {
    group: 'client',
    label: 'Client by Territory',
    selector: TerritorySelector,
  },
  clientByAge: {
    group: 'client',
    label: 'Client by Age',
    selector: AgeSelector,
  },
};

export const reportsMenuOptions = Object.keys(groupNames).map((group) => {
  return {
    label: groupNames[group],
    options: Object.keys(reportsInfo)
      .filter((rk) => reportsInfo[rk].group === group)
      .map((rk) => ({
        value: rk,
        ...reportsInfo[rk],
      })),
  };
});
