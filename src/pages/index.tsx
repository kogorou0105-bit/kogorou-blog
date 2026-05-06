import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const featuredCards = [
  {
    title: 'React 渲染链路',
    meta: 'Render Pipeline',
    description: '从一次状态更新开始，拆开 React 如何调度、计算 UI，并最终提交到屏幕。',
    to: '/blog/react-rendering-pipeline',
  },
  {
    title: 'CSS 渲染性能',
    meta: 'Browser Runtime',
    description: '把“动画用 transform”这类经验，放回浏览器渲染流水线里重新理解。',
    to: '/blog/css-rendering-performance',
  },
  {
    title: 'TypeScript 状态建模',
    meta: 'Type Modeling',
    description: '用类型表达页面状态的互斥关系，让复杂前端逻辑更早暴露错误。',
    to: '/blog/typescript-domain-modeling',
  },
];

const signals = [
  {
    label: '方向',
    value: 'Frontend Systems',
  },
  {
    label: '主题',
    value: 'React / CSS / TS',
  },
  {
    label: '节奏',
    value: 'Ship notes slowly',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      wrapperClassName="home-main-wrapper"
      title="Kogorou Blog"
      description="一个从简单开始的个人博客。">
      <main className={styles.page}>
        <section className={styles.shell}>
          <div className="container">
            <div className={styles.dashboard}>
              <div className={styles.heroCopy}>
                <p className={styles.kicker}>PERSONAL FRONTEND FIELD NOTES</p>
                <Heading as="h1" className={styles.title}>
                  记录每一次把问题想明白的过程。
                </Heading>
                <p className={styles.subtitle}>
                  写下那些在 React、CSS、TypeScript 和工程化里反复出现的细节，让下一次排查少走一点弯路。
                </p>
                <div className={styles.buttons}>
                  <Link className="button button--primary button--lg" to="/blog">
                    进入博客
                  </Link>
                  <Link className="button button--secondary button--lg" to="/docs/intro">
                    查看笔记
                  </Link>
                </div>
              </div>

              <aside className={styles.statusPanel} aria-label="站点状态">
                <div className={styles.panelHeader}>
                  <span />
                  <span />
                  <span />
                  <strong>kogorou.log</strong>
                </div>
                <div className={styles.panelBody}>
                  <p><span>$</span> inspect --frontend-notes</p>
                  <p className={styles.panelLine}>render traces collected</p>
                  <p className={styles.panelLine}>messy notes normalized</p>
                  <p className={styles.panelLine}>useful parts published</p>
                </div>
                <div className={styles.signalGrid}>
                  {signals.map((signal) => (
                    <div className={styles.signal} key={signal.label}>
                      <span>{signal.label}</span>
                      <strong>{signal.value}</strong>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            <div className={styles.cardRail}>
              {featuredCards.map((card) => (
                <Link className={styles.featureCard} to={card.to} key={card.title}>
                  <span className={styles.cardMeta}>{card.meta}</span>
                  <Heading as="h2">{card.title}</Heading>
                  <p>{card.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
