import React, { Component } from "react";

export class ProductItem extends Component {
    render() {
        const { name, price, image } = this.props.prod;
        return (
            <div className="card mb-4 p-3">
                <img src={image} alt="" className="w-100 d-block" />
                <h3>{name}</h3>
                <h5>{price}$</h5>
                <div>
                    <button
                        type="button"
                        className="btn btn-info me-3"
                        onClick={() =>
                            this.props.selectProduct(this.props.prod)
                        }
                    >
                        Detail
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.props.addToCart(this.props.prod)}
                    >
                        Add to card
                    </button>
                </div>
            </div>
        );
    }
}

export default ProductItem;
