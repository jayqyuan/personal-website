import React from "react";
import Link from "next/link";
import {v4 as uuidV4} from 'uuid'


type LinkType ={
    href: string;
    label: string
}

export type NavBarProps ={
    links: LinkType[];
    keyType: string
}
  

const NavBar: React.FC<NavBarProps> = ({links, keyType})=>{
  


    return(
        <nav>
            <ul>
                {links.map(link=>{
                    return(
                        <li key={keyType === 'V4'? uuidV4() : link.href}>
                            <Link href={link.href} scroll={false}>
                                {link.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </nav>
    )
}

export default NavBar