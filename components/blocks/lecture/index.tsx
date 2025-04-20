"use client";

import { Lecture as LectureType } from "@/types/blocks/lecture";
import { Card } from "@/components/ui/card";
import Markdown from "@/components/markdown";
import { useEffect, useState } from "react";
import { RotateCw, RefreshCw } from "lucide-react"; // 添加 RefreshCw 图标
import { Button } from "@/components/ui/button"; // 确保导入 Button 组件

// HTML 检测函数
const isHTML = (content: string) => {
  return /<[a-z][\s\S]*>/i.test(content) || 
         content.includes('<!DOCTYPE html>') ||
         content.includes('<html');
};

// 横屏检测 Hook
const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(true);
  const [needsRefresh, setNeedsRefresh] = useState(false);
  const [prevOrientation, setPrevOrientation] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOrientation = () => {
      if (window.innerWidth <= 768) { // 移动设备
        const currentIsLandscape = window.orientation === 90 || window.orientation === -90;
        setIsLandscape(currentIsLandscape);
        
        // 检查是否需要刷新
        if (prevOrientation !== null && prevOrientation !== currentIsLandscape) {
          setNeedsRefresh(true);
        }
        setPrevOrientation(currentIsLandscape);
      } else {
        setIsLandscape(true);
      }
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, [prevOrientation]);

  return { isLandscape, needsRefresh };
};

// 渲染内容组件
const ContentRenderer = ({ content }: { content: string }) => {
  const { isLandscape, needsRefresh } = useOrientation();

  if (isHTML(content)) {
    // 移动端非横屏提示
    if (!isLandscape) {
      return (
        <div className="flex flex-col items-center justify-center p-8 bg-muted rounded-lg text-center space-y-4">
          <RotateCw className="h-12 w-12 animate-spin-slow text-primary" />
          <p className="text-lg font-medium">请将设备横置以获得最佳观看体验</p>
          <p className="text-sm text-muted-foreground">横屏模式下可以查看完整内容</p>
          <Button 
            onClick={() => window.location.reload()}
            className="mt-4"
          >
            点击刷新
          </Button>
        </div>
      );
    }

    // 需要刷新提示
    if (needsRefresh) {
      return (
        <div className="flex flex-col items-center justify-center p-8 bg-muted rounded-lg text-center space-y-4">
          <RefreshCw className="h-12 w-12 text-primary" />
          <p className="text-lg font-medium">请刷新页面以获得最佳观看体验</p>
          <Button 
            onClick={() => window.location.reload()}
            className="mt-4"
          >
            点击刷新
          </Button>
        </div>
      );
    }

    return (
      <div className="w-full overflow-hidden rounded-lg shadow-md">
        <div className="relative mx-auto" style={{ 
          paddingTop: '56.25%',
          maxWidth: '1200px' 
        }}> {/* 16:9 比例，并设置最大宽度且居中 */}
          <iframe
            srcDoc={content}
            className="absolute top-0 left-0 w-full h-full border-none"
            sandbox="allow-scripts allow-same-origin allow-forms"
            loading="lazy"
            style={{
              backgroundColor: 'white',
              height: window.innerWidth <= 768 ? '100vh' : '100%' // 移动端使用视口高度
            }}
          />
        </div>
      </div>
    );
  }
  
  return <Markdown content={content} />;
};

export default function Lecture({ lecture }: { lecture: LectureType }) {
  if (lecture.disabled) {
    return null;
  }

  return (
    <section className="w-full py-16">
      <div className="container max-w-[1400px]"> {/* 增加容器最大宽度 */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">{lecture.title}</h1>
          {lecture.description && (
            <p className="text-lg text-muted-foreground">{lecture.description}</p>
          )}
        </div>

        <div className="mx-auto">  {/* 移除 max-w-4xl 限制 */}
          {lecture.sections
            .sort((a, b) => a.order - b.order)
            .map((section, index) => (
              <Card key={index} className="mb-8 p-6">
                <h2 className="mb-4 text-2xl font-semibold">{section.title}</h2>
                <ContentRenderer content={section.content} />
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}




