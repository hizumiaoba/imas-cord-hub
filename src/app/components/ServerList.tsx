import pageStyle from "@/app/css/shared.module.css";
import { Suspense } from "react";
import { Gridset } from "./Gridset";
import { serverType } from "../interfaces/server.interface";
import { dummyServer } from "../interfaces/dummy";
import Link from "next/link";

export const ServerList = async () => {
  const arr = dummyServer;

  return (
    <>
      <div
        className={`${pageStyle.section} ${pageStyle.sectionTitle} server-list`}
      >
        <h2>Discord server list</h2>
        <p className={pageStyle.description}>
          Shows Discord servers that are registered on this site.
        </p>

        <Suspense
          fallback={
            <div>
              <h3>Requesting data...</h3>
            </div>
          }
        >
          <Gridset arr={arr} />
        </Suspense>
        <p>
          <Link href={"/detail/server"}>全て見てみる!</Link>
        </p>
      </div>
    </>
  );
};
