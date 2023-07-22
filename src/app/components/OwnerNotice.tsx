import pageStyle from "@/app/css/shared.module.css";
import aboutStyle from '@/app/css/about.module.css'
import Link from "next/link";

const style = {
  width: "160px",
  fontFamily: "JetBrains Mono",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "10px",
  margin: "10px",
  padding: "15px",
}

export const OwnerNotice = async () => {
  return (
    <>
      <div
        className={`${pageStyle.section} ${pageStyle.sectionTitle} for-owners`}
      >
        <h2>For owners</h2>

        <p className={aboutStyle.paras}>
          もし、あなたがアイマスのファンサイトやDiscordサーバーのオーナーでこのサイトへ掲載を希望する場合は、以下のリンクより登録をお願いします。
        </p>

        <p className={aboutStyle.paras}>
          送信された内容はサイト管理者によって確認され、問題がない場合は掲載されます。
        </p>

        <button type="button" style={style}>
          <Link href={"https://forms.gle/tDhLwWGgU7ajgyjJ8"} style={{color: "black", textDecorationLine: "none"}}>
            Register!
          </Link>
        </button>

        <p className={aboutStyle.paras}>
          また、貴方さまのサイトやDiscordサーバーにてこのサイトを紹介していただけると幸いです。
        </p>

        <div>
          <button type="button" style={style}>
            <Link href={"https://twitter.com/intent/tweet?text=ImasCordHub%20-%20Discord%20server%2C%20Unofficial%20fansite%2C%20All%20in%20One.%0Ahttps%3A%2F%2Fimas-cord-hub.vercel.app%2F"} style={{color: "black", textDecorationLine: "none"}}>
              Share on Twitter
            </Link>
          </button>
        </div>

      </div>
    </>
  );
};
