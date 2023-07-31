import pageStyle from "@/app/css/shared.module.css";
import { Gridset } from "./Gridset";
import { Suspense } from "react";
import { baseApiUrl } from "../utils";

export const Recent = async () => {
  const arr = [
    await fetch(`${baseApiUrl}/server/find/latest`).then((res) => res.json()),
    await fetch(`${baseApiUrl}/fansite/find/latest`).then((res) => res.json()),
  ];

  return (
    <div
      className={`${pageStyle.section} ${pageStyle.sectionTitle} recently-added`}
    >
      <h2>Recently Added</h2>
      <p className={`${pageStyle.description}`}>
        Shows Recently added to this site.
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
    </div>
  );
};
