import React from 'react'

export const PurchaseSummary = () => {
    return (
        <div className="col-12 col-sm-12 col-md-3 m-auto m-sm-auto m-md-3 p-2 p-sm-2 p-md-0">
            <div class="card text-start">
                <div class="card-header">
                    Summary
                </div>
                <div class="card-body">
                    <div className="contianer d-flex flex-row justify-content-between py-2">
                        <h6 className='d-flex my-auto fw-normal text-secondary'>Products</h6>
                        <p className='fw-normal text-secondary my-auto'>U$S 55.99</p>
                    </div>
                    <p className='d-flex text-success fw-semibold py-2 my-0'>Free shipping</p>
                    <div className="contianer d-flex flex-row justify-content-between py-2">
                        <h6 className='d-flex my-auto fw-bolder my-auto'>Total</h6>
                        <p className='fw-bolder my-auto'>U$S 55.99</p>
                    </div>
                    <a href="#" class="btn btn-primary d-block text-center mx-auto mt-3 p-2">Checkout</a>
                </div>
                {/* <div class="card-footer text-body-secondary ">
                2 days ago
            </div> */}
            </div>
        </div>
    )
}
