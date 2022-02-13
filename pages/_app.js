import { Layout } from "../components";
import { AuthContextProvider } from "../context";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
