import sharedStyle from "@/app/css/shared.module.css";
import style from "@/app/css/donators.module.css";
import { NameComponent } from "./names/NameComponent";
import { normal } from "./names/normal";
import { supers } from "./names/super";
import { onetime } from "./names/onetime";
import Link from "next/link";

const normalDonators = [...normal];
const superDonators = [...supers];
const oneTimeDonators = [...onetime];

export default function Home() {
  return (
    <div className={`${sharedStyle.section} ${sharedStyle.sectionTitle}`}>
      <div className={style.titleSection}>
        <h1 className={sharedStyle.sectionTitle}>Donators!</h1>
        <button type="button" className={style.navigater}>
          <Link href={"/"}>Back to home</Link>
        </button>
      </div>

      <p className={sharedStyle.description}>
        サポート誠にありがとうございます！
      </p>

      <div className={`one-time-donators`}>
        <NameComponent title="One Time Donators" arr={oneTimeDonators} />
      </div>

      <div className={`normal-donators`}>
        <NameComponent title="Normal Donators" arr={normalDonators} />
      </div>

      <div className={`super-donators`}>
        <NameComponent title="Super Donators" arr={superDonators} />
      </div>
    </div>
  );
}
