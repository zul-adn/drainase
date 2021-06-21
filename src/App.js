import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Store from './store/createstore';
import RootApp from './component/RootApp';

function App() {
    return (
        <Provider store={Store}>
            <RootApp />
        </Provider>
    );
}

export default App;
