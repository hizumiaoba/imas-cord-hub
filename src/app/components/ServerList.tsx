import pageStyle from "@/app/css/shared.module.css";

const arr = await [
  fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json()),
  fetch('https://jsonplaceholder.typicode.com/todos/2').then((res) => res.json()),
]

export const ServerList = async () => {
  return (
    <>
      <div
        className={`${pageStyle.section} ${pageStyle.sectionTitle} server-list`}
      >
        <h2>Discord server list</h2>
        <p className={pageStyle.description}>
          Shows Discord servers that are registered on this site.
        </p>

        <div className={pageStyle.grid}>
          {}
        </div>
      </div>
    </>
  );
};
