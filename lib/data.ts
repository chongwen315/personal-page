import React from "react";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
        title: "Bachelor's degree of Computer Science and Technology",
        location: "Sichuan Agricultural University",
        description:
            "20% of GPA in the first 20 days, joined the front-end director of multiple studios, developed computational thinking, good programming literacy and self-study ability, and in-depth study of professional courses outside of class.",
        icon: React.createElement(LuGraduationCap),
        date: "2022 Sep - 2026 June",
    },
    {
        title: "Frontend Intern",
        location: 'Meituan',
        description:
            "Participated in the iterative development of multiple b-end platforms of the team, and independently completed the development of multiple core pages of the internal quality inspection platform and attendance system. Assisted in the development of business components such as scoring tables and file uploads, and worked closely with the testing, back-end, product and design teams, contributing a total of 4,000+ lines of code.",
        icon: React.createElement(FaVuejs),
        date: "Aug 2024 - Nov 2024",
    }
]

export const experiencesDataZn = [
    {
        "title": "计算机科学与技术本科",
        "location": "四川农业大学",
        "description": "GPA前20天%，加入多个工作室的前端负责人，培养了计算思维，以及不错的编程素养和自学能力，以及对专业课程在课外的深入研究",
        icon: React.createElement(LuGraduationCap),
        "date": "2022年9月 - 2026年6月"
    },
    {
        "title": "前端实习生",
        "location": "美团",
        "description": `参与团队多个b端平台的迭代开发，独立完成内部质检平台与考勤系统的多个核心页面开发。协助开发打分表，文件上传等业务组件，并与测试、后端、产品及 设计团队密切对接，累计贡献4000+行代码。`,
        "icon": React.createElement(FaVuejs),
        "date": "2024年8月 - 2024年11月"
    }
]


export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "NextJS",
    "Vue2",
    "Vue3",
    "NodeJS",
    "Express",
    "socketIO",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "shadCN"
] 
