async function scheduleHtmlProvider(
    //除函数名外都可编辑
    iframeContent = "", 
    frameContent = "", 
    dom = document
) {
    // 使用它们的时候务必带上await，否则没有系统alert的时停效果
    
    await loadTool("AIScheduleTools");
    await AIScheduleAlert({
        titleText: '开始导入', // 标题内容，字体比较大，不传默认为提示
        contentText: '完成后请确认开学时间, 当前周数以及学期总周数', // 提示信息，字体稍小，支持使用``达到换行效果，具体使用效果建议真机测试
        confirmText: '确认', // 确认按钮文字，可不传默认为确认
      });
    try{
        console.log('start provider');
        let table = dom.querySelector("#jsTbl_01").outerHTML;
        // console.info(table)
        return table;
    } catch (error){
        console.error(error)
        await AIScheduleAlert("页面错误, 请打开我的课表")
        return 'do not continue'
    }
}   