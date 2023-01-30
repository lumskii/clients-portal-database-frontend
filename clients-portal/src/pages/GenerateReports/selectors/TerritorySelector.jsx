import { InputLabel } from '@mui/material';
import { CustomizedSelect } from '../Styled';

const options = [
  { id: 'united_states/canada', label: 'United States/Canada' },
  { id: 'australia', label: 'Australia/NZ' },
  { id: 'benelux', label: 'Benelux' },
  { id: 'france', label: 'France' },
  { id: 'germany', label: 'Germany' },
  { id: 'iceland', label: 'Iceland' },
  { id: 'israel', label: 'Israel' },
  { id: 'italy', label: 'Italy' },
  { id: 'scandinavia', label: 'Scandinavia' },
  { id: 'spain/portugal', label: 'Spain/Portugal' },
  { id: 'turkey', label: 'Turkey' },
  { id: 'poland', label: 'Poland' },
  { id: 'united_kingdom', label: 'United Kingdom' },
  { id: 'russia', label: 'Russia' },
  { id: 'eastern_europe', label: 'Eastern Europe(Excluding CIS)' },
  { id: 'cis/baltics', label: 'CIS/Baltics' },
  { id: 'africa', label: 'Africa' },
  { id: 'saarc', label: 'SAARC' },
  { id: 'asia_pay_tv', label: 'Asia Pay TV' },
  { id: 'india', label: 'India' },
  { id: 'china', label: 'China' },
  { id: 'malaysia', label: 'Malaysia' },
  { id: 'philippines', label: 'Philippines' },
  { id: 'thailand', label: 'Thailand' },
  { id: 'singapore', label: 'Singapore' },
  { id: 'japan', label: 'Japan' },
  { id: 'taiwan', label: 'Taiwan' },
  { id: 'Vietnam', label: 'South Korea' },
  { id: 'middle_east', label: 'Middle East' },
  { id: 'latin_america', label: 'Latin America' },
  { id: 'south_africa', label: 'South Africa' },
  { id: 'ancillary', label: 'Ancillary' },
];

const TerritorySelector = ({ value, setValue }) => {
  return (
    <>
      <InputLabel>Select territory</InputLabel>
      <CustomizedSelect options={options} value={value} setValue={setValue} />
    </>
  );
};

export default TerritorySelector;
