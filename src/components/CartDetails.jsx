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
            <div className="d-flex flex-column">
              {

                buysList.map(item => (
                  <div className="__card" key={item.id}>
                    <div className="col border rounded py-3 px-4 mx-2 my-3 my-lg-3 py-lg-1">
                      <div className="__card-header justify-content-center pt-2 pb-0 my-1">
                        <h5 className="text-start fs-6 fw-normal">
                          Products
                          <p className="d-inline-flex fs-6 fw-normal text-center align-text-center rounded-pill bg-info bg-opacity-10 border border-info mx-2 my-0 pb-1 px-2"> {item.category} </p>
                        </h5>
                      </div>
                      <hr />
                      <div className="__card-body col shadow bg-body-tertiary rounded d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center p-3 mb-3">
                        <img
                          src={item.image}
                          className="img-fluid rounded my-auto"
                          alt={item.title}
                        />
                        <div className="col d-inline flex-column justify-content-start p-2 my-0">
                          <h5 className="text-start fs-5 fw-semibold mx-3 px-1">
                            {item.title}
                          </h5>
                          <p className="__three-lines-text text-wrap text-start fw-light my-1 mx-2 mx-md-3 px-1">
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
            </div>
            <div className="__sticky-summary col-12 col-sm-12 col-md-12 col-lg-3 mx-auto p-2 p-lg-3 px-lg-1">
              <div className="sticky-top">
                <PurchaseSummary></PurchaseSummary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
