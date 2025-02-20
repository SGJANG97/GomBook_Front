import {
  ChangeEvent,
  forwardRef,
  KeyboardEvent,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

export interface InputRef {
  value: string;
  setValue: (val: string) => void;
  focus: () => void;
}

interface Props {
  className?: string;
  type?: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChangeCallback?: (data: string) => void;
  onClickCallback?: () => void;
  onKeyDownCallback?: () => void;
}

const InputBox = forwardRef((props: Props, ref) => {
  const {
    className,
    type = 'text',
    value,
    placeholder = '텍스트를 입력해 주세요.',
    disabled,
    readOnly,
    onChangeCallback,
    onClickCallback,
    onKeyDownCallback,
  } = props;

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  // ref가 전달된 경우, input를 ref에 할당
  useImperativeHandle(ref, () => ({
    value: inputRef.current.value,
    setValue: (val: string) => {
      // 외부에서 값을 설정하는 함수
      if (inputRef.current) {
        inputRef.current.value = val; // input의 값도 업데이트
      }
    },
    focus: () => {
      // 포커스 함수 추가
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value; // 상태가 변경될 때 입력 필드의 값을 업데이트
    }
  }, [value]);

  //FN: text value change
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeCallback?.(e.target.value);
  };

  //FN: click
  const handleClickInput = () => {
    onClickCallback?.();
  };

  //FN: key down
  const handleKeyDownInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onKeyDownCallback?.();
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type={type ? type : 'text'}
        className={`${className ? className : 'inp'}`}
        value={value}
        onChange={handleChangeInput}
        onClick={handleClickInput}
        onKeyDown={handleKeyDownInput}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      />
    </>
  );
});

export default InputBox;
