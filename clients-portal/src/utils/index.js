import { format } from 'date-fns';

export const sortString = (key) => {
  return (a, b) => {
    const a1 = a[key]?.toUpperCase();
    const b1 = b[key]?.toUpperCase();
    if (a1 < b1) return -1;
    if (a1 > b1) return 1;
    return 0;
  };
};

export const sortNumber = (key) => {
  return (a, b) => a[key] - b[key];
};

export const formatNumber = (value) => Intl.NumberFormat().format(value);

export const formatDate = (foramt) => (value) =>
  format(new Date(value), foramt);
