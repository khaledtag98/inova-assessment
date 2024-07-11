import { AppBar, Box, Container, Grid } from "@mui/material";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function AppContainer({ children }: Props) {
  return (
    <Box bgcolor="primary.main">
      <AppBar position="static" sx={{ color: "text.primary", mb: 3 }}>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
        </Grid>
      </AppBar>

      <Container>{children}</Container>
    </Box>
  );
}
