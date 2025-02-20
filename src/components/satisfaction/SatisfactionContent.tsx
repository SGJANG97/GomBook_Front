import { useEffect, useState } from 'react';
import ButtonBox from '../form/ButtonBox';
import InputBox from '../form/InputBox';

interface ScoreInfo {
  idx: number;
  chk: boolean;
  comment: string;
}

interface Props {
  type: 'user' | 'admin';
  satisfaction?: { scoreCnt: number; oneReview: string } | null;
  onChangeCallback?: (scoreCnt: number, oneReview: string) => void;
}

//만족도 평가
export default function SatisfactionContent(props: Props) {
  const { type, satisfaction, onChangeCallback } = props;

  const isDisabled = Boolean(satisfaction);

  //별점
  const [score, setScore] = useState<ScoreInfo[]>([
    { idx: 1, chk: false, comment: '(별로예요)' },
    { idx: 2, chk: false, comment: '(그저그래요)' },
    { idx: 3, chk: false, comment: '(괜찮아요)' },
    { idx: 4, chk: false, comment: '(좋아요)' },
    { idx: 5, chk: false, comment: '(최고예요)' },
  ]);
  //선택된 별점
  const [selectedScore, setSelectedScore] = useState<ScoreInfo | null>(null);
  //한줄평
  const [oneReview, setOneReview] = useState<string>('');

  useEffect(() => {
    if (type === 'user') {
      const updatedScore = score.map((item) => ({
        ...item,
        chk: item.idx === 1 ? true : false,
      }));
      setScore(updatedScore);
      setSelectedScore(score.find((item) => item.idx === 1) || null); // 선택된 점수 저장
    }
  }, []);

  //FN: 별점
  const handleClickScore = (index: number) => {
    if (!isDisabled) {
      const updatedScore = score.map((item) => ({
        ...item,
        chk: item.idx <= index ? true : false,
      }));
      setSelectedScore(updatedScore.find((item) => item.idx === index) || null); // 선택된 점수 저장
      setScore(updatedScore);
    }
  };

  //FN: 한줄평
  const handleChangeOneReview = (e: string) => {
    setOneReview(e);
  };

  //FN: 평가 등록
  const handleClickAdd = () => {
    const filterScore = score.filter((filter) => filter.chk === true);

    onChangeCallback?.(filterScore.length, oneReview);
  };

  return (
    <div className="star">
      {type === 'user' && (
        <p>
          처리 결과에 <span>만족</span> 하셨나요?
        </p>
      )}

      <div className="wrap">
        <div className="flex">
          <div>
            <div className="score-wrap">
              <p>별점을 선택하세요.</p>
              {/* <!-- on클래스주면 빨간색됩니다 --> */}
              <div className="score">
                {score.map((item) => (
                  <svg
                    key={item.idx}
                    className={item.chk ? 'on' : ''}
                    width="28"
                    height="26"
                    viewBox="0 0 28 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleClickScore(item.idx)}
                  >
                    <path
                      d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                ))}

                {selectedScore && ( // 선택된 점수가 있을 때만 표시
                  <p>
                    <span>{selectedScore.idx}점</span> {selectedScore.comment}
                  </p>
                )}
              </div>
            </div>

            {type === 'user' ? (
              <InputBox
                className="t-inp"
                value={oneReview}
                placeholder="만족도 한줄평을 입력해 주세요."
                onChangeCallback={handleChangeOneReview}
                disabled={isDisabled}
              />
            ) : (
              <>{oneReview}</>
            )}
          </div>

          {type === 'user' &&
            (isDisabled ? (
              <ButtonBox label="평가 완료" style={{ background: 'gray' }} />
            ) : (
              <ButtonBox label="등록 완료" onClickCallback={handleClickAdd} />
            ))}
        </div>
      </div>
    </div>
  );
}
