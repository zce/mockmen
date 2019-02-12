import { create, BrowserSyncInstance } from 'browser-sync';

export class Server {
  private _server: BrowserSyncInstance;
  /**
   * Create new Server
   */
  constructor(name: string) {
    this._server = create(name);
  }
  /**
   * start
   */
  public start(root: string) {
    this._server.init({
      server: root,
      notify: false,
      // watch: true
    })
  }

  /**
   * stop
   */
  public stop() {
    this._server.exit()
  }
}