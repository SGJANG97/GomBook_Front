import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { ColDefs, PageInfo } from 'src/components/form/grid/GridTableBox';
import {
  ShowTargetColDefs,
  ShowTargetGroupColDefs,
} from 'src/components/showTarget/_config/gridColDefs';
import { apiGetCommonCodeList } from 'src/lib/api/apiPath';
import { storeAdminAlertModalActions } from 'src/lib/store/adminAlertModalStore';
import { storeAdminPopupModalActions } from 'src/lib/store/adminPopupModalStore';
import { ShowTargetCodeType } from 'src/utils/codeDefines';
import { CodesDetail } from 'src/models/common/CodesDetail';
import { ShowTarget } from 'src/models/common/ShowTarget';

import AdminSelectBox from 'src/components/form/admin/AdminSelectBox';
import AdminGridBox from 'src/components/form/admin/AdminGridBox';
import AdminSearchPopupShowTargetContent from 'src/components/showTarget/AdminSearchPopupShowTargetContent';
import AdminButtonBox from '../form/admin/AdminButtonBox';
import { useAdminApiCallHandler } from 'src/hooks/useAdminApiCall';

interface Props {
  id?: number | string;
  propShowType?: string;
  targetData?: ShowTarget[];
  onChangeShowTargetCallback?: (showType: string) => void;
  onClickAddCallback?: (
    totalData: ShowTarget[],
    newAddData: ShowTarget[]
  ) => void; //노출 대상 추가 리스트
  onClickDeleteCallback?: (data: ShowTarget[]) => void; //노출 대상 선택 삭제 리스트
}

