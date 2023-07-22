import Individuals from "@/app/components/Individuals";
import { Suspense } from "react";


const Page = ({ params }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<h2>Now Loading...</h2>}>
      <Individuals id={Number(params.id)} />
    </Suspense>
  );
};

export default Page;
