const ap = new APlayer({
    container: document.getElementById('aplayer'),
    //fixed: false,
    autoplay: true,
	listFolded: false,//列表默认折叠
    listMaxHeight: 90,//列表最大高度
    audio: [
	{
        name: '回头看别回头走',
        artist: '于东然',
        url: 'http://lc-sWOcjNdz.cn-e1.lcfile.com/KuXvwLcvSHh99wBEBxIFB66jnJzbrrmB/%E4%BA%8E%E5%86%AC%E7%84%B6%20-%20%E5%9B%9E%E5%A4%B4%E7%9C%8B%E5%88%AB%E5%9B%9E%E5%A4%B4%E8%B5%B0.mp3',
        cover: 'http://lc-sWOcjNdz.cn-e1.lcfile.com/DfKOXXvzSgsX88tF8Sucgdl6MFXEnKRr/%E5%9B%9E%E5%A4%B4%E7%9C%8B%E5%88%AB%E5%9B%9E%E5%A4%B4%E8%B5%B0.png',
		theme: '#46718b'
      },
	{
        name: "你不明白",
        artist: 'joysaaaa',
        url: 'http://lc-sWOcjNdz.cn-e1.lcfile.com/VRosDkLWG6eDRqqBCd7kaPEAc4DOt0t2/joysaaaa%20-%20%E4%BD%A0%E4%B8%8D%E6%98%8E%E7%99%BD.mp3',
        cover: 'https://ftp.bmp.ovh/imgs/2021/07/3558bf1caf79ead8.jpg',
		theme: '#ebd0c2'
      },
	{
        name: "后劲",
        artist: '覆予',
        url: 'http://lc-sWOcjNdz.cn-e1.lcfile.com/sJ8g4Eg8BSklaXOc0jMwfxyGj5J79cFF/%E8%A6%86%E4%BA%88%20_%20%E5%B1%B1%E6%AD%A2%E5%B7%9D%E8%A1%8C%20-%20%E5%90%8E%E5%8A%B2%20%28%E5%90%89%E4%BB%96%E7%89%88%29.mp3',
        cover: 'https://ftp.bmp.ovh/imgs/2021/07/f014b4b9abcec60a.jpg',
		theme: '#ebd0c2'
      },
	/*
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
	  */
	   {
        name: "坠",
        artist: '添儿呗',
        url: 'http://lc-sWOcjNdz.cn-e1.lcfile.com/QyLm5fxpYp4WNldCntDYQD3cJ2KHkuRQ/%E6%B7%BB%E5%84%BF%E5%91%97%20-%20%E5%9D%A0.mp3',
        cover: 'https://i.loli.net/2021/07/02/pEucMC5t4lVUzTb.jpg',
		theme: '#ebd0c2'
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