export type PopupType = 'alert' | 'confirm' | 'popup' | 'toast';

export interface ButtonType {
  btnClassName?: string;
  name: string;
  onClick?: (data?: any) => void;
}

export interface Props {
  type: PopupType;
  modalOpen: boolean;
  modalClose: (data?: any) => void;
  popClassName?: string;
  headerTitle?: string;
  headerTitleClassName?: string;
  content?: React.ReactNode | string;
  okButton?: ButtonType;
  cancelButton?: ButtonType;
}

export default function PopupModal(props: Props) {
  const {
    type,
    modalOpen = false,
    modalClose,
    popClassName,
    headerTitle,
    headerTitleClassName,
    content,
    okButton,
    cancelButton,
  } = props;

  return (
    <>
      {modalOpen && type !== 'toast' ? (
        <div className="wrap">
          <main>
            <div
              className={`popup-wrap ${popClassName} ${modalOpen ? 'active' : ''} `}
            >
              <div className="popup-layer">
                <div
                  className={`popup-head ${headerTitleClassName ? headerTitleClassName : headerTitle ? 'ta-c' : 't-none bar-close'} `}
                >
                  <h4>{headerTitle}</h4>
                  <button
                    type="button"
                    className="btn remove-s20 c-white close"
                    onClick={modalClose}
                  ></button>
                </div>

                <div className="popup-content">
                  <div className="inner">{content}</div>
                </div>

                {type !== 'popup' && (okButton || cancelButton) && (
                  <div className="popup-btn-area">
                    {type === 'confirm' && cancelButton && (
                      <button
                        type="button"
                        className="btn ty1 bd-ty1 close"
                        onClick={cancelButton.onClick}
                      >
                        <span>{cancelButton.name}</span>
                      </button>
                    )}
                    {okButton && (
                      <button
                        type="button"
                        className={`btn ty1 ${okButton.btnClassName}`}
                        // className="btn ty1 c-red" - 확인 / "btn ty1 c-black" - 장바구니
                        onClick={okButton.onClick}
                      >
                        <span className="fw-6">{okButton.name}</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
              <div className="popup-bg"></div>
            </div>
          </main>
        </div>
      ) : (
        <div
          className={`popup-toast ${popClassName ? popClassName : 'b-ty'} ${modalOpen ? 'active' : ''}`}
        >
          <div className="popup-toast-content">{content}</div>
        </div>
      )}
    </>
  );
}
