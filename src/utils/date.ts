import dayjs from 'dayjs';

export const dateStringFormat = (value: string = '', format?: string) => {
  return value ? dayjs(value).format(format || 'YY/MM/DD') : '';
};

export const dateToLocale = (value: string = '') => {
  return value ? dayjs(value).format('YYYY-MM-DD HH:mm:ss') : '';
};

export const getAge = (value?: string) => {
  if (!value) return 0;

  const fromDay = new Date(dayjs(value).format('YYYY-MM-DD'));
  const today = new Date();
  const age = today.getFullYear() - fromDay.getFullYear();
  const month = today.getMonth() - fromDay.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < fromDay.getDate())) {
    return age - 1;
  }

  return age;
};
