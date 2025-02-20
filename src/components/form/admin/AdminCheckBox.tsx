import { ChangeEvent } from 'react';

interface Props {
  label?: string;
  value?: string;
  disabled?: boolean;
  onChangeCallback?: (data?: any) => void;
}

export default function AdminCheckBox(props: Props) {
  const { label, value, onChangeCallback, disabled } = props;

  //FN: 체크 on/off
  const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    let checked = 'N';
    if (e.target.checked) {
      checked = 'Y';
    } else {
      checked = 'N';
    }
    onChangeCallback?.(checked);
  };

  return (
    <div className="chkbox">
      <label>
        <input
          type="checkbox"
          defaultValue={value}
          checked={value === 'Y' ? true : false}
          onChange={handleChangeCheck}
          disabled={disabled}
        />
        <span className="text">{label}</span>
      </label>
    </div>
  );
}
