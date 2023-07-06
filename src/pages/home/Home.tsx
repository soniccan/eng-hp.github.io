import { Link } from 'react-router-dom';
import classes from './Home.module.scss';
import mainvisual from './images/mainvisual.jpg';

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
export const Home = () => (
  <>
   <div className={classes.mainvisual}>
    <div className={classes.typography}>
        <Typography align="center"variant="h5">
            Shunsuke Baba
        </Typography>
        <p>
            1999年生まれ。ソフトウェアや機械学習に興味を持ち、因果探索や高速計算に関する研究を行った。
            その経験を活かし、社内DXの改善業務やソフトウェアの開発を行う活動をしている。
        </p>
    </div>
    <img className={classes.img}src={mainvisual} alt='main-visual'/>
   </div>

    <div className={classes.career}>
        <Typography sx={{  m:4 }}  align="center"variant="h3" >Career</Typography>
        <table className={classes.exp}>
            <CareerComponent year='2018/04〜' text='筑波大学情報学群情報科学類入学' />
            <CareerComponent year='2020/04〜' text='株式会社CA Tech Kids School メンター' />
            <CareerComponent year='2020/08' text='セキュリティ・キャンプ全国大会 参加' />
            <CareerComponent year='2021/04〜2023/03' text='株式会社CA Tech Kids School HP改修業務' />
            <CareerComponent year='2022/04〜' text='筑波大学並列分散処理研究室 配属' />
        </table>
    </div>


   <div className={classes.works}>
        <Typography  sx={{m:4}} align="center"variant="h3">
            Works
        </Typography>
        <div className={classes.cards}>
            <WorkComponent imgPath="/eng-hp.github.io/img/gas.png" text='HPデイリー更新作業の自動化' />
            <WorkComponent imgPath='/eng-hp.github.io/img/points.png' text='身体座標データ取得アプリの作成' />
            <WorkComponent imgPath='/eng-hp.github.io/img/graph.png' text='運動成功要因の探索手法の開発' />
        </div>
   </div>
  </>
);


type CareerProps = {
    year: string;
    text: string;
}

const CareerComponent = (props:CareerProps) => {
    return (
        // <div className={classes.exp}>
        //     <div className={classes.year}>{props.year}</div>
        //     <div className={classes.text}>{props.text}</div>
        // </div>

        <tr>
          <td className={classes.year}>{props.year}</td>
          <td className={classes.text}>{props.text}</td>
        </tr>

    )
}

type WorkProps = {
    imgPath: string;
    text: string;
}

const WorkComponent = (props:WorkProps) => {
    return (
        <Card className={classes.card} sx={{ maxWidth: 345 }}>
            <CardActionArea component={Link} to="/works">
                <CardMedia
                    component="img"
                    alt=""
                    height="140"
                    src={props.imgPath}
                />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}