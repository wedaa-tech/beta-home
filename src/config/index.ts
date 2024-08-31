import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "WeDAA | AI Powered",
        template: `%s | WeDAA`
    },
    description: "Well Defined Application Architecture",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
};
