import pageStyle from "@/app/css/shared.module.css";
import { Suspense } from "react";
import { Gridset } from "./Gridset";

export const FansiteList = async () => {

  const dummy1 = await fetch('https://jsonplaceholder.typicode.com/todos/2').then((res) => res.json())
  const dummy2 = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json())

  const arr = [dummy1, dummy2]

  return (
    <>
      <div
        className={`${pageStyle.section} ${pageStyle.sectionTitle} fansite-list`}
      >
        <h2>Fansite list</h2>
        <p className={pageStyle.description}>
          Shows fansites that are registered on this site.
        </p>

        <Suspense fallback={<div><h3>Requesting data...</h3></div>}>
          <Gridset arr={arr} />
        </Suspense>
      </div>
    </>
  );
};
