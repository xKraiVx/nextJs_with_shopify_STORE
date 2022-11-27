import Link from "next/link";
import { FunctionComponent } from "react";
import { Bag as Cart, Heart } from "@components/icons";
import { useUI } from "@components/ui/context";

import styles from "./Usernav.module.css";
import useCart from "@common/cart/use-cart";

const Usernav: FunctionComponent = () => {
  const { openSidebar } = useUI();
  const { data } = useCart();
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Cart onClick={openSidebar} />
        </li>
        <li className={styles.item}>
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
