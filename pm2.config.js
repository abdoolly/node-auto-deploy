module.exports = {
    apps: [{
        name: 'auto-deploy',
        script: 'yarn',
        args: 'start',
        interpreter: '/bin/bash',
        env: {
            NODE_ENV: 'production',
            PORT: '3000'
        }
    }]
};