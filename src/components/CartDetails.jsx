import React from "react";

export const CartDetails = () => {
  return (
    <div className="container p-0 m-0">
      <div className="__card row">
        <div className="col border rounded py-3 px-4 mx-2 my-3">
          <div className="__card-header">
            <h5 className="text-start">
              Products
              <small className="text-body-secondary mx-2">Category</small>
            </h5>
          </div>
          <hr />
          <div className="__card-body d-flex flex-row justify-content-start">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              className="rounded"
              alt="image"
            />
            <div className="col d-flex flex-column justify-content-start p-2 my-0">
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
            <div className="d-flex  m-auto bg-info bg-opacity-10 border border-info rounded">
              <button
                className="btn border border-0"
                type="button"
                id="button-minus"
              >
                -
              </button>
              <span className="badge text-bg-primary text-center text-dark p-auto m-2 ">1</span>
              <button
                className="btn border border-0"
                type="button"
                id="button-plus"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
