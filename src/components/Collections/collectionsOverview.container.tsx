import {connect, MapStateToProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectIsCollectionFetching} from '../../redux/shop/shop.selector';
import {compose} from 'redux'
import WithSpinner from '../../components/withspinner/with-spinnner.component';
import {CollectionsOverView} from './collectionsOverview.component';
import { RootReducerState } from '../../redux/Statetypes/RootReducerState';

const mapStateToProps:MapStateToProps<any,any,RootReducerState> = createStructuredSelector({
  isLoading:selectIsCollectionFetching  
});

const CollectionsOverviewContainer = compose<any>(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverView);

export default CollectionsOverviewContainer

