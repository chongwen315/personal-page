"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        // <p>{t("desc")}</p> //这样一段话没法分段
        <div className="flex flex-col gap-2">
          <div>我是一个热爱学习、思考且富有韧性的人。</div>
          <div>
            在23年春，也就是大一下产生的选择前端开发的想法，一开始是因为想加入学校工作室，然后在前后端的选择中选择了自己更感兴趣的前端方向。在自学的过程中遇到了诸多困难，这些困难虽然会带给我很多困扰，但当我慢慢摸索最终将其解决的时候也会收获到成就感。
          </div>
          <div>
            在大二暑假的时候在自己的充分准备之后也是拿到了第一个实习的offer，在与工作团队共同奋斗的三个月中收获了许多，不仅仅是代码上的，还有与人交流以及和同事相处上的经验，也是为之后就业进入社会的铺垫
          </div>
          <div>
            时光飞逝，回顾这近一年半的时间，我发现支撑我走到现在的是对自我提升的热爱，在这份热爱中，也慢慢从中收获到了编程的兴趣，并期待掌握更多新时代的技术。
          </div>

          <div>
            目前，我在准备2025的第二段实习。同时在自己的掘金，语雀等账号上分享技术博客和个人经历。
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div>
            I am a person who loves to learn, think, and is resilient.</div>
          <div>
            In the spring of 2023, when I was a freshman, I came up with the idea of ​​choosing front-end development. At first, it was because I wanted to join the school studio, and then I chose the front-end direction that I was more interested in among the front-end and back-end choices. I encountered many difficulties in the process of self-study. Although these difficulties caused me a lot of trouble, I also gained a sense of accomplishment when I slowly explored and finally solved them.
          </div>
          <div>
            During the summer vacation of my sophomore year, I got my first internship offer after being fully prepared. In the three months of working together with the work team, I gained a lot, not only in terms of code, but also in communicating with people and The experience of getting along with colleagues also pave the way for future employment and entry into society.

          </div>
          <div>
            Time flies, and looking back on the past year and a half, I find that what has supported me till now is my love for self-improvement. In this love, I have gradually gained an interest in programming, and I look forward to mastering more new eras. technology.
          </div>

          <div>
            Currently, I am preparing for my second internship in 2025. At the same time, he shares technical blogs and personal experiences on his own Nuggets, Yuque and other accounts.
          </div>
        </div>
      )}
    </motion.section>
  )
}
