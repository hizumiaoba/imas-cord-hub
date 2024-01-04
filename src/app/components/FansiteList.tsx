import pageStyle from "@/app/css/shared.module.css";
import { Suspense } from "react";
import { Gridset } from "./Gridset";
import Link from "next/link";
import {baseApiUrl, getRandomPickedArray} from "../utils";
import {fansiteType} from "@/app/interfaces/fansite.interface";

export const FansiteList = async () => {
  const arr: Array<fansiteType> = await fetch(`${baseApiUrl}/fansites`).then((res) => res.json()) as Array<fansiteType>;
  const randomPicked: Array<fansiteType> = getRandomPickedArray(arr, 1);

  return (
    <>
      <div
        className={`${pageStyle.section} ${pageStyle.sectionTitle} fansite-list`}
      >
        <h2>Fansite list</h2>
        <p className={pageStyle.description}>
          Shows fansites that are registered on this site.
        </p>

        <Suspense
          fallback={
            <div>
              <h3>Requesting data...</h3>
            </div>
          }
        >
          <Gridset arr={randomPicked} />
        </Suspense>
        <p>
          <Link href={"/detail/fansite"}>全て見てみる!</Link>
        </p>
      </div>
    </>
  );
};
