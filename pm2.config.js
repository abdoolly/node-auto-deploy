module.exports = {
    apps: [{
        name: 'auto-deploy',
        script: 'yarn',
        args: 'start:prod',
        interpreter: '/bin/bash',
        env: {
            NODE_ENV: 'production',
            PORT: '3001'
        }
    }]
};