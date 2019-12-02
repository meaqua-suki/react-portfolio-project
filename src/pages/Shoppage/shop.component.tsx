import React from 'react';
import {Route,Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import { Dispatch } from 'redux';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions-creator';

import CollectionsOverviewContainer from '../../components/Collections/collectionsOverview.container';
import CollectionPageOverviewContainer from '../CollectionPage/CollectionPage.container';



class shopPage extends React.Component<any,any,any> {  

  componentDidMount() {
    const {fetchCollectionsStart} = this.props;    
    fetchCollectionsStart();
  }
  

  render() {    
    const {match} = this.props;
          
    return (      
      <div className="shop-page">        
        <Switch>
          <Route        
            path={`${match.path}`}
            exact={true}
            component={CollectionsOverviewContainer}                      
          />           
                  
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageOverviewContainer}                                    
          />                      
             
        </Switch>               
      </div>      
    )  
  }  
}



const mapDispatchToProps = (dispatch:any) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export const ShopPage = connect(null,mapDispatchToProps)(shopPage)
  
 
