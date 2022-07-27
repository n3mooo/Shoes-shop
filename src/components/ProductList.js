import React, { Component } from "react";
import ProductItem from "./ProductItem";

export class ProductList extends Component {
    render() {
        return (
            <div className="row">
                {this.props.products.map((item) => (
                    <div key={item.id} className="col-3">
                        <ProductItem
                            prod={item}
                            selectProduct={this.props.selectProduct}
                            addToCart={this.props.addToCart}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductList;
