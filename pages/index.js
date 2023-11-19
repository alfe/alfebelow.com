import Head from 'next/head'
import TopContents from './components/TopContents';
import ContentButton from './components/ContentButton';
import SlideItem from './components/SlideItem';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>alfebelow.com</title>
        <meta property="og:url" content="https://alfebelow.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="alfebelow.com" />
        <meta property="og:description" content="@alfe_belowの作ったものリンクとか" />
        <meta property="og:site_name" content="alfebelow.com" />
        <meta property="og:locale" content="ja" />
        <meta property="og:image" content="https://alfebelow.com/ogp/ogp.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@alfe_below" />
        <meta name="twitter:creator" content="@alfe_below" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z9WQB7P85L"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nerko+One" />
        <link rel="stylesheet" href="css/main.css?230709" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopContents />

      <section className='strengths'>
        <p>ヒトとテクノロジーのやりとりに興味を持つフロントエンドエンジニア</p>
        <p>複雑なデータや専門知識が必要な入力フォームを<br />直感的に理解できるように整理し提示するのが得意</p>
      </section>

      <section className='product'>
        <h2>product</h2>
        <div className='product-contents'>
          <ContentButton img="/ogp/ogp-obs-discord-icon.jpg" link="https://obs-discord-icon.alfebelow.com/" title="OBSのDiscordアイコン外観変更ジェネレーター" detail="Discordで通話中のメンバーをOBS Studioに表示するときに、横並びにしたりアイコンを四角にしたりするためのカスタムCSSをつくるジェネレーター" />
          <ContentButton img="/ogp/ogp-obs-discord-picture.jpg" link="https://obs-discord-picture.alfebelow.com/" title="OBSのDiscord通話相手立ち絵表示ジェネレーター" detail="Discordで通話中のメンバーをOBS Studioに表示するときに、立ち絵で表示するためのカスタムCSSをつくるジェネレーター" />
          <ContentButton img="/ogp/ogp-obs-discord-text.jpg" link="https://obs-discord-text.alfebelow.com/" title="Discordテキストチャンネル外観変更ジェネレーター" detail="DiscordのテキストチャンネルをOBS Studioに表示するときに、見た目を変更するためのカスタムCSSをつくるジェネレーター" />
          <ContentButton img="/img/aviftojpg.jpg" link="https://github.com/alfe/aviftojpg" title="npx aviftojpg <dir> [options]" detail="複数のAVIFファイルを一括でJPEGファイルに変換するnpxコマンド" />
          <ContentButton img="/img/printpngprompt.jpg" link="https://github.com/alfe/printpngprompt" title="npx printpngprompt <dir> [options]" detail="Stable Diffusionで出力したPNGファイルからプロンプトやモデル情報などを取得するnpxコマンド" />
        </div>
      </section>

      <section className='pickup'>
        <h2>pickup</h2>
        <div className="pickup-contents">
          <ContentButton img="/img/gigazine-intro-icon.jpg" link="https://gigazine.net/news/20220517-obs-discord-icon-generator/" title="配信画面上で今誰が話してるのかをDiscordのアイコンで超わかりやすくする「OBSのDiscordアイコン外観変更ジェネレーター」の使い方 - GIGAZINE" detail="GIGAZINEによる紹介。" />
          <ContentButton img="/img/sd202204.jpg" link="https://gihyo.jp/magazine/SD/archive/2022/202204" title="Software Design 2022年4月号" detail="短期連載 Cypressで作る“消耗しない”E2Eテスト環境［4］ を寄稿。" />
          <ContentButton img="/img/sd202202.jpg" link="https://gihyo.jp/magazine/SD/archive/2022/202202" title="Software Design 2022年2月号" detail="短期連載 Cypressで作る“消耗しない”E2Eテスト環境［2］ を寄稿。" />
          <ContentButton img="/img/html5_tombstone.png" link="https://future-architect.github.io/articles/20210621a/" title="どうしてHTML5が廃止されたのか" detail="フューチャー技術ブログへの寄稿。そもそもHTML5とは何か、廃止された経緯について解説。" />
          <ContentButton img="/img/e2e-unit.png" link="https://future-architect.github.io/articles/20210428c/" title="保守・拡張をしやすいカプセル化したCypress" detail="フューチャー技術ブログへの寄稿。E2EテストはCypressのCustom Commandsなどでカプセル化すると読みやすくなおしやすい。" />
          <ContentButton img="/img/qiita-dependencies.png" link="https://qiita.com/alfe_below/items/1141ec9acbb81b504855" title="package.json dependencies メンテの仕方 最短ルート" detail="Qiitaへの投稿。package.json の dependencies を最新に保って脆弱性を解消するために、どこから手を付ければいいのか。" />
          <ContentButton img="/img/sd201801.jpg" link="https://gihyo.jp/magazine/SD/archive/2018/201801" title="Software Design 2018年1月号" detail="一般記事 システムのセキュリティ運用をもっと楽に・セキュアに 脆弱性管理サービスFutureVuls登場 を寄稿。" />
          <ContentButton img="/img/sd201710.jpg" link="https://gihyo.jp/magazine/SD/archive/2017/201710" title="Software Design 2017年10月号" detail="第2特集 システムのセキュリティチェックをもっと楽に 脆弱性スキャナVuls入門 を寄稿。" />
          {/* <ContentButton img="/img/fvuls.jpg" link="https://vuls.biz/" title="FutureVuls" detail="脆弱性管理SaaS FutureVulsに画面統括として参画。" /> */}
          <ContentButton img="/img/curriculum-vitae.png" link="https://github.com/alfe/Curriculum-Vitae" title="職務経歴書" detail="スキル・資格・経歴を記載。ご縁があれば。" />
        </div>
      </section>
{/* 
      <section className='others'>
        <h2>Slide</h2>
        <ul>
          <SlideItem link="https://www.figma.com/file/iVW8BT7nT792Yba47CratS/HTML-Level?node-id=211%3A878" title="pにdivをいれてはいけない" detail="HTMLのタグをしっかり書くということについて" />
          <SlideItem link="/slide/html-mail" title="HTMLメール" detail="HTMLメールの表現力とか開発のしやすさとかが、残念ながらいまだガラケーと同じくらいという話" />
          <SlideItem link="https://www.figma.com/proto/4kihbdb0qrKdYcYWnr0vfU/VRUI?page-id=0%3A1&node-id=1%3A2&viewport=241%2C48%2C0.17&scaling=contain" title="VR UI" detail="VR内でのUIをどうすれば理解してもらいやすくなるか" />
          <SlideItem link="https://www.figma.com/proto/0ftk21buq2EXArK93ZuAFa/RIP-HTML-0330?page-id=0%3A1&node-id=1%3A2&viewport=241%2C48%2C0.1&scaling=contain" title="RIP HTML5" detail="HTML5が廃止になった話" />
        </ul>
      </section> */}

      {/* <section className='Archived'>
        <h2>Archived</h2>
        <ContentButton img="/img/14.png" title="VRC技術市" detail="VRChat技術の同人誌イベント。アップローダーやツール群を作成" />
        <ContentButton img="/img/13.png" title="reachable friends in vrchat" detail="VRChat内のオンラインなフレンドを公式サイト上でワールドごとに一覧化する拡張機能。同機能が公式で実装されたのでアーカイブ" />
        <ContentButton img="/img/12.png" link="https://atcoder.jp/contests/future-contest-2018-qual/" title="HACK TO THE FUTURE 2018" detail="競技プログラミングのビジュアライザー作成" />
        <ContentButton img="/img/1.png" title="三条ビール祭りマップ" detail="地ビール祭り京都2015 で配布していた地図に現在地情報が表示されるようにしたもの。思ってた以上に現地で重宝した。(元地図引用 http://www.kyoto-beer.com/)" />
        <ContentButton img="/img/2.png" title="ALL KOBE" detail="芸術大学生と情報系院生で架空のベンチャーキャピタルにアプリを売り込む演習講義用デモアプリ" />
        <ContentButton img="/img/3.png" title="シンプルストップウォッチ" detail="芸大生でもこのくらいのアプリならつくれるよ と講義のデモとしてつくったもの" />
        <ContentButton img="/img/4.png" title="EXTRACT from uniprot" detail="Accessionリストを貼り付けることで、uniplotからタンパク質の機能とかを一気に取り出すツール" />
        <ContentButton img="/img/5.png" title="雨の様子はだいたいこんな感じ" detail="外の雨の様子を実測雨量をもとにそれっぽく再現するWebアプリ" />
        <ContentButton img="/img/6.png" title="SphereView" detail="ビルのような多階層建築物向けの行動ログ可視化アプリケーション。卒論。ビルのモデルはスキャンしたフロアマップ突っ込むと自動作成してくれる" />
        <ContentButton img="/img/7.png" title="Gooraffiti Umechika" detail="日本三大迷宮ともいわれる梅田地下街のストリートビュー。学部時代に写真をストリートビューにするところを担当" />
        <ContentButton img="/img/8.png" title="PSO2 Ship9 緊急クエ通知BOT(@pso2_ship9_emg)" detail="『PSO2緊急クエ発生時間つぶやきbot(@pso2_emg_bot)』から、Ship9ハガルの緊急クエストだけをRTするBOT" />
        <ContentButton img="/img/9.png" title="メイドちゃん" detail="朝起きたときにその日のスケジュールをメールにまとめて送ってくれるメイドメールシステム。ICT Challenge+R 2012 奨励賞" />
      </section> */}

      <style jsx>{`
        header {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #a8a69c;
          background: url(/img/bk.jpg), #a8a69c;
          background-size: cover;
          height: 80vh;
        }
        h2 {
          color: rgba(255, 255, 255, 0.85);
          font-family: Nerko One;
          font-size: 3rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        .slide-list, .publication-list, .writing-list {
          width: 80%;
          max-width: 960px;
          margin: 1rem auto;
        }

        .strengths {
          margin: 0;
          padding: 4rem;
          background: url("/img/18.png");
          box-shadow: 0 8px 64px #333 inset;
        }
        .strengths > p {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.95);
          text-align: center;
          font-weight:bold
        }
        .product, .pickup, .others {
          margin: 0;
          padding: 2rem 14rem;
          background: rgba(0, 0, 0, 0.80);
        }
        .product-contents, .pickup-contents {
          display: flex;
          flex-wrap: wrap;
        }
        .product-contents > *, .pickup-contents > * {
          flex-basis: 50%;
        }
        
        @media screen and (max-width:680px) {
          h2 {
            margin: 0.5rem 1rem;
          }
          .product, .pickup, .others {
            margin: 0;
            padding: 1rem 0;
            background: rgba(0, 0, 0, 0.80);
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #ECFFC8;
          font-size: 18px;
        }

        * {
          box-sizing: border-box;
        }

        @font-face {
          font-family: "Futura";
          src: url("Futura-Bol.woff") format('woff');
        }
      `}</style>
    </>
  )
}
