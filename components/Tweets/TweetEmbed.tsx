import { Tweet } from 'react-tweet'

export default function TweetEmbed({ tweetId }: { tweetId: string }) {
  return <Tweet id={tweetId} />
}
