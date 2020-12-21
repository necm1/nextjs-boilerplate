import App from 'next/app';
import React, { ReactElement } from 'react';
import '../styles/styles.scss';

/**
 * @class Ares
 */
export default class Ares extends App {
  /**
   * Render Ares app
   *
   * @returns ReactElement<any>
   */
  render(): ReactElement<any> {
    return React.createElement(this.props.Component, this.props.pageProps);
  }
}
