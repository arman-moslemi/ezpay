import React from 'react';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import Charge from '../components/features/Pages/charge/charge';
import ChargeInner from '../components/features/Pages/charge/chargeInner';
const MainRoutes = (props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path='/charge'
					name='charge'
					element={<Charge/>}
				/></Routes>
				<Routes>
				<Route
					exact
					path='/chargeInner'
					name='chargeInner'
					element={<ChargeInner/>}
				/></Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;
