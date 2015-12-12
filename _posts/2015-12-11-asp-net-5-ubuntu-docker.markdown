---
layout: post
title:  "Asp.Net 5, Ubuntu and Docker"
date:   2015-12-11 22:35:50 -0400
categories: aspnet5 ubuntu docker
---

For my tests, I sparked up an [Ubuntu 14.04](http://www.ubuntu.com/) 64-bit image in Parallels.

Following the instructions on the [Asp.Net site](https://docs.asp.net/en/latest/getting-started/installing-on-linux.html), I was able to get Asp.Net 5 installed on my image.

Here are the steps broken down:

### Install the .NET Version Manager (DNVM)

Use the .NET Version Manager (DNVM) to install different versions of the .NET Execution Environment (DNX) on Linux.

**Install unzip and curl if you don’t already have them:**

{% highlight bash %}sudo apt-get install unzip curl{% endhighlight %}

**Download and install DNVM:**

{% highlight bash %}
curl -sSL https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.sh | DNX_BRANCH=dev sh && source ~/.dnx/dnvm/dnvm.sh
{% endhighlight %}

Once this step is complete you should be able to run `dnvm` and see some help text.

`dnvm` will output:

<pre>
    ___  _  ___   ____  ___
   / _ \/ |/ / | / /  |/  /
  / // /    /| |/ / /|_/ / 
 /____/_/|_/ |___/_/  /_/  

.NET Version Manager - Version 1.0.0-rc2-15545
By Microsoft Open Technologies, Inc.

DNVM can be used to download versions of the .NET Execution Environment and manage which version you are using.
You can control the URL of the stable and unstable channel by setting the DNX_FEED and DNX_UNSTABLE_FEED variables.

Current feed settings:
Default Stable: https://www.nuget.org/api/v2
Default Unstable: https://www.myget.org/F/aspnetvnext/api/v2
Current Stable Override: &lt;none&gt;
Current Unstable Override: &lt;none&gt;

Use dnvm [help|-h|-help|--help]  to display help text.
</pre>

### Install the .NET Execution Environment (DNX)
The .NET Execution Environment (DNX) is used to build and run .NET projects. Use DNVM to install DNX for Mono or .NET Core.

**To install DNX for .NET Core:**

* Install the DNX prerequisites:

{% highlight bash %}
sudo apt-get install libunwind8 gettext libssl-dev libcurl4-openssl-dev zlib1g libicu-dev uuid-dev
{% endhighlight %}

* Use DNVM to install DNX for .NET Core:

{% highlight bash %}dnvm upgrade -r coreclr{% endhighlight %}

**To install DNX for .NET Core:**

* Install Mono

Breaking down the instructions at http://www.mono-project.com/docs/getting-started/install/linux/#debian-ubuntu-and-derivatives`:

{% highlight bash %}
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF

echo "deb http://download.mono-project.com/repo/debian wheezy main" | sudo tee /etc/apt/sources.list.d/mono-xamarin.list

sudo apt-get update

echo "deb http://download.mono-project.com/repo/debian wheezy-apache24-compat main" | sudo tee -a /etc/apt/sources.list.d/mono-xamarin.list

sudo apt-get install mono-devel

sudo apt-get install mono-complete

sudo apt-get install referenceassemblies-pcl

sudo apt-get install ca-certificates-mono
{% endhighlight %}

* Use DNVM to install DNX for Mono:

{% highlight bash %}dnvm upgrade -r mono{% endhighlight %}

### Install libuv
Libuv is a an IO library that is used by Kestrel.

To build libuv, run each of the following steps:

{% highlight bash %}
sudo apt-get install make automake libtool curl

curl -sSL https://github.com/libuv/libuv/archive/v1.4.2.tar.gz | sudo tar zxfv - -C /usr/local/src

cd /usr/local/src/libuv-1.4.2

sudo sh autogen.sh

sudo ./configure

sudo make

sudo make install

sudo rm -rf /usr/local/src/libuv-1.4.2 && cd ~/

sudo ldconfig
{% endhighlight %}

### Install Node.js and npm

{% highlight bash %}
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -

sudo apt-get install -y nodejs

sudo npm install -g npm
{% endhighlight %}

### Install yeoman and the Asp.Net 5 generator

{% highlight bash %}
`sudo npm install -g yo bower grunt-cli gulp

`sudo npm install -g generator-aspnet
{% endhighlight %}

### Install Docker

My suggestion would be to use the official instructions at http://docs.docker.com/engine/installation/ubuntulinux/, however, I followed the posting at https://blog.markrendle.net/fun-with-asp-net-5-linux-docker-part-3/.

{% highlight bash %}
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 36A1D7869245C8950F966E92D8576A8BA88D21E9

sudo sh -c "echo deb https://get.docker.com/ubuntu docker main > /etc/apt/sources.list.d/docker.list"

sudo apt-get update

sudo apt-get install lxc-docker
{% endhighlight %}

To verify that it is installed:

{% highlight bash %}docker --version{% endhighlight %}

It should return something like this:

*Docker version 1.9.1, build a34a1d5*

To get around having to use `sudo` on every Docker command, run the following four commands, replacing ${USER} with your own username:

{% highlight bash %}
sudo groupadd docker
sudo gpasswd -a ${USER} docker
sudo service docker restart
newgrp docker
{% endhighlight %}

###Create a new Asp.Net web application

{% highlight bash %}yo aspnet{% endhighlight %}

Follow the instructions to create a basic web application.

{% highlight bash %}
cd {name of folder (name of web application)}

dnu restore

dnx web
{% endhighlight %}

Open a web browser and point it at [http://localhost:5000](http://localhost:5000) and you should see a standard template site.

###Deploy a Docker container

**Create a Docker container**

Inside of the folder that houses your web application's source code, you will find a `Dockerfile` file. The generator that I was using, created:

{% highlight bash %}
# Base of your container
FROM microsoft/aspnet:latest

# Copy the project into folder and then restore packages
COPY . /app
WORKDIR /app
RUN ["dnu","restore"]

# Open this port in the container
EXPOSE 5000
# Start application
ENTRYPOINT ["dnx","-p","project.json", "web"]
{% endhighlight %}

**Run the Docker container**

*Swap out {yourapplication} for the actual name of your application*

{% highlight bash %}
docker build -t {yourapplication} .

docker run -t -d -p 8080:5000 {yourapplication}
{% endhighlight %}

Now if you open your web browser and point it to [http://localhost:5000](http://localhost:5000) and you should see the same template site that you saw earlier. 

EXCEPT THAT I DIDN'T!

Turns out that Docker forwards requests on `0.0.0.0`, but Kestrel (the web server) listens on `localhost`. I got this information from [http://stackoverflow.com/questions/33977474/cannot-run-asp-net-5-from-docker](http://stackoverflow.com/questions/33977474/cannot-run-asp-net-5-from-docker) via answers by users @trm5073 and @armen.shimoon.

Find the container's id:

{% highlight bash %}docker ps{% endhighlight %}

The response will look *something* like this:

{% highlight bash %}
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
a957ec2ee445        helloworldweb       "dnx web --server.url"   15 hours ago        Up 15 hours         0.0.0.0:8080->5000/tcp   agitated_almeida
{% endhighlight %}

Use the Container ID to stop the container:

{% highlight bash %}docker stop a957ec2ee445{% endhighlight %}

Open the `Dockerfile` and change it to:

{% highlight bash %}
FROM microsoft/aspnet

COPY . /project        
WORKDIR /project       
RUN ["dnu", "restore"]

ENTRYPOINT ["dnx", "web", "--server.urls", "http://0.0.0.0:5000"]
{% endhighlight %}

Now run the container again:

{% highlight bash %}docker run -t -d -p 8080:5000 {yourapplication}{% endhighlight %}

Point your browser to [http://localhost:8080](http://localhost:8080) and tears of disbelief...
