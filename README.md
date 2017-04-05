# flictoggl
*Track time on [Toggl](https://www.toggl.com) using a [Flic](https://flic.io/) button.*

[![Build Status](https://travis-ci.org/swissmanu/flictoggl.svg)](https://travis-ci.org/swissmanu/flictoggl) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![npm version](https://badge.fury.io/js/flictoggl.svg)](http://badge.fury.io/js/flictoggl) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


`flictoggl` connects a [Flic](https://flic.io/) smart button to your [Toggl](https://www.toggl.com) account for simple *on/off* time tracking. Hit the button to start recording time. Hit it again to stop. Simple as pie.

## Requirements
* NodeJS

---

## Use with Flic Mobile App
You have to deploy `flictoggl` as an HTTP service in order to use it with the Flic mobile app.

### Step 1: Deploy to Heroku
*You can deploy `flictoggl` everywhere you want. This guide shows how you can do this using [Heroku](https://heroku.com) though.*

```bash
git clone https://github.com/swissmanu/flictoggl.git
cd flictoggl
heroku create
git push heroku master
```

Make sure you note down the URL of the deployed Heroku app for later use in step 3.

### Step 2: Configure Flic App
* Open the Flic app on your phone
* Add an `HTTP Request` action
* Enter the URL of the deployed Heroku app from step 1
* Select `POST` as request type
* Enter `apiToken=[token]` as `Body`, where `[token]` is to be replaced with the API token from step 2

![Button](screenshots/config-1.jpg)
![Action](screenshots/config-2.jpg)

### Step 3: Test drive!
* Press your Flic button once for start recording time
* Press the button again to stop recording
* Check the Toggl web timer

---

## Use with `hax-with-flic`
[hax-with-flic](https://github.com/50ButtonsEach/hax-with-flic-osx) runs executable scripts on your Mac upon pressing a connected Flic button.
To attach `flictoggl` to `hax-with-flic`, install `flictoggl` as command line utility:

```bash
npm install -g flictoggl
```

You have to create a wrapper script around `flictoggl` to run it with `hax-with-flic-osx`. Example:

```bash
#!/bin/sh

# hax-with-flic is on a very early stage currently.
# Make sure the PATH env var contains the path to your NodeJS installation.
# flictoggl will not work otherwise.
export PATH=/path/to/node/js:$PATH
RESULT=`flictoggl [TogglAPIToken]`

# Uncomment for Goodie: Show Started/Stopped via OS X notification center:
# osascript -e "display notification \"$RESULT\" with title \"Toggl\""
```

Hook the script to `hax-with-flic`:

![hax-with-flic](screenshots/config-3.png)

---

## How to get your Toggl API Token
* Login to your [Toggl account](https://www.toggl.com/app/profile)
* Go to your profile
* Copy your API token from the very bottom of the page


---

## License

Copyright (c) 2016 Manuel Alabor

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
