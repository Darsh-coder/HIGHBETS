import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import couponReducer from 'store/reducers/coupon';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import dotenv from 'dotenv';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utilities/theme';

dotenv.config();

const rootReducer = {
    coupon: couponReducer
};

const store = createStore(combineReducers(rootReducer), composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
