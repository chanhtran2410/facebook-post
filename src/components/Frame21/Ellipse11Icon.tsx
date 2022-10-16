import { memo, SVGProps } from 'react';

const Ellipse11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={35} cy={35} r={35} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse11Icon);
export { Memo as Ellipse11Icon };
