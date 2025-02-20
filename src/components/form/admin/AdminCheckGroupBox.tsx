import { ChangeEvent, useState } from 'react';

export interface Props {
  value?: string | null;
  options: Array<{ name: string; value: string }>;
  onChangeCallBack?: (data?: string | null) => void;
}

export default function AdminCheckGroupBox(props: Props) {
  const { options, value = null, onChangeCallBack } = props;

  const [checkedValue, setCheckedValue] = useState<string | null>(
    value || null
  ); // 상태 관리

  //FN: 체크박스 상태 변경 핸들러
  const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let checkedVal = checkedValue || null;
    if (e.target.checked) {
      // 체크된 경우 배열에 추가
      if (checkedVal) {
        checkedVal += ',' + value; // checkedVal이 비어있지 않으면 쉼표와 함께 추가
      } else {
        checkedVal = value; // checkedVal이 비어있으면 value만 할당
      }
      setCheckedValue(checkedVal);
    } else {
      // 체크 해제된 경우 배열에서 제거
      const valList = checkedVal?.split(',');
      checkedVal = valList?.find((find) => find !== value) || null;
      setCheckedValue(checkedVal);
    }

    onChangeCallBack?.(checkedVal);
  };

  return (
    <>
      {options.map((item, idx) => (
        <div className="chkbox" key={`checkbox-${idx}`}>
          <label>
            <input
              type="checkbox"
              value={item.value}
              onChange={handleChangeCheck}
            />
            <span className="text">{item.name}</span>
          </label>
        </div>
      ))}
    </>
  );
}
