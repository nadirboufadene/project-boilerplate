import { OpenAPIClientAxios } from 'openapi-client-axios';
import { Client as BackendAPIClient } from './client';

/**
 * Backend client provider
 */
export class BackendClient {
  client?: BackendAPIClient;
  private api: OpenAPIClientAxios;
  private accessToken: string | undefined = undefined;
  private initError?: Error;
  private initPromise: Promise<void>;

  /**
   * Initialize the open api client
   */
  constructor() {
    this.api = new OpenAPIClientAxios({
      definition: this.getUrl() + '/api-json',
      axiosConfigDefaults: {
        withCredentials: true,
        headers: {
        },
      },
    });
    this.api.withServer({
      description: 'Backend server url',
      url: this.getUrl(),
    });
    this.initPromise = this.api
      .init<BackendAPIClient>()
      .then((client: BackendAPIClient) => {
        this.client = client;
      })
      .catch(error => {
        this.initError = error;
        console.log(error);
        throw error;
      });
  }

  /**
   * Return the backend url
   */
  getUrl(): string {
    return process.env.REACT_APP_MIDDLEWARE_URL || 'http://backend:5000';
  }

  /**
   * Return the init error
   */
  getInitError(): Error | undefined {
    return this.initError;
  }

  getInitPromise(): Promise<void> {
    return this.initPromise;
  }
}

export interface InitializedBackendClient extends BackendClient {
  client: BackendAPIClient;
}

const backendClient = new BackendClient();

export default backendClient;
