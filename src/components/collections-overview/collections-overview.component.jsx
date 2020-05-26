import React from "react";
import "./collections-overview.style.scss";
import PreviewCollection from "../preview-collection/preview-collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsOverview } from "../../redux/shop/shop.selector";

const CollectionsOverview = (props) => (
  <div className="collection-overview">
    {props.collections.map(({ id, ...rest }) => (
      <PreviewCollection key={id} {...rest} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsOverview,
});

export default connect(mapStateToProps)(CollectionsOverview);
