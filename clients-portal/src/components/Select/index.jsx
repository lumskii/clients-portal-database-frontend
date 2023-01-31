import { Select as MSelect, MenuItem } from '@mui/material';

const Select = ({ options, value, setValue, hasNone, ...props }) => (
  <MSelect
    value={value || ''}
    onChange={(e) => setValue(e.target.value)}
    {...props}
  >
    {hasNone && (
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
    )}
    {options?.map(({ id, label }) => {
      const value = id || label;
      return (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      );
    })}
  </MSelect>
);

export default Select;
