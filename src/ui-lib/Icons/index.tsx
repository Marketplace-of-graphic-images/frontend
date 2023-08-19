import React from 'react';
import {
  errorIcon, noVisionIcon, yandexIcon, googleIcon, visionIcon,
} from '../../assets/images/icons';
import TemplateIcone from './TemplateIcone/TemplateIcone';

export const ErrorIcon = (props) => (
  <TemplateIcone {...props} icon={errorIcon} />
);
export const NoVisionIcon = (props) => (
  <TemplateIcone {...props} icon={noVisionIcon} />
);
export const YandexIcon = (props) => (
  <TemplateIcone {...props} icon={yandexIcon} />
);
export const GoogleIcon = (props) => (
  <TemplateIcone {...props} icon={googleIcon} />
);
export const VisionIcon = (props) => (
  <TemplateIcone {...props} icon={visionIcon} />
);
