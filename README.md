# apu314.com Dockerized (Nginx, Certbot, nuxtjs)

## Useful Docker commands
``` bash
## Show running containers (optional: -l -a)
$ docker ps

## Stop all 3 containers (can be done one by one)
$ docker stop certbot nginx nuxtjs

## Remove all 3 containers (can be done one by one)
$ docker rm certbot nginx nuxtjs

## Get changes from git repo
$ git pull https://github.com/apu314/apu314.com.git 
```

## Build Setup
**1)** First of all you will need to uncomment the proxy and certbot services from the root 
docker-compose.production.yml file and also comment out the following lines like this:

``` bash
networks:
  web:
#    external:
#      name: nginx_web
```

**2)** Then we allow execution permission to init-letsencrypt.sh and execute it.
This will create our dummy certificates for nginx to be able to be executed later.
``` bash
## Install dummy certs to start nginx without problems.
$ chmod 0755 init-letsencrypt.sh and 
$ ./init-letsencrypt.sh production email domain www.domain
```
**3)** We're going to deploy our application. 

(***It's possible that we need to stop the proxy and certbot container 
first***) 

First, we need to redo the changes done at step **1**.

***We do this because when executing*** *init-letsencrypt.sh* ***by the first time, we only need to execute nginx and 
certbot containers with a network called web. And now we want to create a network inside web called nginx_web that 
connects our proxy container with nuxtjs container.***

Once done, we can proceed. 

So we're executing docker-compose up from the docker-compose file inside nginx folder and 
then from the root.
``` bash
## Run proxy (Nginx) and certbot containers firstly.
$ cd nginx
$ sudo docker-compose -f docker-compose.production.yml up --build -d
$ cd ..
$ sudo docker-compose -f docker-compose.production.yml up --build -d
```
That's all folks!


***REMEMBER TO SET THE CORRESPONDING DNS (Cloudflare, Google Cloud DNS, etc.)***