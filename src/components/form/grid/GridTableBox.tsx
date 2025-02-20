import {
  forwardRef,
  MutableRefObject,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { dateStringFormat } from 'src/utils/date';

export interface PageInfo {
  totalCount: number;
  pageNo?: number;
  pageSize?: number;
}

export interface ColDefs {
  field?: string;
  headerName?: string;
  value?:
    | string
    | number
    | ((params?: any) => string | number | React.ReactNode);
  type?:
    | 'checkbox'
    | 'radio'
    | 'date'
    | 'dateRange'
    | 'link'
    | 'pageNumber'
    | '';
  linkUrl?: string;
  linkId?: string;
  colStyle?: React.CSSProperties;
  className?: string; //down/up
}

interface Props {
  className?: string;
  pageInfo?: PageInfo;
  colDefs: ColDefs[];
  rowData: any[];
  noDataMessage?: string;
  selectedRows?: Set<string>;
  onSelectedRows?: (data?: any) => void;
}

const GridTableBox = forwardRef<HTMLTableElement, Props>((props, ref) => {
  const {
    className,
    pageInfo,
    colDefs = [],
    rowData = [],
    noDataMessage,
    selectedRows,
    onSelectedRows,
  } = props;

  const gridRef = useRef() as MutableRefObject<HTMLTableElement>;

  // ref가 전달된 경우, gridRef를 ref에 할당
  useImperativeHandle(ref, () => gridRef.current);

  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

  //FN: cell 체크 선택/해제
  const handleCheckboxChange = (row: any) => {
    const updatedSelectedRows = new Set(selectedRows);
    const rowId = row[colDefs[0].field || '']; // 고유 식별자를 가져옵니다.

    if (updatedSelectedRows.has(rowId)) {
      updatedSelectedRows.delete(rowId); // 이미 선택된 경우 선택 해제
    } else {
      updatedSelectedRows.add(rowId); // 선택되지 않은 경우 추가
    }

    // 선택된 모든 행의 데이터를 가져옵니다.
    const selectedData = rowData.filter((row) =>
      updatedSelectedRows.has(row[colDefs[0].field || ''])
    );
    onSelectedRows?.(selectedData); // 선택된 행을 부모로 전달
  };

  //FN: checkbox 전체 선택/해제
  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllChecked(e.target.checked);

    if (e.target.checked) {
      onSelectedRows?.(rowData); // 모든 행을 부모로 전달
    } else {
      // 모든 체크박스를 해제
      // setSelectedRows(new Set());
      onSelectedRows?.([]); // 선택 해제
    }
  };

  //FN: radio box
  const handleRadioChange = (row: any) => {
    onSelectedRows?.([row]);
  };

  //FN: Row select
  const handleClickRow = (row: any, rowIndex: number) => {
    //이미 선택된 행 다시 클릭하면 선택 해제
    if (selectedRowIndex === rowIndex) {
      setSelectedRowIndex(null);
      onSelectedRows?.(null); // 선택된 행을 부모로 전달
    } else {
      setSelectedRowIndex(rowIndex);
      onSelectedRows?.([row]); // 선택된 행을 부모로 전달
    }

    // 체크박스가 있는 열의 필드 이름을 찾기
    const checkboxCol = colDefs.find((col) => col.type === 'checkbox');
    const radioboxCol = colDefs.find((col) => col.type === 'radio');

    if (checkboxCol) {
      handleCheckboxChange(row);
    }
    if (radioboxCol) {
      handleRadioChange(row);
    }
  };

  return (
    <div className={`${className ? className : 'table type1'}`}>
      <table ref={gridRef}>
        <colgroup>
          {colDefs?.map((col, idx) => <col style={col.colStyle} key={idx} />)}
        </colgroup>
        <thead>
          <tr>
            {colDefs?.map((col, idx) => (
              <th key={idx}>
                {col.type === 'checkbox' ? (
                  <input
                    type="checkbox"
                    onChange={handleSelectAllChange} // 모든 체크박스 선택/해제 핸들러
                    checked={allChecked} // 모든 체크박스가 선택되었는지 확인
                  />
                ) : (
                  <span className={col.className}>{col.headerName}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rowData && rowData?.length > 0 ? (
            rowData?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => handleClickRow(row, rowIndex)}
                style={{
                  backgroundColor:
                    // selectedRowIndex === rowIndex
                    //   ? trBackgroundColor
                    //   : 'transparent',
                    selectedRowIndex === rowIndex ? '#e0e0e0' : 'transparent',
                }} // 선택된 행 강조
              >
                {colDefs?.map((col, colIndex) => (
                  <td key={colIndex} className={'ellipsis'}>
                    {
                      col.type === 'checkbox' ? (
                        <input
                          type="checkbox"
                          checked={selectedRows?.has(row[col.field || ''])} // 체크 상태
                          onChange={() => handleCheckboxChange(row)} // 체크박스 핸들링
                        />
                      ) : col.type === 'radio' ? (
                        <input
                          type="radio"
                          checked={selectedRows?.has(row[col.field || ''])} // 체크 상태
                          onChange={() => handleRadioChange(row)} // 라디오박스 핸들링
                        />
                      ) : col.type === 'date' ? (
                        dateStringFormat(row[col.field || ''], 'YYYY-MM-DD')
                      ) : col.type === 'dateRange' ? (
                        col.field
                          ?.split(',')
                          .map((item) =>
                            dateStringFormat(
                              row[item.trim() || ''],
                              'YYYY-MM-DD'
                            )
                          )
                          .join(' ~ ')
                      ) : col.type === 'link' ? (
                        <Link to={`${col.linkUrl}/${row[col.linkId || '']}`}>
                          {typeof col.value === 'function'
                            ? col.value({ data: row, idx: rowIndex }) // 함수 호출
                            : row[col.field || ''] || '-'}
                          {/* {row[col.field || ''] || '-'} */}
                        </Link>
                      ) : col.type === 'pageNumber' ? (
                        <>
                          {(pageInfo?.totalCount || 0) -
                            ((Number(pageInfo?.pageNo || 0) - 1) *
                              Number(pageInfo?.pageSize || 0) +
                              rowIndex)}
                        </>
                      ) : typeof col.value === 'function' ? (
                        col.value({ data: row, idx: rowIndex }) // 함수 호출
                      ) : (
                        row[col.field || ''] || '-'
                      ) // 필드가 존재하지 않을 경우 대체 텍스트 표시
                    }
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={colDefs?.length}>{noDataMessage}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
});

export default GridTableBox;
