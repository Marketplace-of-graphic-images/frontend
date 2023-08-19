import React from 'react';
import {
  errorIcon, noVisionIcon, yandexIcon, googleIcon, visionIcon,
} from '../../assets/images/icons';
import TemplateIcon from './TemplateIcon/TemplateIcon';

export const ErrorIcon = (props) => (
  <TemplateIcon {...props} icon={errorIcon} />
);
export const NoVisionIcon = (props) => (
  <TemplateIcon {...props} icon={noVisionIcon} />
);
export const YandexIcon = (props) => (
  <TemplateIcon {...props} icon={yandexIcon} />
);
export const GoogleIcon = (props) => (
  <TemplateIcon {...props} icon={googleIcon} />
);
export const VisionIcon = (props) => (
  <TemplateIcon {...props} icon={visionIcon} />
);
