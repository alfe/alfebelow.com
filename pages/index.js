import Head from 'next/head'
import HeaderCard from './components/HeaderCard';
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
        <link rel="stylesheet" href="css/main.css?220522" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <HeaderCard />
      </header>

      <main>
        <h2>Application</h2>
        <ContentButton img="/img/10.png" link="https://obs-discord-icon.alfebelow.com/" title="OBSのDiscordアイコン外観変更ジェネレーター" detail="Discordで通話中のメンバーをOBS Studioに表示するときに、横並びにしたりアイコンを四角にしたりするためのカスタムCSSをつくるジェネレーター" />
        <ContentButton img="/img/11.png" link="https://draft-twi.alfebelow.com/" title="ツイート下書きアプリ" detail="Twitterにまとまった文章をツリー投稿するときの下書きとかメモとかを書くアプリ" />
        <ContentButton img="/img/14.png" link="https://vrc-tech.com/" title="VRC技術市" detail="VRChat技術の同人誌イベント。アップローダーやツール群を作成" />
        <h2>Slide</h2>
        <ul class="slide-list">
          <SlideItem link="/slide/html-mail" title="HTMLメール" detail="HTMLメールの表現力とか開発のしやすさとかが、残念ながらいまだガラケーと同じくらいという話" />
          <SlideItem link="https://www.figma.com/proto/4kihbdb0qrKdYcYWnr0vfU/VRUI?page-id=0%3A1&node-id=1%3A2&viewport=241%2C48%2C0.17&scaling=contain" title="VR UI" detail="VR内でのUIをどうすれば理解してもらいやすくなるか" />
          <SlideItem link="https://www.figma.com/proto/0ftk21buq2EXArK93ZuAFa/RIP-HTML-0330?page-id=0%3A1&node-id=1%3A2&viewport=241%2C48%2C0.1&scaling=contain" title="RIP HTML5" detail="HTML5が廃止になった話" />
        </ul>
        <h2>Archived</h2>
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
      </main>

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
          color: #FFFFFF;
          text-align: center;
          margin-top: 3rem;
          border-bottom: 2px solid #FFFFFF;
        }
        .slide-list {
          width: 80%;
          max-width: 960px;
          margin: 1rem auto;
        }
        @media screen and (max-width:980px) {
          header {
            height: 50vh;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #333333;
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
