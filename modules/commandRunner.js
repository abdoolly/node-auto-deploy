let { IO } = require('monet');
let childProcess = require('child_process');
const _ = require('./generalUtils');

const spawnCommand = _.curry((path, command) => {
    let [
        mainCommand,
        args
    ] = _.converge(_.pair, [_.first, _.tail])(_.split(' ', command));

    return IO(_.pipe(
        () => childProcess.spawnSync(mainCommand, args, { cwd: path }),
        (spawn) => _.info(spawn.stdout.toString())
    ));
});

const spawnList = _.curry((path, commands) => _.lift(spawnCommand(path))(commands));

const commandRunner = _.pipe(
    _.getJson,
    _.map(_.converge(spawnList, [_.getProp('path'), _.getProp('commands')])),
    _.runIO,
    _.runIOs
);

const commandRunnerRequest = (req, res) => _.pipe(
    () => commandRunner(_.defaultTo('./deploys/project.json', `./deploys/${req.query.deploy}`)),
    () => res.send({ 'message': 'Successfully ran the commands' })
)();

module.exports = {
    commandRunner,
    commandRunnerRequest
};