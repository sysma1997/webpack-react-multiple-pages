FROM php:8.1.1-apache

RUN apt-get update && apt-get upgrade -y

# MYSQL
RUN docker-php-ext-install pdo pdo_mysql && docker-php-ext-enable pdo_mysql
#OAUTH
RUN apt-get install -y libpcre3-dev && pecl install oauth \
    && echo "extension=oauth.so" > /usr/local/etc/php/conf.d/docker-php-ext-oauth.ini

EXPOSE 80