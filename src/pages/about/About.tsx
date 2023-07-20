import { ClassNames } from '@emotion/react';
import { Link } from 'react-router-dom';
import classes from './About.module.scss';

export const About = () => (
  <div className={classes.about}>
    <h1>About</h1>
    <text className={classes.text}>
      1999年生まれ。高校生時代にネットの情報を頼りに勉強を行なっていたことからWebサービスに興味を持ち、プログラミングを学習を始めた。
      筑波大学に入学後、ハッカソン参加や勉強会に参加を経て、2021年にセキュリティ・キャンプ全国大会に参加した。
      <br/>
      また、株式会社CA Tech Kids Schoolにてメンターとして活動を行い、翌年には、同社のHP改修担当として、
      HP運営の改善を行なった。
      <Link className={classes.link} to='https://twitter.com/soniccan_'>Twitter</Link>
      <Link className={classes.link} to='https://github.com/soniccan'>Github</Link>
      <Link className={classes.link}to='https://qiita.com/soniccan'>Qiita</Link>
    </text>

    <></>

  </div>
);