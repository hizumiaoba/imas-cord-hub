import pageStyle from "@/app/css/shared.module.css";
import { Suspense } from "react";
import { Gridset } from "./Gridset";
import Link from "next/link";
import {baseApiUrl, getRandomPickedArray} from "../utils";
import {serverType} from "@/app/interfaces/server.interface";

export const ServerList = async () => {
  const arr = await fetch(`${baseApiUrl}/servers`).then((res) => res.json()) as Array<serverType>;
  const randomPickedArr = getRandomPickedArray(arr, 1);

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
          <Gridset arr={randomPickedArr} />
        </Suspense>
        <p>
          <Link href={"/detail/server"}>全て見てみる!</Link>
        </p>
      </div>
    </>
  );
};
