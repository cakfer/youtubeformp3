const http = require('http'),
    https = require('https'),
    express = require('express'),
    Downloader = require("./downloader"),
    dl = new Downloader(),
    app = express(),
    ytmp3 = (req, res) => {
        if (req.url.startsWith("/dl/")){link = req.path.slice(4);};
        console.log(link);
        dl.getMP3({videoId: link}, function(err,res){
          if(err)
          throw err;
          else{sendmusic(res.file);}}),
        sendmusic = (song) => {res.download(song);};};
app.use('/', express.static(__dirname + '/public'));
app.use('/', ytmp3);
app.listen(process.env.PORT || "8080", () => {console.log("YTMP3 now running at http://localhost:8080")});
