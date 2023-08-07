import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-great">NextJS Is A Great Framework</Link>
        </li>
        <li>
          <Link href="/news/something-else">Something Else</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
