import {createStore, applyMiddleware,compose } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index';


const devTools =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const appliedMiddleware = devTools ? compose(applyMiddleware(thunk),devTools) : compose(applyMiddleware(thunk));

const store = createStore(reducer, appliedMiddleware);


export const StoreProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>
}