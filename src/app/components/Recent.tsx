import pageStyle from "@/app/css/shared.module.css";
import { Gridset } from './Gridset';
import { Suspense } from "react";

export const Recent = async () => {

  const recentServerAdded = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json());
  const recentFansiteAdded = await fetch('https://jsonplaceholder.typicode.com/todos/2').then((res) => res.json());

  const arr = [recentServerAdded, recentFansiteAdded];

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
