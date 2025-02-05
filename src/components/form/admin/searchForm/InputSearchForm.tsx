import { ChangeEvent } from 'react';

export interface InputProps {
  label?: string;
  value?: string;
  onChangeCallBack?: (data?: any) => void;
}

export default function InputSearchForm(props: InputProps) {
  const { label, value, onChangeCallBack } = props;

  //FN: input
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeCallBack?.(e.target.value);
  };
  return (
    <div className="row">
      <div className="tit">{label}</div>
      <div className="con">
        <div className="flex-wrap type1">
          <div className="input">
            <input
              type="text"
              className="inp"
              defaultValue={value}
              onChange={handleChangeInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
