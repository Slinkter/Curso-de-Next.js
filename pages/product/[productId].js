import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
    const {
        query: { productId },
    } = useRouter();

    return <div>Esta pagina es prueba de producto:{productId}</div>;
};

export default ProductItem;
