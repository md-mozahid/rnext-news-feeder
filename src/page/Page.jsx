import { useContext } from "react";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import { NewsContext } from "../context/NewsContext";


export default function Page() {
  const { newsData } = useContext(NewsContext)
  console.log(newsData);
  return (
    <>
      <main className="my-10 lg:my-14">
        <div className="container mx-auto grid grid-cols-12 gap-8">
          <LeftColumn />
          <RightColumn />
        </div>
      </main>
    </>
  );
}
