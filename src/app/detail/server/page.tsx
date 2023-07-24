import { GridComponent } from "../GridComponent";
import { dummyServer } from "@/app/interfaces/dummy";
export default function Home() {
  const data = dummyServer;

  return <GridComponent type="server" arr={data} />;
}
