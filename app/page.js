import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Home(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='z-10 max-w-5x1 w-full items-center justify-between font-mono text-sm'>
                <hi>CPRG 306: Web Development 2 - Assignments</hi>
                <StudentInfo/>
                <div><link href='week2'>week2</link></div>
                <div><link href='week3'>week3</link></div>
            </div>
        </main>
    )
}