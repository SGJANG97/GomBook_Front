import {
  ChangeEvent,
  forwardRef,
  MutableRefObject,
  useImperativeHandle,
  useRef,
} from 'react';

interface Props {
  className?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChangeCallback?: (data?: any) => void;
  onClickCallback?: (data?: any) => void;
}

const TextareaBox = forwardRef((props: Props, ref) => {
  const {
    className,
    value,
    placeholder = '텍스트를 입력해 주세요.',
    disabled,
    readOnly,
    onChangeCallback,
  } = props;

  const textareaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  // ref가 전달된 경우, textarea ref에 할당
  useImperativeHandle(ref, () => textareaRef.current);

  //FN: text value
  const handleChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChangeCallback?.(e.target.value);
  };

  return (
    <>
      <textarea
        ref={textareaRef}
        className={className}
        value={value}
        onChange={handleChangeInput}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      />
    </>
  );
});

export default TextareaBox;
