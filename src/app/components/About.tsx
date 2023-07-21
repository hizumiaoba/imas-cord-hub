import pageStyle from "@/app/page.module.css";

export const About = async () => {
  return (
    <>
      <div className={`${pageStyle.section} ${pageStyle.sectionTitle} about`}>
        <h2>About</h2>

        <p>
          「ImasCordHub」は、アイドルマスターシリーズのDiscordサーバーと非公式ファンサイトをまとめた非公式のポータルサイトです。
        </p>
      </div>
    </>
  );
};
