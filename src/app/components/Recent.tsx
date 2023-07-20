import pageStyle from "@/app/page.module.css";

export const Recent = async () => {

  return (
    <div className={`${pageStyle.section} ${pageStyle.sectionTitle} recently-added`}>
      <h2>Recently Added</h2>
    </div>
  )
};
