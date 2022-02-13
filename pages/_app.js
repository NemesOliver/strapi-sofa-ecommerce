import { Layout } from "../components";
import { AuthContextProvider, SnackbarContextProvider } from "../context";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarContextProvider>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </SnackbarContextProvider>
  );
}

export default MyApp;
