import React, {useEffect} from "react";
import {connect} from "react-redux";
import styled from "styled-components";

import ProductItem from "./ProducItem";
import {ApplicationState} from "../store/Store";
import {Inventory} from "../store/Inventory/InventoryTypes";
import {fetchRequest} from "../store/Inventory/InventoryActions";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: auto;
`;

const ProductListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface PropsFromState {
  loading: boolean;
  data: Inventory[];
  errors?: string;
}

interface propsFromDispatch {
  fetchRequest: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const HomePage: React.FC<AllProps> = ({
                                        loading,
                                        errors,
                                        data,
                                        fetchRequest
                                      }) => {
  useEffect(() => {
    fetchRequest();
  }, []);

  return (
      <Container>
        {/* <Navbar /> */}
        <ProductListItems>
          {data.map(item => {
            return <ProductItem item={item}/>;
          })}
        </ProductListItems>
      </Container>
  );
};

const mapStateToProps = ({inventory}: ApplicationState) => ({
  loading: inventory.loading,
  errors: inventory.errors,
  data: inventory.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
