export interface ButtonsProps {
  label?: string;
  className?: string;
  onClickCallback?: (data?: any) => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export default function AdminButtonBox(props: ButtonsProps) {
  const { label, className, style, disabled, onClickCallback } = props;
  return (
    <button
      type="button"
      className={`lt-btn  ${className ? className : 'type1'}`}
      onClick={onClickCallback}
      style={style}
      disabled={disabled}
    >
      <span>{label}</span>
    </button>
  );
}