export default function ShowTargetContent(props: Props) {
  const {
    id,
    propShowType,
    targetData,
    onChangeShowTargetCallback,
    onClickAddCallback,
    onClickDeleteCallback,
  } = props;

  const isCreate = !Boolean(id);
  //수정 여부
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  //노출 대상
  const [showType, setShowType] = useState<string>('');

  //api call
  const apiCall = useAdminApiCallHandler();

  //store: alert modal 상태관리
  const alertModalAction = storeAdminAlertModalActions();
  //store: popup modal 상태관리
  const popupModalAction = storeAdminPopupModalActions();

  const { pathname } = useLocation();

  useEffect(() => {
    setIsUpdate(pathname.includes('/update'));
  }, [pathname]);

  useEffect(() => {
    if (propShowType) {
      setShowType(propShowType);
      handleChangeShowTarget(propShowType);
    }
  }, [propShowType]);

  useEffect(() => {
    // if (id) {
    setOldShowList(targetData || []);
    setNewShowList(targetData || []);
    setShowPagination({
      ...showPagination,
      totalCount: targetData?.length || 0,
    });
    // }
  }, [id, targetData]);

  const [oldShowList, setOldShowList] = useState<ShowTarget[]>([]); //수정시 기존 노출대상 목록
  const [newShowList, setNewShowList] = useState<ShowTarget[]>([]); //새로운 노출대상 목록
  const [delShowList, setDelShowList] = useState<ShowTarget[]>([]); //수정시 노출대상 선택삭제 목록
  const [showSelectedRows, setShowSelectedRows] = useState<ShowTarget[]>([]); //목록에서 노출 대상 선택
  const [oldShowType, setOldShowType] = useState<string>('');
  const [showPagination, setShowPagination] = useState<PageInfo>({
    totalCount: 0,
    pageNo: 1,
    pageSize: 10,
  });

  //노출설정 > 노출대상 > 검색버튼 비활성 (거래처 전체, 비회원)
  const [targetViewSearchDisabled, setTargetViewSearchDisabled] =
    useState<boolean>(true);

  //노출대상 컬럼
  const [viewColDefs, setViewColDefs] = useState<ColDefs[]>(ShowTargetColDefs);

  // 공통토드 조회
  useEffect(() => {
    handleClickCommonCodeList('OMBD001');
  }, []);

  //FN: 공통코드(노출대상) 검색
  const [noticeShowTypes, setnoticeShowTypes] = useState<CodesDetail[] | null>(
    null
  );
  const handleClickCommonCodeList = async (param: string) => {
    // API 호출: 공통코드(노출대상) 목록 조회 ==================================//
    let result = await apiCall.adminApiCall('GET', apiGetCommonCodeList(), {
      grpId: param,
    });

    if (result) {
      setnoticeShowTypes(result.list);
    }
  };

  // FN: 노출대상 선택
  const handleChangeShowTarget = (newShowType: string) => {
    setShowType(newShowType);
    onChangeShowTargetCallback?.(newShowType);

    //등록 일때는 노출대상 선택할때 마다 data 초기화
    if (isCreate) {
      setNewShowList([]);
    } else {
      // 수정 일때의 기존 노출대상과 선택한 노출대상이 같으면 기존 데이터로 보여줌.
      if (oldShowType === newShowType) {
        setNewShowList(oldShowList);
      } else {
        setNewShowList([]);
      }
    }

    // 거래처 전체, 비회원
    if (
      newShowType === ShowTargetCodeType.getCode('NON') ||
      newShowType === ShowTargetCodeType.getCode('PARTNERALL')
    ) {
      setTargetViewSearchDisabled(true);
    } else {
      setTargetViewSearchDisabled(false);
      //거래처
      if (newShowType === ShowTargetCodeType.getCode('PARTNER')) {
        setViewColDefs(ShowTargetColDefs);
      } else if (
        // 단가그룹, 거래처그룹
        newShowType === ShowTargetCodeType.getCode('PRGROUP') ||
        newShowType === ShowTargetCodeType.getCode('TRGROUP')
      ) {
        //그룹
        setViewColDefs(ShowTargetGroupColDefs);
      }
    }
  };

  //FN: 노출 대상 검색
  const handleShowTargetSearch = () => {
    if (showType === '') {
      alertModalAction.setAdminAlertModal({
        modalOpen: true,
        message: `노출 대상을 선택하세요.`,
        path: '',
      });
    } else {
      const headerTitle =
        showType === ShowTargetCodeType.getCode('PRGROUP')
          ? '단가 그룹'
          : showType === ShowTargetCodeType.getCode('TRGROUP')
            ? '거래처 그룹'
            : '거래처 검색';

      popupModalAction.setPopupModal({
        modalOpen: true,
        title: headerTitle,
        content: (
          <AdminSearchPopupShowTargetContent
            modalClose={popupModalAction.setPopupModalInit}
            showType={showType || ''}
            onClickCallback={handleShowListAdd}
          />
        ),
      });
    }
  };

  //FN: 노출 대상 목록 추가
  const handleShowListAdd = (list: ShowTarget[]) => {
    // 중복 데이터 제거
    const filter = list.filter(
      (filter) => !newShowList.some((some) => some.code === filter.code)
    );

    const totalList = [...newShowList, ...filter];

    setNewShowList(totalList);
    setShowPagination({
      ...showPagination,
      totalCount: totalList.length,
    });

    //return new data
    onClickAddCallback?.(totalList, filter);
  };

  //FN: 노출대상 선택삭제
  const handleClickSelectedDelete = () => {
    //삭제 된 내용 제외 목록
    const addList = newShowList?.filter(
      (filter: ShowTarget) =>
        !showSelectedRows.some((some) => some.code === filter.code)
    );

    setNewShowList(addList);
    setShowPagination({
      ...showPagination,
      totalCount: addList.length,
    });

    //수정시 삭제 목록 저장
    if (!isCreate) {
      const delList = newShowList?.filter((filter: ShowTarget) =>
        showSelectedRows.some((some) => some.code === filter.code)
      );
      setDelShowList([...delShowList, ...delList]);
      onClickDeleteCallback?.([...delShowList, ...delList]);
    }
  };

  //FN: 노출 대상 현재 페이지 change
  const handleChangeShowCurrentPage = (curPage: number) => {
    setShowPagination({
      ...showPagination,
      pageNo: curPage,
    });
  };

  //FN: 거래처 목록에서 선택
  const handleClickTargetSelectedRows = (selectedRows: any) => {
    setShowSelectedRows(selectedRows);
  };

  return (
    <section className="lt-section">
      <h3 className="lt-title-type2">노출설정</h3>
      <div className="table type2">
        <table>
          <colgroup>
            <col style={{ width: '100px' }} />
            <col style={{ width: 'auto' }} />
          </colgroup>
          <tbody>
            <tr>
              <th>노출 대상</th>
              <td>
                <div className="flex-wrap type1 fnone">
                  {isCreate || isUpdate ? (
                    <>
                      <AdminSelectBox
                        value={showType}
                        options={
                          noticeShowTypes?.map((item) => ({
                            value: item.code || '',
                            label: item.codeName || '',
                          })) || []
                        }
                        onChangeCallback={handleChangeShowTarget}
                      />
                      <AdminButtonBox
                        label="검색"
                        className="type2"
                        onClickCallback={handleShowTargetSearch}
                        disabled={targetViewSearchDisabled}
                      />
                    </>
                  ) : (
                    <>{ShowTargetCodeType.getNameByCode(showType || '')}</>
                  )}
                </div>
              </td>
            </tr>
            {/* OMBD001001: 거래처 전체, 
                OMBD001002: 거래처, 
                OMBD001003: 단가그룹, 
                OMBD001004: 거래처 그룹, 
                OMBD001005: 비회원
            */}
            {(showType === ShowTargetCodeType.getCode('PARTNER') ||
              showType === ShowTargetCodeType.getCode('PRGROUP') ||
              showType === ShowTargetCodeType.getCode('TRGROUP')) && (
              <tr>
                <td colSpan={2}>
                  <h4>선택 목록</h4>
                  <AdminGridBox
                    pageInfo={showPagination}
                    colDefs={viewColDefs as []}
                    rowData={newShowList as []}
                    rightButtons={
                      (isCreate || isUpdate) && (
                        <AdminButtonBox
                          label="선택삭제"
                          className="type2"
                          onClickCallback={handleClickSelectedDelete}
                        />
                      )
                    }
                    noDataMessage="추가된 거래처가 없습니다."
                    onGridSelectedRows={handleClickTargetSelectedRows}
                    onChangeCurrentPage={handleChangeShowCurrentPage}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
