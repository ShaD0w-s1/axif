import InterceptorManager from "./InterceptorManager";

class Axif {
  public defaults: object;
  public interceptors: object;
  constructor(instanceConfig: object) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager(),
    };
  }

  request(configOrUrl: String | , config) {
    
  }
}
