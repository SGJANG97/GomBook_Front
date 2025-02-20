export interface Props {
  label?: string;
  className?: string;
  onClickCallback?: (data?: any) => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export default function ButtonBox(props: Props) {
  const { label, className, style, disabled, onClickCallback } = props;

  return (
    <button
      type="button"
      className={className}
      onClick={onClickCallback}
      style={style}
      disabled={disabled}
    >
      <span>{label}</span>
    </button>
  );
}
