import dynamic from 'next/dynamic';

const AnotherComponent = dynamic(() => import('./AnotherComponent'), { ssr: false });

export { AnotherComponent };
