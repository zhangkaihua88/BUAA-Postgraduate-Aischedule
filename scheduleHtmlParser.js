function scheduleHtmlParser(document) {
    //传入的参数为上一步函数获取到的html
    //可使用正则匹配
    //可使用解析dom匹配，工具内置了$，跟jquery使用方法一样，直接用就可以了，参考：https://juejin.im/post/5ea131f76fb9a03c8122d6b9
    
    /**
     * 提取课程周数
     * @param {string} str 包含周数的字符串，如`1-9,11`、`12,14`
     * @returns {Array<number>} 包含`str`中所有周数的数组
     */
    function getWeeks(str) {
        let weeks = [];
        str = str.split("周")[0];
        let weekArray = str.split(",");
        for (let i=0; i<weekArray.length; i++) {
          const begin = weekArray[i].split("-")[0];
          let end = weekArray[i].split("-")[1];
          if (!end) {
            end = begin;
          }
          for (let j = parseInt(begin); j <= parseInt(end); j++) {
            weeks.push(j);
          }
        }
        return weeks;
    }
    console.log('start scheduleHtmlParser');
    let results = {};
    // let lines = document.querySelectorAll("#jsTbl_01 > tbody > tr");
    let lines = $("#jsTbl_01 > tbody").find("tr");
    console.log(lines)
    // console.log(lines[0].innerText)

    for (let l = 1; l < lines.length; l++) {
        // 除了第一行外不是课程
        const linelessons = $(lines[l]).find("td");
        for (let day = 2; day < 9; day++) {
            // 从第二列开始为每天课程
            let boxlessons = linelessons[day].children;
            for (let i=0; i<boxlessons.length; i++){
                let lesson = $(boxlessons[i]).find("div");
                // let name = lesson[1].innerText;
                let name = lesson[1].children[0].data.slice(0, 49);
                // let position = lesson[2].innerText;
                let position = lesson[2].children.length>0?lesson[2].children[0].data.slice(0, 49):"";
                // let tmp = lesson[0].innerText ? lesson[0].innerText.match(/\(([^)]+)\)/) : null;
                let tmp = lesson[0].children.length>0 ? lesson[0].children[0].data.slice(0, 49).match(/\(([^)]+)\)/):null;

                let teacher = tmp ? tmp[1] : '';                
                let classday = day-1;

                // 获取 lesson[0] 内的所有 label 元素
                // const labels = lesson[0].querySelectorAll('label');
                // // 使用 forEach 遍历所有 label 元素并删除它们
                // labels.forEach(function(label) {
                //     label.remove();
                // });
                $(lesson[0]).find("label").each(function() {
                    $(this).remove();
                });

                
                let weeks = lesson[0].textContent?lesson[0].textContent.trim():"";
                // 以classID作为唯一标识符标识课程方便拆分
                let classID = name + position + teacher + classday + weeks;
                let sections = l;
                weeks = getWeeks(weeks);
                // 有则加节数, 无则创建课程
                if (results.hasOwnProperty(classID)){
                    if (!results[classID].sections.includes(sections)) {
                    results[classID].sections.push(sections);
                    }
                    
                } else { 
                    let lessoninfo = {};
                    lessoninfo.name = name;
                    lessoninfo.position = position;
                    lessoninfo.teacher = teacher;
                    lessoninfo.day = classday;
                    lessoninfo.weeks = weeks;
                    lessoninfo.sections = [sections];
                    results[classID] = lessoninfo;
                    
                }       
            }

        }
    }
    
    // 返回课程样式
    let courseInfos = [];
    for (var key in results) {
        courseInfos.push(results[key]);
    }
    console.log(courseInfos)
    return courseInfos
}