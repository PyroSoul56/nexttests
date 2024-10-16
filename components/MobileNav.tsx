"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import ScrambleText from "./ui/ScrambleText";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About me",
        path: "/about",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Contact me",
        path: "/contact",
    },
];

const MobileNav = () => {  
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-16 mb-16 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            <span className='text-accent'>&#123;</span><ScrambleText text='Tomás' duration={1000}/><span className='text-accent'>&#125;</span>
                        </h1>
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <SheetClose asChild key={index}>
                            <Link href={link.path} className={` ${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl hover:text-accent-hover transition-all`}>
                                {link.name}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;