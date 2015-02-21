# Park Victoria Baptist Church

#### Initial Setup

1. Set up Node (see below)
2. Add the following line to `/etc/hosts/`: `127.0.0.1       localhost       local.pvbc.com`
3. `npm install -g grunt`
4. `npm install -g grunt-cli`
5. Open new shell and start the web server: `grunt`
6. Go to http://local.pvbc.com:3009

### Setting up Node
1. Install nvm from [here](https://github.com/creationix/nvm).
2. `nvm install 0.10.30`
3. `nvm use 0.10.30`
4. Add `source ~/.nvm/nvm.sh` to your ~/.profile (load nvm when you open a shell)
5. Add `nvm use 0.10.30` to your ~/.profile (load the correct version of Node automatically when you open a shell)
