import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ProfilePicture.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle16?: string;
  };
}
/* @figmaId 6:3 */
export const ProfilePicture: FC<Props> = memo(function ProfilePicture(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={`${props.classes?.rectangle16 || ''} ${classes.rectangle16}`}></div>
    </div>
  );
});
