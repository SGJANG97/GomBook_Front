import { ChangeEvent } from 'react';

export interface RadioProps {
  label?: string;
  options: Array<{ label: string; value: string; chk: boolean }>;
  onChangeCallBack?: (data?: any) => void;
}

export default function RadioboxSearchForm(props: RadioProps) {
  const { label, options, onChangeCallBack } = props;

  //FN: input
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeCallBack?.(e.target.value);
  };
  return (
    <div className="row">
      <div className="tit">{label}</div>
      <div className="con">
        <div className="flex-wrap type1">
          <div className="chkbox">
            <label>
              {options.map((item, idx) => (
                <>
                  <input
                    type="radio"
                    className="inp"
                    defaultValue={item.value}
                    onChange={handleChangeInput}
                    checked={item.chk}
                  />
                  <span className="text">{item.label}</span>
                </>
              ))}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
