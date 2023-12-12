import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark  absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light`}

            >&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "" , toggle}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(href);
        toggle()
    }
    return (
        <button onClick={handleClick} className={`${className} relative group text-light dark:text-dark my-2`}>
            {title}
            <span className={`h-[1px] inline-block bg-light  absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 dark:bg-dark
            ${router.asPath === href ? 'w-full' : 'w-0'}
           `}

            >&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between 
        dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
        ">
            <button className="flex-col justify-center items-center hidden lg:!flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            {/* desktop nav  */}
            <div className="w-full flex justify-between items-center lg:hidden ">
                <nav>
                    <CustomLink title="Home" href="/" className="mr-4" />
                    <CustomLink title="About" href="/about" className="mx-4" />
                    {/* <CustomLink title="Projects" href="/projects" className="mx-4" />
                    <CustomLink title="Articles" href="/articles" className="ml-4" /> */}
                </nav>


                <nav className="flex items-center justify-center flex-wrap ">
                    {/* <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3" href="https://twitter.com" target="_blank"><TwitterIcon /></motion.a> */}
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 flex flex-col items-center justify-center mr-4" href="https://github.com/supinders39" target="_blank"><GithubIcon />
                    <span className="text-[.6rem] mt-0">Personal</span>
                    </motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 flex flex-col items-center justify-center mx-4" href="https://drive.google.com/file/d/1NoXtmxkwQH5sgMk3Itpcail_UZ-8Vq-9/view?usp=sharing" target="_blank"><GithubIcon />
                    <span className="text-[.6rem] mt-0">Company</span>
                    </motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3" href="https://twitter.com" target="_blank"><LinkedInIcon /></motion.a>
                    {/* <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 bg-light rounded-full" href="https://twitter.com" target="_blank"><PinterestIcon /></motion.a> */}
                    {/* <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3" href="https://twitter.com" target="_blank"><DribbbleIcon /></motion.a> */}
                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                    >
                        {
                            mode === "dark" ?
                                <SunIcon className="fill-dark" />
                                : <MoonIcon className="fill-dark" />
                        }
                    </button>
                </nav>
            </div>

            {/* Mobile nav  */}
           {isOpen ?  <motion.div className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
          bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
          "
          initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
          animate={{scale: 1, opacity: 1}}
          >
                <nav className="flex items-center flex-col justify-center">
                    <CustomMobileLink title="Home" href="/" className="" toggle={handleClick} />
                    <CustomMobileLink title="About" href="/about" className="" toggle={handleClick} />
                    {/* <CustomMobileLink title="Projects" href="/projects" className="" toggle={handleClick} />
                    <CustomMobileLink title="Articles" href="/articles" className="" toggle={handleClick} /> */}
                </nav>


                <nav className="flex items-center justify-center flex-wrap mt-2">
                    {/* <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3 sm:mx-1" href="https://twitter.com" target="_blank"><TwitterIcon /></motion.a> */}
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="flex flex-col items-center justify-center w-6 mr-5 sm:mr-5 bg-light rounded-full dark:bg-dark" href="https://github.com/supinders39" target="_blank"><GithubIcon />
                     <span className="text-[.6rem] mt-0 bg-light dark:bg-dark rounded px-1">Personal</span>
                    </motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="flex flex-col items-center justify-center w-6 mx-5 sm:mx-5 bg-light rounded-full  px-1-full dark:bg-dark" href="https://drive.google.com/file/d/1NoXtmxkwQH5sgMk3Itpcail_UZ-8Vq-9/view?usp=sharing" target="_blank"><GithubIcon />
                     <span className="text-[.6rem] mt-0 bg-light dark:bg-dark rounded px-1">Company</span>
                    </motion.a>
                    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 sm:ml-3" href="https://twitter.com" target="_blank"><LinkedInIcon /></motion.a>
                    {/* <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 sm:mx-1 bg-light rounded-full" href="https://twitter.com" target="_blank"><PinterestIcon /></motion.a> */}
                    {/* <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3 sm:mx-1" href="https://twitter.com" target="_blank"><DribbbleIcon /></motion.a> */}
                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-2 flex items-center justify-center rounded-full p-1 
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                    >
                        {
                            mode === "dark" ?
                                <SunIcon className="fill-dark" />
                                : <MoonIcon className="fill-dark" />
                        }
                    </button>
                </nav>
            </motion.div> : null }
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>

        </header>);
}

export default NavBar;