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


// http://34.90.97.178:3000/deploy?deploy=deploy-self.json
// github webhook secret : super-remote-teacher-app-hook


// http://34.90.97.178:3000/deploy?deploy=rt-deploy.json