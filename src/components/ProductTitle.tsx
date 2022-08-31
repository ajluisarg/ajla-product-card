import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({title: providedTitle, className}: {title?: string, className?: string}) => {
    const {product: {title} = {title: ''}} = useContext(ProductContext);
  
    return <span className={`${styles.productDescription} ${className}`}>{providedTitle || title}</span>;
  };