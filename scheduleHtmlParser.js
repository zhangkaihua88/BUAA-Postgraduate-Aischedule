function scheduleHtmlParser(html) {
    //除函数名外都可编辑
    //传入的参数为上一步函数获取到的html
    //可使用正则匹配
    //可使用解析dom匹配，工具内置了$，跟jquery使用方法一样，直接用就可以了，参考：https://juejin.im/post/5ea131f76fb9a03c8122d6b9
    //以下为示例，您可以完全重写或在此基础上更改
    
    /** 课程信息 */
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
    let results = {};
    let lines = $("#jsTbl_01 > tbody").find("tr");

    for (let l = 1; l < lines.length; l++) {
        // 除了第一行外不是课程
        const linelessons = $(lines[l]).find("td");
        for (let day = 2; day < 9; day++) {
            // 从第二列开始为每天课程
            let boxlessons = linelessons[day].children;
            for (let i=0; i<boxlessons.length; i++){
                let lesson = $(boxlessons[i]).find("div");
                let name = lesson[1].children[0].data.slice(0, 49);
                let position = lesson[3].children.length>0?lesson[3].children[0].data.slice(0, 49):"";
                let teacher = lesson[2].children[0].data.slice(0, 49);
                let classday = day-1;
                let weeks = lesson[0].children[0].data;
                let classID = name + position + teacher + classday + weeks;
                let sections = l;
                weeks = getWeeks(weeks);

                if (results.hasOwnProperty(classID)){
                    results[classID].sections.push(sections);
                    
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
    
    
    let courseInfos = [];
    for (var key in results) {
        courseInfos.push(results[key]);
    }

    
    console.log(courseInfos)

    return courseInfos
}

