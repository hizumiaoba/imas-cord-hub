import pageStyle from "@/app/css/shared.module.css";
import { Gridset } from './Gridset';
import { Suspense } from "react";
import { dummyFansite, dummyServer } from "../interfaces/dummy";

export const Recent = async () => {

  const arr = [
    dummyServer[0],
    dummyFansite[0],
  ]

  return (
    <div
      className={`${pageStyle.section} ${pageStyle.sectionTitle} recently-added`}
    >
      <h2>Recently Added</h2>
      <p className={`${pageStyle.description}`}>
        Shows Recently added to this site.
      </p>

      <Suspense fallback={<div><h3>Requesting data...</h3></div>}>
        <Gridset arr={arr} />
      </Suspense>
    </div>
  );
};
