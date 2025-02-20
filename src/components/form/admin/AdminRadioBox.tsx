import { ChangeEvent } from 'react';

interface Props {
  label?: string;
  value?: string;
  options?: Array<{ name: string; value: string; content?: React.ReactNode }>;
  disabled?: boolean;
  onChangeCallback?: (data: string) => void;
}

export default function AdminRadioBox(props: Props) {
  const { label, value, options, disabled, onChangeCallback } = props;

  //FN: start/end date
  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeCallback?.(e.target.value);
  };

  return (
    <>
      {options?.map((item, idx) => (
        <div className="chkbox" key={idx}>
          <label>
            <input
              type="radio"
              defaultValue={item.value}
              // value={item.value}
              checked={item.value === value}
              onChange={handleChangeRadio}
              disabled={disabled}
            />
            <span className="text">{item.name}</span>

            {item.content}
          </label>
        </div>
      ))}
    </>
  );
}
