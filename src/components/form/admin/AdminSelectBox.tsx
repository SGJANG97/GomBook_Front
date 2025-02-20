import { ChangeEvent } from 'react';

interface Props {
  label?: string;
  value?: string;
  options: Array<{ label: string; value: string }>;
  onChangeCallback?: (data?: any) => void;
  style?: React.CSSProperties;
}

export default function AdminSelectBox(props: Props) {
  const { label, value, options, onChangeCallback, style } = props;

  //FN: select
  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeCallback?.(e.target.value);
  };

  return (
    <div className="selectbox">
      <select value={value} onChange={handleChangeSelect} style={style}>
        <option value="" disabled hidden>
          선택
        </option>
        {options.map((item, idx) => (
          <option value={item.value} key={idx}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
