import React from "react";
import './collection-overview.style.scss';
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shop.selector";

const CollectionOverview = (props) => (
    <div className="collection-overview">
        {props.collections.map(({ id, ...rest }) => (
            <PreviewCollection key={id} {...rest} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems,
});


export default connect(mapStateToProps)(CollectionOverview);

