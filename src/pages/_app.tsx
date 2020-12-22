import React, { ReactElement } from 'react';
import App from 'next/app';
import '@abraham/reflection';
import {container, singleton} from 'tsyringe';
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