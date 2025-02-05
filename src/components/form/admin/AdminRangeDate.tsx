import { ChangeEvent } from 'react';
import { dateStringFormat } from 'src/utils/date';

interface Props {
  label?: string;
  startDate?: string;
  endDate?: string;
  onChangeCallback?: (startDate?: string, endDate?: string) => void;
}

export default function AdminRangeDate(props: Props) {
  const { label, startDate, endDate, onChangeCallback } = props;

  //FN: start/end date
  const handleChangeDate = (
    e: ChangeEvent<HTMLInputElement>,
    flag: 'startDate' | 'endDate'
  ) => {
    let start = dateStringFormat(startDate, 'YYYY-MM-DD');
    let end = dateStringFormat(endDate, 'YYYY-MM-DD');
    if (flag === 'startDate') {
      start = dateStringFormat(e.target.value, 'YYYY-MM-DD');
    }
    if (flag === 'endDate') {
      end = dateStringFormat(e.target.value, 'YYYY-MM-DD');
    }
    onChangeCallback?.(start, end);
  };

  return (
    <>
      <div className="input">
        <input
          type="date"
          className="inp"
          defaultValue={dateStringFormat(startDate, 'YYYY-MM-DD')}
          onChange={(e) => handleChangeDate(e, 'startDate')}
        />{' '}
      </div>
      ~
      <div className="input">
        <input
          type="date"
          className="inp"
          defaultValue={dateStringFormat(endDate, 'YYYY-MM-DD')}
          onChange={(e) => handleChangeDate(e, 'endDate')}
        />
      </div>
    </>
  );
}
