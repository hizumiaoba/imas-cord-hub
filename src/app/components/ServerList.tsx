import pageStyle from "@/app/page.module.css";

export const ServerList = async () => {
  return (
    <>
      <div
        className={`${pageStyle.section} ${pageStyle.sectionTitle} server-list`}
      >
        <h2>Discord server list</h2>
      </div>
    </>
  );
};
