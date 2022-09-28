# simple-youtube2mp3

A simple Youtube to MP3 converter website.

Made to be as simple as possible to deploy and use.

## Setup


Prerequisites:

- ffmpeg

Installation and deployment (Linux):

```
sudo apt install ffmpeg
```

Once you have ffmpeg installed at /usr/bin/ffmpeg:

```sh
git clone https://github.com/XD14/simple-youtube2mp3
cd simple-youtube2mp3
npm install
npm install pm2 -G
pm2 start index.js
```

Once you run the aforementioned commands, the server will begin listening in the background on port `8080`, or at `127.0.0.1:8080`.
