
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './Works.module.scss';

export const Works = () => (
  <div className={ classes.works}>
    <Typography variant="h3" align="center">Works</Typography>
    <CardComponent title="身体座標データ取得アプリの作成"  tech="PHP,JavaScript" link="https://github.com/soniccan/plotapp" date="2022/07/15" imgPath="./img/points.png" text="Openposeに代表される動画中の人物の身体の座標を取得する機械学習モデルが発展し、その座標データを元に人の動きを解析する研究が行われている。しかし、この座標推論モデルを学習するための学習データを作成するソフトウェアが一般的に出回っていない。そこで、WEB上で座標を入力し、csvでダウンロードできるアプリを開発した。実際に200個以上の動画に対して、クラウドワーカーに本アプリを用いてもらい、学習データを作成した。" ></CardComponent>
    <CardComponent title="運動成功要因の探索手法の開発" tech="Python,Pytorch" link="https://drive.google.com/file/d/131kVXzf6ozaLA4Nx9vEKGzxQ4AIsSNs8/view?usp=sharing" date="2023/03/01" imgPath="./img/graph.png" text="人の動きは複雑であり、人間が直感的に理解することは困難である。特にスポーツや工芸などは、口頭伝承によるところが大きく、コツの習得までに長い年月が必要となっている。そこで、統計的因果探索モデルを用いて身体の座標データから運動を達成する要因を特定する手法を設計し、実装した。" ></CardComponent>
    <CardComponent title="HPデイリー更新作業の自動化"  tech="JavaScript,GAS" link="https://techkidsschool.jp/" date="2023/05/01" imgPath="https://www.astina.co/wp-content/uploads/2022/08/WEB%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84-%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3-768x432-1.png" text="株式会社CA Tech KidsのHP業務を担当し、業務の改善を行なった。スプレットシート上の情報を取得できるAPIを作成や、古くなった情報を自動でHPから削除する機能を追加し、保守コスト削減に尽力した。" ></CardComponent>
  </div>
);


const CardComponent = (props:CardProps) => {
  return (
    <div className={classes.cards}>
      <Typography variant="h4">{props.title}</Typography>
      <Typography>{props.date}</Typography>
      <div className={classes.content}>
        <text className={classes.text}>{props.text}<br/>
          <text className={classes.text}>使用技術：{props.tech}</text><br/>
          <Link to={ props.link ? props.link: "/" }>{ props.link ? "リンク": "" }</Link>

        </text>
        <img className={classes.img} alt="hoge" src={props.imgPath} />
      </div>
    </div>
  )
}

type CardProps = {
  imgPath?: string;
  title: string;
  text: string;
  link?: string;
  date: string;
  tech?: string;
}