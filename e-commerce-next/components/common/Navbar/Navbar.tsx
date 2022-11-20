import { FunctionComponent } from "react"

import { Container } from "@components/ui"
import { Usernav } from "@components/common"
import Link from "next/link"

import styles from './Navbar.module.css'

const Navbar: FunctionComponent = () => {
    return (
        <Container>
            <div className={styles.root}>
                <div className={styles.wrapper}>
                    <Link href="/">
                        <a className={styles.logo}>
                            NEXT_STORE
                        </a>
                    </Link>
                    <nav className={styles.navigation}>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a className={styles.link}>
                                        All products
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className={styles.link}>
                                        Closes
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className={styles.link}>
                                        Accessories
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className={styles.link}>
                                        Shoes
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex flex-1 justify-end space-x-8">
                        <Usernav /> 
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Navbar