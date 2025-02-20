import { useEffect, useState } from 'react';
import GridTableBox, {
  ColDefs,
  PageInfo,
} from 'src/components/form/grid/GridTableBox';
import AdminPaginationBox from 'src/components/form/admin/AdminPaginationBox';

interface Props {
  pageInfo?: PageInfo;
  title?: string;
  colDefs: ColDefs[];
  rowData: any[];
  leftButtons?: React.ReactNode;
  rightButtons?: React.ReactNode;
  noDataMessage?: string;
  onGridSelectedRows?: (data?: any) => void;
  onChangeCurrentPage?: (curPage: number) => void;
}

export default function AdminGridBox(props: Props) {
  const {
    pageInfo,
    title,
    colDefs,
    rowData,
    leftButtons,
    rightButtons,
    noDataMessage,
    onGridSelectedRows,
    onChangeCurrentPage,
  } = props;

  // 선택된 행의 ID를 저장하는 Set
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  useEffect(() => {
    return () => {
      setSelectedRows(new Set());
    };
  }, []);

  //FN: 선택된 row
  const handleGridSelectedRows = (selRows: any[]) => {
    setSelectedRows(new Set());
    onGridSelectedRows?.([]);

    if (selRows?.length > 0) {
      const updatedSelectedRows = new Set(selectedRows);
      selRows?.map((row) => {
        const rowId = row[colDefs[0].field || ''];
        updatedSelectedRows.add(rowId);
      });

      setSelectedRows(updatedSelectedRows);

      onGridSelectedRows?.(selRows);
    }
  };

  //FN: currentPage
  const handleClickPagination = (curPage: number) => {
    onChangeCurrentPage?.(curPage);
    setSelectedRows(new Set()); // 페이지 변경 시 선택된 행 초기화
  };

  return (
    <>
      <div className="content-head">
        <div className="front">
          <span className="total">
            {title ? (
              title
            ) : (
              <>
                총{' '}
                <strong className="count">{pageInfo?.totalCount || 0}</strong>건
              </>
            )}
          </span>

          {leftButtons}
        </div>

        <div>{rightButtons}</div>
      </div>

      <GridTableBox
        pageInfo={pageInfo}
        colDefs={colDefs}
        rowData={rowData}
        noDataMessage={noDataMessage}
        selectedRows={selectedRows}
        onSelectedRows={handleGridSelectedRows}
      />

      {/* <!-- 페이지네이션 --> */}
      <div>
        <AdminPaginationBox
          totalCount={
            pageInfo?.totalCount === 0 ? 1 : pageInfo?.totalCount || 1
          } // 데이터의 총 개수
          itemCountPerPage={pageInfo?.pageSize || 10} // 페이지 당 보여줄 데이터 개수
          pageCount={pageInfo?.pageSize || 10} // 보여줄 페이지 개수
          currentPage={pageInfo?.pageNo || 1} // 현재 페이지
          onClickCallBack={handleClickPagination}
        />
      </div>
    </>
  );
}
