import GridTableBox, {
  ColDefs,
  PageInfo,
} from 'src/components/form/grid/GridTableBox';
import AdminPaginationBox from 'src/components/form/admin/AdminPaginationBox';
import { useState } from 'react';

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

//page가 없는 api list를 paging처리
export default function AdminNoPaginationGridBox(props: Props) {
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

  //FN: 선택된 row
  const handleGridSelectedRows = (selRows: any[]) => {
    if (selRows.length > 0) {
      const updatedSelectedRows = new Set(selRows);
      selRows?.map((row) => {
        updatedSelectedRows.delete(selRows);
        const rowId = row[colDefs[0].field || ''];
        updatedSelectedRows.add(rowId);
      });

      setSelectedRows(updatedSelectedRows);

      onGridSelectedRows?.(selRows);
    } else {
      setSelectedRows(new Set());
      onGridSelectedRows?.([]);
    }
  };

  // 현재 페이지에 해당하는 데이터
  const paginatedData =
    (rowData?.length > 0 &&
      rowData?.slice(
        ((pageInfo?.pageNo || 1) - 1) * (pageInfo?.pageSize || 10),
        (pageInfo?.pageNo || 1) * (pageInfo?.pageSize || 10)
      )) ||
    [];

  //FN: currentPage
  const handleClickPagination = (curPage: number) => {
    onChangeCurrentPage?.(curPage);
    setSelectedRows(new Set()); // 페이지 변경 시 선택된 행 초기화
  };

  return (
    <div className="a-table-area mt-20">
      <h3 className="lt-title-type2">{title} </h3>
      <div className="content-head mt-10">
        <div className="front">
          <span className="total">
            총 <strong className="count">{pageInfo?.totalCount || 0}</strong>건
          </span>

          {leftButtons}
        </div>

        <div className="lt-btn-area">{rightButtons}</div>
      </div>

      <GridTableBox
        pageInfo={pageInfo}
        colDefs={colDefs}
        rowData={paginatedData} //{rowData}
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
          pageCount={10} // 보여줄 페이지 개수
          currentPage={pageInfo?.pageNo || 1} // 현재 페이지
          onClickCallBack={handleClickPagination}
        />
      </div>
    </div>
  );
}
