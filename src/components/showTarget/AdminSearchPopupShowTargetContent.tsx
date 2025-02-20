import { useEffect, useState } from 'react';

import AdminInputBox from 'src/components/form/admin/AdminInputBox';
import AdminPopupGridBox from 'src/components/form/admin/AdminNoPaginationGridBox';
import { storeAdminAlertModalActions } from 'src/lib/store/adminAlertModalStore';
import { storeAdminConfirmModalActions } from 'src/lib/store/adminConfirmModalStore';
import { ShowTargetCodeType } from 'src/utils/codeDefines';
import {
  apiGetCustomerGroupList,
  apiGetPartnerList,
} from 'src/lib/api/apiPath';
import {
  ShowTargetColDefs,
  ShowTargetGroupColDefs,
} from 'src/components/showTarget/_config/gridColDefs';
import { ColDefs, PageInfo } from 'src/components/form/grid/GridTableBox';
import { ShowTarget } from 'src/models/common/ShowTarget';
import AdminNoPaginationGridBox from 'src/components/form/admin/AdminNoPaginationGridBox';
import AdminButtonBox from '../form/admin/AdminButtonBox';
import { useAdminApiCallHandler } from 'src/hooks/useAdminApiCall';

interface Props {
  showType: string;
  modalClose?: () => void;
  onClickCallback?: (showTargetList: ShowTarget[]) => void;
}

