import React, { useState, useEffect, createContext } from "react";
import firebase from "./firebase";

export const FirebaseContext = createContext();

const Context = ({ children }) => {
  const [productos, setProductos] = useState([]);

  //para traer los datos de la base de datos
  useEffect(() => {
    const getProducts = () => {
      firebase.db.collection("productos").onSnapshot(handleSnapshot);
    };

    getProducts();
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
  //hasta aqui


  return (
    <FirebaseContext.Provider value={{ productos, firebase }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default Context;
