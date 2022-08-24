 async function scheduleTimer({
    providerRes,
    parserRes
} = {}) {
    // 总周数默认为秋季19周
    let totalWeek = 19;
    // 开学时间以2022.08.29开学
    let startSemester = new Date('2022-08-29');

    var sections = [
        { "section": 1, "startTime": "08:00", "endTime": "08:45" },
        { "section": 2, "startTime": "08:50", "endTime": "09:35" },
        { "section": 3, "startTime": "09:50", "endTime": "10:35" },
        { "section": 4, "startTime": "10:40", "endTime": "11:25" },
        { "section": 5, "startTime": "11:30", "endTime": "12:15" },
        { "section": 6, "startTime": "14:00", "endTime": "14:45" },
        { "section": 7, "startTime": "14:50", "endTime": "15:35" },
        { "section": 8, "startTime": "15:50", "endTime": "16:35" },
        { "section": 9, "startTime": "16:40", "endTime": "17:25" },
        { "section": 10, "startTime": "17:30", "endTime": "18:15" },
        { "section": 11, "startTime": "19:00", "endTime": "19:45" },
        { "section": 12, "startTime": "19:50", "endTime": "20:35" },
        { "section": 13, "startTime": "20:40", "endTime": "21:25" },
        { "section": 14, "startTime": "21:30", "endTime": "22:15" },
    ]
    return {
        totalWeek: totalWeek, // 总周数：[1, 30]之间的整数
        startSemester: startSemester.getTime().toString(), // 开学时间：时间戳，13位长度字符串，推荐用代码生成
        startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
        showWeekend: true, // 是否显示周末
        forenoon: 5, // 上午课程节数：[1, 10]之间的整数
        afternoon: 5, // 下午课程节数：[0, 10]之间的整数
        night: 4, // 晚间课程节数：[0, 10]之间的整数
        sections: sections, // 课程时间表，注意：总长度要和上边配置的节数加和对齐
    };
}