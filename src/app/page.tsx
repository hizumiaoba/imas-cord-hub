import pageStyle from "@/app/page.module.css";
import { About, FansiteList, OwnerNotice, Recent, ServerList } from "@/app/components/";
import { Suspense } from 'react';
import { Http2ServerRequest } from "http2";

export default function Home() {

  return (
    <>
      <h1 className={pageStyle.title}>
        Imas<span>Cord</span>Hub
      </h1>
      <p className={pageStyle.description}>Discord server, Unofficial fansite, All in One.</p>

      <Suspense fallback={<div><h2>Now Loading...</h2></div>}>
        <Recent />
      </Suspense>

      <ServerList />

      <FansiteList />

      <About />

      <OwnerNotice />
    </>
  );
}
