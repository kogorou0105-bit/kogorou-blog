import type {ComponentType, ReactNode} from 'react';
import {memo} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import Heading from '@theme/Heading';

type BlogSidebarItem = {
  date: string;
  permalink: string;
  title: string;
};

type BlogSidebarContentProps = {
  items: BlogSidebarItem[];
  yearGroupHeadingClassName: string;
  ListComponent: ComponentType<{items: BlogSidebarItem[]}>;
};

function groupItemsByYearAndMonth(items: BlogSidebarItem[]) {
  const grouped = new Map<string, Map<string, BlogSidebarItem[]>>();

  items.forEach((item) => {
    const date = new Date(item.date);
    const year = `${date.getFullYear()}`;
    const month = `${String(date.getMonth() + 1).padStart(2, '0')}月`;

    if (!grouped.has(year)) {
      grouped.set(year, new Map());
    }

    const monthGroup = grouped.get(year)!;

    if (!monthGroup.has(month)) {
      monthGroup.set(month, []);
    }

    monthGroup.get(month)!.push(item);
  });

  return Array.from(grouped.entries()).map(([year, monthGroup]) => [
    year,
    Array.from(monthGroup.entries()),
  ] as const);
}

function BlogSidebarYearGroup({
  year,
  yearGroupHeadingClassName,
  children,
}: {
  year: string;
  yearGroupHeadingClassName: string;
  children: ReactNode;
}) {
  return (
    <div role="group">
      <Heading as="h3" className={yearGroupHeadingClassName}>
        {year}
      </Heading>
      {children}
    </div>
  );
}

function BlogSidebarContent({
  items,
  yearGroupHeadingClassName,
  ListComponent,
}: BlogSidebarContentProps) {
  const themeConfig = useThemeConfig();

  if (themeConfig.blog.sidebar.groupByYear) {
    const itemsByYearAndMonth = groupItemsByYearAndMonth(items);

    return (
      <>
        {itemsByYearAndMonth.map(([year, monthGroups]) => (
          <BlogSidebarYearGroup
            key={year}
            year={year}
            yearGroupHeadingClassName={yearGroupHeadingClassName}>
            {monthGroups.map(([month, monthItems]) => (
              <div className="blog-sidebar-month-group" key={`${year}-${month}`}>
                <div className="blog-sidebar-month-heading">{month}</div>
                <ListComponent items={monthItems} />
              </div>
            ))}
          </BlogSidebarYearGroup>
        ))}
      </>
    );
  }

  return <ListComponent items={items} />;
}

export default memo(BlogSidebarContent);
