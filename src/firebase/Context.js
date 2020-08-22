import React, { useState, useEffect, createContext } from "react";
import firebase from "./firebase";

export const FirebaseContext = createContext();

const Context = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [facturas, setFacturas] = useState([])

  //para traer los datos de la base de datos
  useEffect(() => {
    const getProducts = () => {
      firebase.db.collection("productos").onSnapshot(handleSnapshot);
    };

    const getFacturas = () => {
      firebase.facturas.collection('facturas').onSnapshot(handleFactura)
    }

    getProducts();
    getFacturas()
  }, []);

  const handleSnapshot = (snapshot) => {
    const productos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setProductos(productos);
  };

  const handleFactura = (snapshot) => {
    const facturas = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setFacturas(facturas);
  };
  //hasta aqui


  return (
    <FirebaseContext.Provider value={{ productos, facturas, firebase }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default Context;
