import pageStyle from "@/app/css/shared.module.css";
import { Suspense } from "react";
import { Gridset } from "./Gridset";
import Link from "next/link";
import { baseApiUrl } from "../utils";

export const ServerList = async () => {
  const arr = await fetch(`${baseApiUrl}/server/find/random?amount=2`).then((res) => res.json());

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
