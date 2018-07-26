import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Clickability Guru</h1>
    <ul>
      {props.content.map(contentItem => (
        <li key={contentItem.id}>
          <Link
            as={`/topics/${contentItem.id}/${contentItem.url}.html`}
            href={`/topics/${contentItem.id}/${contentItem.url}.html`}
          >
            <a>{contentItem.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch(
    'https://lmfhj16wk4.execute-api.us-east-1.amazonaws.com/dev/api/topics'
  );
  const data = await res.json();

  console.log(
    `Content data fetched for website section. Count: ${data.length} `
  );

  return {
    content: data
  };
};

export default Index;
