import React from 'react';
import Ongoing from './Ongoing';
import Upcoming from './Upcoming';

function MainBody({ contests }) {
    return (
        <div>
            <h1>Ongoing Contests</h1>
            <Ongoing contests={contests} />
            <h1>Upcoming Contests</h1>
            <Upcoming contests={contests} />
        </div>
    );
}

export default MainBody;
