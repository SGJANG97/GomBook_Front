import { ChangeEvent, useState } from 'react';

export interface CheckboxProps {
  label?: string;
  values?: string | null;
  options: Array<{ name: string; value: string }>;
  onChangeCallBack?: (data?: string | null) => void;
}

export default function CheckboxSearchForm(props: CheckboxProps) {
  const { label, options, values = null, onChangeCallBack } = props;

  const [checkedValues, setCheckedValues] = useState<string | null>(
    values || null
  ); // 상태 관리

  //FN: 체크박스 상태 변경 핸들러
  const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let checkedVal = checkedValues || null;
    if (e.target.checked) {
      // 체크된 경우 배열에 추가
      if (checkedVal) {
        checkedVal += ',' + value; // checkedVal이 비어있지 않으면 쉼표와 함께 추가
      } else {
        checkedVal = value; // checkedVal이 비어있으면 value만 할당
      }
      setCheckedValues(checkedVal);
    } else {
      // 체크 해제된 경우 배열에서 제거
      const valList = checkedVal?.split(',');
      checkedVal = valList?.find((find) => find !== value) || null;
      setCheckedValues(checkedVal);
    }

    onChangeCallBack?.(checkedVal);
  };

  return (
    <div className="row">
      <div className="tit">{label}</div>
      <div className="con">
        {/* <div className="flex-wrap type1"> */}
        {options.map((item, idx) => (
          <div className="chkbox" key={`checkbox-${idx}`}>
            <label>
              <input
                type="checkbox"
                className="inp"
                value={item.value}
                onChange={handleChangeCheck}
              />
              <span className="text">{item.name}</span>
            </label>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}
