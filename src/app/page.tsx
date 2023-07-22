import pageStyle from "@/app/page.module.css";
import { About, FansiteList, OwnerNotice, Recent, ServerList } from "@/app/components/";
import { Suspense } from 'react';

const fallbackElement = <div><h2>Now Loading...</h2></div>;

export default function Home() {

  return (
    <>
      <h1 className={pageStyle.title}>
        Imas<span>Cord</span>Hub
      </h1>
      <p className={pageStyle.description}>Discord server, Unofficial fansite, All in One.</p>

      <Suspense fallback={fallbackElement}>
        <Recent />
      </Suspense>

      <Suspense fallback={fallbackElement}>
        <ServerList />
      </Suspense>

      <Suspense fallback={fallbackElement}>
        <FansiteList />
      </Suspense>

      <Suspense fallback={fallbackElement}>
        <About />
      </Suspense>

      <Suspense fallback={fallbackElement}>
        <OwnerNotice />
      </Suspense>
    </>
  );
}
