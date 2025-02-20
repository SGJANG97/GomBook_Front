import { useParams } from 'react-router';
import BookDetailContent from 'src/contents/user/book/BookDetailContent';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 id 추출

  return <BookDetailContent id={id} />;
}
