import { ChangeEvent } from 'react';

export interface DateProps {
  label?: string;
  value?: string;
  onChangeDateCallback?: (data?: any) => void;
}

export default function DateSearchForm(props: DateProps) {
  const { label = '날짜', value } = props;
  const { onChangeDateCallback } = props;

  //FN: date change
  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeDateCallback?.(e.target.value);
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
                defaultValue={value}
                onChange={handleChangeDate}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
