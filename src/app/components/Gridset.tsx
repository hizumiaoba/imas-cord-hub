import pageStyle from '@/app/css/shared.module.css'
import { serverType } from "../interfaces/server.interface";
import Link from 'next/link';

export const Gridset = async ({ arr }: {arr: Array<serverType>}) => {
  
  return (
    <div className={pageStyle.grid}>
        {arr.map((c, i) => (
          <div key={i} className={pageStyle.card}>
            <h3>Title: {c.title} {i + 1}</h3>
            <p>
              {c.title} {c.title} {c.title}
            </p>
            <div>
              <Link href={"#"}>
                <button type="button" style={{ backgroundColor: "d9d9d9" }}>
                  <span>Detail</span>
                </button>
              </Link>
              <Link href={"#"}>
                <button type="button" style={{ background: "#56AEFF" }}>
                  <span>Join!</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
  );
}