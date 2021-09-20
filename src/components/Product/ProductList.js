import React, { useContext, useEffect } from "react";
import { ProductItem } from "./ProductItem";
import "./Product.css";
import { Grid } from "@material-ui/core";
import data from "../data/coffees.json";
import { CoffeContext } from "../context/CoffeContext";

export const ProductList = () => {
  const { searchTerm, categories, coffeData, setCoffeData } =
    useContext(CoffeContext);

  let array = [];

  useEffect(() => {
    data.filter((val) => {
      if (categories == 0) {
        setCoffeData(data);
      }
      if (val.category == "hot" && categories === 1) {
        array.push(val);
        setCoffeData(array);
      }

      if (val.category == "iced" && categories === 2) {
        array.push(val);
        setCoffeData(array);
      }
    });
  }, [categories]);

  return (
    <div className="productList">
      <Grid container spacing={3}>
        {coffeData
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <Grid key={key} item xs={4}>
                <ProductItem data={val} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};
