import InterceptorManager from "./InterceptorManager";

interface config {
  url: string;
  method: string;
}

enum method {
  'GET',
  'POST',
  'DELETE',
  'PUT',
  'PATCH'
}

export default class Axif {
  public defaults: object;
  public interceptors: object;
  constructor(instanceConfig: object) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager(),
    };
  }

  request(url: string, config: config) {

    config.url = url;


    config.method = config?.method ? config.method.toLowerCase() :
   
  
  }
}
