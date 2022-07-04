module.exports = {
    siteMetadata: {
        siteUrl: "https://www.vikasrohra.com",
        // title: "Inbio - Personal Portfolio React Template",
        title: "Vikas Rohra",
        description: "Vikas Rohra",
        author: "Vikas Rohra",
        siteLanguage: "en",
        image: "banner.jpg",
        titleTemplate: "VR",
        twitterUsername: "@rainbowit",
        getform_url:
            "https://getform.io/f/7a6695a7-c8e3-442c-bc2f-d46d3b9a535e",
        socials: [
            {
                id: 1,
                title: "github",
                path: "https://github.com/vikasrohra",
                icon: "GitHub",
            },
            {
                id: 2,
                title: "instagram",
                path: "https://www.instagram.com/imvikasrohra/",
                icon: "Instagram",
            },
            {
                id: 3,
                title: "linkedin",
                path: "https://in.linkedin.com/in/vikas-rohra-1a94a054",
                icon: "Linkedin",
            },
            {
                id: 4,
                title: "youtube",
                path: "https://www.youtube.com/channel/UCNRDbYxL0A1KFQwt9X0PgSQ",
                icon: "Youtube",
            },
            {
                id: 5,
                title: "mail",
                path: "mailto:me@vikasrohra.com",
                icon: "Mail",
            },
        ],
        contact: {
            phone: "01234567890",
            email: "admin@example.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Vikas Rohra",
                short_name: "VR",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
