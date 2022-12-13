export const generarIdProduct = ()  => {
	return Math.random().toString(30).substring(2);
};
export const generarIdCart = ()  => {
	const idCart = `cart-${Math.random().toString(30).substring(2)}`;
	return idCart;
};