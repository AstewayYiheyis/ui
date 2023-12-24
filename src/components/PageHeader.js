import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function PageHeader({tabIndex}) {
    const [value, setValue] = React.useState(tabIndex);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab href="/" label="Home" {...a11yProps(0)} />
                    <Tab href="/ship" label="Ship My Package" {...a11yProps(1)} />
                    <Tab href="/track" label="Track Package" {...a11yProps(2)} />
                </Tabs>
            </Box>
        </Box>
    );
}
