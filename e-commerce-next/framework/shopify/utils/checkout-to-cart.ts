import { Checkout, Maybe } from "@framework/schema";
import { normalizeCart } from "./normilize";

const checkoutToCart = (checkout?: Maybe<Checkout>) => {
  if (!checkout) {
    throw new Error("Missing checkout options!");
  }
  return normalizeCart(checkout);
};

export default checkoutToCart;
