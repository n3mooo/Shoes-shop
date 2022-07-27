import React, { Component } from "react";

export class Cart extends Component {
    renderCart = () => {
        const cartHTMLs = this.props.cart.map((item) => {
            return (
                <tr key={item.product.id} style={{ verticalAlign: "middle" }}>
                    <td>{item.product.id}</td>
                    <td>{item.product.name}</td>
                    <td className="w-25">
                        <img src={item.product.image} alt="" className="w-25" />
                    </td>
                    <td>
                        <button
                            type=""
                            className="btn btn-light"
                            onClick={() =>
                                this.props.decreaseQty(item.product.id)
                            }
                        >
                            -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                            type=""
                            className="btn btn-light"
                            onClick={() =>
                                this.props.increaseQty(item.product.id)
                            }
                        >
                            +
                        </button>
                    </td>
                    <td>{item.product.price}$</td>
                    <td>{item.product.price * item.quantity}$</td>
                    <td>
                        <button
                            type=""
                            className="btn btn-danger"
                            onClick={() =>
                                this.props.deleteCartItem(item.product.id)
                            }
                        >
                            X
                        </button>
                    </td>
                </tr>
            );
        });
        return cartHTMLs;
    };

    closeButtonRef = React.createRef();

    render() {
        return (
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Cart
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>{this.renderCart()}</tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button
                                ref={this.closeButtonRef}
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                    this.props.clearCart();
                                    this.closeButtonRef.current.click();
                                }}
                            >
                                Paid
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
