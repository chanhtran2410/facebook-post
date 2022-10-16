import { memo, SVGProps } from 'react';

const Frame3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={26.5} cy={26.5} r={21.5} fill='url(#paint0_linear_6_73)' stroke='white' strokeWidth={4} />
    <path
      d='M34.8516 18.457C35.7109 19.2305 36.3555 20.1328 36.6992 21.207C37.043 22.3242 37.0859 23.3984 36.8281 24.5156C36.5703 25.6328 36.0547 26.5781 35.2813 27.3516L26.9883 35.9453C26.6875 36.2461 26.3438 36.375 26 36.375C25.6133 36.375 25.2695 36.2461 25.0117 35.9453L16.7188 27.3945C15.9023 26.5781 15.3867 25.6328 15.1289 24.5156C14.8711 23.3984 14.957 22.3242 15.3008 21.207C15.6445 20.1328 16.2461 19.2305 17.1484 18.457C17.9219 17.8125 18.7813 17.3828 19.7695 17.2109C20.7148 17.0391 21.7031 17.125 22.6484 17.4258C23.5938 17.7695 24.4102 18.2852 25.1406 19.0156L26 19.875L26.8594 19.0156C27.5469 18.2852 28.4062 17.7695 29.3516 17.4258C30.2969 17.125 31.2422 17.0391 32.2305 17.2109C33.1758 17.3828 34.0781 17.8125 34.8516 18.457Z'
      fill='white'
    />
    <defs>
      <linearGradient id='paint0_linear_6_73' x1={26.5} y1={5} x2={26.5} y2={48} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#F95E73' />
        <stop offset={1} stopColor='#E3223C' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Frame3Icon);
export { Memo as Frame3Icon };
