import React from 'react';
import styled from "styled-components";
import {connect} from "react-redux";
import {cart} from "../store/Cart/CartTypes";
import {ApplicationState} from "../store/Store";

const CartContainer = styled.div`
  padding: 30px`;

const CartHeader = styled.h2``;

const CartHeaderDiv = styled.div`
  height: 100%;
  width: 100%`;

const CartListsDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const CartListItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartListItemImage = styled.img`
  width: 100px;
  height: 100px;
`;

const CartListItemName = styled.p``;

const CartListItemPrice = styled.p``;


export interface cartProps {
  cartItems: cart;
}

type AllCartProps = cartProps;

const Cart: React.FC<AllCartProps> = ({cartItems}) => {
  console.log("cartItems", cartItems);
  return (
      <CartContainer>
        <CartHeaderDiv>
          <CartHeader>Your Cart</CartHeader>
        </CartHeaderDiv>
        <CartListsDiv>
          {cartItems.items.map(item => {
            return (
                <CartListItemDiv>
                  <CartListItemImage src={item.image}/>
                  <CartListItemName>{item.name}</CartListItemName>
                  <CartListItemPrice>{item.price}</CartListItemPrice>
                </CartListItemDiv>
            );
          })}
        </CartListsDiv>
      </CartContainer>
  );
};
const mapStateToProps = ({cart}: ApplicationState) => ({
  cartItems: cart.data
});

const mapDispatchProps = () => {};

export default connect(mapStateToProps,mapDispatchProps)(Cart);
