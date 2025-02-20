import { ChangeEvent } from 'react';

interface Props {
  divClassName?: string;
  divStyle?: React.CSSProperties;
  inputClassName?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChangeCallback?: (data?: any) => void;
}

export default function AdminInputBox(props: Props) {
  const {
    divClassName,
    divStyle,
    inputClassName,
    label,
    value,
    placeholder = '텍스트를 입력해 주세요.',
    disabled,
    onChangeCallback,
  } = props;

  //FN: text value
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeCallback?.(e.target.value);
  };

  return (
    <>
      <div className={`input ${divClassName}`} style={divStyle}>
        <input
          type="text"
          className={`${inputClassName ? inputClassName : 'inp'}`}
          // defaultValue={value}
          value={value}
          onChange={handleChangeInput}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
      {/* <p>※ 색인어는 콤마(,)로 구분하여 입력해 주세요.</p> */}
    </>
  );
}
