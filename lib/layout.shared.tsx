import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { RiGithubFill, RiDiscordFill, RiRedditFill } from "@remixicon/react";
import { appName } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },

    links: [
      {
        type: "icon",
        label: "Discord",
        icon: <RiDiscordFill />,
        text: "Discord",
        url: "https://discord.com/invite/8rxMheDscb",
      },
      {
        type: "icon",
        label: "Reddit",
        icon: <RiRedditFill />,
        text: "Reddit",
        url: "https://www.reddit.com/r/IPMATtards",
      },
      {
        type: "icon",
        label: "GitHub",
        icon: <RiGithubFill />,
        text: "GitHub",
        url: "https://github.com/sprakex/ipmatresources",
      },
    ],
  };
}
