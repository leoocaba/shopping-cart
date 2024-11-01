import React from 'react'

export const PurchaseSummary = () => {
    return (
        <div className="card text-start">
            <h5 className="card-header bg-ligth fw-semibold py-3 px-4">
                Summary
            </h5>
            <div className="card-body p-4">
                <div className="contianer d-flex flex-row justify-content-between py-2 px-2">
                    <h6 className='d-flex my-auto fw-normal text-secondary'>Products</h6>
                    <p className='fw-normal text-secondary my-auto'>U$S 55.99</p>
                </div>
                <p className='d-flex text-success fw-semibold py-2 px-2 my-0'>Free shipping</p>
                <div className="contianer d-flex flex-row justify-content-between py-2 px-2">
                    <h6 className='d-flex my-auto fw-bolder my-auto'>Total</h6>
                    <p className='fw-bolder my-auto'>U$S 55.99</p>
                </div>
                <a href="#" className="btn btn-primary d-block text-center mx-2 mt-3 p-2">Checkout</a>
            </div>
            {/* <div className="card-footer text-body-secondary ">
                2 days ago
            </div> */}
        </div>
    )
}
