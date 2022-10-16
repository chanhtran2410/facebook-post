import { memo, SVGProps } from 'react';

const Icon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.5312 0.96875C17.1094 0.96875 19.5703 1.67188 21.7969 2.96094C24.0234 4.25 25.7812 6.00781 27.0703 8.23438C28.3594 10.4609 29.0625 12.9219 29.0625 15.5C29.0625 18.1367 28.3594 20.5391 27.0703 22.7656C25.7812 24.9922 24.0234 26.8086 21.7969 28.0977C19.5703 29.3867 17.1094 30.0312 14.5312 30.0312C11.8945 30.0312 9.49219 29.3867 7.26562 28.0977C5.03906 26.8086 3.22266 24.9922 1.93359 22.7656C0.644531 20.5391 0 18.1367 0 15.5C0 12.9219 0.644531 10.4609 1.93359 8.23438C3.22266 6.00781 5.03906 4.25 7.26562 2.96094C9.49219 1.67188 11.8945 0.96875 14.5312 0.96875ZM14.5312 27.2188C16.6406 27.2188 18.5742 26.6914 20.3906 25.6367C22.1484 24.582 23.6133 23.1758 24.668 21.3594C25.7227 19.6016 26.25 17.6094 26.25 15.5C26.25 14.5625 26.1328 13.625 25.8984 12.6875H24.8438C24.5508 12.6875 24.3164 12.8047 24.1406 12.9805C23.9648 13.1562 23.9062 13.332 23.9062 13.5664V13.9766C23.9062 14.3867 23.7305 14.6797 23.3789 14.7969L22.5 15.2656C22.1484 15.4414 21.8555 15.4414 21.6211 15.207L20.5078 14.5039C20.2734 14.3867 19.9805 14.3281 19.7461 14.3867L19.5703 14.4453C19.2773 14.5625 19.1016 14.7383 18.9844 15.0312C18.8672 15.3242 18.9258 15.5586 19.1016 15.793L19.8633 16.9648C20.0391 17.2578 20.2734 17.375 20.625 17.375H21.1523C21.3867 17.375 21.5625 17.4922 21.7383 17.668C21.9141 17.8438 22.0312 18.0195 22.0312 18.2539V18.957C22.0312 19.1914 21.9727 19.3672 21.8555 19.4844L20.7422 20.9492C20.625 21.0664 20.5664 21.2422 20.5664 21.3594L20.332 22.6484C20.2734 22.8828 20.1562 23.0586 20.0391 23.1758C19.4531 23.7031 18.9844 24.2891 18.5742 24.875L17.8125 26.0469C17.4609 26.5156 17.0508 26.75 16.4648 26.75C16.1133 26.75 15.8203 26.6914 15.5859 26.5156C15.3516 26.3984 15.1172 26.1641 15 25.8711C14.6484 25.2266 14.5312 24.5234 14.5312 23.7617V22.0039C14.5312 21.7695 14.4141 21.5938 14.2383 21.418C14.0625 21.2422 13.8867 21.125 13.6523 21.125H12.1289C11.1914 21.125 10.4297 20.832 9.84375 20.1875C9.19922 19.6016 8.90625 18.8398 8.90625 17.9023V17.082C8.90625 16.6133 9.02344 16.1445 9.25781 15.6758C9.49219 15.207 9.78516 14.8555 10.1953 14.5625L11.7773 13.332C12.3633 12.9219 13.0078 12.6875 13.7109 12.6875H13.7695C14.2383 12.6875 14.7656 12.8047 15.2344 13.0391L16.0547 13.4492C16.2891 13.5664 16.5234 13.625 16.7578 13.5078L19.5117 12.5703C19.6875 12.5703 19.8633 12.4531 19.9805 12.2773C20.0977 12.1602 20.1562 11.9258 20.1562 11.6914C20.1562 11.457 20.0391 11.2812 19.8633 11.1055C19.6875 10.9297 19.5117 10.8125 19.2773 10.8125H18.6328C18.3984 10.8125 18.1641 10.7539 17.9883 10.5195L17.6367 10.168C17.4023 9.99219 17.2266 9.875 16.9922 9.875H11.6602C11.4258 9.875 11.1914 9.81641 11.0156 9.64062C10.8398 9.46484 10.7812 9.23047 10.7812 8.99609V8.70312C10.7812 8.52734 10.8398 8.35156 10.957 8.17578C11.0742 8 11.25 7.88281 11.4844 7.82422L12.3047 7.58984C12.5391 7.58984 12.7148 7.47266 12.832 7.23828L13.3008 6.53516C13.4766 6.30078 13.7109 6.125 14.0625 6.125H15.4688C15.7031 6.125 15.9375 6.06641 16.1133 5.89062C16.2891 5.71484 16.4062 5.48047 16.4062 5.24609V3.95703C15.7031 3.83984 15.1172 3.78125 14.5312 3.78125C12.4219 3.78125 10.4297 4.30859 8.67188 5.36328C6.85547 6.41797 5.44922 7.88281 4.39453 9.64062C3.33984 11.457 2.8125 13.3906 2.8125 15.5C2.8125 17.6094 3.33984 19.6016 4.39453 21.3594C5.44922 23.1758 6.85547 24.582 8.67188 25.6367C10.4297 26.6914 12.4219 27.2188 14.5312 27.2188Z'
      fill='#606770'
    />
  </svg>
);

const Memo = memo(Icon4);
export { Memo as Icon4 };
