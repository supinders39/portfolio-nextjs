import {motion, useScroll, } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={ref} />
        <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: "spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position} &nbsp; <a className="text-primary capitalize dark:text-primaryDark"  target="_blank" href={companyLink}>@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">{time} | {address}</span>
            <p className="font-medium w-full md:text-sm">
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
                md:w-[2px] md:left-[30px] xs:left-[20px]" />
                <ul className="w-full flex flex-col justify-between ml-4 xs:ml-2 ">
                    <Details
                        position={"Graphics Designer"}
                        company={"ItConnectUs"}
                        address={"Mohali, India"}
                        time={"Jan-2019 - Apr-2019"}
                        work="As a Graphics Designer at ITConnectUs, I was responsible for defining and maintaining the company's visual identity, creating captivating designs for web interfaces and marketing materials, and collaborating cross-functionally to align design with business goals. My role contributed to enhancing the company's brand and user engagement through creative and user-centric design." />
                    <Details
                        position={"Frontend Developer"}
                        company={"FocalCode"}
                        address={"Mohali, India"}
                        time={"May-2019 - Sep-2019"}
                        work="At FocalCode, I specialized in Angular, CSS, HTML, and JavaScript to create responsive web interfaces. I developed complex features, optimized performance, and collaborated closely with cross-functional teams to ensure high-quality code and outstanding user experiences." />
                    <Details
                        position={"Tech Lead/Full Stack Developer"}
                        company={"Codeferns Technologies"}
                        address={"Chandigarh, India"}
                        time={"Oct-2019 - Dec-2023"}
                        work="At Codeferns Technologies, I excelled in dual roles. As a Tech Lead, I provided strategic guidance and mentorship, fostering innovation. Simultaneously, I led full stack development efforts using ReactJS, React Native, Angular, NodeJs and more. My impact extended from project delivery to code quality, and I consistently drove innovation." />
                </ul>
            </div>
        </div>
    );
}

export default Experience;