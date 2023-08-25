import { useEffect, useState } from "react";
import "./FoodCart.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchData } from "../app/foodslice";
import { Enums } from "../app/foodslice";
import { addInsideCart } from "../app/foodslice";

const FoodCart = ({ icon }) => {
  const dispatch = useDispatch();
  const {
    data: foodItem,
    status,
    cart_data,
  } = useSelector((state) => state.food);

  const { info } = useSelector((state) => state.footer);

  console.log(foodItem);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleAdd = (item) => {
    console.log(item);
    dispatch(addInsideCart(item));
  };

  if (status === Enums.LOADING) return <h1>Loading.....</h1>;

  if (status === Enums.ERROR) return <h1>Error</h1>;

  return (
    <div className="res-foodcontainer">
      {icon === 1 ? (
        foodItem?.map((item) => {
          console.log(info);
          if (item.id === info) {
            console.log(info);
            return (
              <div key={item.id} className="res-foodcart">
                <div>{item.price}</div>
                <div>{item.title}</div>
                <div>{item.category}</div>
                <div>
                  <button
                    onClick={() => {
                      handleAdd(item);
                    }}
                  >
                    AddToCart
                  </button>
                </div>
              </div>
            );
          }
        })
      ) : (
        <p>
          {cart_data?.map((item) => {
            // if (item.id === 1) {
            return (
              <div key={item.id} className="res-foodcart">
                <div>{item.price}</div>
                <div>{item.title}</div>
                <div>{item.category}</div>
                <div>
                  <button
                    onClick={() => {
                      handleAdd(item);
                    }}
                  >
                    RemoveCart
                  </button>
                </div>
              </div>
            );
          })}
        </p>
      )}
    </div>
  );
};

export default FoodCart;
