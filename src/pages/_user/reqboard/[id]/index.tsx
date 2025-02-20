import { useParams } from 'react-router';
import ReqBoardDetailContent from 'src/contents/user/reqboard/ReqBoardDetailContent';

export default function ReqBoardDetail() {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 id 추출
  return <ReqBoardDetailContent id={id} />;
}
