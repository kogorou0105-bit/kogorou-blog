import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function CtaArrow() {
  return (
    <span className={styles.ctaIcon} aria-hidden="true">
      <svg viewBox="0 0 20 20" focusable="false">
        <path d="M4 10h11" />
        <path d="m11 6 4 4-4 4" />
      </svg>
    </span>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Kogorou Blog"
      description="一个从简单开始的个人博客。">
      <main className={styles.page}>
        <section className="container">
          <div className={styles.hero}>
            <p className={styles.kicker}>KOGOROU BLOG</p>
            <Heading as="h1" className={styles.title}>
              记录每一次把问题想明白的过程
            </Heading>
            <p className={styles.subtitle}>
              不急着追逐每个新技术，只记录那些值得反复咀嚼的问题：代码、工具、系统，以及人的判断。
            </p>
            <div className={styles.buttons}>
              <Link className={`${styles.cta} ${styles.ctaPrimary}`} to="/blog">
                阅读博客
                <CtaArrow />
              </Link>
              <Link className={`${styles.cta} ${styles.ctaSecondary}`} to="/docs/intro">
                浏览笔记
                <CtaArrow />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
