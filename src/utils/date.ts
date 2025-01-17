type date = string | number | Date;

type options = {
  weekday: 'narrow' | 'short' | 'long';
  era: 'narrow' | 'short' | 'long';
  year: 'numeric' | '2-digit';
  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
  day: 'numeric' | '2-digit';
  hour: 'numeric' | '2-digit';
  minute: 'numeric' | '2-digit';
  second: 'numeric' | '2-digit';
  timeZoneName: 'short' | 'long';
  timeZone: 'Asia/Shanghai';
  hour12: true | false;
  hourCycle: 'h11' | 'h12' | 'h23' | 'h24';
  formatMatcher: 'basic' | 'best fit';
};

export const formatDateByOptions = (
  date: date,
  options?: Intl.DateTimeFormatOptions
): string => {
  try {
    const dateClone = new Date(date);
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };

    const opts = options || defaultOptions;
    const formatter = new Intl.DateTimeFormat('it-IT', opts);
    return formatter.format(dateClone);
  } catch (err) {
    console.error('Error formatDate::', err);
    return '';
  }
};

export const formatDate = (
  date: date,
  format: string = 'yyyyMMddhhmmss',
  spacing: string = '-'
) => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Il primo parametro deve essere un'istanza valida di Date.");
  }

  const map = {
    hh: 'T' + String(date.getHours()).padStart(2, '0'),
    mm: ':' + String(date.getMinutes()).padStart(2, '0'),
    ss: ':' + String(date.getSeconds()).padStart(2, '0'),
    MM: spacing + String(date.getMonth() + 1).padStart(2, '0'),
    dd: spacing + String(date.getDate()).padStart(2, '0'),
    yy: spacing + date.getFullYear().toString().slice(-2),
    yyyy: spacing + date.getFullYear().toString(),
  };

  return format.replace(/yyyy|yy|MM|dd|hh|mm|ss/gi, (matched, index) => {
    const value = map[matched as keyof typeof map];
    if (matched in map) {
      return index === 0 ? value.slice(1) : value;
    }
    return matched;
  });
};
