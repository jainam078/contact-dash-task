import React from 'react';
import { Provider } from 'react-redux'
import { store, persistor } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<PersistGate loading={null} persistor={persistor}>
					<BrowserRouter>
						<Routes/>
					</BrowserRouter>
				</PersistGate>
			</QueryClientProvider>
		</Provider>
	);
}

export default App;
