async function scheduleHtmlProvider(
    //除函数名外都可编辑
    //以下为示例，您可以完全重写或在此基础上更改
    iframeContent = "", 
    frameContent = "", 
    dom = document
) {
    await loadTool("AIScheduleTools");
    // 使用它们的时候务必带上await，否则没有系统alert的时停效果
    await AIScheduleAlert("开始导入……\n完成后请手动修改开学时间和学期总周数\n如导入出错或有其他建议请联系QQ:369971458");
    // // Prompt的参数比较多，所以传了个对象，最后会返回用户输入的值
    // const userInput = await AISchedulePrompt({
    //     titleText: '提示', // 标题内容，字体比较大，超过10个字不给显示的喔，也可以不传就不显示
    //     tipText: '这是一条提示信息', // 提示信息，字体稍小，支持使用``达到换行效果，具体使用效果建议真机测试，也可以不传就不显示
    //     defaultText: '默认内容', // 文字输入框的默认内容，不传会显示版本号，所以空内容要传个''
    //     validator: value => { // 校验函数，如果结果不符预期就返回字符串，会显示在屏幕上，符合就返回false
    //       console.log(value)
    //       if (value === '1') return '这里的结果不可以是1'
    //       return false
    //   }})
    try{
        let table = dom.querySelector("#jsTbl_01").outerHTML;
        // console.info(table)
        return table;
    } catch (error){
        console.error(error)
        await AIScheduleAlert("页面错误, 请打开我的课表")
        return 'do not continue'
    }
}   