import React, { useContext } from "react";
import { PurchaseSummary } from "./PurchaseSummary";
import { CartContext } from "../context/CartContext";
import { Delete } from "@mui/icons-material";

export const CartDetails = () => {

  const { buysList, addBuys, increaseBuys, decreaseBuys, deleteBuys } = useContext(CartContext)

  return (
    <>
      <div className="container p-0 m-0">
        <div className="row">
          <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center">

            {

              buysList.map(item => (
                <div className="__card" key={item.id}>
                  <div className="col border rounded py-3 px-4 mx-2 my-3 my-lg-3 py-lg-1">
                    <div className="__card-header justify-content-center pt-2 pb-0 my-1">
                      <h5 className="text-start fw-semibold">
                        Products
                        <small className="text-body secondary mx-2"> {item.category} </small>
                      </h5>
                    </div>
                    <hr />
                    <div className="__card-body col shadow bg-body-tertiary rounded d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center p-3">
                      <img
                        // image={item.image}
                        className="img-fluid rounded my-auto"
                        alt="image"
                      />
                      <div className="col d-inline flex-column justify-content-start p-2 my-0">
                        <p className="__three-lines-text text-wrap text-start my-1 mx-2 mx-md-4 px-1">
                          {item.description}
                        </p>
                        <button
                          type="button"
                          className="btn btn-link text-danger text-start mx-md-3"
                          onClick={() => deleteBuys(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                      <div className="d-flex flex-row justify-content-evenly justify-content-md-between align-items-center p-3 px-md-0 my-auto">
                        <div className="d-flex justify-content-center bg-light bg-opacity-10 border border-info rounded my-auto mx-0 mx-sm-0 mx-md-4">
                          <button
                            className="btn text-danger fs-4 border border-0"
                            type="button"
                            id="button-minus"
                          >
                            -
                          </button>
                          <span className="badge text-bg-primary text-center text-dark p-auto m-auto ">1</span>
                          <button
                            className="btn text-primary fs-4 border border-0"
                            type="button"
                            id="button-plus"
                          >
                            +
                          </button>
                        </div>
                        <div className="__price-small d-inline-flex">
                          <span className="fw-semibold py-2 pl-2 m-auto"> {item.price} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))

            }

            <PurchaseSummary></PurchaseSummary>
          </div>
        </div>
      </div>
    </>
  );
};
