FROM php:8.2-apache

WORKDIR /var/www/html

RUN apt-get update \
    && apt-get install -y \
        libpng-dev \
        libjpeg-dev \
        libzip-dev \
    && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-configure gd --with-jpeg=/usr/include/ \
    && docker-php-ext-install gd

RUN pecl install zip \
    && docker-php-ext-enable zip

RUN apt-get update && apt-get upgrade -y
