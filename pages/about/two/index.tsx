import React from 'react';
import Link from 'next/link';
import './style.scss';

interface Props {}

const Two: React.FC<Props> = () => {
  return (
    <div className="two">
      Two
      <Link href="/">
        <a>go to /</a>
      </Link>
    </div>
  );
};

export default Two;
