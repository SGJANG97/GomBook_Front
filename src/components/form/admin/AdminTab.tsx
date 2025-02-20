import { useState } from 'react';
import { Link } from 'react-router-dom';
import { handleClickPreventDefault } from 'src/utils/commonHandler';
import { handleIsMobile } from 'src/utils/mobile';

interface Tabs {
  value: string;
  name: string;
}
interface Props {
  tab?: Tabs[];
  onClickCallback?: (data: string) => void;
}

export default function AdminTab(props: Props) {
  const { tab, onClickCallback } = props;
  const [toggle, settoggle] = useState<string>(tab?.[0].value || '');

  const isMobile = handleIsMobile();

  const handleClickActive = handleClickPreventDefault((val: string) => {
    console.log(val);
    settoggle(val);
    onClickCallback?.(val);
  });

  return (
    <>
      <div className="top-tab">
        <ul>
          {tab?.map((item, idx) => (
            <li
              key={idx}
              className={`${toggle === item.value ? 'active' : ''}`}
            >
              <Link to="" onClick={(e) => handleClickActive(e, item.value)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="tab-area">
            {tab?.map((item, idx) => (
              <button
                type="button"
                key={idx}
                className={`${toggle === item.value ? 'active' : ''}`}
                onClick={() => handleClickActive(item.value)}
              >
                <span>{item.name}</span>
              </button>
            ))}
          </div> */}
    </>
  );
}
