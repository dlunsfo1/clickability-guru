import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.content.title}</h1>
    {/* <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} /> */}
  </Layout>
);

Post.getInitialProps = async function(context) {
  console.log('context ', context);
  const { id, seoURL, wss } = context.query;
  const res = await fetch(`http://localhost:3000/api/${id}/${seoURL}`);
  const show = await res.json();

  console.log(`Fetched show: ${content.title}`);

  return { show };
};

export default Post;
