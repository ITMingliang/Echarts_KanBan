/**
 * 初始化方法
 * @params cwidget 组件对象
 * @params vardata 取数定义中定义的变量，json格式：{'var1':'xxx'}
 * @params events 事件，用户在右边属性上设置的事件, json格式：{'evt1': function(){...}, 'evt2':function(){....}}
 * @params storagedata 组件自己需要存储的值，字符串格式
 */
function init(cwidget, vardata, events, storagedata) {
    var title = cwidget.getProperty("title");
    setProperty("title", title, cwidget);
    var titlewidth = cwidget.getProperty("titlewidth");
    setProperty("titlewidth", titlewidth, cwidget);
    var minwidth = cwidget.getProperty("minwidth");
    setProperty("minwidth", minwidth, cwidget);
    var minheight = cwidget.getProperty("minheight");
    setProperty("minheight", minheight, cwidget);
}

/**
 * 定义了自定义属性时，必须实现该方法，方法名为setProperty
 * 当在属性面板上修改属性后，会调用该方法
 * @param key  属性名
 * @param value  属性值
 * @param cwidget  组件对象
 * @returns
 */
function setProperty(key, value, cwidget) {
    var basedom = cwidget.basedom;
    if (key === 'title') {
        //修改标题
        $(basedom).find(".container-title-C").text(value || "标题内容");
    } else if (key === "titlewidth") {
        //修改标题宽度
        $(basedom).find(".container-title").css("width", parseInt(value) + "px");
        resize(cwidget);
    } else if (key === "minwidth") {
        var minwidth = parseInt(value);
        if (minwidth >= 240) {
            $(".container-01").css("min-width", value + "px");
        }
    } else if (key === "minheight") {
        var minheight = parseInt(value);
        if (minheight >= 240) {
            $(".container-01").css("min-height", value + "px");
        }
    }
}

/**
 * 刷新操作，数据改变时，调用该方法，重新渲染数据
 * @param cwidget 组件对象
 * @param vardata vardata 取数定义中定义的变量，json格式：{'var1':'xxx'}
 * @param storagedata  组件自己需要存储的值，字符串格式
 * @returns
 */
function refreshDatas(cwidget, vardata, storagedata) {
    var basedom = cwidget.basedom;
}


function resize(cwidget) {
    var basedom = cwidget.basedom;
    var twidth = cwidget.getProperty("titlewidth");
    var width = (basedom.offsetWidth - parseInt(twidth) - 50) / 2;

    $(basedom).find(".container-top-L-repeat").css("width", width + "px");
    $(basedom).find(".container-top-R-repeat").css("width", width + "px");
}
