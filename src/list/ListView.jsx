import React from 'react';

function ListView({ elements }) {
return (
    <div>
    {elements.map((element, index) => (
        <p key={index}>{element}</p>
    ))}
    </div>
);
}

export default ListView;
