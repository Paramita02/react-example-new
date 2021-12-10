import React from 'react';
import UserA from './UserA';
import UserB from './UserB';
import AboutUs from './AboutUs';
import Home from './Home';

const components={
    //usera:UserA,
    //userb:UserB
    AboutUs:AboutUs,
    Home:Home
}

function DynamicComponent(props) {
    const SelectUser = components[props.user];
    return (
        <div>
            <SelectUser/>
        </div>
    );
}

export default DynamicComponent;