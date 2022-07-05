import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import WorksPreview from "../components/WorksPreview";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Artsem Shauchuk Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Artsem Shauchuk." message="Hello, it's me" />
      <About />
      <WorksPreview />
    </div>
  );
}
