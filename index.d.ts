import { Agent } from 'http';

declare class ProxyAgent extends Agent {
  constructor (uri: string | { protocol: string; host: string; port?: string; proxies?: any });

  static proxies: { [key: string]: typeof Agent };
}

export = ProxyAgent;
