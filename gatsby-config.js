/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `electrical-parade`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: '/electrical-parade',
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `エレクトリカルパレード`, // あなたのサイト名
        short_name: `エレクトリカルパレード`, // ホーム画面に表示されるサイトの略称
        start_url: `/`,
        background_color: `#ffffff`, // アプリケーションの背景色
        theme_color: `#663399`, // アプリケーションのテーマ色
        display: `minimal-ui`, // ブラウザUIの表示スタイル
        icon: `src/images/icon.png`, // ファビコンに使用する画像のパス
      },
    }
  ],
}
