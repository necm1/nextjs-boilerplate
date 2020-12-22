import React, {ReactElement} from 'react';
import Head from 'next/head';
import { ApiService } from '@ares/service/apiService';
import { inject } from '@ares/inject';

/**
 * @class Home
 */
export default class Home extends React.Component {
  @inject(ApiService)
  private apiService!: ApiService;

  public componentDidMount(): void {
    this.apiService.get('').subscribe({
      next: (data) => console.log(data)
    });
  }

  /**
   * Render Home
   *
   * @returns ReactElement<any>
   */
  public render(): ReactElement<any> {
    return (
      <div>
        <Head>
          <title>Hallo</title>
        </Head>
        <main>
          <p>test</p>
        </main>
      </div>
    );
  }
}
