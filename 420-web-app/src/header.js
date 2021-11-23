import * as React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import Home from "./pages/home";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function Header() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "white" }}>
                <div>
                    <Tabs
                        TabIndicatorProps={{ style: { background: "white" } }}
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab
                            style={{ color: "rgb(255,199,44)", fontSize: 18 }}
                            label="Home"
                            {...a11yProps(0)}
                        />
                        <Tab
                            style={{ color: "rgb(255,199,44)", fontSize: 18 }}
                            label="About Us"
                            {...a11yProps(1)}
                        />
                        <Tab
                            style={{ color: "rgb(255,199,44)", fontSize: 18 }}
                            label="Admission"
                            {...a11yProps(2)}
                        />
                    </Tabs>
                </div>
            </Box>
            <TabPanel value={value} index={0}>
                <Home />
            </TabPanel>
            <TabPanel value={value} index={1}>
                About Us
            </TabPanel>
            <TabPanel value={value} index={2}>
                Admission
            </TabPanel>
        </Box>
    );
}
