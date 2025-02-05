import AdminButtonBox from './AdminButtonBox';

interface ButtonInfo {
  label?: string; //button name
  btnClassName?: string;
  hidden?: boolean;
  onClickCallback?: (data?: any) => void;
}

interface Props {
  buttons?: ButtonInfo[];
}

export default function AdminListSaveButtonsBox(props: Props) {
  const { buttons } = props;

  return (
    <section className="lt-section">
      <div className="btn-area confirm">
        {buttons?.map(
          (item, idx) =>
            !item.hidden && (
              <AdminButtonBox
                key={idx}
                label={item.label}
                className={`lt-btn type1 ${item.btnClassName}`}
                onClickCallback={item.onClickCallback}
                style={{ marginRight: '0.5rem' }}
              />
            )
        )}
      </div>
    </section>
  );
}
