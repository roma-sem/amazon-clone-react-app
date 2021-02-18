import React, {useContext} from 'react';
import CompB from './CompB';

function CompA() {
    return (
        <div>
            CompA

            This is <CompB />
        </div>
    )
}

export default CompA
