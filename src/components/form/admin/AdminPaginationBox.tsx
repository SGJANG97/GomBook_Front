import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { handleClickPreventDefault } from 'src/utils/commonHandler';

interface Props {
  totalCount: number; // 데이터의 총 개수
  itemCountPerPage: number; // 페이지 당 보여줄 데이터 개수
  pageCount: number; // 보여줄 페이지 개수
  currentPage: number; // 현재 페이지
  onClickCallBack?: (data?: any) => void;
}

export default function AdminPaginationBox(props: Props) {
  const {
    totalCount,
    itemCountPerPage,
    pageCount,
    currentPage,
    onClickCallBack,
  } = props;

  const totalPages = Math.ceil(totalCount / itemCountPerPage); // 총 페이지 개수
  const [start, setStart] = useState(1); // 시작 페이지
  const noPrev = start === 1; // 이전 페이지가 없는 경우
  const noNext = start + pageCount - 1 >= totalPages; // 다음 페이지가 없는 경우

  useEffect(() => {
    if (currentPage === start + pageCount) setStart((prev) => prev + pageCount);
    if (currentPage < start) setStart((prev) => prev - pageCount);
  }, [currentPage, pageCount, start]);

  //FN: prev, next
  const handleClickPage = handleClickPreventDefault((curPage: number) => {
    if (curPage >= 1 && curPage <= totalPages) {
      // navigate(`?page=${curPage}`);
      onClickCallBack?.(curPage);
    }
  });

  //FN: select
  const handleClickPageSelect = (curPage: number) => {
    if (curPage >= 1 && curPage <= totalPages) {
      onClickCallBack?.(curPage);
    }
  };

  return (
    <>
      {/* <!-- //PC 페이지네이션 --> */}
      <div className="pagnation show-pc">
        <Link
          to=""
          // to={`?page=${currentPage > 1 ? currentPage - 1 : currentPage}`}
          className="arrow prev"
          onClick={(e) => handleClickPage(e, currentPage - 1)}
          // style={{ display: currentPage === 1 ? 'none' : 'inline' }}
        >
          이전
        </Link>

        <span className="num">
          {[...Array(pageCount)].map((_, i) => {
            const pageNumber = start + i;

            return (
              pageNumber <= totalPages && (
                <Link
                  className={
                    // urlParams.get('page')?.toString() === pageNumber.toString()
                    currentPage === pageNumber ? 'active' : ''
                  }
                  to=""
                  // to={`?page=${pageNumber}`}
                  onClick={(e) => {
                    handleClickPage(e, pageNumber);
                    // onClickCallBack?.(pageNumber);
                  }}
                  key={pageNumber}
                >
                  {pageNumber}
                </Link>
              )
            );
          })}
        </span>

        <Link
          to=""
          // to={`?page=${currentPage < totalPages ? currentPage + 1 : currentPage}`}
          className="arrow next"
          onClick={(e) => handleClickPage(e, currentPage + 1)}
          // style={{ display: currentPage === totalPages ? 'none' : 'inline' }}
        >
          다음
        </Link>
      </div>

      {/* <!-- MO 페이지네이션 --> */}
      <div className="pagnation show-mo">
        <div className="flex">
          <div className="selectbox">
            <select
              defaultValue={currentPage}
              onChange={(e) => {
                handleClickPageSelect(Number(e.target.value));
                onClickCallBack?.(e.target.value);
              }}
            >
              {[...Array(pageCount)].map((_, i) => {
                const pageNumber = start + i;
                return (
                  pageNumber <= totalPages && (
                    <option value={pageNumber} key={pageNumber}>
                      {pageNumber}
                    </option>
                  )
                );
              })}
            </select>
          </div>
          <p>{pageCount}</p>
        </div>
      </div>
    </>
  );
}
