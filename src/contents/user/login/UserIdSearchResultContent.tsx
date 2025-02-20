import { useState } from 'react';
import GridTableBox, { ColDefs } from 'src/components/form/grid/GridTableBox';
import { storeUserModalActions } from 'src/lib/store/userModalStore';

interface UserInfo {
  userId: string;
  recvPlaceName: string;
}

interface Props {
  userList: UserInfo[];
  onClickCallback?: (data: string) => void;
}

export default function UserIdSearchResultContent(props: Props) {
  const { userList, onClickCallback } = props;

  //store: user modal 상태관리
  const userModalAction = storeUserModalActions();

  const [selectedUserId, setSelectedUserId] = useState<string>('');

  const userColDefs: ColDefs[] = [
    {
      field: 'userId',
      headerName: '아이디',
      type: '',
      colStyle: { width: '50%' },
      className: '',
    },
    {
      field: 'RecvPlaceName',
      headerName: '배송처',
      type: '',
      colStyle: { width: '50%' },
      className: '',
    },
  ];

  //FN: 선택된 row
  const handleGridSelectedRows = (selRows: UserInfo[]) => {
    if (selRows?.length > 0) {
      selRows?.map((row: UserInfo) => {
        setSelectedUserId(row.userId);
      });
    }
  };

  //FN: 로그인 하기 - 선택 UserId 가지고 login Page로 이동
  const handleClickLogin = () => {
    if (selectedUserId === '') {
      userModalAction.setUserModal({
        type: 'alert',
        headerTitle: '알림',
        modalOpen: true,
        content: '로그인할 아이디를 선택하세요.',
      });
      return false;
    }

    //선택된 userId 부모창으로 보내기
    onClickCallback?.(selectedUserId);
    //user modal 닫기
    userModalAction.closeLastModal();
  };

  return (
    <div className="inner">
      <div className="popup-find-chk-box">
        <div className="dscr">
          <strong>아이디가 확인되었습니다.</strong>
        </div>

        <br />
        <GridTableBox
          className="tbl-box"
          colDefs={userColDefs as []}
          rowData={userList}
          noDataMessage={'데이터가 없습니다.'}
          onSelectedRows={handleGridSelectedRows}
        />
      </div>
      <div className="popup-btn-area">
        <button
          type="button"
          className="btn ty1 c-red"
          onClick={handleClickLogin}
        >
          <span className="fw-6">로그인하기</span>
        </button>
      </div>
    </div>
  );
}
