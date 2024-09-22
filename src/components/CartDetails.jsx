import React from "react";
import { PurchaseSummary } from "./PurchaseSummary";

export const CartDetails = () => {
  return (
    <>
      <div className="container p-0 m-0">
        <div className="__card d-flex flex-column flex-sm-column flex-md-row justify-content-center">
          <div className="col border rounded py-3 px-4 mx-2 my-3">
            <div className="__card-header">
              <h5 className="text-start">
                Products
                <small className="text-body-secondary mx-2">Category</small>
              </h5>
            </div>
            <hr />
            <div className="__card-body shadow bg-body-tertiary rounded d-flex flex-column flex-sm-column flex-md-row justify-content-around p-2">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                className="img-fluid rounded"
                alt="image"
              />
              <div className="d-inline flex-column justify-content-start p-2 my-0">
                <p className="text-wrap text-start my-1 mx-2 px-1">
                  Descripcion del producto...
                </p>
                <button
                  type="button"
                  className="btn btn-link text-danger text-start"
                >
                  Delete
                </button>
              </div>
              <div className="d-flex bg-light bg-opacity-10 border border-info rounded my-auto mx-4">
                <button
                  className="btn border border-0"
                  type="button"
                  id="button-minus"
                >
                  -
                </button>
                <span className="badge text-bg-primary text-center text-dark p-auto m-2 ">1</span>
                <button
                  className="btn border text-primary border-0"
                  type="button"
                  id="button-plus"
                >
                  +
                </button>
              </div>
              <div className="__price-small d-inline-flex">
                <span className="fw-semibold py-2 pl-2 m-auto">U$S 55.99</span>
              </div>
            </div>
          </div>
          <PurchaseSummary></PurchaseSummary>
        </div>
      </div>
    </>
  );
};
