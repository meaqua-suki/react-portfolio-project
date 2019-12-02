import {connect, MapStateToProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionLoaded} from '../../redux/shop/shop.selector';
import {compose} from 'redux';
import {CollectionPage} from '../../pages/CollectionPage/CollectionPage.component';
import WithSpinner from '../../components/withspinner/with-spinnner.component';
import { RootReducerState } from '../../redux/Statetypes/RootReducerState';

const mapStateToProps:MapStateToProps<any,any,RootReducerState> = createStructuredSelector({
  isLoading:state => !selectIsCollectionLoaded(state)  
});

const CollectionPageOverviewContainer = compose<any>(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageOverviewContainer;
