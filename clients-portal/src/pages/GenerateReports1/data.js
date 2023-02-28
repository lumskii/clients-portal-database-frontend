import RevenueSelections from './selections/revenue';
import RightsSelections from './selections/rights';
import AgreementSelections1 from './selections/agreement1';
import AgreementSelections2 from './selections/agreement2';

import RevenueTable from './tables/revenue';
import RightsTable from './tables/rights';
import PlacementTable from './tables/placement';
import AgreemenTable from './tables/agreement';

export const reports = [
  {
    value: 'revenue',
    label: 'Revenue',
    selections: [
      { value: 'wwFilmSalesRevenue', label: 'WW Film Sales Revenue' },
      { value: 'distributionRevenue', label: 'Distribution Revenue' },
      { value: 'otherRevenue', label: 'Other Revenue' },
    ],
    subSelections: RevenueSelections,
    table: RevenueTable,
  },
  {
    value: 'placement',
    label: 'Placement',
    selections: [
      { value: 'platform', label: 'Platform' },
      { value: 'retail', label: 'Retail' },
      { value: 'TVOD', label: 'TVOD' },
      { value: 'SVOD', label: 'SVOD' },
      { value: 'AVOD', label: 'AVOD' },
      { value: 'TV', label: 'TV' },
      { value: 'subDistributor', label: 'Sub Distributor' },
      { value: 'aggregator', label: 'Aggregator' },
    ],
    subSelections: RevenueSelections,
    table: PlacementTable,
  },
  {
    value: 'rights',
    label: 'Rights',
    selections: [
      { value: 'TVOD', label: 'TVOD' },
      { value: 'SVOD', label: 'SVOD' },
      { value: 'AVOD', label: 'AVOD' },
      { value: 'TV', label: 'TV' },
      {
        value: 'rightsAvailable',
        label: 'Rights Available',
        subSelections: RightsSelections,
      },
      {
        value: 'rightsTaken',
        label: 'Rights Taken',
        subSelections: RightsSelections,
      },
      {
        value: 'combined',
        label: 'Combined',
        subSelections: RightsSelections,
      },
    ],
    table: RightsTable,
  },
  {
    value: 'agreement',
    label: 'Agreement',
    selections: [
      {
        value: 'filmAcquisitions',
        label: 'Film Acquisitions',
        subSelections: AgreementSelections1,
      },
      {
        value: 'salesAgreements',
        label: 'Sales Agreements',
        subSelections: AgreementSelections2,
      },
    ],
    table: AgreemenTable,
  },
];
