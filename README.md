# AIWINWAY Template One

AIWINWAY SaaS Startups in hours. Thanks Adoubi for sharing this wonderful template.

![preview](preview.png)

## Quick Start 

local repo name AIWallpaper_NoPorkbun

1. Clone the repository

```bash
git clone https://github.com/Tewboo/AIwinway-Template-One.git
```

2. Install dependencies

```bash
pnpm install
```

3. Run the development server

```bash
pnpm dev
```

4. Remove remote Template One

```bash
git remote remove origin
```

## Customize

### 配置env

- You can try jules, really awesome
- Set your environment variables
- 复制到开发和生产环境
- 修改环境变量，`.env.development`
 
```bash
cp .env.example .env.development
cp .env.example .env.production
```

### 修改theme

- Set your theme in `app/theme.css`

[shadcn-ui-theme-generator](https://zippystarter.com/tools/shadcn-ui-theme-generator)

### 修改landing page

- Set your landing page content in `i18n/pages/landing`，这里就可以修改网页对应的落地内容，都已经用json格式在landing里面设置好了。

```Prompt
参考 @落地页(目标网页@https://aiwallpaper.shop/) 这个网页的内容，帮我修改这个landing落地页的json，以xxxxx，yyyyy为关键词，修改文案，优先修改英文的，如果有需要也修改中文的。
```

### 修改首页内容

- 修改主页内容的首屏部分，可以去这里操作，`components\blocks\hero\index.tsx`

- 调试修改的时候，先注释掉暂时不需要的部分，`app\[locale]\(default)\page.tsx`

> 暂时已经注释了不需要的部分

```
    <>
      {page.hero && <Hero hero={page.hero} />}
      {/* {page.branding && <Branding section={page.branding} />}
      {page.introduce && <Feature1 section={page.introduce} />}
      {page.benefit && <Feature2 section={page.benefit} />}
      {page.usage && <Feature3 section={page.usage} />}
      {page.feature && <Feature section={page.feature} />}
      {page.showcase && <Showcase section={page.showcase} />}
      {page.stats && <Stats section={page.stats} />}
      {page.pricing && <Pricing pricing={page.pricing} />}
      {page.testimonial && <Testimonial section={page.testimonial} />}
      {page.faq && <FAQ section={page.faq} />}
      {page.cta && <CTA section={page.cta} />} */}
    </>
```

#### 修改faq

```Prompt
修改 faq，针对我的项目 ai xxxx xxxx 写一些问题。
```

#### 修改cta

```Prompt
再改一下 cta。
```

#### 适当隐藏额内容

`i18n\pages\landing\en.json`
`i18n\pages\landing\zh.json`

testimonial 用户评价
showcase 案例
stats 数据显示
对应的en.json，zh.json里面，"disabled": true即可

### 其他页面改修

- 修改若干细节，匹配上自己项目:
  - Logo => `public\logo.png`
  - Favicon => `public\favicon.ico` 直接把png的修改后缀名就行
  - 品牌名 => `i18n\pages\landing\en.json` brand title
  - Footer => `i18n\pages\landing\en.json` brand logo

- Set your i18n messages in `i18n/messages`
  - 批量修改各种messages里面对应的内容符合当前项目

- 协议和条款的修改
  - 修改网站协议，`app\(legal)\privacy-policy\page.mdx`
  - 修改网站条款，`app\(legal)\terms-of-service\page.mdx`

```Prompt
update privacy-policy according to landing page content @en.json with brand name "AI XXXXX", domain "aixxxxx.com", contact email is "jessejunjing@163.com"

update terms-of-service according to landing page content @en.json with brand name "AI XXXXX", domain "aixxxxx.com", contact email is "jessejunjing@163.com"
```

- 修改faq，`i18n\pages\landing\en.json`，`i18n\pages\landing\zh.json`，对用户友好，对搜索殷勤友好

- 修改cta，让用户更容易下单

- 用户评价testimonial，阔以设置"disabled"：true关闭评价

- stats，数据阔以先隐藏掉

- 图标选择，`https://react-icons.github.io/react-icons/icons/ri`

- 生成组件之后，依次放入到components之后，然后放入到landing page.tsx，每一个组件都是一个单独的模块，可以做好了之后，放到需要的地方去

```Prompt
[截图]
帮我生成一个这样的组件，单独放到一个模块并导出，我稍后会加入到Layout
```

- 通过api来设置ai功能，`app\api\demo\gen-image\route.ts`，这里默认就是创建route.ts

- 通过debug来调试，`debug\apitest.http`，频繁使用这里进行调试，需要安装 sendhttp 插件

- types文件夹设置保存数据的TypeScript的验证，比如一个数据表wallpaper，有一些字段，就要去types里面创建wallpaper.d.ts来设置严格验证

- Models里面设置数据库的功能，创建对应的名称，可以参考示例

- Vercel不支持保存到本地图片，只能搞网络云存储

- 配置Stripe，尝试使用测试卡stripe test card来解决，可以使用沙河

### 图标库使用

https://react-icons.github.io/react-icons/icons/ri/

![20250623084316](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250623084316.png)

### 创建数据库

注册Supabase

![20250616113231](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616113231.png)

![20250616122429](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616122429.png)

Supabase => Project Settings => DataAPI

这个图片是个郭先生的对话，等待缓存删除，cdn直接释放，回头关注下，我在git上面已经删除了。测试完成后，可以删除该图片
![20250616135814](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616135814.png)

![20250616140750](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616140750.png)

![20250616141100](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616141100.png)

![20250411124754](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250411124754.png)

![20250411124828](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250411124828.png)

```
# Set your Supabase URL and SERVICE_ROLE_KEY，ANON_KEY可以不填(这是处理前端的)

SUPABASE_URL = ""
SUPABASE_ANON_KEY = ""
SUPABASE_SERVICE_ROLE_KEY = ""
```

![20250616141824](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616141824.png)

![20250616142837](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616142837.png)

- SQL Editor 粘贴插入数据库，`data\install.sql`
- 进入Table Editor 查看是否数据库链接成功

### 登录鉴权

> 结合实际情况做登录Oauth，本地和线上需要两套，就是随机数而已

`openssl rand --base64 32`
AUTH_SECRET = "手动生成的一段随机数"

- Github 登录
  - Setting - Developing Setting - Oauth app
  - http://localhost:3000/api/auth/callback/github
  - https://xxxxxxxx.com/api/auth/callback/github

![20250411125341](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250411125341.png)

![20250616151928](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616151928.png)

记得这里的Authorization callback URL要注意HTTP还是HTTPS

等待删除缓存，这里的我已经删除了，这里的github的client id应该没有了；
![20250616152058](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616152058.png)

![20250616152843](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616152843.png)

```
# Github Auth
# https://authjs.dev/getting-started/providers/github
AUTH_GITHUB_ID = "xxxxxxxxxxxxxxxxx"
AUTH_GITHUB_SECRET = "xxxxxxxxxxxxxxxxx"
NEXT_PUBLIC_AUTH_GITHUB_ENABLED = "true"
```

### 配置管理员

登录成功后可以通过路径`localhost:3000/admin`，加上admin来进入后台，默认是No access

设置Admin邮箱后可以进入

```
ADMIN_EMAILS = ""
```

![20250616155818](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616155818.png)

### 生产环境

- 当上面都完成后，按照需要可以再去创建一个github的prod版本，放入到`.env.production` 中，然后将自己的域名配置好之后，导入环境变量。
- 如果之前导入过development的env，记得它这边不会默认覆盖，所以要先删除已经导入的环境变量然后再导入prod的env。

### 配置CloudFlare

- 配置域名，可以尝试下子域名确实可以无限创建。
- 然后cloudflare也可以通过自动配置DNS。

### 关键词密度

- 调整关键词密度
```Prompt
帮我修改落地页内容，提升一下 ai xxxxxx generator 关键词的密度，
为了有更好的 seo 效果等等等等
```

### 站点地图（改成当前域名的）

```
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tewboo.my/</loc>
    <lastmod>2025-04-11T10:00:00+00:00</lastmod>
  </url>
</urlset>
```

### 谷歌分析监控

GA

https://analytics.google.com/

![20250616181943](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616181943.png)

![20250616182039](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616182039.png)

![20250616182050](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616182050.png)

![20250616182107](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616182107.png)

![20250616182222](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616182222.png)

![20250616182210](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616182210.png)

![20250616182305](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616182305.png)

![20250616182312](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616182312.png)

![20250616182424](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616182424.png)

OpenPanel 收费

https://dashboard.openpanel.dev/

![20250616182852](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616182852.png)

![20250616182918](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616182918.png)

GSC

用来监控搜索流量

![20250616184344](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616184344.png)

![20250616190758](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250616190758.png)

```
填写谷歌统计分析的ID，想上统计就要填上
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = ""
这个也是一种统计，基于实际情况
NEXT_PUBLIC_OPENPANEL_CLIENT_ID = ""
```

![20250411153958](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250411153958.png)

![20250411154417](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250411154417.png)

### Strip支付

STRIPE_PUBLIC_KEY = ""
STRIPE_PRIVATE_KEY = ""
STRIPE_WEBHOOK_SECRET = ""

### 隐藏不需要的按钮

结合实际情况，可以选择是否注释登录、主题以及多语言，将true改为false即可，`i18n\pages\landing`的zh和en的json记得都要调整

```
    "buttons": [
      {
        "title": "Start Learning",
        "url": "/#pricing",
        "target": "_self",
        "variant": "link",
        "icon": "RiArrowRightUpLine"
      }
    ],
    "show_sign": true,
    "show_theme": true,
    "show_locale": true
  },
```

### 新增业务功能

#### 新增组件

components 组件名称 index.tsx
在这个空文件里面输入提示词

```Prompt
@截图
帮我生成一个新的组件
```

LandingPage页面导入内容，然后在Hero块添加

组件如果不居中，就适当调整一下

#### 新增对应业务的案例展示内容

components 组件名称 比如一个展示Gallery index.tsx

```prompt
@截图
参考这个组件帮我实现一下
```

比如这里就是一个页面生成的画廊展示，那么这里就会出现一个单独的组件，还是需要引用到Hero页面，然后这里面一般也会提供示例，我们要用示例去尝试一下，看是否能够调用成功。
接着就是放到Hero页面的时候，是不是需要传值进去呢，如果需要，就传一下比如items等，具体要查看数据结构。

#### 获取套壳api的示例

结合你需要用到的api套壳的对应api示例，添加到你的页面内容中：
1，申请对应的api tokens
2，设置env环境变量到.env.development中，稍后可以在页面上调用
3，结合api套壳选择要用的模型，确定模型名称
4，在套壳api平台用ui界面调试好效果
5，参考模型给的示例，在app、api的接口下创建接口文件夹，记得下面要用route.ts文件
6，写好请求类型
```code
import { respData, respErr} from "@/lib/resp";

export async function POST(req: Requesst) {
  try {
    const { description } = await req.json();

    const prompt = `generate a xxxxx with the following description: ${description}`;

    return respData({
      prompt: prompt,
    });

  } catch (e) {
    console.log("generate xxxx failed:", e);
    return respErr("generate xxxx failed");
  }
}
```

#### 调试接口apitest.http

debug文件夹下面的apitest.http文件

> gen xxxx
POST {{baseUrl}}/api/demo/gen-image
Content-Type: application/json
Authorization: Bearer {{apiKey}}

{
  "description": "a beautiful girl running with 2 hippos
}

#### 存储图片推荐存储到云端，可以先参考图片

> 最好使用云存储，不过也可以使用本的url方式，但是有些服务不能访问本地图片

如果是本地url就是
```code

const url = `${process.env.NEXT_PUBLIC_WEB_URL}/${filename};
```

![20250623215631](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250623215631.png)

![20250623215713](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250623215713.png)

![20250623215726](https://cdn.jsdelivr.net/gh/jun-jing/MultiPlat_PicGallery@main/MultiPlat/PicGallery/20250623215726.png)

#### 表单将输入框的内容传给接口

找到components的文件夹，对应的组件文件夹下面，在index.tsx里面做一些连接，视频在32分钟左右查看，如果不记得了就分析下，研究下。



#### 其他细节内容

把api套壳代码贴过来之后，可以通过warnings.length等来判断是否有warnings，没有就通过，还可以用batch = getUuid()来获取一个随机数，其实就是去参考api 第三方的示例，然后就是`参考艾逗笔的第二个视频，有不少细节，参考下24分钟开始`，有些需要的包，自己去查看AI，然后分析是第三方的包，还是node js本地的。返回的内容直接通过参考response的响应来分析使用就行。

https://www.bilibili.com/video/BV1v1KnesEbg/?spm_id_from=333.788.player.player_end_recommend&vd_source=bfcbe877ccf366715be6b9996153e788





## Deploy(TODOing)

- Deploy to Vercel

[![Steps To Deploy with Vercel](https://vercel.com/button)]

- Deploy to Cloudflare

1. Customize your environment variables

```bash
cp .env.example .env.production
cp wrangler.toml.example wrangler.toml
```

edit your environment variables in `.env.production`

and put all the environment variables under `[vars]` in `wrangler.toml`

2. Deploy

```bash
npm run cf:deploy
```

## Community

- [AIWINWAY](https://aiwinway.com)
- [Documentation](https://docs.aiwinway.com)
- [Discord](https://discord.gg/)

## License

- [AIWINWAY AI SaaS Boilerplate License Agreement](LICENSE)
