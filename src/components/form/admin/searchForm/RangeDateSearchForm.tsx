import { ChangeEvent, useState } from 'react';
import AdminButtonBox from '../AdminButtonBox';

interface ButtonItem extends React.HTMLProps<HTMLButtonElement> {
  title: string;
  value: number;
}

export interface RangeDateProps {
  label?: string;
  startDate?: string;
  endDate?: string;
  onChangeStartDateCallback?: (data?: any) => void;
  onChangeEndDateCallback?: (data?: any) => void;
  quickButtons?: ButtonItem[];
}

export default function RangeDateSearchForm(props: RangeDateProps) {
  const { label = '기간', startDate, endDate, quickButtons } = props;
  const { onChangeStartDateCallback, onChangeEndDateCallback } = props;

  const [rangeDay, setRangeDay] = useState<number>(1);

  //FN: start date change
  const handleChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeStartDateCallback?.(e.target.value);
  };
  //FN: end date change
  const handleChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeEndDateCallback?.(e.target.value);
  };
  //FN: 특정 기간 검색
  const handleClickRangeDay = (day: number) => {
    setRangeDay(day);
    onChangeStartDateCallback?.(rangeDay);
  };

  return (
    <>
      <div className="row">
        <div className="tit">{label}</div>
        <div className="con">
          <div className="calendar-wrap">
            <div className="input calendar">
              <input
                type="date"
                className="inp"
                defaultValue={startDate}
                onChange={handleChangeStartDate}
              />
            </div>
            <span className="m">~</span>
            <div className="input calendar">
              <input
                type="date"
                className="inp"
                defaultValue={endDate}
                onChange={handleChangeEndDate}
              />
            </div>
          </div>

          {quickButtons && (
            <div className="btn-wrap">
              {quickButtons?.map((item, idx) => (
                <AdminButtonBox
                  key={`range-date-${idx}`}
                  label={item.title}
                  onClickCallback={() => handleClickRangeDay(item.value)}
                  className={`bd-gray ${rangeDay === item.value ? 'red' : ''}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
