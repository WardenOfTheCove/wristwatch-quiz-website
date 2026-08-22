import IconButton from '../homeButton';
import { answers } from '../quiz/page';



export default function Results() {
    return (
        <main className="bg-gray-800 h-full w-full absolute font-bold">
            <div>
                <IconButton />
                <p className="text-2xl text-center mt-[3%] border-b-2 border-solid border-amber-500 mx-[25%]">Here is our recommendation based on your answers</p>
            </div>
            <div>
                <p className="text-xl text-center"> { answers } </p>
            </div>
            
        </main>
    );
}