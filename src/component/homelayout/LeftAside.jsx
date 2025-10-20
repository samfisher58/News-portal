import React, { Suspense } from 'react';
import CategoriesList from './CategoriesList';

const LeftAside = () => {
    return (
			<div>
				<Suspense
					fallback={
						<span className="loading loading-infinity loading-sm"></span>
					}
				>
					<CategoriesList></CategoriesList>
				</Suspense>
			</div>
		);
};

export default LeftAside;