import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import renderHTML from 'react-render-html';

const Post = props => (
  <Layout>
    <h1>{props.content.title}</h1>
    <p>{props.content.summary.replace(/<[/]?p>/g, '')}</p>
    {renderHTML(props.content.body)}
    <img src={props.content.thumbnail} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id, seoURL, wss } = context.query;
  const res = await fetch(`${process.env.API_URL}/topics/${id}/${seoURL}`);
  const content = await res.json();
  console.log(`Fetched show: ${content.title}`);
  return { content };
};

export default Post;
