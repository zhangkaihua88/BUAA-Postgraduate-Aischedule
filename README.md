# 小爱课程表 北京航空航天大学-研究生应用管理平台-我的课表
<p align="center">
  <a href="https://github.com/zhangkaihua88" alt="开发者">
    <img src="https://img.shields.io/badge/开发者-幻华-blue?logo=github">
  </a>
  <a href="https://github.com/zhangkaihua88/BUAA-Postgraduate-Aischedule/" alt="version">
    <img src="https://img.shields.io/github/v/release/zhangkaihua88/BUAA-Postgraduate-Aischedule?label=ver.&logo=xiaomi">
  </a>
  <a href="https://github.com/zhangkaihua88/BUAA-Postgraduate-Aischedule/" alt="status">
    <img src="https://img.shields.io/badge/status-正式版-success?logo=xiaomi">
  </a>
  <!-- <a href="https://github.com/zhangkaihua88/BUAA-Postgraduate-Aischedule/" alt="使用人数">
    <img src="https://www.zkhweb.top/API/schedule/usage.SVG">
  </a> -->
</p>

这是小爱课程表北航研究生教务适配项目.

## 注意事项

- 默认开学时间为"2022.02.28", 使用时请检查开学时间是否正确.
- 默认学期总周数为"18", 使用时请检查是否正确.
- 开学时间和学期总周数由于无法从网页提取, 所以初步计划为每学期适配.

## 开发说明
- 使用新版的小爱课程表开发插件`Ver.3.X`进行开发
- 开发需要完善三个文件中的函数
  - `scheduleHtmlProvider`
  - `scheduleHtmlParser`
  - `scheduleTimer`
- 工作流程是通过`scheduleHtmlProvider`获取HTML中的信息给`scheduleHtmlParser`进行解析, `scheduleTimer`负责对时间等进行配置

## 更新日志
- Ver.3604(2022.03.08)
  - 优化信息提醒
  - 设置开学时间默认为"2022.02.28"
- Ver.3571(2022.03.06)
  - 适配研究生小爱课程表

## 参考
- [小爱课程表教程](https://open-schedule-prod.ai.xiaomi.com/docs/#/help)
- [小爱课程表北航本科适配项目](https://github.com/MeanZhang/buaa-ai-schedule)
