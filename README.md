# API & Front(SSR) Dockerized (Nginx, Certbot, nuxtjs)

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
**3)** Stop the services created by our last execution.
``` bash
## Stop the services specifying a docker-compose file and not removing volumes 
$ sudo docker-compose -f docker-compose.production.yml down
```

**4)** We're going to deploy our application. 

First, we need to redo the changes done at step **1**.

***We do this because when executing*** *init-letsencrypt.sh* ***by the first time, we only need to execute nginx and 
certbot containers with a network called web. And now we want to create a network inside web called nginx_web that 
connects our proxy container with nuxtjs container.***

Once done, we can proceed. 

So we're executing docker-compose up from the docker-compose file inside nginx folder and 
then from the root.
``` bash
## Run proxy (Nginx) and certbot containers firstly.
$ cd nginx/
$ sudo docker-compose -f docker-compose.production.yml up --build -d
$ cd ..
$ sudo docker-compose -f docker-compose.production.yml up --build -d
```
That's all folks!


***REMEMBER TO SET THE CORRESPONDING DNS (Cloudflare, Google Cloud DNS, etc.). If not it won't run***

## Useful Docker commands
``` bash
## Show running containers (optional: -l -a).
$ docker ps

## Check Nginx configuration for correct syntax.
$ cd nginx
$ sudo docker container exec proxy nginx -t

## Reload Nginx inside coker container.
$ cd nginx
$ sudo docker container exec proxy nginx -s reload
```
Stop commands:
```
## Stop proxy service (recommended use because using docker-compose).
$ cd nginx
$ sudo docker-compose -f docker-compose.production.yml down

## Stop nuxtjs service (recommended use because using docker-compose).
## In Root folder of the project launch the following:
$ sudo docker-compose -f docker-compose.production.yml down

## Stop container (not recomended).
$ sudo docker stop [CONTAINER_NAME]

## Remove container.
$ sudo docker rm [CONTAINER_NAME]
```

Remove all stopped containers and not used volumes, networks, images without at least one container associated to them 
and all build cache
```
$ sudo docker system prune -a --volumes   
```

Get changes from git repo.
```
$ git pull https://github.com/apu314/apu314.com.git 
```

## Credits
- [This guide and his creator](https://medium.com/@danielrjames/host-nuxt-js-net-core-and-postgres-with-docker-nginx-and-https-1681d9bd0bbf)
- [The Docker Book](http://www.dockerbook.com)

