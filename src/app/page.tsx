import pageStyle from "@/app/page.module.css";

export default function Home() {
  return (
    <>
      <h1 className={pageStyle.title}>
        Imas<span className={pageStyle.typograph}>Cord</span>Hub
      </h1>
      <p className={pageStyle.description}>Discord server, Unofficial fansite, Redefined.</p>
    </>
  );
}
