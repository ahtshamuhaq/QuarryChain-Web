import { ThemeProvider } from "styled-components";
import { Container } from "./app.styles";
import Navbar from "./common/Navbar";
import { Footer } from "./containers/Home/components/Footer";
import { AppTheme } from "./global/theme";
import { GlobalStyle } from "./global/theme/GlobalStyles";
import { CustomRouter } from "./routes";

export function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
      <Container>
        <Navbar />
        <CustomRouter />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
