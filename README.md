Changes compared to original example:
# introduced src path (app and middleware moved inside)
# added (auth) route grouping - seems to cause extra trouble for Clerk
# added custom sign-in page that utilizes Clerk UI block
# middleware extended to allow public access for that new sign-in page
# next.config.js has standalone output and specific env variable for build time
# added hosting.live.json file for pm2 app parameters

Steps to reproduce production build issues:
# npm i
# npm run build
# run pack.cmd to move static files into .next\standalone directory
# use .next\standalone directory contents as runnable code for pm2
# install and run pm2: pm2 start ecosystem.config.js
# page will redirect to /sign-in, enter email and password

Issues:
# upon login when entering password a POST is done against sign-in/factor-one which ends up in 403 and page stays loading. Refreshing page navigates to home page (/)
# upon logout a POST request is done against current page (/) which ends up in 403 and active page stays. Since middleware has home page (/) as protected, then it should navigaate away.
# adding a top layer dynamic route [language] breaks it even more