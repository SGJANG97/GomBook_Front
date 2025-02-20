import ButtonBox from '../form/ButtonBox';
import InputBox from '../form/InputBox';
import SelectBox from '../form/SelectBox';

interface Props {}

export default function BookSearchBarContent(props: Props) {
  const {} = props;
  return (
    <div className="category-sorting-box">
      <div className="select-item">
        <SelectBox
          value=""
          options={[
            { value: '', name: '인문/교양' },
            { value: '', name: '역사/문화' },
            { value: '', name: '문학/소설' },
            { value: '', name: '사회/경제' },
            { value: '', name: '과학/기술' },
            { value: '', name: '철학/종교' },
          ]}
        />
      </div>
      {/*<div className="select-item">*/}
      {/*  <SelectBox*/}
      {/*    value=""*/}
      {/*    options={[*/}
      {/*      { value: '', name: '파스타' },*/}
      {/*      { value: '', name: '파스타' },*/}
      {/*      { value: '', name: '파스타' },*/}
      {/*    ]}*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="search-box">
        <div className="input">
          <InputBox
            className="t-inp"
            value=""
            placeholder="도서명으로 검색"
            onChangeCallback={() => {}}
          />

          <ButtonBox className="btn icon search" label="검색하기" />
        </div>
        {/* <!-- 초기화 가능한 상태에선 disabled 클래스 제거 --> */}
        <ButtonBox className="btn disabled" label="검색 초기화" />
      </div>
      {/* <!-- 할인중인 상품에만 사용 --> */}
      <div className="select-item">
        <SelectBox
          value=""
          options={[
            { value: '', name: '인기도순' },
            { value: '', name: '최신등록순' },
            { value: '', name: '평점순' },
            { value: '', name: '도서명순' },
          ]}
        />
      </div>
      <div className="select-item">
        <SelectBox
          value=""
          options={[
            { value: '10', name: '10개씩 보기' },
            { value: '20', name: '20개씩 보기' },
            { value: '50', name: '50개씩 보기' },
          ]}
        />
      </div>
    </div>
  );
}
