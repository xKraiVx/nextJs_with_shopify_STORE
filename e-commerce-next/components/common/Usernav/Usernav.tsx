import Link from "next/link";
import { FunctionComponent } from "react";
import { Bag as Cart, Heart } from "@components/icons";
import { useUI } from "@components/ui/context";

import styles from "./Usernav.module.css";
import useCart from "@framework/cart/use-cart";
import { LineItem } from "@common/types/cart";

const Usernav: FunctionComponent = () => {
  const { openSidebar } = useUI();
  const { data } = useCart();

  const itemCount =
    data?.lineItems.reduce((count: number, item: LineItem) => {
      return count + item.quantity;
    }, 0) ?? 0;

  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Cart onClick={openSidebar} />
          {itemCount > 0 && (
            <span className={styles.bagCount}>{itemCount}</span>
          )}
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
