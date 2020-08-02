import React from 'react';
import Link from 'next/link';
import './style.scss';

interface Props {}

const One: React.FC<Props> = () => {
  return (
    <div className="one">
      One
      <Link href="/">
        <a>go to /</a>
      </Link>
    </div>
  );
};

export default One;
