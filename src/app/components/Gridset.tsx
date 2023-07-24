import pageStyle from "@/app/css/shared.module.css";
import { serverType } from "../interfaces/server.interface";
import { fansiteType } from "../interfaces/fansite.interface";
import { createFansiteElement, createServerElement } from "../detail/GridComponent";

export const Gridset = async ({
  arr,
}: {
  arr: Array<serverType | fansiteType>;
}) => {
  return (
    <div className={pageStyle.grid}>
      {arr.map((item) => {
        if ("ip" in item) {
          return createServerElement(item);
        } else {
          return createFansiteElement(item);
        }
      })}
    </div>
  );
};
