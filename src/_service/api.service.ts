import {injectable} from 'tsyringe';
import {Observable} from 'rxjs';
import Axios from 'axios-observable';
import {environment} from 'environment';

@injectable()
/**
 * @class APIService
 */
export class APIService {
  /**
   * @private
   * @property
   * @type {Axios}
   */
  private axios: Axios;

  /**
   * APIService constructor
   *
   * @constructor
   */
  constructor() {
    this.axios = Axios.create({
      baseURL: `${environment.endpoint}/en/`,
      timeout: 5000,
    });
  }

  /**
   * Send POST request
   *
   * @param {string} url
   * @param {any} body
   * @param {object} options
   * @return Observable<T>
   */
  public post<T>(url: string, body: any = {}, options = {}): Observable<T> {
    return this.axios.post<T>(
      `${environment.endpoint}/en/${url}`,
      body,
      options
    );
  }

  /**
   * Sends a GET requests to the API
   *
   * @param {string} url
   * @param {object} options
   * @return Observable<T>
   */
  public get<T>(url: string, options = {}): Observable<T> {
    return this.axios.get<T>(`${environment.endpoint}/en/${url}`, options);
  }

  /**
   * Sends PUT request
   *
   * @param {string} url
   * @param {any} body
   * @param {object} options
   * @return Observable<T>
   */
  public put<T>(url: string, body: any = {}, options = {}): Observable<T> {
    return this.axios.put<T>(
      `${environment.endpoint}/en/${url}`,
      body,
      options
    );
  }

  /**
   * Sends DELETE reqiest
   *
   * @param {string} url
   * @param {object} options
   * @return Observable<T>
   */
  public delete<T>(url: string, options = {}): Observable<T> {
    return this.axios.delete<T>(`${environment.endpoint}/en/${url}`, options);
  }
}
