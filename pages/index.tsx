import Link from 'next/link';
import Head from '../components/head';
import '../style.scss';
import Button from '../components/Button/Button';

export default () => (
  <div className="App">
    <Head title="Home" />
    <div className="hero">
      <h1 className="title">Welcome to create-next-app-cli (Create Next.js App building tools)</h1>
      <Link href="/about/">
        <a>go to about</a>
      </Link>
      <Button>bip</Button>
    </div>
  </div>
);
