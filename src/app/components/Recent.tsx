import pageStyle from "@/app/css/shared.module.css";
import Link from "next/link";

export const Recent = async () => {

  const recentServerAdded = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json());
  const recentFansiteAdded = await fetch('https://jsonplaceholder.typicode.com/todos/2').then((res) => res.json());

  const arr = [recentServerAdded, recentFansiteAdded];

  return (
    <div
      className={`${pageStyle.section} ${pageStyle.sectionTitle} recently-added`}
    >
      <h2>Recently Added</h2>
      <p className={`${pageStyle.description}`}>
        Shows Recently added to this site.
      </p>

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
    </div>
  );
};
