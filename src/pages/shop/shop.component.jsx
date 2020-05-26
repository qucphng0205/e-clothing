import React from "react";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection-page/collection-page.component";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.action";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { selectIsFetch, selectIsCollectionLoaded } from "../../redux/shop/shop.selector";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount() {
    console.log("Component did mount");
    this.props.fetchCollections();
  }

  render() {
    const { match, isFetching, isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={match.path} render={(props) => <CollectionOverviewWithSpinner isLoading={isFetching || !isCollectionLoaded} {...props} />} />
        <Route exact path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={isFetching || !isCollectionLoaded} {...props} />} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetch,
  isCollectionLoaded: selectIsCollectionLoaded,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionStartAsync),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
