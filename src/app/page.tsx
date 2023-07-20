import pageStyle from "@/app/page.module.css";
import { About, FansiteList, OwnerNotice, Recent, ServerList } from "@/app/components/";

export default function Home() {

  return (
    <>
      <h1 className={pageStyle.title}>
        Imas<span className={pageStyle.typograph}>Cord</span>Hub
      </h1>
      <p className={pageStyle.description}>Discord server, Unofficial fansite, All in One.</p>

      <Recent />

      <ServerList />

      <FansiteList />

      <About />

      <OwnerNotice />
    </>
  );
}
