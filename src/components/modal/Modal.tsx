import React from "react";
import ReactDOM from "react-dom";
import Button from "../button/Button";
import "./Modal.css";

interface ModalProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  onOk?: () => void;
  okText?: string;
  closeText?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  width?: number;
  children: React.ReactNode;
  closable?: boolean;
  className?: string;
}

const Modal = ({
  title,
  visible,
  onClose,
  onOk,
  okText = "Ok",
  closeText = "Close",
  showHeader = true,
  showFooter = true,
  width = 600,
  children,
  closable = false,
  className,
}: ModalProps) => {
  let animate;
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClose) {
      animate = "scale-in-center";
      onClose();
    }
  };

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onOk) {
      animate = "scale-out-center";
      onOk();
    } else {
      handleClose(e);
    }
  };

  const modalStyle = {
    width: `${width}px`,
  };

  const handleOverlayClick = () => {
    if (onClose) {
      animate = "scale-out-center";
      onClose();
    }
  };

  return visible
    ? ReactDOM.createPortal(
        <>
          <div className="pablo-overlay" onClick={handleOverlayClick}></div>
          <div
            className={`pablo-modal ${className} ${animate}`}
            style={modalStyle}
          >
            {showHeader && (
              <div className="pablo-modal-header">
                <div className="pablo-mobal-title">{title}</div>
                {!closable && (
                  <Button onClick={handleClose} size="small" type="transparent">
                    X
                  </Button>
                )}
              </div>
            )}
            <div className="pablo-modal-body">{children}</div>
            {showFooter && (
              <div className="pablo-modal-footer">
                <Button onClick={handleClose} type="transparent" size="small">
                  {closeText}
                </Button>
                <Button onClick={handleOk} size="small">
                  {okText}
                </Button>
              </div>
            )}
          </div>
        </>,
        document.body
      )
    : null;
};

export default Modal;
