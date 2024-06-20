import { styled } from '@mui/system';
import { Box, ListItem, } from '@mui/material';



export const logo = {
    display: { md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 750,
    flexGrow: 1,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
}

export const myAccountIconButton = {
    p: 1, borderRadius: 0, display: 'flex', alignItems: 'center',
    '&:hover svg': { color: 'grey' }

}

export const activeStyle = {
    borderBottom: '2px solid deeppink',
    color: 'deeppink',
};

export const SidebarBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    height: '100%',
}));


export const SidebarListItem = styled(ListItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}));






// export const logo = {
//     flexGrow: 1,
//     display: { xs: 'none', md: 'flex' },
//     fontFamily: 'monospace',
//     fontWeight: 700,
//     letterSpacing: '.3rem',
//     color: 'inherit',
//     textDecoration: 'none',
// };

// export const myAccountIconButton = {
//     textTransform: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     color: 'black',
//     '&:hover': {
//         backgroundColor: 'transparent',
//     },
// };

// export const activeStyle = {
//     color: 'deeppink',
//     fontWeight: 'bold',
// };
