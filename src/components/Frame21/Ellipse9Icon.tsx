import { memo, SVGProps } from 'react';

const Ellipse9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 141 141' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={70.5} cy={70.5} r={70.5} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse9Icon);
export { Memo as Ellipse9Icon };
