let _ = require('ramda');
let { IO } = require('monet');
let { readFileSync } = require('fs');

const log = _.curry((label, value) => { console.log(label, value); return value; });

const debug = log('[DEBUG]');

const info = log('[INFO]');

const getJson = (fileName) => _.pipe(
    () => IO(() => readFileSync(fileName, { encoding: 'utf8' })),
    _.map(JSON.parse)
)();

const getProp = _.curry((prop, obj) => _.view(_.lensProp(prop), obj));

const getIndex = _.curry((index, obj) => _.view(_.lensIndex(index), obj));

const first = _.pipe(_.take(1), getIndex(0));

const runIO = (io) => io.run();

const runIOs = _.lift(runIO);

module.exports = {
    debug,
    info,
    getJson,
    getProp,
    getIndex,
    first,
    runIO,
    runIOs,
    ..._
};