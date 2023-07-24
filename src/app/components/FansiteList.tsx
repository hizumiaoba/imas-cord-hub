import pageStyle from "@/app/css/shared.module.css";
import { Suspense } from "react";
import { Gridset } from "./Gridset";
import Link from "next/link";
import { baseApiUrl } from "../utils";

export const FansiteList = async () => {
  const arr = await fetch(`${baseApiUrl}/fansite/find/random?amount=2`).then((res) => res.json());

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
          <Gridset arr={arr} />
        </Suspense>
        <p>
          <Link href={"/detail/fansite"}>全て見てみる!</Link>
        </p>
      </div>
    </>
  );
};
