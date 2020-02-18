/**
 * title: Count
 */
import React, { useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';
import styles from './count.css';

function Page(props) {
  useEffect(() => {
    console.log('component did mount')
  }, []);
  useEffect(() => {
    return () => {
      console.log('component unmount')
    };
  });
  return (
    <div className={styles.normal}>
      <h1>Page product</h1>
      <DocumentTitle title="Product list page" />
      <h2>product list</h2>
      <ul>
      {
        props.product.list.map(product => <li>{product}</li>)
      }
      </ul>
    </div>
  );
}

Page.getInitialProps = async ({ store, route, isServer }) => {  
  console.log('product init')
  return store.dispatch({
    type: 'product/init'
  });
};

export default connect(state => ({
  product: state.product,
}))(Page);
