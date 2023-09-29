import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark  absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <CustomLink title="Home" href="/" className="mr-4" />
                <CustomLink title="About" href="/about" className="mx-4" />
                <CustomLink title="Projects" href="/projects" className="mx-4" />
                <CustomLink title="Articles" href="/articles" className="ml-4" />
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>

            <nav className="flex items-center justify-center flex-wrap ">
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3" href="https://twitter.com" target="_blank"><TwitterIcon /></motion.a>
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3" href="https://twitter.com" target="_blank"><GithubIcon /></motion.a>
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3" href="https://twitter.com" target="_blank"><LinkedInIcon /></motion.a>
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3" href="https://twitter.com" target="_blank"><PinterestIcon /></motion.a>
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3" href="https://twitter.com" target="_blank"><DribbbleIcon /></motion.a>
            </nav>
        </header>);
}

export default NavBar;