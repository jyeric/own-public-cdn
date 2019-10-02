const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    order: 'random',
    theme: '#e9e9e9',
    lrcType: 3,
    audio: [
      {
        name: '病名は愛だった',
        artist: 'Neru/鏡音リン/鏡音レン',
        url: 'https://music.163.com/song/media/outer/url?id=505474379.mp3',
        cover: 'https://i.loli.net/2019/06/07/5cf9abb8ca8ca95762.jpg',
        lrc: 'https://likecoding.tech/music/%E7%97%85%E5%90%8D%E3%81%AF%E6%84%9B%E3%81%A0%E3%81%A3%E3%81%9F.lrcc',
      },
      {
        name: '达拉崩吧',
        artist: '洛天依、言和',
        url: 'https://od.lk/s/NzNfMTQyMTA5ODBf/%E8%BE%BE%E6%8B%89%E5%B4%A9%E5%90%A7-%E6%B4%9B%E5%A4%A9%E4%BE%9D.mp3',
        cover: 'https://s2.ax1x.com/2019/06/08/VByRI0.jpg',
        lrc: 'https://likecoding.tech/music/%E8%BE%BE%E6%8B%89%E5%B4%A9%E5%90%A7-%E6%B4%9B%E5%A4%A9%E4%BE%9D,%E8%A8%80%E5%92%8C.lrc',
      },
      {
        name: '膜你抄',
        artist: 'Menci/24OI',
        url: 'https://music.163.com/song/media/outer/url?id=459434585.mp3',
        cover: 'https://ae01.alicdn.com/kf/H349ed76e5e5148e4b4602bc958695d7d5.png',
        lrc: 'https://likecoding.tech/music/%E8%86%9C%E4%BD%A0%E6%8A%84.lrc',
      }
    ]
});

const colorThief = new ColorThief();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        colorThief.getColorAsync(ap.list.audios[index].cover, function (color) {
            ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        });
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
    setTheme(index);
});
