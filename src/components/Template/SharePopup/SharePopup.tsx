import React, { FC } from 'react';
import PopupWrapper, { PopupWrapperProps } from '../PopupWrapper/PopupWrapper';

interface SharePopupProps extends PopupWrapperProps {
  width?: string;
  height?: string;
  title?: string;
  onButtonClick: () => void,
}

const SharePopup: FC<SharePopupProps> = ({
  isOpen, onClose, title, width, height, onButtonClick,
}) => (
  <PopupWrapper isOpen={isOpen} onClose={onClose}>
    <h2>{title}</h2>
  </PopupWrapper>
);
SharePopup.defaultProps = {
  width: '625px', 
  height: '285px',
  title: 'Поделиться',
};
export default SharePopup;
