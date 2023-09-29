import Link from 'next/link'; 

export default function Home() {
  return (
    <main>
    <div>
      <p>Name: Wei Dai</p>
      <p>Course section: CPRG 306 D</p>
      {/* Use Link component to link to your GitHub repository */}
      <Link href="https://github.com/WeiDai15/cprg306-assignments.git">
        <a>GitHub Repository</a>
      </Link>
    </div>
    </main>
  );
};


