import { Box } from "@mui/material";
import { useTheme } from "../../providers/CustomThemeProvider";



export default function Main({ children }) {
  const { isDark } = useTheme();
  return (
    <>
      <Box
        sx={{
          minHeight: "85vh",
          backgroundColor: isDark ? "#20272c" : "#ebf0fa",
        }}
      >
        {children}
      </Box>
    </>
  );
}

