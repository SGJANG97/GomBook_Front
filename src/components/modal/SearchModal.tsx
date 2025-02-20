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
                <input type="text" placeholder="도서명을 입력하세요" />
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
                    <Link to="">2500년 동안 사랑받은 초역 부처의 말</Link>
                  </li>
                  <li>
                    <Link to="">내가 원하는 것을 나도 모를 때</Link>
                  </li>
                  <li>
                    <Link to="">마음의 기술</Link>
                  </li>
                  <li>
                    <Link to="">넥서스</Link>
                  </li>
                  <li>
                    <Link to="">악마와 함께 춤을</Link>
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
