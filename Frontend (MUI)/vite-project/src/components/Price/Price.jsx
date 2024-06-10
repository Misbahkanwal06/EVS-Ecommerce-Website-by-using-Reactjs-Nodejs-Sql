

// import React, { useState } from 'react';
// import { TextField, Button, Box, Typography } from '@mui/material';

// function Price() {

//     const [min, setMin] = useState('');
//     const [max, setMax] = useState('');

//     const handleApply = (e) => {
//         e.preventDefault();
//         console.log('Min:', min);
//         console.log('Max:', max);
//     };

//     return (
//         <Box sx={{ p: 0.5, mx: 3, mt: 2 }}>
//             <Typography variant="h5" gutterBottom>
//                 Price
//             </Typography>
//             <Box display="flex" alignItems="center" gap={2}>
//                 <TextField
//                     label="Min"
//                     type="number"
//                     variant="outlined"
//                     size="small"
//                     sx={{ width: '80px' }}
//                     value={min}
//                     onChange={(e) => setMin(e.target.value)}
//                 />
//                 <TextField
//                     label="Max"
//                     type="number"
//                     variant="outlined"
//                     size="small"
//                     sx={{ width: '80px' }}
//                     value={max}
//                     onChange={(e) => setMax(e.target.value)}
//                 />
//                 <Button
//                     variant="contained"
//                     sx={{ backgroundColor: 'pink', color: 'white' }}
//                     onClick={handleApply}
//                 >
//                     Apply
//                 </Button>
//             </Box>
//         </Box>
//     );
// }

// export default Price;



import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function Price({ setMin, setMax }) {
    const [localMin, setLocalMin] = useState('');
    const [localMax, setLocalMax] = useState('');

    const handleApply = (e) => {
        e.preventDefault();
        setMin(localMin);
        setMax(localMax);
    };

    return (
        <Box sx={{ p: 0.5, mx: 3, mt: 2 }}>
            <Typography variant="h5" gutterBottom>
                Price
            </Typography>
            <Box display="flex" alignItems="center" gap={2}>
                <TextField
                    label="Min"
                    type="number"
                    variant="outlined"
                    size="small"
                    sx={{ width: '80px' }}
                    value={localMin}
                    onChange={(e) => setLocalMin(e.target.value)}
                />
                <TextField
                    label="Max"
                    type="number"
                    variant="outlined"
                    size="small"
                    sx={{ width: '80px' }}
                    value={localMax}
                    onChange={(e) => setLocalMax(e.target.value)}
                />
                <Button
                    variant="contained"
                    sx={{ backgroundColor: 'pink', color: 'white' }}
                    onClick={handleApply}
                >
                    Apply
                </Button>
            </Box>
        </Box>
    );
}

export default Price;
