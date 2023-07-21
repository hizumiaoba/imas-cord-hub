import pageStyle from "@/app/page.module.css";

export const Recent = async () => {

  return (
    <div className={`${pageStyle.section} ${pageStyle.sectionTitle} recently-added`}>
      <h2>Recently Added</h2>
      <p style={{color: "rgb(255,255,255,0.7", fontSize: "0.8rem"}}>Shows Recently added to this site.</p>

      <div className={pageStyle.grid}>

        <a href="#" className={pageStyle.card}>
          <h3>Card 1</h3>
          <p>Card 1</p>
        </a>

        <a href="#" className={pageStyle.card}>
          <h3>Card 2</h3>
          <p>Card 2</p>
        </a>

        <a href="#" className={pageStyle.card}>
          <h3>Card 3</h3>
          <p>Card 3</p>
        </a>

      </div>
    </div>
  )
};