export default function AdminSearchPopupShowTargetContent(props: Props) {
  const { modalClose, showType, onClickCallback } = props;

  //api call
  const apiCall = useAdminApiCallHandler();

  //store: alert modal 상태관리
  const alertModalAction = storeAdminAlertModalActions();
  //store: confirm modal 상태관리
  const confirmModalAction = storeAdminConfirmModalActions();

  //노출대상 컬럼
  const [viewColDefs, setViewColDefs] = useState<ColDefs[]>(ShowTargetColDefs);

  const [searchTargetCode, setSearchTargetCode] = useState<string | null>(null);
  const [searchTargetName, setSearchTargetName] = useState<string | null>(null);

  //Grid Selected
  const [targetSelectedRows, setTargetSelectedRows] = useState<ShowTarget[]>(
    []
  );
  const [addTargetSelectedRows, setAddTargetSelectedRows] = useState<
    ShowTarget[]
  >([]);

  //Grid Data
  const [targetList, setTargetList] = useState<ShowTarget[]>([]);
  const [addTargetList, setAddTargetList] = useState<ShowTarget[]>([]);

  //페이징
  const [targetPagination, setTargetPagination] = useState<PageInfo>({
    totalCount: 0,
    pageNo: 1,
    pageSize: 10,
  });
  const [addTargetPagination, setAddTargetPagination] = useState<PageInfo>({
    totalCount: 0,
    pageNo: 1,
    pageSize: 10,
  });

  useEffect(() => {
    //거래처, 단가그룹, 거래처그룹
    if (showType === ShowTargetCodeType.getCode('PARTNER')) {
      //거래처
      setViewColDefs(ShowTargetColDefs);
    } else if (
      // 단가그룹, 거래처그룹
      showType === ShowTargetCodeType.getCode('PRGROUP') ||
      showType === ShowTargetCodeType.getCode('TRGROUP')
    ) {
      //그룹
      setViewColDefs(ShowTargetGroupColDefs);
    }
    apiGetShowTarget();
  }, [showType]);

  // API 호출: 거래처 목록 조회 ==================================//
  const apiGetShowTarget = async () => {
    let apiUrl = '';
    let params: {
      code: string | null;
      name: string | null;
      flag?: string | null;
    } = {
      code: searchTargetCode || null,
      name: searchTargetName || null,
      flag: null,
    };

    //거래처
    if (showType === ShowTargetCodeType.getCode('PARTNER')) {
      apiUrl = apiGetPartnerList();
    }
    //그룹 (단가, 거래처)
    if (
      showType === ShowTargetCodeType.getCode('PRGROUP') ||
      showType === ShowTargetCodeType.getCode('TRGROUP')
    ) {
      params = {
        ...params,
        flag:
          showType === ShowTargetCodeType.getCode('PRGROUP') //단가
            ? 'PR'
            : showType === ShowTargetCodeType.getCode('TRGROUP') //거래처
              ? 'TR'
              : '', //단가: PR, 거래처: TR
      };

      apiUrl = apiGetCustomerGroupList();
    }

    if (apiUrl) {
      // API 호출: 거래처 목록 조회 ==================================//
      let result = await apiCall.adminApiCall('GET', apiUrl, params);

      if (result) {
        //거래처 List
        setTargetList(result.list);
        setTargetPagination({
          ...targetPagination,
          totalCount: result?.list?.length,
        });
      }
    }
  };

  //FN: 거래처 코드
  const handleChangeTargetCode = (e: string) => {
    setSearchTargetCode(e);
  };
  //FN: 거래처명
  const handleChangeTargetName = (e: string) => {
    setSearchTargetName(e);
  };

  //FN: 거래처 코드, 거래처명으로 조회
  const handleClickTargetSearch = () => {
    // API 호출: 거래처 목록 조회 ==================================//
    apiGetShowTarget();
  };
  //FN: 거래처 목록에서 선택
  const handleClickTargetSelectedRows = (selectedRows: any) => {
    setTargetSelectedRows(selectedRows);
    setAddTargetPagination({
      ...addTargetPagination,
      totalCount: selectedRows.length,
    });
  };
  //FN: 추가한 목록에서 선택
  const handleClickAddTargetSelectedRows = (selectedRows: any) => {
    setAddTargetSelectedRows(selectedRows);
  };
  //FN: 선택된 거래처 추가
  const handleClickTargetSelectedAdd = () => {
    if (targetSelectedRows.length === 0) {
      alertModalAction.setAdminAlertModal({
        modalOpen: true,
        message: '추가할 데이터를 선택하세요.',
      });
      return false;
    }
    // console.log('addTargetList: ', addTargetList);
    // console.log('targetSelectedRows: ', targetSelectedRows);

    const addList = [...addTargetList, ...targetSelectedRows];

    // addTargetList의 중복 데이터 제거
    const uniqueAddTargetList: ShowTarget[] = Array.from(
      new Set(addList.map((item) => item.code))
    ).map((code) => {
      return addList.find((item) => item.code === code);
    }) as [];

    setAddTargetList(uniqueAddTargetList);
  };

  //FN: 조회된 목록 전체 추가
  const handleClickAllListAdd = () => {
    setAddTargetList(targetList);
    setAddTargetPagination({
      ...addTargetPagination,
      totalCount: addTargetList.length + targetList.length,
    });
  };
  //FN: 추가한 목록에서 선택된 row 삭제 확인
  const handleClickAddTargetSelectedDeleteConfirm = () => {
    if (addTargetSelectedRows.length === 0) {
      alertModalAction.setAdminAlertModal({
        modalOpen: true,
        message: '삭제할 항목을 선택하세요.',
      });
      return false;
    }

    confirmModalAction.setAdminConfirmModal({
      modalOpen: true,
      message: <>선택한 항목을 삭제 하시겠습니까?</>,
      onClickOkCallback: handleClickAddTargetSelectedDelete,
    });
  };
  //FN: 추가한 목록에서 선택된 row 삭제
  const handleClickAddTargetSelectedDelete = () => {
    //confirm 초기화
    confirmModalAction.setAdminConfirmModalInit();

    const filterData = addTargetList.filter((filter) =>
      addTargetSelectedRows.some((some) => some.code !== filter.code)
    );
    setAddTargetList(filterData);

    alertModalAction.setAdminAlertModal({
      modalOpen: true,
      message: '삭제 완료되었습니다.',
    });
  };

  //FN: 거래처 현재 페이지 change
  const handleChangeCurrentPageTarget = (curPage: number) => {
    setTargetPagination({
      ...targetPagination,
      pageNo: curPage,
    });
  };

  //FN: 추가된 현재 페이지 change
  const handleChangeCurrentPageAddTarget = (curPage: number) => {
    setAddTargetPagination({
      ...addTargetPagination,
      pageNo: curPage,
    });
  };

  //FN: 추가 완료
  const handleClickAddTargetCompelet = () => {
    if (addTargetList.length === 0) {
      alertModalAction.setAdminAlertModal({
        modalOpen: true,
        message: '추가할 데이터를 선택하세요.',
      });
      return false;
    }

    onClickCallback?.(addTargetList);
    modalClose?.();
    alertModalAction.setAdminAlertModal({
      modalOpen: true,
      message: '추가 완료되었습니다.',
    });
  };

  return (
    <>
      <div className="table type2">
        <table>
          <colgroup>
            <col style={{ width: '23%' }} />
            <col style={{ width: 'auto' }} />
            <col style={{ width: '23%' }} />
            <col style={{ width: 'auto' }} />
          </colgroup>
          <tbody>
            <tr>
              <th>거래처코드</th>
              <td>
                <AdminInputBox
                  divClassName="w-full"
                  value={searchTargetCode || ''}
                  onChangeCallback={handleChangeTargetCode}
                />
              </td>
              <th>거래처명</th>
              <td>
                <AdminInputBox
                  divClassName="w-full"
                  value={searchTargetName || ''}
                  onChangeCallback={handleChangeTargetName}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="btn-area mt-10">
        <AdminButtonBox
          label="조회"
          onClickCallback={handleClickTargetSearch}
        />
      </div>

      {/* 거래처 목록 */}
      <AdminNoPaginationGridBox
        pageInfo={targetPagination}
        colDefs={viewColDefs as []}
        rowData={targetList as []}
        noDataMessage={'조회된 거래처가 없습니다.'}
        onGridSelectedRows={handleClickTargetSelectedRows}
        onChangeCurrentPage={handleChangeCurrentPageTarget}
      />

      <div className="btn-area mt-20">
        <AdminButtonBox
          label="검색결과 전체추가"
          onClickCallback={handleClickAllListAdd}
        />
        <AdminButtonBox
          label="추가"
          onClickCallback={handleClickTargetSelectedAdd}
        />
      </div>

      {/* 추가한 목록 */}
      <AdminPopupGridBox
        title="추가한 목록"
        pageInfo={addTargetPagination}
        colDefs={viewColDefs as []}
        rowData={addTargetList as []}
        rightButtons={
          <AdminButtonBox
            label="선택삭제"
            className="type2"
            onClickCallback={handleClickAddTargetSelectedDeleteConfirm}
          />
        }
        noDataMessage={'추가한 거래처가 없습니다.'}
        onGridSelectedRows={handleClickAddTargetSelectedRows}
        onChangeCurrentPage={handleChangeCurrentPageAddTarget}
      />

      <div className="btn-area mt-20">
        <AdminButtonBox
          label="추가 완료"
          onClickCallback={handleClickAddTargetCompelet}
        />
      </div>
    </>
  );
}
