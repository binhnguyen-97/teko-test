import React, { Fragment } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const withLayout = (AppWrapped) => () => {
  return (<Fragment>
    <Header />
    <AppWrapped />
    <Footer />
  </Fragment>);
}

export default withLayout;
