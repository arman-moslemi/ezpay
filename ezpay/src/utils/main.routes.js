import React from 'react';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import Charge from '../components/features/Pages/charge/charge';
import ChargeInner from '../components/features/Pages/charge/chargeInner';
import Success from '../components/features/Pages/charge/Succes';
const MainRoutes = (props) => {
	return (
  <BrowserRouter basename="/charge">
			<Routes>
				<Route
					exact
					path='/'
					name='charge'
					element={<Charge/>}
				/></Routes>
				<Routes>
				<Route
					exact
					path='/chargeInner'
					name='chargeInner'
					element={<ChargeInner/>}
				/>
				<Route
					exact
					path='/success'
					name='success'
					element={<Success/>}
				/></Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;
