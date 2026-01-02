import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Admin() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight={600}>
        Admin Page
      </Typography>

      <Typography sx={{ mt: 2 }}>This is a dummy Admin Page.</Typography>
    </Paper>
  );
}
