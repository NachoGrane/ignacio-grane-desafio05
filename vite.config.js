import {resolve} from 'node:path';


// vite.config.js
export default {
  // config options
  server:{
    port: 2055,
  },
  build:{
    emptyOutDir: true,
    rollupOptions:{
        input: {
            //acá ponemos las paginas que tengamos. 
            mariokart : resolve ('./index.html'),
            mariokart : resolve ('./pages/mario-kart.html'),
            mariokart : resolve ('./pages/mortal-kombat.html'),
        }
    }
  },
}