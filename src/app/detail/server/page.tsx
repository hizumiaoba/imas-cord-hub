import { baseApiUrl } from "@/app/utils";
import { GridComponent } from "../GridComponent";
export default async function Home() {
  const data = await fetch(`${baseApiUrl}/server`).then((res) => res.json());

  return <GridComponent type="server" arr={data} />;
}
