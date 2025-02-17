# Changes compared to original example:
1. introduced src path (app and middleware moved inside)
2. added (auth) route grouping - seems to cause extra trouble for Clerk
3. added custom sign-in page that utilizes Clerk UI block
4. middleware extended to allow public access for that new sign-in page
5. next.config.js has standalone output and specific env variable for build time
6. added hosting.live.json file for pm2 app parameters

# Steps to reproduce production build issues:
1. npm i
2. npm run build
3. run pack.cmd to move static files into .next\standalone directory
4. use .next\standalone directory contents as runnable code for pm2
5. install and run pm2: pm2 start ecosystem.config.js
6. page will redirect to /sign-in, enter email and password

# Issues:
1. upon login when entering password a POST is done against sign-in/factor-one which ends up in 403 and page stays loading. Refreshing page navigates to home page (/)
2. upon logout a POST request is done against current page (/) which ends up in 403 and active page stays. Since middleware has home page (/) as protected, then it should navigaate away.
3. adding a top layer dynamic route [language] breaks it even more