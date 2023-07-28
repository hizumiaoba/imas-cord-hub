import pageStyle from "@/app/css/shared.module.css";
import style from "@/app/css/about.module.css";
import Link from "next/link";

const donateLinks = [
  "https://www.patreon.com/ranfa_indigo_leaf",
  "https://indigo-leaf.fanbox.cc/plans",
];
const paypalLink = "https://paypal.me/ranfa2323623";

export const About = async () => {
  return (
    <>
      <div className={`${pageStyle.section} ${pageStyle.sectionTitle} about`}>
        <h2>About</h2>

        <p className={style.paras}>
          「ImasCordHub」は、アイドルマスターシリーズのDiscordサーバーと非公式ファンサイトをまとめた非公式のポータルサイトです。
        </p>
        <p className={style.paras}>
          某SNSの不具合が多く報告されていることや、昨今の「事務所の垣根を超えた交流」を後押しするため、しがないいちプロデューサーによって作成されました。
        </p>
        <p className={style.paras}>
          このサイトは皆様方の閲覧と拡散、
          <Link href={"/donators"} style={{ color: "#2f2fff" }}>
            一部ドネーター様
          </Link>{" "}
          のご支援によって運営されております。皆さんのサポートに最大限の感謝を申し上げると共に、もしご支援してくださる方がいらっしゃいましたら、以下のリンクからご支援をお願いいたします。
        </p>

        <div className={`${style.donateSection}`}>
          <button type="button" className={`${style.donateButton}`}>
            <Link href={paypalLink} className={style.internalLink}>
              <span>paypalで寄付する</span>
            </Link>
          </button>
          <button type="button" className={`${style.donateButton}`}>
            <Link href={donateLinks[0]} className={style.internalLink}>
              <span>patreonでサポーターになる</span>
            </Link>
          </button>
          <button type="button" className={`${style.donateButton}`}>
            <Link href={donateLinks[1]} className={style.internalLink}>
              <span>fanboxでサポーターになる</span>
            </Link>
          </button>
        </div>

        <p className={style.paras}>
          また、このサイトはオープンソースで公開されており、GitHubでソースコードを閲覧することができます。このサイトについてご意見、ご要望がありましたらプロジェクトページの{" "}
          <a
            href="https://github.com/Secret-Society-Braid/imas-cord-hub/issues"
            style={{ color: "#2f2fff" }}
          >
            Issue
          </a>{" "}
          もしくは{" "}
          <a
            href="https://github.com/Secret-Society-Braid/imas-cord-hub/discussions/"
            style={{ color: "#2f2fff" }}
          >
            Discussions
          </a>{" "}
          にてお願いいたします。
        </p>

        <p>
          このサイトは、分類上「アイドルマスター」シリーズのファンコンテンツとしています。制作にあたっては以下のガイドラインを遵守しています。
          <ul>
            <li>
              <a href="https://www.bandainamcoent.co.jp/info/privacy/">
                バンダイナムコエンターテインメントプライバシーポリシー
              </a>
            </li>
            <li>
              <a href="https://www.bandainamcoent.co.jp/info/videopolicy/">
                バンダイナムコエンターテインメントコンテンツ利用ポリシー
              </a>
            </li>
            <li>
              <a href="https://starlit-season.idolmaster.jp/game_commentary_policy/">
                アイドルマスター スターリットシーズン ゲームコンテンツ利用ポリシー
              </a>
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};
