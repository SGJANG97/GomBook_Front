import { ChangeEvent, useState } from 'react';
import AdminButtonBox from '../AdminButtonBox';
import dayjs from 'dayjs';

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
  const handleClickRangeDay = (day: any) => {
    setRangeDay(day);
    // 주문목록과 같은 화면 버튼에서 클릭시
    // 예를들어 90을 subtract로 일수로 뒤로 하고 넣습니다
    let rangeDay = dayjs(endDate).subtract(day, 'day').format('YYYY-MM-DD');
    console.log('Range2 : ', rangeDay);
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
                value={startDate}
                // value={quickButtons !== undefined ? startDate : undefined}
                onChange={handleChangeStartDate}
              />
            </div>
            <span className="m">~</span>
            <div className="input calendar">
              <input
                type="date"
                className="inp"
                value={endDate}
                // value={quickButtons !== undefined ? endDate : undefined}
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
