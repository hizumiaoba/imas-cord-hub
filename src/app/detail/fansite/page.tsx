import { Suspense } from "react";
import { GridComponent } from "../GridComponent";
import { baseApiUrl } from "@/app/utils";
export default async function Home() {
  const data = await fetch(`${baseApiUrl}/fansite`).then((res) => res.json());

  return (
    <Suspense fallback={<h1>Now loadning...</h1>}>
      <GridComponent type="fansite" arr={data} />
    </Suspense>
  );
}
