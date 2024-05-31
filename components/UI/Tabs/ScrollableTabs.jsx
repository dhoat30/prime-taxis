import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
function CustomTabPanel(props) {
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
          <Typography
            color="var(--dark-on-surface)"
            variant="body1"
            component="h6"
            dangerouslySetInnerHTML={{ __html: children }}
          />
        </Box>
      )}
    </div>
  );
}
export default function ScrollableTabs({ tabsData }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = tabsData.map((item, index) => {
    return <Tab key={index} label={item.title} />;
  });
  return (
    <Container
      elevation={3}
      sx={{
        background: "var(--dark-surface-container-high);",
        minHeight: "200px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        textColor="secondary"
        indicatorColor="secondary"
        variant="fullWidth"
      >
        {tabs}
      </Tabs>
      {/* content panels  */}
      {tabsData.map((item, index) => {
        return (
          <CustomTabPanel
            key={100 + index}
            value={value}
            index={index}
            className="description"
          >
            {item.description}
          </CustomTabPanel>
        );
      })}
    </Container>
  );
}

const Container = styled(Paper)`
  .description {
    strong {
      color: var(--dark-secondary, #f8f770);
      letter-spacing: 0.1rem;
    }
  }
`;
