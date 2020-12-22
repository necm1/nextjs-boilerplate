import React, { ReactElement } from 'react';
import '@abraham/reflection';
import { container, singleton } from 'tsyringe';
import App from 'next/app';
import '../styles/styles.scss';

@singleton()
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
    return <this.props.Component {...this.props.pageProps} />;
  }
}

container.registerSingleton(Ares, Ares).resolve(Ares);