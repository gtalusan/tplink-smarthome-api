const TplinkConnection = require('./tplink-connection');
const TcpSocket = require('./tcp-socket');

class TcpConnection extends TplinkConnection {
  /**
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  get socketType() {
    return 'TCP';
  }

  /**
   * @private
   */
  async getSocket() {
    return super.getSocket(TcpSocket);
  }

  async send(payload, { timeout } = {}) {
    return super.send(payload, { timeout });
  }
}

module.exports = TcpConnection;
