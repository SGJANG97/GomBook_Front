import AdminButtonBox from 'src/components/form/admin/AdminButtonBox';

interface ButtonType {
  btnClassName?: string;
  name: string;
  onClick?: (data?: any) => void;
}

interface Props {
  modalOpen: boolean;
  modalClose: (data?: any) => void;
  popSize?: {};
  headerTitle?: string;
  content?: React.ReactNode;
  tempButton?: ButtonType;
  okButton?: ButtonType;
  //   cancelButton?: ButtonType;
}

export default function AdminPopupModal(props: Props) {
  const {
    modalOpen = false,
    modalClose,
    popSize,
    headerTitle,
    content,
    tempButton,
    okButton,
    // cancelButton
  } = props;
  return (
    <>
      {modalOpen && (
        <div className="wrap admin">
          <div className="container">
            <div className="content">
              <main>
                <div className={`d-layer ${modalOpen ? 'active' : ''}`}>
                  <div className="d-layer--inner" style={popSize}>
                    <div className="d-layer--inner-header">
                      <h4 className="title">{headerTitle}</h4>
                    </div>

                    <AdminButtonBox
                      label="닫기"
                      className="icon close"
                      onClickCallback={modalClose}
                    />

                    <div className="d-layer--inner-body">{content}</div>

                    {(tempButton || okButton) && (
                      <div className="btn-area">
                        {tempButton && (
                          <AdminButtonBox
                            label={tempButton.name}
                            onClickCallback={tempButton.onClick}
                          />
                        )}
                        {okButton && (
                          <AdminButtonBox
                            label={okButton.name}
                            className="type1 red"
                            onClickCallback={okButton.onClick}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
