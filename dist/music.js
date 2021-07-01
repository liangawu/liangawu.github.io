const ap = new APlayer({
    container: document.getElementById('aplayer'),
    //fixed: false,
    autoplay: false,
	listFolded: false,//列表默认折叠
    listMaxHeight: 90,//列表最大高度
    audio: [
	{
        name: "四季予你",
        artist: '程响',
        url: 'http://mp.333ttt.com/mp3music/159747353.mp3',
        cover: 'http://lc-7VDt0zMW.cn-n1.lcfile.com/920c60ec63f92fb9e8e5.png/%E7%A8%8B%E5%93%8D.png',
		theme: '#ebd0c2'
      },
	  {
        name: "紅蓮華 (THE FIRST TAKE Studio Ver.)",
        artist: 'LiSA',
        url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_156409300&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
        cover: 'http://lc-7VDt0zMW.cn-n1.lcfile.com/3c4b860fbc9e78ec6d89.png/Lisa.png',
		theme: '#46718b'
      },
	   {
        name: "坠",
        artist: '添儿呗',
        url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_143873609&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
        cover: 'http://lc-7VDt0zMW.cn-n1.lcfile.com/e3d3e91094f763774e7f.png/%E5%9D%A0song.png',
		theme: '#ebd0c2'
      },
      {
        name: '你瞒我瞒',
        artist: '陈柏宇',
        url: 'http://mp4-333ttt.qqxzb-img.com/2015/1/04/10/97101122182.mp3',
        cover: 'http://lc-7VDt0zMW.cn-n1.lcfile.com/9a0cb0875355571dc1da.png/%E9%99%88%E6%9F%8F%E5%AE%87.png',
		theme: '#46718b'
      }
    ]
});
/*const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,//列表默认折叠
    listMaxHeight: 90,//列表最大高度
    //lrcType: 3, //此为歌词格式，没有歌词可以直接删掉这一行
    audio: [
        {
            name: '你瞒我瞒',
            artist: '陈柏宇',
            url: 'http://lc-7VDt0zMW.cn-n1.lcfile.com/b27d1b1c0b3fb1b238d3.mp3/%E9%99%88%E6%9F%8F%E5%AE%87%20-%20%E4%BD%A0%E7%9E%92%E6%88%91%E7%9E%92.mp3',
            cover: 'http://lc-7VDt0zMW.cn-n1.lcfile.com/9a0cb0875355571dc1da.png/%E9%99%88%E6%9F%8F%E5%AE%87.png',
            //lrc: '',
            theme: '#ebd0c2'
        },
        {
            name: '四季予你',
            artist: '程响',
            url: 'http://lc-7VDt0zMW.cn-n1.lcfile.com/42228a2cb4852e7c57da.mp3/%E7%A8%8B%E5%93%8D%20-%20%E5%9B%9B%E5%AD%A3%E4%BA%88%E4%BD%A0.mp3',
            cover: 'http://lc-7VDt0zMW.cn-n1.lcfile.com/920c60ec63f92fb9e8e5.png/%E7%A8%8B%E5%93%8D.png',
            //lrc: '',
            theme: '#46718b'
        }
    ]
});*/
//设置播放器样式