function ajax (params) {
    if(typeof params !='object'){
        console.log('params error !check params!!')
        return ;
    }
    if(params.url==undefined){
        console.log('url is must be required');
        return;
    }
    //参数初始化；
    var type=params.type||'get';
    var dataType=params.dataType||'text';
    var data=params.data||'';
    if(typeof params.data=='object'){
        var tr="";
        for(let i in data){
                tr+=`${i}=${data[i]}&`;
        }
        data=tr.slice(0,-1);
    }
    var xmlobj=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');
    xmlobj.responseType=dataType;
    xmlobj.onload=function () {
        params.success(xmlobj.response)
    };
    var async;
    if(params.async=='undefined'){
        async=false;
    }else{
        async=params.async;
    }
    if(type=='get'){
        xmlobj.open('get',url+"?"+data,async);
        xmlobj.send();
    }else if(type=='post'){
        xmlobj.open('post',async);
        xmlobj.setRequestHeader(("Content-type", "application/x-www-form-urlencoded"));
        xmlobj.send(data);
    }
}
ajax({
    url:'a.php',
    type:'get',
    dataType:'json',
    data:{name:'zhangsan',age:'12'},
    success:function (e) {
        div.innerHTML=e;
    },
    async:true
});