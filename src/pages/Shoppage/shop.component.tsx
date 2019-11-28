import React from 'react';
import {CollectionsOverView} from '../../components/Collections/collectionsOverview.component';
import {Route, useRouteMatch, Switch} from 'react-router-dom';
import {CollectionPage} from '../CollectionPage/CollectionPage.component';
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {connect} from 'react-redux'
import { Dispatch } from 'redux';
import { updateCollections } from '../../redux/shop/shop.actions-creator';
import WithSpinner from '../../components/withspinner/with-spinnner.component';

const WithSpinnerCollectionsOverView = WithSpinner(CollectionsOverView);
const WithSpinnerCollectionPage = WithSpinner(CollectionPage);


class shopPage extends React.Component<any,any,any> { 

  constructor(props:any) {
    super(props);
    this.state = {
      loading:true
    }
  }

  unsubscribeFromSnapshot:any = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot( (snapShot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionMap);
      this.setState({
        loading:false
      })
    })
  }

  render() {    
    const {match} = this.props;
    const {loading} = this.state       
    return (      
      <div className="shop-page">        
        <Switch>
          <Route        
            path={`${match.path}`}
            exact={true}
            render={
              (props) => 
              <WithSpinnerCollectionsOverView isLoading={loading} {...props} />
            }                      
          />           
                  
          <Route
            path={`${match.path}/:collectionId`}
            render={
              (props) => 
              <WithSpinnerCollectionPage isLoading={loading} {...props}/>
            }                                    
          />                      
             
        </Switch>               
      </div>      
    )  
  }  
}

const mapDispatchToProps = (dispatch:Dispatch) => ({
  updateCollections: (collectionsMap:object) => (dispatch(updateCollections(collectionsMap)))
  }
)

export const ShopPage = connect(null,mapDispatchToProps)(shopPage)
  
 
