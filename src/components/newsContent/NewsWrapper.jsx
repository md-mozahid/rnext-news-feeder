import NewsCard from "./NewsCard";
import NewsCardWithThumb from "./NewsCardWithThumb";

export default function NewsWrapper() {
  return (
    <>
      <main className="my-10 lg:my-14">
        <div className="container mx-auto grid grid-cols-12 gap-8">
          <NewsCard />
          <NewsCardWithThumb />
        </div>
      </main>
    </>
  );
}
