import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

interface Props {
  modalOpen: boolean;
  onClickCallback: (data?: any) => void;
}

export default function SearchModal(props: Props) {
  const { modalOpen, onClickCallback } = props;

  return (
    <>
      {modalOpen && (
        <div className={`search-div  ${modalOpen && 'active'}`}>
          <div className="inner-content">
            <Button
              type="button"
              className="search-close"
              onClick={onClickCallback}
            />
            <div className="wrap">
              <div className="input">
                <input type="text" placeholder="상품명을 입력하세요" />
                <button className="del" type="button">
                  삭제
                </button>
                <button className="submit" type="submit">
                  검색
                </button>
              </div>
              <div className="search-list">
                <p>추천검색어</p>
                <ul>
                  <li>
                    <Link to="">코스타도로 엑스트라버진 올리브오일</Link>
                  </li>
                  <li>
                    <Link to="">말돈 소금</Link>
                  </li>
                  <li>
                    <Link to="">리스토리스 그린올리브</Link>
                  </li>
                  <li>
                    <Link to="">
                      펀고&타르투포 파르투피나 블랙트러플 페이스트
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
