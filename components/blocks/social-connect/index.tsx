"use client";

import { Card } from "@/components/ui/card";
import Icon from "@/components/icon";

export default function SocialConnect() {
  const socialData = {
    name: "social-connect",
    label: "备注：《提示词学习》",
    icon: "RiTeamLine",
    title: "多种交流方式",
    description: "选择您喜欢的方式与我们保持联系，获取最新资讯和学习交流机会",
    items: [
      {
        title: "官方微信群",
        description: "加入我们的微信群，与其他学习者交流经验，分享心得",
        icon: "RiWechatLine",
        image: {
          src: "/contact-infos/中转群AI微信.jpg", // 替换为实际的公众号二维码图片
          alt: "微信群二维码"
        }
      },
      {
        title: "腾讯频道",
        description: "加入我们的腾讯频道，与其他学习者交流经验，分享心得",
        icon: "RiWechatLine",
        image: {
          src: "/contact-infos/腾讯频道-Prompt.jpg",
          alt: "腾讯频道二维码"
        }
      },
      {
        title: "公众号",
        description: "关注公众号，获取最新AI教程和行业动态",
        icon: "RiWechatLine",
        image: {
          src: "/contact-infos/GZH-QRcode.jpg",
          alt: "公众号二维码"
        }
      },
      {
        title: "个人微信",
        description: "添加个人微信，获得一对一指导和支持，拉群学习",
        icon: "RiWechatLine",
        image: {
          src: "/contact-infos/wechatQR.jpg",
          alt: "个人微信二维码"
        }
      }
    ]
  };

  return (
    <section id={socialData.name} className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-primary mb-4">
            <Icon name={socialData.icon} className="h-5 w-5" />
            <span className="text-2xl">{socialData.label}</span>
          </div>
          <h2 className="text-3xl font-semibold mb-4">{socialData.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {socialData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {socialData.items.map((item, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative p-4">
                <div className="max-w-[240px] mx-auto">
                  <div className="aspect-square relative">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-card">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name={item.icon} className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}




