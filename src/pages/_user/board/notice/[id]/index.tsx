import { useParams } from 'react-router';
import NoticeDetailContent from 'src/contents/user/board/notice/NoticeDetailContent';

export default function NoticeDetail() {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 id 추출

  return <NoticeDetailContent id={id} />;
}
