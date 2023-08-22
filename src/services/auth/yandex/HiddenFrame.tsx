import React, { FC } from 'react';

interface IHiddenFrame {
  redirectTo: string
}

const HiddenFrame: FC<IHiddenFrame> = ({ redirectTo }) => (<iframe hidden title='hidden-frame' src={redirectTo} />);

export default HiddenFrame;
