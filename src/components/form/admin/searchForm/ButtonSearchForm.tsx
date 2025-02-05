import AdminButtonBox from '../AdminButtonBox';

interface Button {
  label?: string;
  className?: string;
  onClickCallback?: (data?: any) => void;
}

export interface ButtonsProps {
  buttons?: Button[];
}

export default function ButtonSearchForm(props: ButtonsProps) {
  const { buttons } = props;
  return (
    <>
      <div className="btn-area confirm">
        {buttons?.map((item, idx) => (
          <AdminButtonBox
            label={item.label}
            className={`type1 ${item.className}`}
            key={`button-${idx}`}
            onClickCallback={item.onClickCallback}
          />
        ))}
      </div>
    </>
  );
}
