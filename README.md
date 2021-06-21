# InsectOS Core Operating system

The platform is build on [NodeRED](https://nodered.org) and [Apache CouchDB](https://couchdb.apache.org)

## Components

- Linux based machine
- Installed CouchDB on port 5984
- Installed NodeRED on port 1880
- Configured [NginX](https://www.nginx.org/) Web server
- Installed [PM2](https://pm2.keymetrics.io/) process manager
- Installed [GIT](https://git-scm.com/) command line client
- Installed [NodeJS](https://nodejs.org/en/), latest **LTS** version

We have [a repository for scripts](https://github.com/insectos/scripts) that contains all settings/scripts (minus the scripts containing credentials)

## Installation locations

- User: **insectos**
- install location: `/opt/insectos`
- CouchDB/nginx/git: default for OS, don't touch

## Startup

systemd is used to start nginx, couchdb, [pm2](https://pm2.keymetrics.io/docs/usage/startup/) on system boot

pm2 is configured to launch `/opt/insectos/insect-core/locallaunch.sh` (a file **not** in the repo since it contains credentials)

### locallaunch.sh

```bash
#!/bin/bash
# Start NodeRED on insectOS Farm sever
# Cloudant URL
export INSECT_DB='**[http://USER:PASS*127.0.01:5984]**'
export DB_TOKEN='**[Token for IoT to submit measurements]**'
export REMOTE_DB='[** URL to remote Cloudant**]'
node_modules/.bin/node-red --settings ./.node-red/settings.js --userDir ./.node-red
```

### localdocker.sh

Script to locally run the Docker container with all environment variables - provided by K8S as config set

```bash
#!/bin/bash
docker run -it --rm -p 1880:1880/tcp \
--env INSECT_DB='**[http://USER:PASS*127.0.01:5984]**' \
--env DB_TOKEN='**[Token for IoT to submit measurements]**' \
--env JWTSECRET='**[ ... ]**' \
--env GITHUB_CLIENT_ID='**[ ... ]**' \
--env GITHUB_CLIENT_SECRET='**[ ... ]**' \
--env REMOTE_DB='[** URL to remote Cloudant**]' \
--env INSECT_FACILITY='/opt/insectos/facility/facility.json' \
--env EMAIL='noreply.insectos@gmail.com' \
--env EMAIL_PASSWORD='**[ ... ]**' \
--env GAUTH='**[ ... ]**' \
--env INSECT_SLACK='**[ ... ]**' \
--env INSECT_GOOGLE_SECRET_KEY="-----BEGIN PRIVATE KEY-----
MultiLine
-----END PRIVATE KEY-----
" \
insectcore:latest
```

On Windows line continuation is `^` instead of `\`

**Important** Always check [the current version](https://github.com/insectos/scripts/blob/main/opt/insectos/insect-core/locallaunch.sh)

## Updating the app

- login using shell
- change to user insectos: `sudo su insectos`
- change to insectos dir: `cd /opt/insectos`
- run [`./update-insectos`](https://github.com/insectos/scripts/blob/main/opt/insectos/update-insectos)

The script will pull the repository _insect-ui_, stop the pm2 task, pull the repository _insect-core_, run `npm install` on it and restart the pm2 task

We might make this more automatic in future
