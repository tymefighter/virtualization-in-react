// Libraries
import { Client, Server } from 'styletron-engine-atomic';

// Utils
import { isServerSide } from './isServerSide';

let serverEngine: Server | undefined;
let clientEngine: Client | undefined;

export const getStyletronEngine = (): Server | Client => {
  if(isServerSide()) {
    if(serverEngine) {
      return serverEngine
    }
    
    return serverEngine = new Server();
  }

  if(clientEngine) {
    return clientEngine;
  }
  
  return clientEngine = new Client();
}
