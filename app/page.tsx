import Gallery from "@/components/gallery";
import clsx from "clsx";
import localFont from "next/font/local";
import { Noto_Serif_JP } from "next/font/google";

import Image from "next/image";
import Container from "@/components/container";
import PageSection from "@/components/page-section";
import { Card } from "@/components/ui/card";

import { missions } from "@/contents/missions";
import FadeIn from "@/components/fade-in";
import SlideIn from "@/components/slide-in";

const silkSerif = localFont({
  src: "../fonts/Silk-Serif-Light-Italic.otf",
  weight: "400",
  display: "swap",
});

const simplo = localFont({
  src: "../fonts/Simplo-Regular.otf",
  weight: "400",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  weight: "400",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <>
      <div style={{ background: "url(/bg-all-reverse.jpg) no-repeat left bottom / cover" }}>
        <Gallery imagePaths={["/image-top-1.jpg", "/image-top-2.jpg"]} />
        <div className="inline-block p-4">
          <FadeIn delay={1000}><p className={clsx([silkSerif.className, 'hidden md:block text-4xl mb-4'])}>Empowering the future of medicine with comprehensive solutions for establishing clinics</p></FadeIn>
          <FadeIn delay={1000} className="md:hidden absolute right-2 top-[30vh] z-10"><p className={clsx([silkSerif.className, 'text-lg h-96'])} style={{writingMode: 'vertical-rl'}}>Empowering the future of medicine with comprehensive solutions for establishing clinics</p></FadeIn>
          <FadeIn delay={1500}>
            <p className={clsx([notoSerifJP.className, 'max-w-max ml-auto relative md:text-xl text-right pl-12 md:pl-40 before:w-12 md:before:w-36 before:block before:absolute before:left-0 before:top-4  md:before:top-1/2 before:h-[1px] before:bg-[#3b3b3b]'])}>クリニック開業の包括的サポートで医療の未来を切り拓く</p>
          </FadeIn>
        </div>
      </div>
      <PageSection style={{ background: "url(/bg-row-reverse.jpg) no-repeat left top / cover" }}>
        <div className="">
          <div className="md:flex bg-linear-to-r from-[#eeeee1] to-[#FFFFFF]">
            <div className="md:w-1/3 p-4 relative">
              <FadeIn className="h-52 md:h-auto">
                <Image src="/image-feature-1.png" fill alt="Image Row 1" className="object-contain h-full" />
              </FadeIn>
            </div>
            <div className="md:w-2/3 p-12">
              <FadeIn>
                <h2 className={clsx([silkSerif.className, 'text-5xl mb-4'])}>What we do.</h2>
              </FadeIn>
              <FadeIn>
                <p>
                  私たちは、クリニックの開業から運営・成長に至るまで、あらゆるプロセスをワンストップで支援する専門コンサルティング会社です。医療業界での長年にわたる実績と、豊富な金融機関とのネットワークを駆使し、スムーズな開業と安定的な経営を実現します。不動産の選定や医療機器の導入、スタッフ採用、マーケティング戦略、資金調達まで、多角的な視点で迅速かつ確実にサポートいたします
                </p>
              </FadeIn>
            </div>
          </div>
          <div className="md:flex flex-row-reverse bg-linear-to-r from-[#FFFFFF] to-[#eeeee1]">
            <div className="md:w-1/3 p-4 relative">
              <FadeIn className="h-52 md:h-auto">
                <Image src="/image-feature-2.jpg" fill alt="Image Row 1" className="object-cover h-full" />
              </FadeIn>
            </div>
            <div className="md:w-2/3 p-12">
              <FadeIn>
                <p>
                  私たちは、クリニックの開業から運営・成長に至るまで、あらゆるプロセスをワンストップで支援する専門コンサルティング会社です。医療業界での長年にわたる実績と、豊富な金融機関とのネットワークを駆使し、スムーズな開業と安定的な経営を実現します。不動産の選定や医療機器の導入、スタッフ採用、マーケティング戦略、資金調達まで、多角的な視点で迅速かつ確実にサポートいたします。さらに、将来的な事業拡大や新しい医療サービスの導入を見据え、常に最新の情報やノウハウを取り入れています。開業後のクリニックが長期的に繁栄し続けるために、経営改善や運営指導にも力を入れ、経営者の皆さまの負担を大幅に軽減する仕組みづくりを目指しています。
                </p>
              </FadeIn>
            </div>
          </div>
          <div className="md:flex bg-linear-to-r from-[#eeeee1] to-[#FFFFFF]">
            <div className="md:w-1/3 p-4 relative">
              <FadeIn className="h-52 md:h-auto">
                <Image src="/image-feature-3.jpg" fill alt="Image Row 1" className="object-cover h-full" />
              </FadeIn>
            </div>
            <div className="md:w-2/3 p-12">
              <FadeIn>
                <p>
                  株式会社ボーラボとして培ってきた独自の知見を活用し、医療業界が直面する多様な課題に対して最適解を提案いたします。また、銀行や投資家との連携を強化することで、資金繰りや財務戦略面においてもきめ細かなアドバイスを行い、柔軟な経営体制を整えられるよう多方面から支援を行います。
                </p>
                <div className="text-right"><Image src='/logo-silver.png' width={300} height={200} alt="Bow Labo" className="ml-auto" /></div>
              </FadeIn>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection className="bg-linear-to-r from-[#eeeee1] to-[#FFFFFF]">
        <div className="md:flex justify-center items-center">
          <FadeIn>
            <h2 className={clsx([silkSerif.className, 'text-5xl text-center'])}>Our Mission</h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className={clsx([notoSerifJP.className, 'relative pl-40 ml-8 before:w-36 before:block before:absolute before:left-0 before:top-1/2 before:h-[1px] before:bg-[#3b3b3b]'])}>私たちのミッション</p>
          </FadeIn>
        </div>
        <div className="flex gap-4 flex-wrap justify-center p-8">
          {missions.map((mission) => (
            <FadeIn key={mission.id} className="md:w-[30%]" delay={missions.indexOf(mission) * 200}>
              <Card className="p-8">
                <div className={clsx([silkSerif.className, 'text-5xl'])}>{mission.id}.</div>
                <h3 className={clsx([simplo.className, 'text-2xl text-[#d2c9a0]'])}>{mission.title}</h3>
                <p>{mission.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </PageSection>
    </>
  );
}
