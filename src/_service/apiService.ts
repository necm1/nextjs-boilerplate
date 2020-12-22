import {injectable} from 'tsyringe';
import {Observable} from 'rxjs';
import Axios from 'axios-observable';
import {environment} from 'environment';

@injectable()
/**
 * @class ApiService
 */
export class ApiService {
  private axios: Axios;

  /**
   * ApiService constructor
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
   * @param url
   * @param body
   * @param options
   * @return Observable<API>
   */
  public post(url: string, body: any = {}, options = {}): Observable<any> {
    return this.axios.post<any>(
      `${environment.endpoint}/en/${url}`,
      body,
      options
    );
  }

  /**
   * Sends a GET requests to the API
   *
   * @param url
   * @param options
   * @return Observable<API>
   */
  public get(url: string, options = {}): Observable<any> {
    return this.axios.get<any>(`${environment.endpoint}/en/${url}`, options);
  }

  /**
   * Sends a PUT request to the API
   *
   * @param url
   * @param body
   * @param options
   * @return Observable<API>
   */
  public put(url: string, body: any = {}, options = {}): Observable<any> {
    return this.axios.put<any>(
      `${environment.endpoint}/en/${url}`,
      body,
      options
    );
  }

  /**
   * Sends a DELETE request to the API
   *
   * @param url
   * @param options
   * @return Observable<API>
   */
  public delete(url: string, options = {}): Observable<any> {
    return this.axios.delete<any>(`${environment.endpoint}/en/${url}`, options);
  }
}
