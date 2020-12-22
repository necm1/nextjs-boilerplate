import React, { ReactElement } from 'react';
import Head from 'next/head';
import { Test } from '../_service/test';
import { inject } from '../decorators/inject';

/**
 * @class Home
 */
export default class Home extends React.Component {
  @inject(Test)
  private readonly test!: Test;

  /**
   * Render Home
   *
   * @returns ReactElement<any>
   */
  render(): ReactElement<any>  {
    this.test.a();
    this.test.b();
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
