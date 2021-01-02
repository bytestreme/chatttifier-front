import * as React from 'react';
import {Link} from 'react-router-dom';

export default function HomeContainer() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">goto Login</Link>
        </div>
    );
}
