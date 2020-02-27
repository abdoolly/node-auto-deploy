module.exports = {
    apps: [{
        name: 'yarn',
        script: 'yarn',
        args: 'start:prod',
        interpreter: '/bin/bash',
        env: {
            NODE_ENV: 'production',
            PORT: '3001'
        }
    }]
};