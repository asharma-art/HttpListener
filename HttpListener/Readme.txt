1. Download and install nodejs
2. We need socket.io node module (npm install socket.io)
3. Browse to the folder in command line, and type
    node http-listener.js
4. The app will be listening to webhooks post on port 8890, and the actual push to browser will happen from port 8891. So basically, we need two ports. 
5. Whatever is posted from ui webhooks post will be displayed in *.com:8891/status 

We also need to restart node server automatically when it crashes with module supervisor.
npm install -g supervisor

Run the app with command below:
supervisor http-listener.js



  
  
  
  
