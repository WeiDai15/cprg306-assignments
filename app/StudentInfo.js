import Link from 'next/link'; 

export default function Home() {
  return (
    <main>
    <div>
      <p>Name: Wei Dai</p>
      <p>Course section: CPRG 306 D</p>
      <Link href="https://github.com/WeiDai15/cprg306-assignments.git">
        <a>GitHub Repository</a>
      </Link>
    </div>
    </main>
  );
};


