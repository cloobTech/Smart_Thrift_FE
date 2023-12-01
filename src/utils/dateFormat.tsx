import { format } from 'date-fns';

const formatDate = (dateString: any, formatString: any) => {
  const parsedDate = new Date(dateString);
  return format(parsedDate, formatString);
};

export default formatDate;
