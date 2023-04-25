import { Provider } from 'react-redux';
import { store } from '../app/GlobalRedux/store';

export function Providers({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}