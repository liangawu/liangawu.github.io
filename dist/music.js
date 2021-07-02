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
        url: 'https://sharefs.ali.kugou.com/202107021323/a06a486d3163a8f12a7d7e687570dece/KGTX/CLTX001/d3ed05ada906113520be598e784c038e.mp3',
        cover: 'https://i.loli.net/2021/07/02/VqcxYifK7ulCSpw.jpg',
		theme: '#ebd0c2'
      },
	  {
        name: "紅蓮華 (THE FIRST TAKE Studio Ver.)",
        artist: 'LiSA',
        url: 'https://sharefs.ali.kugou.com/202107021324/fe88c804ec7df047c1e5373688b09865/G159/M0A/00/0D/f5QEAFy9LYSAFvRfADme8sxJysc695.mp3',
        cover: 'https://i.loli.net/2021/07/02/8rUqTXK2l3SIbLc.jpg',
		theme: '#46718b'
      },
	   {
        name: "坠",
        artist: '添儿呗',
        url: 'https://sharefs.ali.kugou.com/202107021325/3226e26dbe0c962c60630a4f49bbeaa6/G226/M04/14/17/gocBAF75az-Ac0WtADT3wRabL7o158.mp3',
        cover: 'https://i.loli.net/2021/07/02/pEucMC5t4lVUzTb.jpg',
		theme: '#ebd0c2'
      },
      {
        name: '你瞒我瞒',
        artist: '陈柏宇',
        url: 'https://sharefs.ali.kugou.com/202107021327/5cb8bd41baae1a9a20423208c0cb988e/KGTX/CLTX001/69b1328c3bd93c9405c92eb759299a0a.mp3',
        cover: 'https://i.loli.net/2021/07/02/dwRFjhWLrCm8kHc.jpg',
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