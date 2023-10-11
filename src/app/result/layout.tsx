import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Realia | Result',
  description: 'In a rapidly evolving contemporary context rife with falsehoods and fake news, REALIA\'23 aims to uncover and present the truth and facts. The Darul Huda U.G. Arts Fest will play a pivotal role in enhancing the academic progress of students across various fields of study and academic activities.',
  keywords: ['realia', 'realia.live', 'asas', 'dhiu', 
  'darul huda', 'dhiu arts fest',
   'dhiu rabee fest', 'rabee fest dhiu', 'realia23'
    , 'sibaq' , 'result portal realia' , 'results realia']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
