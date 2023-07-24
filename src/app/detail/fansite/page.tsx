import { GridComponent } from "../GridComponent";
import { dummyFansite } from "@/app/interfaces/dummy";
export default function Home() {
  const data = dummyFansite;

  return <GridComponent type="fansite" arr={data} />;
}
