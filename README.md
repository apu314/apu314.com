# apu314.com Dockerized

## Build Setup

``` bash
## Install dummy certs to init nginx without problems
$ chmod 0755 init-letsencrypt.sh
$ ./init-letsencrypt.sh production email domain www.domain

## Run
$ docker-compose up

```
