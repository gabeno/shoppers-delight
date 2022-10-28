import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

type ShoppinCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppinCartProps) {
    const {closeCart, cartItems} = useShoppingCart()

    return (
        <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}