sed -i "/xdebug.mode=off/c\xdebug.mode=debug" /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && /etc/init.d/apache2 reload