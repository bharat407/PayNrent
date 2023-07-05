import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import UserSignUpDrawer from "./UserDetailsDrawer";
import { getData, postData, ServerURL } from "../../Services/FetchNodeServices";

export default function Header(props) {
  var [status, setStatus] = useState(false);
  const handleStatus = () => {
    // setStatus(false);
  };
  const handleClick2 = () => {
    setStatus(true);
  };
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const fetchAllSubcategory = async (cid) => {
    var body = { categoryid: cid };
    var response = await postData(
      "user/fetch_all_subcategory_by_category",
      body
    );

    setSubCategories(response.data);
  };

  const handleClick = (event) => {
    fetchAllSubcategory(event.currentTarget.value);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const fetchAllCategory = async () => {
    var response = await getData("user/display_all_category");
    setCategories(response.data);
  };
  const showMainMenu = () => {
    return categories.map((item) => {
      return (
        <Button value={item.categoryid} onClick={handleClick}>
          {item.categoryname}
        </Button>
      );
    });
  };
  const showSubMenu = () => {
    return subCategories.map((item) => {
      return <MenuItem onClick={handleClose}>{item.subcategoryname}</MenuItem>;
    });
  };
  useEffect(function () {
    fetchAllCategory();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ background: "#F4F5F8" }}
        position="static"
        color="inherit"
      >
        <Toolbar>
          <img
            src="/assets/logo1.png"
            style={{ width: 90, marginBottom: 5, marginTop: 5 }}
          />
          <Box component="div" sx={{ flexGrow: 1 }}></Box>
          <Box>
            {showMainMenu()}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {showSubMenu()}
            </Menu>
          </Box>

          <Button onClick={handleClick2} color="inherit">
            Login/Signup
          </Button>
        </Toolbar>
      </AppBar>
      <UserSignUpDrawer status={status} handleStatus={handleStatus} />
    </Box>
  );
}
