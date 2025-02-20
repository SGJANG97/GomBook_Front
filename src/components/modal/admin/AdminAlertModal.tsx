import AdminButtonBox from 'src/components/form/admin/AdminButtonBox';

interface ButtonType {
  btnClassName?: string;
  name: string;
  onClick?: (data?: any) => void;
}

interface Props {
  modalOpen: boolean;
  modalClose: (data?: any) => void;
  headerTitle?: string;
  content?: React.ReactNode;
  okButton?: ButtonType;
  cancelButton?: ButtonType;
}

export default function AdminAlertModal(props: Props) {
  const {
    modalOpen = false,
    modalClose,
    headerTitle,
    content,
    okButton,
    cancelButton,
  } = props;

  return (
    <>
      {modalOpen && (
        <div className="wrap admin">
          <div className="d-layer d-alert active">
            <div className="d-layer--inner">
              <div className="d-layer--inner-body">
                <section className="lt-section">
                  <p>{content}</p>
                </section>
              </div>
              {(okButton || cancelButton) && (
                <div className="btn-area">
                  {cancelButton && (
                    <AdminButtonBox
                      label={cancelButton.name}
                      onClickCallback={cancelButton.onClick}
                    />
                  )}
                  {okButton && (
                    <AdminButtonBox
                      label={okButton.name}
                      className={`type1 red`}
                      onClickCallback={okButton.onClick}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
