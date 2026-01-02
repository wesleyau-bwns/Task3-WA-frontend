import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import NavbarBreadcrumbs from "./NavbarBreadcrumbs";
import ColorModeIconDropdown from "../theme/ColorModeIconDropdown";

export default function Header() {
  return (
    <>
      <Paper
        elevation={0}
        square
        sx={{
          display: { xs: "none", md: "block" },
          bgcolor: "background.paper",
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            pt: 1.5,
            pb: 1.5,
          }}
          spacing={2}
        >
          <NavbarBreadcrumbs />

          <Stack direction="row" sx={{ gap: 1 }}>
            <ColorModeIconDropdown />
          </Stack>
        </Stack>
        <Divider />
      </Paper>
    </>
  );
}
