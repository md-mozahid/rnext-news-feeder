import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";

export default function Page() {
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
