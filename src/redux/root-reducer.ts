import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import {ShopReducer} from './shop/shop.reducer'
import {cartReducer} from './cart/cart.reducer';
import {MenuContainerReducer} from './MenuContainer/MenuContainer-reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
  whitelist:['cart']
}

const rootReducer = combineReducers({
  user:userReducer,
  cart:cartReducer,
  MenuContainer:MenuContainerReducer,
  shop:ShopReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)

