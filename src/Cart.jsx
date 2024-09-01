import React from "react";
import "./App.css";
import { Link } from "wouter";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Cart() {
  return (
    <>
      <div className="cart-top">
        <Link href="/">
          <IoMdArrowRoundBack size={30} color="rgb(78, 41, 24)" />
        </Link>
        <h1>Your Cart</h1>
      </div>
    </>
  );
}
