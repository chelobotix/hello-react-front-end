import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMessages } from "../redux/features/msgsSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const randomGreeting = () => {
    dispatch(fetchMessages());
  };

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  if (store.message.data === "") {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>{store.message.data.text}</h1>
      <button type="button" onClick={randomGreeting}>
        Get new greeting
      </button>
    </>
  );
};

export default Greeting;
