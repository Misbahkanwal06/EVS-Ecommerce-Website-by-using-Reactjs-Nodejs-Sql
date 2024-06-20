

import React, { useState } from 'react';
import { Divider, List, ListItemText, Collapse, Typography } from '@mui/material';
import { SidebarBox, SidebarListItem } from './Style';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProCategories from '../Categories/ProCategories';

const Sidebar = () => {

    const [open, setOpen] = useState(false);
    const [sidebarCategories, setSidebarCategories] = useState([]);
    const listItems = ["HOME", "CATEGORIES"];

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <SidebarBox sx={{ backgroundColor: 'white', height:'auto' }}>
            <List>
                {listItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <SidebarListItem
                            button
                            onClick={index === 1 ? handleClick : null}
                            sx={{ '&:hover': { backgroundColor: '#f5f5f5', color: "deeppink" } }}
                        >
                            <ListItemText
                                primary={
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                        {item}
                                    </Typography>
                                }
                            />
                            {index === 1 ? (open ? <ExpandLessIcon /> : <ExpandMoreIcon />) : null}
                        </SidebarListItem>
                        {index === 1 && (
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ProCategories setSidebarCategories={setSidebarCategories} />
                                </List>
                            </Collapse>
                        )}
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </SidebarBox>
    );
};

export default Sidebar;
