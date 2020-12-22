import React, {ReactElement} from 'react';
import Head from 'next/head';
import {inject} from '@ares/inject';
import {Test} from '@ares/service/test';

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
  render(): ReactElement<any> {
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
