import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Home(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='z-10 max-w-5x1 w-full items-center justify-between font-mono text-sm'>
                <hi>CPRG 306: Web Development 2 - Assignments</hi>
                <StudentInfo name="Wei Dai" course="CPRG306 D"></StudentInfo>
                <div><link href='week2'>week2</link></div>
                <div><link href='week3'>week3</link></div>
                <div><link href='week4'>week4</link></div>
                <div><link href='week5'>week5</link></div>
                <div><link href='week6'>week6</link></div>
                <div><link href='week7'>week7</link></div>
                <div><link href='week8'>week8</link></div>
                <div><link href='week10'>week10</link></div>
            </div>
        </main>
    )
}
