import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark 
        font-medium text-lg dark:text-light dark:border-light sm:text-base">
            <Layout className={"py-8 items-center justify-between flex lg:flex-col lg:py-6"}>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className="flex items-center lg:py-2 ">
                    Build with <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> by &nbsp;<Link href={"https://sarao.dev"} className="underline underline-offset-2">Supinder Singh</Link>
                </div>
                <Link href="mailto:supinders39@gmail.com" className="underline underline-offset-2" target="_blank">Say hello</Link>
            </Layout>
        </footer>
    );
}

export default Footer;