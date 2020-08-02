import React from 'react';
import Link from 'next/link';
import './style.scss';

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <div className="about">
      Section About
      <Link href="/about/one/">
        <a>go to one</a>
      </Link>
      <Link href="/about/two/">
        <a>go to two</a>
      </Link>
    </div>
  );
};

export default About;
