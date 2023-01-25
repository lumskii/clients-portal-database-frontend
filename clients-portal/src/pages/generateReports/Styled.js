import { Modal, Box, Select, MenuItem } from '@mui/material';

export const StyledModal = ({ children, ...props }) => (
  <Modal {...props}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}
    >
      {children}
    </Box>
  </Modal>
);

export const CustomizedSelect = ({
  options,
  value,
  setValue,
  hasNone,
  ...props
}) => (
  <Select
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
  </Select>
);
