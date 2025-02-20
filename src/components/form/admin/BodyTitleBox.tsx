import { Link } from 'react-router-dom';
import { handleClickPreventDefault } from 'src/utils/commonHandler';
import { handleIsMobile } from 'src/utils/mobile';

interface Props {
  pcTitle?: string;
  moTitle?: string[];
  moActive?: string | number;
  onClickCallback?: (data?: any) => void;
}

/* 예제

const [active, setActive] = useState<number>(0);
//FN: active change
const handleClickActive = (idx: number) => {
  setActive(idx);
};

<BodyTitleBox
  pcTitle="공지사항"
  moTitle={[]}
  moActive={active}
  onClickCallback={handleClickActive}
/>
*/
export default function BodyTitleBox(props: Props) {
  const {
    pcTitle = 'PC 제목',
    moTitle = [],
    moActive = 0,
    onClickCallback,
  } = props;

  const isMobile = handleIsMobile();

  //FN: active change
  const handleClickActive = handleClickPreventDefault((idx: number) => {
    onClickCallback?.(idx);
  });

  return (
    <>
      {isMobile && moTitle?.length > 0 ? (
        // Mobile 타이틀
        <div className="top-tab show-mo">
          <ul>
            {moTitle?.map((title, idx) => (
              <li className={`${moActive === idx ? 'active' : ''}`} key={idx}>
                <Link to="" onClick={(e) => handleClickActive(e, idx)}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // PC 타이틀
        <div className="content-head show-pc">
          <h2 className="lt-title-type1">{pcTitle}</h2>
        </div>
      )}
    </>
  );
}
