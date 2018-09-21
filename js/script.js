function switchChannel(channelName){
    console.log('Tuning into channel', channelName);
    document.getElementById('Appbar').innerHTML= channelName;
    document.getElementById('Location').innerHTML='upgrading.never.helps';
    document.getElementById('Linkto').href='http://w3w.co/upgrading.never.helps';
    $('li').removeClass('selected');
    $('li:contains(' + channelName + ')').addClass('selected');
}

function changeStar(){
    $('#appbarstar').attr('src','http://ip.lfe.mw.tum.de/sections/star-o.png');
}

function changeStarAppbar(){
    $('#appbarstar').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');
}

function selectTab(tabId){
    console.log('Changing to Tab', tabId);
    $('button').removeClass('selected');
    $(tabId).addClass('selected');
}

function showEmojiBox(){
    $('#emojis').toggle();
}