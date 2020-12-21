import React, { ReactElement } from 'react';
import Head from 'next/head';

/**
 * @class Home
 */
export default class Home extends React.Component {
  /**
   * Render Home
   *
   * @returns ReactElement<any>
   */
  render(): ReactElement<any>  {
    return (
      <div>
        <Head>
          <title>Hallo</title>
        </Head>
        <main>
          <p>penis</p>
        </main>
      </div>
    );
  }
}
