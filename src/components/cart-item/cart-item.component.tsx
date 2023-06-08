import { FC, memo } from 'react';
import { CartItem as TCartItem } from '../../features/cart/cartSlice';
import { CartItemContainer, Img, ItemDetails, Name } from './cart-item.styles';

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
