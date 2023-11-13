import { Box, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div style={{ background: "#2196f3" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outlined" onClick={() => navigate("/")} sx={{ color: "white" }}>
          Laptops
        </Button>
        <Button variant="outlined" onClick={() => navigate("/product")} sx={{ color: "white" }}>
          Electronics
        </Button>
        <Button variant="outlined" onClick={() => navigate("/product")} sx={{ color: "white" }}>
          Fragrances
        </Button>
        <Button variant="outlined" onClick={() => navigate("/product")} sx={{ color: "white" }}>
          Skincare
        </Button>
        <Button variant="outlined" onClick={() => navigate("/product")} sx={{ color: "white" }}>
          Groceries
        </Button>
        <Button variant="outlined" onClick={() => navigate("/product")} sx={{ color: "white" }}>
          Home Decoration
        </Button>
      </Box>
    </div>
  );
};

export default Categories;
