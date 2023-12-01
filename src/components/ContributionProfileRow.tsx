import { useEffect, useState, FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface MonthsProps {
  isPaid: boolean;
}

const Months: FC<MonthsProps> = ({ isPaid }) => {
  return (
    <p style={{ color: `var(--theme-blue)` }}>{isPaid && <FaCheckCircle />}</p>
  );
};

const ContributionProfileRow = () => {
  const [months, setMonths] = useState([]);

  const monthsCovered = 6;

  useEffect(() => {
    const initializeMonths: any = Array(12).fill(false);

    for (let i = 0; i < monthsCovered; i++) {
      initializeMonths[i] = true;
    }
    setMonths(initializeMonths);
  }, []);
  return (
    <div className='table-rows'>
      <div className='table-info'>
        <p className='serial-number'>S/N</p>
        <p className='name'>Name</p>
        <p className='slot'>Slot</p>
      </div>
      <div className='months-body'>
        {months.map((isPaid, index) => {
          return <Months key={index} isPaid={isPaid} />;
        })}
      </div>
    </div>
  );
};

export default ContributionProfileRow;
