import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Navbar />
          <Component {...pageProps} />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default MyApp;
