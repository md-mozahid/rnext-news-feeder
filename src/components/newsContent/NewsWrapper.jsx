import { Fragment } from 'react'
import { useNews } from '../../context'
import NoDataFound from '../NoDataFound'
import NewsCard from './NewsCard'
import NewsCardWithThumb from './NewsCardWithThumb'

export default function NewsWrapper() {
  const { newsData } = useNews()
  const { articles } = newsData
  return (
    <>
      <main className="my-10 lg:my-14">
        {articles?.length > 0 ? (
          <div className="container mx-auto grid grid-cols-12 gap-8">
            {articles?.map((article) => (
              <Fragment key={article?.title}>
                {article?.urlToImage ? (
                  <NewsCardWithThumb article={article} />
                ) : (
                  <NewsCard article={article} />
                )}
              </Fragment>
            ))}
          </div>
        ) : (
          <NoDataFound />
        )}
      </main>
    </>
  );
}
