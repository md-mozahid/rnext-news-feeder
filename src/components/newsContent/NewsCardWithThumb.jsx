export default function NewsCardWithThumb({ article }) {
  const { title, description, urlToImage, publishedAt } = article
  return (
    <>
      <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
        <div className="col-span-12 md:col-span-6">
          <a href="">
            <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{title}</h3>
          </a>
          <p className="text-base text-[#292219]">{description}</p>
          <p className="mt-5 text-base text-[#5C5955]">{publishedAt}</p>
        </div>

        <div className="col-span-12 md:col-span-6">
          <img className="w-full" src={urlToImage} alt={title} />
          <p className="mt-5 text-base text-[#5C5955]">
            {article?.source?.name}
          </p>
        </div>
      </div>
    </>
  )
}
