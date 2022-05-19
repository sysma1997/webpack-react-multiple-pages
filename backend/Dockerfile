FROM php:8.1.1-apache

# MYSQL
RUN apt-get update && apt-get upgrade -y
RUN docker-php-ext-install pdo pdo_mysql && docker-php-ext-enable pdo_mysql

#OAUTH

EXPOSE 80