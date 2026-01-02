import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Breadcrumbs, { breadcrumbsClasses } from "@mui/material/Breadcrumbs";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: "center",
  },
}));

export default function NavbarBreadcrumbs() {
  const { pathname } = useLocation();

  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments.length > 0 ? segments[segments.length - 1] : "";

  const label = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

  if (lastSegment.toLowerCase() === "dashboard") {
    return (
      <StyledBreadcrumbs
        separator={<NavigateNextRoundedIcon fontSize="small" />}
      >
        <Typography sx={{ fontWeight: 600 }}>Dashboard</Typography>
      </StyledBreadcrumbs>
    );
  }

  return (
    <StyledBreadcrumbs separator={<NavigateNextRoundedIcon fontSize="small" />}>
      <Typography variant="body1">Dashboard</Typography>
      <Typography sx={{ fontWeight: 600 }}>{label}</Typography>
    </StyledBreadcrumbs>
  );
}
