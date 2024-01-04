import pageStyle from "@/app/css/shared.module.css";
import { Gridset } from "./Gridset";
import { Suspense } from "react";
import { baseApiUrl } from "../utils";
import {serverType} from "@/app/interfaces/server.interface";
import {fansiteType} from "@/app/interfaces/fansite.interface";

export const Recent = async () => {
  const servers = await fetch(`${baseApiUrl}/servers`).then((res) => res.json()) as Array<serverType>
  const fansites = await fetch(`${baseApiUrl}/fansites`).then((res) => res.json()) as Array<fansiteType>
  const recent = [servers[0], fansites[0]];

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
        <Gridset arr={recent} />
      </Suspense>
    </div>
  );
};
