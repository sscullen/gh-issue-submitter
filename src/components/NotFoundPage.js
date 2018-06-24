import React from 'react';

import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! PAGE NOT FOUND!
        <Link to="/">Back to the Dashboard</Link>
    </div>
);

export default NotFoundPage;