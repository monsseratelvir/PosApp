import React, { useState, useEffect } from "react";

const TotalPagar = ({ products }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [isv, setIsv] = useState(0);
  const [totalpagar, setTotalpagar] = useState(0);

  useEffect(() => {
    if (products.length === 0) setSubtotal(0);
    let sub = 0;
    let imp = 0;
    let tp = 0;

    for (let i = 0; i < products.length; i++) {
      sub = sub + parseInt(products[i].precio) * products[i].cantidad
      imp = sub * 0.15;
      tp = sub + imp;
    }

    setSubtotal(sub);
    setIsv(imp);
    setTotalpagar(tp);
  }, [products]);

  return (
    <div className="">
      <h2>Subtotal: {subtotal}</h2>
      <h4>ISV: {parseFloat(isv).toFixed(2)}</h4>
      <h1>Total: {totalpagar}</h1>
    </div>
  );
};

export default TotalPagar;

//
