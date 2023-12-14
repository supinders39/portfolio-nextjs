import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import trackify from "../../public/images/projects/trackify.jpeg"
import breadit from "../../public/images/projects/breadit.jpg"
import ytLogo from "../../public/yt_logo.png"
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light 
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-r-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
            rounded-br-3xl dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            " />
            <Link className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full" href={link} target="_blank">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className=" hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="flex mt-2 items-center ">
                    <Link href={github} target="_blank" className="w-10 "><GithubIcon /></Link>
                    <Link href={link} target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg 
                    font-semibold dark:bg-light dark:text-dark
                    sm:px-4 sm:text-base
                    ">Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, img, link, github, youtube }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border 
    border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light
            md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]
            " />
            <Link className="w-full cursor-pointer overflow-hidden rounded-lg " href={link} target="_blank">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4 ">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className=" hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <div className="w-full flex mt-2 items-center justify-between">
                    <Link href={link} target="_blank"
                        className="text-lg 
                    font-semibold underline md:text-base">Visit</Link>
                    <div className="items-center flex gap-2">

                        {youtube &&
                            <Link href={youtube} target="_blank" className="">
                                <Image className="w-24 md:w-18  object-contain" src={ytLogo} />
                        </Link>}
                        <Link href={github} target="_blank" className="w-8 md:w-6"><GithubIcon /></Link>
                    </div>

                </div>
            </div>
        </article>
    )
}
const projects = () => {
    return (
        <>
            <Head>
                <title>Supinder Singh | Projects Page</title>
                <meta name="description" content="Full stack developer bio" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className={"pt-16"}>
                    <AnimatedText text={"Elevating Possibilities, One Line at a Time"}
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        {/* <div className="col-span-12">
                            <FeaturedProject
                                title="Crypto Screener Application"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                                link={"/"}
                                img={project1}
                                type={"Featured Project"}
                                github={"/"}

                            />
                        </div> */}
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Trackify"
                                link={"https://trackify.sarao.dev/"}
                                img={trackify}
                                type={"Featured Project"}
                                youtube={"https://www.youtube.com/watch?v=TY5G3lmAePI"}
                                github={"https://github.com/supinders39/trackify"}

                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Breadit"
                                link={"https://breadit.sarao.dev/"}
                                youtube={"https://www.youtube.com/watch?v=4mEnXhdghNc"}
                                img={breadit}
                                type={"Featured Project"}
                                github={"https://github.com/supinders39/breadit"}

                            />
                        </div>
                        {/* <div className="col-span-12">
                            <FeaturedProject
                                title="Crypto Screener Application"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                                link={"/"}
                                img={project1}
                                type={"Featured Project"}
                                github={"/"}

                            />
                        </div> */}
                        {/* <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Crypto Screener Application"
                                link={"/"}
                                img={project1}
                                type={"Featured Project"}
                                github={"/"}

                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Crypto Screener Application"
                                link={"/"}
                                img={project1}
                                type={"Featured Project"}
                                github={"/"}

                            />
                        </div> */}
                    </div>
                </Layout>
            </main>
        </>
    );
}

export default projects;