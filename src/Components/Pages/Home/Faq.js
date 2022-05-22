import React from 'react';

const Faq = () => {
    return (
        <div className='my-24'>
            <div className="title my-7">
                <h3 className='text-3xl text-primary font-bold text-center'>frequently asked question</h3>
            </div>
            <div tabIndex="0" className="collapse my-1 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How many products can I order?
                </div>
                <div className="collapse-content">
                    <p>You have to order at least a product, but the minimum quantity is 100</p>
                </div>
            </div>

            <div tabIndex="0" className="collapse my-1 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Can I cancel the order?
                </div>
                <div className="collapse-content">
                    <p>Yes. You can cancel your order. If your payment was done then you can't cancel your order.</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse my-1 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Can I get a refund?
                </div>
                <div className="collapse-content">
                    <p>No. You can't get a refund. once your payment was successful you can't get your money back.</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse my-1 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How do I know if my order is delivered?
                </div>
                <div className="collapse-content">
                    <p>when your products were delivered. we will notify you via mail and update delivered to your dashboard.</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse my-1 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Can I return a damaged product?
                </div>
                <div className="collapse-content">
                    <p>Yes, we provide a warranty for every product. If you get a damaged product you can claim a warranty.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;