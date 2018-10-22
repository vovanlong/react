# React native - Day 1

## Setup

 - Setup Xcode.
 - Setup JDK, Android Studio, Android SDK.


#### MacOS

 - Node, Watchman

```sh 
brew install node
```
```sh 
brew install watchman
```

 - React native Cli

```sh
npm install -g react-native-cli
```

 - Setup `ANDROID_HOME`

```
	export ANDROID_HOME=~/Library/Android/sdk
	export PATH={PATH}:PATH:{ANDROID_HOME}/tools
```

#### Windows

 - Install Chocolatey, Node, Python

 https://chocolatey.org/install

```sh
choco install -y nodejs.install python2
```

 - React native cli:

```sh
npm install -g react-native-cli
```

 - Setup `ANDROID_HOME`

 Computer → Right Click → Properties → Advanced system settings → Advanced → Environment Variables → New (System variables)

## Create Project

```sh
react-native init HelloProject
```

## Install IDE

 - Webstorm, PhpStorm, Visual Studio Code.
