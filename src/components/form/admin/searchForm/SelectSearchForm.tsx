import { ChangeEvent } from 'react';

export interface SelectProps {
  label?: string;
  value?: string;
  options: Array<{ label: string; value: string }>;
  onChangeCallBack?: (data?: any) => void;
}

export default function SelectSearchForm(props: SelectProps) {
  const { label, value, options, onChangeCallBack } = props;

  //FN: select
  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeCallBack?.(e.target.value);
  };

  return (
    <>
      <div className="row">
        {label && <div className="tit">{label}</div>}
        <div className="con">
          <div className="selectbox-wrap">
            <div className="selectbox">
              <select defaultValue={value} onChange={handleChangeSelect}>
                {options.map((item, idx) => (
                  <option value={item.value} key={idx}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
