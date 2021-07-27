#!/user/bin/env node
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import mongoose from 'mongoose';
import http from 'http';
import app from '../app';

const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || '3333n');
app.set('port', port);
const server = http.createServer(app);
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case 'EACCES':
      // eslint-disable-next-line no-console
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // eslint-disable-next-line no-console
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = async () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  // eslint-disable-next-line no-console
  console.log(`Listening on ${bind}`);
  try {
    const path = 'mongodb://localhost/gridt';
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(path, options);
    const db = mongoose.connection;
    // eslint-disable-next-line no-console
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      // eslint-disable-next-line no-console
      console.log('CONNECTED TO GRID-T DB');
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

const start = () => {
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
};

export default start;