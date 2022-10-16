import { memo, SVGProps } from 'react';

const Ellipse4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={2} cy={2.5} r={2} fill='#616770' />
  </svg>
);

const Memo = memo(Ellipse4Icon);
export { Memo as Ellipse4Icon };
