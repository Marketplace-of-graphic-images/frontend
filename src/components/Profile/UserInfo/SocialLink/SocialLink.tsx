import React, { FC, PropsWithChildren } from 'react';
import styles from './SocialLink.module.scss';
import { LinkIcon } from '../../../../ui-lib/Icons';

interface SocialLinkProps extends PropsWithChildren {
  link: string;
}

const SocialLink: FC<SocialLinkProps> = ({ link, children }) => (
  <a href={link} className={styles.socialLink} target='_blank' rel='noreferrer'>
    {children}
    <LinkIcon width={21} height={21} />
  </a>
);

export default SocialLink;
