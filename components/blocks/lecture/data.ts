import { Lecture } from "@/types/blocks/lecture";
import fs from 'fs';
import path from 'path';

// 读取 HTML 文件内容
const htmlContent1 = fs.readFileSync(
  path.join(process.cwd(), 'components/blocks/lecture/index1.html'),
  'utf-8'
);

export const lectureData: Lecture = {
  title: "AI提示词课",
  description: "浅学一下AI提示词怎么用",
  sections: [
    {
      title: "第一章：提示词工程新手训练营",
      // 直接将 HTML 内容嵌入到 content 中
      content: `
      
${htmlContent1}

      `,
      order: 1
    },
    {
      title: "第二章：Magic your power",
      // 直接将 HTML 内容嵌入到 content 中
      content: `
      
The magic you are looking for is in the work you are avoiding.

      `,
      order: 2
    }
  ]
};




