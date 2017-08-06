FROM centos:latest
MAINTAINER Dimitri Reifschneider <dimitri.reifschneider@gmail.com>
RUN rpm -Uvh http://mirror.pnl.gov/epel/7/x86_64/e/epel-release-7-5.noarch.rpm
RUN yum install nodejs npm -y
COPY ./src /opt/src
RUN cd /opt/src; npm install
EXPOSE 9000
CMD ["node", "/opt/src/index.js"]
