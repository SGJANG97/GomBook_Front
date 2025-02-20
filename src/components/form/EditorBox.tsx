import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

interface Props {
  devStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  value?: string;
  readOnly?: boolean;
  toolbar?: boolean;
  onChangeCallback?: (data: any) => void;
}

export default function EditorBox(props: Props) {
  const { devStyle, style, value, readOnly, toolbar, onChangeCallback } = props;

  const modules = toolbar
    ? {
        toolbar: [
          // 툴바 그룹
          [{ header: [1, 2, false] }], // 헤더 그룹 내부에 각각의 요소는 곧 버튼과 기능을 의미
          ['bold', 'italic', 'underline', 'strike', 'blockquote'], // 스타일 그룹
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' }, // 내어쓰기
            { indent: '+1' }, // 들여쓰기
          ],
          ['link', 'image'],
          [{ color: [] }, { background: [] }], // 폰트색상, 화면색상
          [{ font: [] }], // 폰트스타일
          [{ align: [] }], // 정렬
          // [{ script: 'sub' }, { script: 'super' }], // 첨자
          // ['code', 'code-block'], // 코드 블록 및 인라인 코드를 위한 기능 추가
          // ['clean'], // 지우기
        ],
      }
    : { toolbar: false };

  //FN: editor text
  const handleChangeEditor = (e: string) => {
    onChangeCallback?.(e);
  };

  return (
    <>
      <div style={devStyle}>
        <ReactQuill
          theme="snow"
          // defaultValue={value}
          value={value}
          onChange={handleChangeEditor}
          style={style}
          modules={modules}
          readOnly={readOnly}
        />
      </div>
    </>
  );
}
