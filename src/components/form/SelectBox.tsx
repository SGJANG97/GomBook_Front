import { ChangeEvent } from 'react';

interface Props {
  label?: string;
  value?: string;
  options: Array<{ name: string; value: string }>;
  onChangeCallback?: (data?: any) => void;
}

export default function SelectBox(props: Props) {
  const { label, value, options, onChangeCallback } = props;

  //FN: select
  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeCallback?.(e.target.value);
  };

  return (
    <select value={value} onChange={handleChangeSelect}>
      <option value="" disabled hidden>
        선택
      </option>
      {options.map((item, idx) => (
        <option value={item.value} key={idx}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
