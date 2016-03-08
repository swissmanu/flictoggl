# flictoggl
*Track time on [Toggl](https://www.toggl.com) using a [Flic](https://flic.io/) button.*

`flictoggl` connects a [Flic](https://flic.io/) smart button to your [Toggl](https://www.toggl.com) account for simple *on/off* time tracking. Hit the button to start recording time. Hit it again to stop. Simple as pie.

## Usage
### Step 1: Deploy to Heroku
*You can deploy `flictoggl` everywhere you want. This guide shows how you can do this using [Heroku](https://heroku.com) though.*

```bash
git clone https://github.com/swissmanu/flictoggl.git
cd flictoggl
heroku create
git push heroku master
```

Make sure you note down the URL of the deployed Heroku app for later use in step 3.

### Step 2: Get Toggl API Token
* Login to your [Toggl account](https://www.toggl.com/app/profile)
* Go to your profile
* Copy your API token from the very bottom of the page

### Step 3: Configure Flic App
* Open the Flic app on your phone
* Add an `HTTP Request` or `Internet Request` action
* Enter the URL of the deployed Heroku app from step 1
* Select `POST` as request type
* Paste the API token from step 2 to the `Body` field
* If the `Body` field does not exist (as in the current Android App), specify the API token with a query parameter. Example `https://****.herokuapp.com/?apiToken=token`

![Button](screenshots/config-1.jpg)
![Action](screenshots/config-2.jpg)

### Step 4: Test drive!
* Press your Flic button once for start recording time
* Press the button again to stop recording
* Check the Toggl web timer
