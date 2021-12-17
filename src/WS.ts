import { ServerRequest, ClientRequest } from './wsMessages'
export interface WsJsonMessage {
  name: string;
  data: any;
}

type Event = (event: ServerRequest) => void

interface EventMap {
  [name: string]: Event;
}


export class WS {
  private client: WebSocket
  private events: EventMap = {}
  private sendChannel: Array<string | ArrayBufferLike | Blob | ArrayBufferView> = []
  private closed = false;
  private pingInterval: NodeJS.Timer;

  constructor(private identifier: string, private serverAdder?: string) {
    if (!this.serverAdder) {
      let protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      this.serverAdder = `${protocol}//${window.location.host}/ws`
    }
  }
  start() {
    this.connect(this.serverAdder)
  }

  private connect(serverAdder: string) {
    this.client = new WebSocket(serverAdder);
    this.client.binaryType = 'arraybuffer';

    let vm = this;

    this.client.onopen = () => {
      let imessage = ClientRequest.create({ id: "", start: { identifier: vm.identifier } });
      let ibuffer = ClientRequest.encode(imessage).finish();
      vm.client.send(ibuffer);
      console.log('connection ready.')
      vm.wsWorker()
    };
    this.client.onmessage = (event: MessageEvent) => {
      let message = ServerRequest.decode(new Uint8Array(event.data));
      if (message.data == 'pong') return;
      if (vm.events[message.data]) {
        console.log('handling: ', message.data)
        vm.events[message.data](message)
        return
      }
      console.log('handler not found: ', message.data)
    };

    this.pingInterval = setInterval(
      () => {
        this.send(
          ClientRequest.encode(
            ClientRequest.create({ ping: {} })
          ).finish()
        );
      },
      10000
    );

    this.client.onclose = (event: CloseEvent) => {
      if (this.closed) return;
      clearInterval(this.pingInterval);
      this.pingInterval = null;
      console.log('Socket is closed. Reconnect will be attempted in 1 second.', event.reason);
      setTimeout(() => {
        vm.connect(serverAdder);
      }, 1000);
    };

    this.client.onerror = function (event: globalThis.Event) {
      console.error('Socket encountered error, Closing socket.', event, 'Closing socket');
      vm.client.close();
    };
  }

  private waitForSocketConnection(cb: () => void) {
    setTimeout(() => {
      if (this.client.readyState === 1) {
        cb();
      } else {
        this.waitForSocketConnection(cb);
      }
    }, 40);
  }

  connectionReady(): Promise<void> {
    return new Promise((resolve) => {
      this.waitForSocketConnection(() => {
        resolve();
      })
    });
  }


  registerEvent(name: string, event: Event) {
    this.events[name] = event;
  }

  send(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
    this.sendChannel.push(data);
  }

  wsWorker() {
    let send = async () => {
      await this.connectionReady()
      if (this.sendChannel.length > 0)
        this.client.send(this.sendChannel.pop());
      setTimeout(send, 100)
    };
    send()
  }

  close() {
    this.client.close();
    this.closed = true;
  }
}
