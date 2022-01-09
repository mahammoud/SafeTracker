Overview:

SafeTracker is a website that is targeted towards detecting and tracking pothole.
Potholes are tracked using a raspberry pi module connected to a camera and mounted on a mobile vehicle, through utilizing ai and image processing, once the module detects a pothole it reports back to the server and a digital copy of the pothole is saved to an interactive map.
Users can also create an account and connect their devices to benefit from our services.
We aim towards road infrastructure development through transparency, cooperation and innovation.

Specifications:
The website uses node.js as the main backend framework, react as the frontend runtime and python for the raspberry pi application.
You will find the node.js application in the main directory, as for the react application you can find it in /client

Usage: 
How To setup a raspberry pi:
Step 1: After you obtain your raspberry pi and your pi camera, it's time to set them up!
To do this, click on the following link(To be added once abbass finishes the app) which will download the application on your device.

Step 2: Next, you need to configure the application to launch on startup. Simply just copy the following commands in your terminal:
sudo nano /etc/rc.local
sudo python /home/pi/object_detection/program.py &(make sure to extract the zip file to the correct directory)

Step 3: Reboot the system, and once the raspberry pi starts up, the application will be up and running!

Step 4: open your mobile's hotspot data and share your mobile data with the raspberry pi, and by that your little tracker will be up and running!

!UPDATE!: Due to the economic crisis in lebanon(The place of residence of the member responsible of raspberry pi testing) he was not able to afford a gps module(which costs 80$ almost quadruple the national minimum wage - inflation) and thus we were not able to test the location tracker functionality of potholes.

Api Endpoints:


 * login
 */
app.post('/api/login', userController.postLogin);
/**
 * logout
 */
app.get('/api/logout', userController.logout);
/**
 * register
 */
app.post('/api/signup', userController.postSignup);
/**
 * Associate device with user
 */
app.post('/api/device', passportConfig.isAuthenticated, deviceController.associateDevice);
/**
 * mark a pothole
 */
app.post('/api/pothole', potholeController.markPothole);
/**
 * get potholes in a specific range
 */
app.get('/api/pothole', passportConfig.isAuthenticated, potholeController.getPotholes)
/**
 * get devices of a user
 */
app.get('/api/device', passportConfig.isAuthenticated, deviceController.getDevices)

Credits:
https://github.com/prasadshiva27/Pothole-detection-using-Tensorflow-Object-Detection-API
https://github.com/sahat/hackathon-starter/

