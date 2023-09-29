import { motion } from 'framer-motion';

const quote = {
    intial: {
        opacity: 1
    }
}
const AnimatedText = ({ text, className = "" }) => {
    return (
        <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
            <h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className} `}>
                {
                    text.split(" ").map((word, index) => <span className="inline-block" key={word + "_" + index}>{word}&nbsp;</span>)
                }
            </h1>
        </div>
    );
}

export default AnimatedText;