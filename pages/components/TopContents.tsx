import { useEffect } from 'react';
import HeaderIcon from './HeaderIcon';

const TopContents = () => {
  return (
    <div className="top-contants">
      <div />
      <div>
        <h1>alfebelow.com</h1>
        <div className="info">
          <ul>
            <li>
              <HeaderIcon
                rel="me"
                title="GitHub"
                content="GitHub"
                href="https://github.com/alfe"
                img="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIHZpZXdCb3g9IjAgMCA3NiA3NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM4IDE2QzI1LjYyNSAxNiAxNiAyNS43MDk3IDE2IDM4LjE5MzVDMTYgNTIuNzU4MSAyOS4wNjI1IDU5IDMxLjEyNSA1OUMzMi41IDU5IDMyLjUgNTguMzA2NSAzMi41IDU3LjYxMjlWNTQuMTQ1MkMyNy42ODc1IDU1LjUzMjMgMjUuNjI1IDUyLjc1ODEgMjQuOTM3NSA1MC42Nzc0QzI0LjkzNzUgNTAuNjc3NCAyNC45Mzc1IDQ5Ljk4MzkgMjMuNTYyNSA0OC41OTY4QzIyLjg3NSA0Ny45MDMyIDIwLjEyNSA0Ni41MTYxIDIyLjg3NSA0Ni41MTYxQzI0LjkzNzUgNDYuNTE2MSAyNi4zMTI1IDQ5LjI5MDMgMjYuMzEyNSA0OS4yOTAzQzI4LjM3NSA1Mi4wNjQ1IDMxLjEyNSA1MS4zNzEgMzIuNSA1MC42Nzc0QzMyLjUgNDkuMjkwMyAzMy44NzUgNDcuOTAzMiAzMy44NzUgNDcuOTAzMkMyOC4zNzUgNDcuMjA5NyAyNC4yNSA0NS4xMjkgMjQuMjUgMzcuNUMyNC4yNSAzNC43MjU4IDI0LjkzNzUgMzIuNjQ1MiAyNi4zMTI1IDMxLjI1ODFDMjYuMzEyNSAzMS4yNTgxIDI0LjkzNzUgMjguNDgzOSAyNi4zMTI1IDI1LjAxNjFDMjYuMzEyNSAyNS4wMTYxIDI5Ljc1IDI1LjAxNjEgMzIuNSAyNy43OTAzQzM0LjU2MjUgMjYuNDAzMiA0MS40Mzc1IDI2LjQwMzIgNDMuNSAyNy43OTAzQzQ2LjI1IDI1LjAxNjEgNDkuNjg3NSAyNS4wMTYxIDQ5LjY4NzUgMjUuMDE2MUM1MS4wNjI1IDI5Ljg3MSA0OS42ODc1IDMxLjI1ODEgNDkuNjg3NSAzMS4yNTgxQzUxLjA2MjUgMzIuNjQ1MiA1MS43NSAzNC43MjU4IDUxLjc1IDM3LjVDNTEuNzUgNDUuMTI5IDQ2LjkzNzUgNDcuMjA5NyA0Mi4xMjUgNDcuOTAzMkM0Mi44MTI1IDQ4LjU5NjggNDMuNSA0OS45ODM5IDQzLjUgNTIuMDY0NVY1Ny42MTI5QzQzLjUgNTguMzA2NSA0My41IDU5IDQ0Ljg3NSA1OUM0Ni45Mzc1IDU5IDYwIDUyLjc1ODEgNjAgMzguMTkzNUM2MCAyNS43MDk3IDUwLjM3NSAxNiAzOCAxNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" />
            </li>
            <li>
              <HeaderIcon
                rel="me"
                title="Blog"
                content="Blog"
                href="https://blog.alfebelow.com/"
                img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOPSURBVHhe7Zq/axRBFMezh5hCBA0YFRsLOxFESGEhpEkhgqWlpPAvEKNoFQwWppVgYWOdShCxPEgjiJyFXKkhiCTkRIWwIZtccn6/M1/X3buNufzwLsy+Dxwz874zA+/xdvfN3g4YhmEYhmEYhmEYhmEYhmEYRolptVqDW1tby2gLgfYDzaCm95WK2r6yubl5K4qiUxp2AO0k52hoIIPe+VzaHs7R9HKTJMlFxcSxsbFxVV0yotbBuVpWXhCHGR8Ol0V12Rzs06YhmaGttCwtLR1DQGIFg0zQrr4LGJoJP3IBjbmG9lLSbDbvKBYMRjOO47O0y+QCRhs1mVpcQ3spQSBqigOZlTkXMILurLe4wNZkLhdtN3dmzg1JHQGjJpODayWVB9RVL+U/s2axWq0ekdQRMGqcI3OLayWVA/g8hABkb/bTkhyypQEjGE57q7/5oxmSFD7IkLvedc/a2toFSQ6ZcwHjHJkd3ENS+CBDsrVVVeYU2XMBIzBVveKyzNVswQNfR73LKeOSUmQvCti4V1JGJYULnMyWCLlCtF6vH8Wl9lQyL7sXtEkuKnTTUiRI2otQkDvqYPzEm//CAEp2wJQ9SqXFbpDA+Yfy9Q8jkhwYF70T+yrZgXHuQM49JYUFayn4N+/dLL5pw1wUsGXJKVwrjcxna7hgaK/WgTtoZynIQGbQY8kpMKcHcpI9JfxvevbGFVnRUNeB8bC6KVNTU7xf3UcMPuP3E3Om5+bmOgIGTqh1YO4vdcMCAXjFjCDox6urq+ckdQ2WnuZav4vjtaTwYLUOZ9OnJC63XZ8JuUbL3VOy/ZQQHPDzmXfXO4zmsqQdSZLkUlvAn0sKl5WVleHsJYX+G0k7wrla5i5p7iUpbJAZD+S3A0+565K2BdPG/OyUR5LCR0ecb3Kc2fLhX7XU5ORkBXPeazrBFiV7t4+syh2kOZbUwW7mBosq/48+BI6FoqxRNn7RHGbjpyAr+25ApuSqf9zbiqr/vlX1hwL4PIYsyZ4F9wT2+I7mprbtGZHangFHF6MoOqPhvkDAFiqVynkNe0LPA8bsUPdAQPB76kNfA7ZXZw9ij71yKL4P2w2IVV8/rOtrwPAEvNdoNI5r2C231ZJEbbjgpr/jx3Pdwr20bbisr69fgaP8ZnVfYI+4NN9Y8EtCOPwWv+w/SF3BNfjVEKxr2s4wDMMwDMMwDMMwDMMwDMMwwmdg4DelOhauFPwcmgAAAABJRU5ErkJggg==" />
            </li>
            <li>
              <HeaderIcon
                rel="me"
                title="Mastodon"
                content="Mastodon"
                href="https://mastodon-japan.net/@alfe"
                img="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIHZpZXdCb3g9IjAgMCA3NiA3NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTguMTI1IDQ1Ljc1QzU4LjEyNSA0Ni4wNjI2IDU4LjAwMTIgNDYuMzYyNCA1Ny43ODA5IDQ2LjU4MzRDNTcuNTYwNSA0Ni44MDQ0IDU3LjI2MTYgNDYuOTI4NiA1Ni45NSA0Ni45Mjg2QzU2LjYzODQgNDYuOTI4NiA1Ni4zMzk1IDQ2LjgwNDQgNTYuMTE5MSA0Ni41ODM0QzU1Ljg5ODggNDYuMzYyNCA1NS43NzUgNDYuMDYyNiA1NS43NzUgNDUuNzVWMjkuMjVDNTUuNzc1IDI0LjcwMDcgNTAuOTEwNSAyMSA0Ni4zNzUgMjFIMjYuNEMyMy45MDcgMjEgMjEuNTE2IDIxLjk5MzQgMTkuNzUzMiAyMy43NjE2QzE3Ljk5MDQgMjUuNTI5OCAxNyAyNy45MjggMTcgMzAuNDI4NlY1NEgyNi40VjQ0LjU3MTRIMzguMTVWNTRINDcuNTVWNDMuMzkyOUM0Ny41NSA0My4wODAzIDQ3LjY3MzggNDIuNzgwNSA0Ny44OTQxIDQyLjU1OTVDNDguMTE0NSA0Mi4zMzg1IDQ4LjQxMzQgNDIuMjE0MyA0OC43MjUgNDIuMjE0M0M0OS4wMzY2IDQyLjIxNDMgNDkuMzM1NSA0Mi4zMzg1IDQ5LjU1NTkgNDIuNTU5NUM0OS43NzYyIDQyLjc4MDUgNDkuOSA0My4wODAzIDQ5LjkgNDMuMzkyOVY0Ni45Mjg2QzQ5LjkgNDguODA0IDUwLjY0MjggNTAuNjAyNyA1MS45NjQ5IDUxLjkyODhDNTMuMjg3IDUzLjI1NSA1NS4wODAyIDU0IDU2Ljk1IDU0QzU4LjgxOTggNTQgNjAuNjEzIDUzLjI1NSA2MS45MzUxIDUxLjkyODhDNjMuMjU3MiA1MC42MDI3IDY0IDQ4LjgwNCA2NCA0Ni45Mjg2VjQyLjIxNDNINTguMTI1VjQ1Ljc1WiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=" />
            </li>
            <li>
              <HeaderIcon
                rel="me"
                title="Twitter"
                content="Twitter"
                href="https://twitter.com/alfe_below"
                img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOTSURBVHhe7ZpPSBRRHMedjA2JlbAIJAqi/3TqYASSbF0i6BR46JC3iEA8RBJBgnQM8RZEiBAREUR0kSwihSCRwgpbJJE6SEQZ4qq7zOyua9/fzteIZd3WnZmdmeX3gR/vzcyb3/v9vvvem/GNdYqiKIqiKIqiKIqiKIqiKIqiKIqi1DS9vb2bMpnM6ZWVlf5cLvdidXX1E8rnKG9alnWUzYoyMjKymdVgMjc3F2XVFSBKC8QZR1kUXMuheJBMJpt5Sx4REgIPZLPZCzwVPCRoxD+VSCSaeMoRkiz8pW1pSoN239H+LKrdsDciJJiOx+MRugse+EV7GPzE4uLiDp6uCEzBNvgpS6xi4N5kOp0+TnfBBHEO2+HmA/5qmuZBXtoQsu7g/hm62jC4dx6Cx5aWlnbisAv1VroOFghuNh8xkcBRnOPlssHUOm97qAz0Ow6b5uE9ug0eCG69UXEb1sBm/wVT+5F9m2OGAr2GIcC/U7IQ/OKzEOJyOY95NI/bdznirryO0GUwgSBXGey6ULgbha8B/4Jmv+zWlSEjlK6CDWJtgiBJO+zSoF0WxTCSu4KyBbaFbkpN7XIZoKvgU84oKwYETMMmYfImn7DPVswdhhNsEOgeWTdkSthx+0Y/Q3INg6WrYHQsGIbxAeVblO2wA7xUVdB/Z319vaujzCvBxiDSCR76ySnEMcq6K3jyuEWQT1n1Ews2ZlfdwxPBlpeX72P9SPHQL97hhxPRXMUTwaLRqLw/9fDQF7AsvGQ1HPApOZh/VvmAZVmHGUp4oGjXEb9pp1Ed5KHDEMJJKpXaDeFuIZEp5uQp2Wz2IrsOFzLCINJr2ChsBibbyJ6CLiYDv39fCows+Ruxasj2NLsOJ9w1fcV8PAX9PGG34Ub29ZHMBPPyBPifx1q5i12GH+TUAOuDuf7EhFiyNp5hV7UFP0hcwtr2EOXafrsj4Osa3dcuyLMdA8PRjirppsvaJJPJnIRQz5hsxcCHfKvsoNvawjTN/Zg2XUjyvZ2uM+BHPuO10X1VcXU/TP41oLGxUabIPiS0FeU2WLNhGHvluks8xjrYiX5+8zjcyNs9xOqAfYO5BkbVUOA/+TuBwsUwFQeRbFlfkArBfT9wf59lWUfo1nc82aIuRN72Y7HYMQjQiukpa88hlNuhydp/9yyI4dxPtPmC+mcINRqJRD7mryqKoiiKoiiKoiiKoiiKoiiKomyIuro/oUtLgPOzVIwAAAAASUVORK5CYII=" />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className='top-ear' />
      </div>

      <style jsx>{`
        .top-contants {
          margin: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: linear-gradient(171deg, rgba(236, 255, 200, 0.60) 0%, #ECFFC8 41.15%), #FFF;
          display: flex;
          flex-direction: column;
        }
        .top-contants > * {
          flex-basis: 1/3;
          height: 100%;
        }
        .top-contants h1 {
          color: rgba(0, 0, 0, 0.85);
          text-align: center;
          font-family: Nerko One;
          font-size: 10rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin: 0;
          padding: 0;
        }
        .top-contants .info {
          max-width: 920px;
          width: 100%;
          margin: 0 auto;
        }
        .top-contants .info ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
        }
        .top-contants .info li {
          flex-basis: 50%;
        }
        .top-ear {
          background: url("/img/top_ear.png");
          height: 100%;
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: contain;
        }

        @media screen and (max-width:680px) {
          .top-contants h1 {
            font-size: 3rem;
          }
          .top-contants .info ul {
            display: list-item;
            margin-left: 3rem;
            margin-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
export default TopContents;
