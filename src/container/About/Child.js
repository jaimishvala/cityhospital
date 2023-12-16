
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Child({ exData }) {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(exData(50))
    }, [exData])

    return (
        <>
            {
                data.map((v) => {
                    return (
                        <p>{v}</p>
                    )
                })
            }
        </>
    );
}

export default Child;







// import React, { memo } from 'react';

// function Child({ Learning, count }) {
//     console.log("Child Component");
//     return (
//         <div>

//         </div>
//     );
// }

// export default memo(Child);