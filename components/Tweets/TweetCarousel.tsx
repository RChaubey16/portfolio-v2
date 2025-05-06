import TweetEmbed from './TweetEmbed'

const TweetCarousel = () => {
  return (
    <div className="flex items-start gap-4">
      <TweetEmbed tweetId="1905986468385812510" />
      <TweetEmbed tweetId="1905897441913979325" />
      <TweetEmbed tweetId="1846226385909518636" />
    </div>
  )
}

export default TweetCarousel
