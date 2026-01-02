import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Landing() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight={600}>
        Landing Page
      </Typography>

      <Typography sx={{ mt: 2 }}>This is a dummy Landing Page.</Typography>
    </Paper>
  );
}
