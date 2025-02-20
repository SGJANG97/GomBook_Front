import { ChangeEvent } from 'react';

export interface SelectInputProps {
  label?: string;
  options: Array<{ label: string; value: string }>;
  selectValue?: string | null;
  inputValue?: string | null;
  inputPlaceholder?: string;
  onChangeSelectCallBack?: (data?: any) => void;
  onChangeInputCallBack?: (data?: any) => void;
}

export default function SelectInputSearchForm(props: SelectInputProps) {
  const {
    label,
    options,
    selectValue,
    inputValue,
    inputPlaceholder,
    onChangeSelectCallBack,
    onChangeInputCallBack,
  } = props;

  //FN: select
  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeSelectCallBack?.(e.target.value);
  };

  //FN: input
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputCallBack?.(e.target.value);
  };

  return (
    <div className="row">
      {label && <div className="tit">{label}</div>}
      <div className="con">
        <div className="flex-wrap type1">
          <div className="selectbox">
            <select
              defaultValue={selectValue || ''}
              onChange={handleChangeSelect}
            >
              {options.map((item, idx) => (
                <option value={item.value} key={idx}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="input">
            <input
              type="text"
              className="inp"
              defaultValue={inputValue || ''}
              onChange={handleChangeInput}
              placeholder={inputPlaceholder}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
