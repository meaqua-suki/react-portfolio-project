import React from 'react';
import {CollectionsOverView} from '../../components/Collections/collectionsOverview.component';
import {Route, useRouteMatch, Switch} from 'react-router-dom';
import {CollectionPage} from '../CollectionPage/CollectionPage.component';

export const ShopPage:React.FC = () => {
  let match = useRouteMatch();
  console.log(match)
  if (!match) {
    return (
      <div className="shop-page"/>        
    )
  }
  else {
    const {path,url} = match;    
    return (      
      <div className="shop-page">        
        <Switch>
          <Route        
            path={path}
            exact={true}
            component={CollectionsOverView}          
          />           
                  
          <Route
            path={`${path}/:collectionId`}
            component={CollectionPage}                        
          />                      
             
        </Switch>               
      </div>      
    )  
  }  
}
  

  
 
