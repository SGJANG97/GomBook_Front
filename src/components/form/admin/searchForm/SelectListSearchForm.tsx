import { ChangeEvent } from 'react';

export interface SelectListProps {
  label?: string;
  selectList: Array<{
    name: string;
    defaultValue: string;
    options: Array<{ label: string; value: string }>;
  }>;
  onChangeCallBack?: (data?: any, name?: string) => void;
}

export default function SelectListSearchForm(props: SelectListProps) {
  const { label, selectList, onChangeCallBack } = props;

  //FN: select
  const handleChangeSelect = (
    e: ChangeEvent<HTMLSelectElement>,
    name: string
  ) => {
    onChangeCallBack?.(e.target.value, name);
  };

  return (
    <>
      <div className="row">
        <div className="tit">{label}</div>
        <div className="con">
          <div className="selectbox-wrap">
            {selectList.map((item, idx) => (
              <div className="selectbox" key={idx}>
                <select
                  defaultValue={item.defaultValue}
                  onChange={(e) => handleChangeSelect(e, item.name)}
                >
                  {item.options.map((option, opIdx) => (
                    <option value={option.value} key={opIdx}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
