import Branding from "@/components/blocks/branding";
import CTA from "@/components/blocks/cta";
import FAQ from "@/components/blocks/faq";
import Feature from "@/components/blocks/feature";
import Feature1 from "@/components/blocks/feature1";
import Feature2 from "@/components/blocks/feature2";
import Feature3 from "@/components/blocks/feature3";
import Hero from "@/components/blocks/hero";
import Lecture from "@/components/blocks/lecture";
import { lectureData } from "@/components/blocks/lecture/data";
import Pricing from "@/components/blocks/pricing";
import Showcase from "@/components/blocks/showcase";
import Stats from "@/components/blocks/stats";
import Testimonial from "@/components/blocks/testimonial";
import { getLandingPage } from "@/services/page";
import SocialConnect from "@/components/blocks/social-connect";
import Generator from "@/components/generator";


export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  let canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}`;

  if (locale !== "en") {
    canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}`;
  }

  return {
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function LandingPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const page = await getLandingPage(locale);

  return (
    <>
      {page.hero && <Hero hero={page.hero} />}
      <Generator />
      <Lecture lecture={lectureData} /> {/* 这里是示例数据，之后你可以替换成 Claude 生成的实际内容 */}
      <SocialConnect />
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
  );
}
