import pageStyle from "@/app/css/shared.module.css";
import { serverType } from "../interfaces/server.interface";
import Link from "next/link";
import { selectIpColor } from "../utils";
import { fansiteType } from "../interfaces/fansite.interface";

export const Gridset = async ({ arr }: { arr: Array<serverType | fansiteType> }) => {

  return (
    <div className={pageStyle.grid}>
      {arr.map((item) => {
        if ("ip" in item) {
          return createServerElement(item);
        } else {
          return createFansiteElement(item);
        }
      }
      )}
    </div>
  )
  
};

const createServerElement = (item: serverType) => {
  return (
    <div key={item.id} className={pageStyle.card}>
      <h3>
        Title: {item.name}
      </h3>
      <p>{item.description}</p>
      <div className={pageStyle.ip}>
        <span style={{ background: `${selectIpColor(item.ip)}` }}>{item.ip}</span>
      </div>
      <div className={pageStyle.waifu}>
        {item.waifu?.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
      <div>
        <Link href={"#"}>
          <button type="button" style={{ backgroundColor: "d9d9d9" }}>
            <span>Detail</span>
          </button>
        </Link>
        <Link href={item.invite}>
          <button type="button" style={{ background: "#56AEFF" }}>
            <span>Join!</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const createFansiteElement = (item: fansiteType) => {
  return (
    <div key={item.id} className={pageStyle.card}>
      <h3>
        Title: {item.name}
      </h3>
      <p>{item.description}</p>
      <div className={pageStyle.waifu}>
        <span>{item.waifu}</span>
      </div>
      <div>
        <Link href={"#"}>
          <button type="button" style={{ backgroundColor: "d9d9d9" }}>
            <span>Detail</span>
          </button>
        </Link>
        <Link href={item.link}>
          <button type="button" style={{ background: "#56AEFF" }}>
            <span>Visit!</span>
          </button>
        </Link>
      </div>
    </div>
  )
};
