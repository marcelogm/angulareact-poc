import dynamic from 'next/dynamic';

const TestComponent = dynamic(() => import('./TestComponent'), { ssr: false });

export { TestComponent };
