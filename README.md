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

- You can try jules, really awesome
- Set your environment variables
- 复制到开发和生产环境
- 修改环境变量，`.env.development`
 
```bash
cp .env.example .env.development
cp .env.example .env.production
```

- Set your theme in `app/theme.css`

[shadcn-ui-theme-generator](https://zippystarter.com/tools/shadcn-ui-theme-generator)

- Set your landing page content in `i18n/pages/landing`，这里就可以修改网页对应的落地内容，都已经用json格式在landing里面设置好了。

```Prompt
参考 @落地页(目标网页@https://aiwallpaper.shop/) 这个网页的内容，帮我修改这个landing落地页的json，以xxxxx，yyyyy为关键词，修改文案，优先修改英文的，如果有需要也修改中文的。
```

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
