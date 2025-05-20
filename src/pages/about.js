import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/my-pic.jpg";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latestValue) => {
            if (ref.current && latestValue.toFixed(0) <= value) {
                ref.current.textContent = latestValue.toFixed(0)
            }
        })
    }, [springValue, value])
    return <span ref={ref}>
        5+
    </span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Supinder Singh | About Page</title>
                <meta name="description" content="Full stack developer bio" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className={"pt-16"}>
                    <AnimatedText text={"Passion Fuels Purpose!"} className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 " />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
                        <div className="col-span-3 flex flex-col items-start justify-start xs:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className="font-medium ">Greetings! I am Supinder Singh, a seasoned Full Stack Developer proficient in MEAN, MERN, and React Native technologies. With over 5 years of experience, I specialize in harmonizing front-end and back-end expertise to craft resilient, scalable web and mobile applications.</p>
                            <p className="font-medium my-4">My skill set spans diverse tech stacks—including native iOS (Swift/SwiftUI/UIKit) and Android (Kotlin/JetPack Compose) development—enabling me to deliver high-performance apps across platforms. I bring finesse in UI/UX design, seamless API integrations, and robust server optimization to every project. I&apos;ve led teams, fine-tuned e-commerce systems, and engineered solutions that power cross-platform success.</p>
                            <p className="font-medium ">As an adept full-stack developer, I am committed to transforming concepts into cutting-edge digital experiences. Delve into my recent projects to witness how I push boundaries, solve real-world problems, and continually strive to leave a lasting positive impact in the dynamic tech landscape.                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
                            <Image src={profilePic} alt="Supinder Singh" className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Satisfied clients</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Projects completed</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={5} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Years of experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>

            </main>
        </>
    );
}

export default about;