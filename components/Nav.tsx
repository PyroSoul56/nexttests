"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    }
]

const Nav = () => {
    const pathname = usePathname();
  return (
    <nav className="flex gap-8">
        {links.map((link, index) => (
            <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} font-medium hover:text-accent-hover transition-all`}>
                {link.name}
            </Link>
        ))}
    </nav>
  )
}

export default Nav