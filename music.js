const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    lrcType: 3,
    audio: [
      {
        name: "Apologize",
        artist: 'OneRepublic',
        url: 'https://od.lk/s/NzNfMTQxOTgyNjZf/apologize.mp3',
        cover: 'https://i.loli.net/2019/06/05/5cf79ea9046c092585.jpg',
        lrc: 'https://od.lk/s/NzNfMTQxOTgyNzJf/apologize.lrc',
      },
      {
        name: 'Counting stars',
        artist: 'OneRepublic',
        url: 'https://getmusic.ga/Music/%E8%99%BE%E7%B1%B3%E9%9F%B3%E4%B9%90%20-%20Counting%20Stars.mp3',
        cover: 'https://i.loli.net/2019/06/05/5cf79ef30d11955457.jpg',
        lrc: 'https://getmusic.ga/MusicLrc/Counting%20Stars-OneRepublic.lrc',
      },
      {
        name: '病名は愛だった',
        artist: 'Neru/鏡音リン/鏡音レン',
        url: 'https://getmusic.ga/Music/%E7%97%85%E5%90%8D%E3%81%AF%E6%84%9B%E3%81%A0%E3%81%A3%E3%81%9F.mp3',
        cover: 'https://i.loli.net/2019/06/07/5cf9abb8ca8ca95762.jpg',
        lrc: 'https://getmusic.ga/MusicLrc/%E7%97%85%E5%90%8D%E3%81%AF%E6%84%9B%E3%81%A0%E3%81%A3%E3%81%9F.lrc',
      },
      {
        name: '我的洗发液',
        artist: '成龙',
        url: 'https://getmusic.ga/Music/%E6%88%91%E7%9A%84%E6%B4%97%E5%8F%91%E6%B6%B2-%E6%88%90%E9%BE%99.mp3',
        cover: 'https://i.loli.net/2019/06/07/5cf9ad69052b182190.jpg',
        lrc: 'https://getmusic.ga/MusicLrc/%E6%88%91%E7%9A%84%E6%B4%97%E5%8F%91%E6%B6%B2-%E6%88%90%E9%BE%99.lrc',
      },
      {
        name: 'Only my railgun',
        artist: 'Fripside',
        url: 'https://getmusic.ga/Music/FripSide-Only%20My%20Railgun.flac',
        cover: 'https://i.loli.net/2019/06/08/5cfb3cbee219e19246.jpg',
        lrc: 'https://getmusic.ga/MusicLrc/only%20my%20railgun-fripSide.lrc',
      },
      {
        name: '达拉崩吧',
        artist: '洛天依、言和',
        url: 'https://getmusic.ga/Music/%E8%BE%BE%E6%8B%89%E5%B4%A9%E5%90%A7-%E6%B4%9B%E5%A4%A9%E4%BE%9D.mp3',
        cover: 'https://s2.ax1x.com/2019/06/08/VByRI0.jpg',
        lrc: 'https://getmusic.ga/MusicLrc/%E8%BE%BE%E6%8B%89%E5%B4%A9%E5%90%A7-%E6%B4%9B%E5%A4%A9%E4%BE%9D%2C%E8%A8%80%E5%92%8C.lrc',
      }
    ]
});
