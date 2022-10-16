import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse4Icon } from './Ellipse4Icon';
import { Ellipse7Icon } from './Ellipse7Icon';
import { Ellipse8Icon } from './Ellipse8Icon';
import { Ellipse9Icon } from './Ellipse9Icon';
import { Ellipse10Icon } from './Ellipse10Icon';
import { Ellipse11Icon } from './Ellipse11Icon';
import { Ellipse12Icon } from './Ellipse12Icon';
import { Ellipse13Icon } from './Ellipse13Icon';
import { Ellipse14Icon } from './Ellipse14Icon';
import { Frame3Icon } from './Frame3Icon';
import { Frame4Icon } from './Frame4Icon';
import { Frame16Icon } from './Frame16Icon';
import classes from './Frame21.module.css';
import { Icon } from './Icon';
import { Icon2 } from './Icon2';
import { Icon3 } from './Icon3';
import { Icon4 } from './Icon4';
import { Icon5 } from './Icon5';
import { ProfilePicture } from './ProfilePicture/ProfilePicture';

interface Props {
  className?: string;
}
/* @figmaId 4:4 */
export const Frame21: FC<Props> = memo(function Frame21(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ellipse7}>
        <Ellipse7Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse10}>
        <Ellipse10Icon className={classes.icon2} />
      </div>
      <div className={classes.ellipse9}>
        <Ellipse9Icon className={classes.icon3} />
      </div>
      <div className={classes.ellipse8}>
        <Ellipse8Icon className={classes.icon4} />
      </div>
      <div className={classes.rectangle21}></div>
      <div className={classes.rectangle20}></div>
      <div className={classes.commentsBottom}>
        <div className={classes.frame17}>
          <div className={classes.frame12}>
            <div className={classes.frame4}>
              <div className={classes.frame3}>
                <div className={classes.icon5}>
                  <Frame3Icon className={classes.icon6} />
                </div>
              </div>
              <div className={classes.icon7}>
                <Frame4Icon className={classes.icon8} />
              </div>
            </div>
            <div className={classes._541}>541</div>
          </div>
        </div>
        <div className={classes.rectangle19}></div>
        <div className={classes.frame20}>
          <div className={classes.frame18}>
            <div className={classes.frame13}>
              <div className={classes.unnamed}>
                <Icon className={classes.icon9} />
              </div>
              <div className={classes.like}>Like</div>
            </div>
            <div className={classes.frame14}>
              <div className={classes.unnamed2}>
                <Icon2 className={classes.icon10} />
              </div>
              <div className={classes.comment}>Comment</div>
            </div>
            <div className={classes.frame15}>
              <div className={classes.unnamed3}>
                <Icon3 className={classes.icon11} />
              </div>
              <div className={classes.share}>Share</div>
            </div>
          </div>
          <div className={classes.frame16}>
            <Frame16Icon className={classes.icon12} />
          </div>
        </div>
      </div>
      <div className={classes.rectangle23}></div>
      <div className={classes.rectangle22}></div>
      <div className={classes.yesThisNewsIsMedical}>
        <div className={classes.textBlock}>
          <p></p>
        </div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>Yes</span>
          </p>
        </div>
        <div className={classes.textBlock3}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label2}>This news is medical</span>
          </p>
        </div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
      </div>
      <div className={classes.nonmedThisNewsIsMedical}>
        <div className={classes.textBlock5}>
          <p></p>
        </div>
        <div className={classes.textBlock6}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label3}>Nonmed</span>
          </p>
        </div>
        <div className={classes.textBlock7}>
          <p className={classes.labelWrapper4}>
            <span className={classes.label4}>This news is medical</span>
          </p>
        </div>
        <div className={classes.textBlock8}>
          <p></p>
        </div>
      </div>
      <div className={classes.skipInformationIsRequired}>
        <div className={classes.textBlock9}>
          <p></p>
        </div>
        <div className={classes.textBlock10}>
          <p className={classes.labelWrapper5}>
            <span className={classes.label5}>Skip</span>
          </p>
        </div>
        <div className={classes.textBlock11}>
          <p className={classes.labelWrapper6}>
            <span className={classes.label6}>Information is required</span>
          </p>
        </div>
        <div className={classes.textBlock12}>
          <p></p>
        </div>
      </div>
      <div className={classes.ellipse11}>
        <Ellipse11Icon className={classes.icon13} />
      </div>
      <div className={classes.ellipse12}>
        <Ellipse12Icon className={classes.icon14} />
      </div>
      <div className={classes.ellipse13}>
        <Ellipse13Icon className={classes.icon15} />
      </div>
      <div className={classes.ellipse14}>
        <Ellipse14Icon className={classes.icon16} />
      </div>
      <div className={classes.isThisNewsMedical}>Is this news medical ?</div>
      <div className={classes.advertImage1200X628}></div>
      <div className={classes.frame11}>
        <div className={classes._26Comments}>26 Comments</div>
      </div>
      <div className={classes.frame22}>
        <div className={classes._87Shares}>87 Shares</div>
      </div>
      <div className={classes.topCard}>
        <div className={classes.frame7}>
          <div className={classes.frame6}>
            <ProfilePicture classes={{ rectangle16: classes.rectangle16 }} />
            <div className={classes.frame5}>
              <div className={classes.page_Name}>Page_Name</div>
              <div className={classes.sponsored}>
                <div className={classes.sponsored2}>Sponsored</div>
                <div className={classes.ellipse4}>
                  <Ellipse4Icon className={classes.icon17} />
                </div>
                <div className={classes.unnamed4}>
                  <Icon4 className={classes.icon18} />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.unnamed5}>
            <Icon5 className={classes.icon19} />
          </div>
        </div>
        <div className={classes.frame8}>
          <div className={classes.insertTextHere}>Insert text here. </div>
          <div className={classes.TagOneTagTwoTagThreeTagOneTagT}>
            #tagOne #tagTwo #tagThree #tagOne #tagTwo #tagThree #tagThree{' '}
          </div>
          <div className={classes.httpsEnterUrl}>https://enter-url</div>
        </div>
      </div>
    </div>
  );
});
