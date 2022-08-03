import React from "react";
import { DiscussionEmbed } from "disqus-react";

export default function DisqusThread({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME as string;
  const disqusConfig = {
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/post/${slug}`,
    identifier: slug,
    title: title,
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-10 xl:mt-16">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
}
