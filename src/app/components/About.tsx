import pageStyle from "@/app/page.module.css";

export const About = async () => {
  return (
    <>
      <div className={`${pageStyle.section} ${pageStyle.sectionTitle} about`}>
        <h2>About</h2>

        <p>
          ImasCordHub is the unofficial union site of the Discord server and
          fansite of the game "THE IDOLM@STER" series.
        </p>
      </div>
    </>
  );
};
