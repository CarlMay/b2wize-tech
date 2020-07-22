import React, {Component} from 'react';
import ContentContainer from "../ui/content-container";
import {connect} from "react-redux";
import {getProduct} from "../../actions";
import ProductItem from "./productList";

class ProductListContent extends Component {

    componentDidMount() {
        this.props.getProduct();
    }

    render() {
        const {productData} = this.props;
        const partsList = productData['part_list'];
        const hasProductData = !!(partsList && partsList.length > 0);
        const listStyle = {
            backgroundColor: '#f9f9f9',
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: 'solid 1px #ccc',
            boxSizing: 'content-box',
            marginTop: 0,
            marginBottom: 0,
        };

        const loaderStyle = {
            marginBottom: '1rem',
        };

        if (!partsList || partsList.length === 0 || productData.length === 0) {
            return (
                <div className="ui centered active inline loader" style={loaderStyle}> </div>
            )
        }


        return (
            <ContentContainer>
                <h1 className={'ui header'}>B2Wize Product List</h1>

                <div className="ui container">
                    <div className="ui container grid" style={listStyle}>
                        <div className="ui container">
                            <div className="ui container grid" style={listStyle}>
                                <div className="three wide column">Part ID</div>
                                <div className="nine wide column">Part Description</div>
                            </div>
                        </div>

                        {hasProductData && partsList.map((part) => {
                            return <ProductItem key={part.part_id} part={part}/>;
                        })
                        }

                    </div>
                </div>

            </ContentContainer>
        );

    }
}


const mapStateToProps = (state) => {
    return {
        productData: state.product.productData,
    };
};

export default connect(
    mapStateToProps,
    {getProduct}
)(ProductListContent);
