import React from 'react';
import {
  errorIcon, 
  noVisionIcon, 
  yandexIcon, 
  googleIcon, 
  visionIcon, 
  magniferIcon,
  arrowDownIcon,
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
export const MagniferIcon = (props) => (
  <TemplateIcon {...props} icon={magniferIcon} />
);
export const ArrowDownIcon = (props) => (
  <TemplateIcon {...props} icon={arrowDownIcon} />
);
