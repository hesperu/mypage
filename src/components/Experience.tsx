import React from 'react';

function About() {
return (
  <div className="bg-gray-100">
    <div className="experience_history_box">
      <h2 className="experience_title">衛星が取得したテレメトリデータを可視化・分析するためのツール開発（企業でのアルバイト）</h2>
      <p className="experience_description">テレメトリ（衛星の状態を知らせる装置）のデータを読み込むためのツールを開発中です。</p>
      <p className="experience_period">2021/03 ~ 2023/ (現在)</p>
    </div>
    <div className="experience_history_box">
      <h2 className="experience_title">JpGU2023 (Japan Geoscience Union Meeting2023) 発表</h2>
      <p className="experience_description">国内最大の地球惑星会議であるJpGUにて、筆頭著者として研究発表を行いました。タイトルは"deck.glを用いた月GIS開発"です。</p>
      <p className="experience_description">加えて、発表された2件の研究に共同研究者として携わりました。</p>
      <a href="https://confit.atlas.jp/guide/organizer/jpgu/advanced?searchType=all&initFlg=false&query=&title=&author=%E4%BC%8A%E6%B7%B1&affiliation=&startYear=2014&endYear=2023&authorSelect=%E4%BC%8A%E6%B7%B1+%E5%BA%B7%E4%B8%80%E9%83%8E" 
        className="experience_link" target="_blank" rel="noopener noreferrer">参考</a>
      <p className="experience_period">2023/05/26</p>
    </div>
    <div className="experience_history_box">
      <h2 className="experience_title">2022年度笹川科学研究奨励賞受賞:共同研究者</h2>
      <p className="experience_description">共同研究者として参加した研究が評価され、笹川科学研究奨励賞を受賞しました。タイトルは"機械学習による月の南北極未踏地域の電子地図制作"です。</p>
      <a href="https://www.jss.or.jp/ikusei/sasakawa/data/Abstract.pdf" className="experience_link" target="_blank" rel="noopener noreferrer">https://www.jss.or.jp/ikusei/sasakawa/data/Abstract.pdf</a>
      <p className="experience_period">期間: 2022/04 ~ 2023/03</p>
    </div>
    <div className="experience_history_box">
      <h2 className="experience_title">LPSC2023(Lunar and Planetary Science Conference 2023) 発表</h2>
      <p className="experience_description">月惑星をテーマとした世界最大の国際会議であるLPSC2023においてアメリカで研究発表を行いました。月面の深度を機械学習で推定するという内容です。↓が発表した内容です。</p>
      <a href="https://www.hou.usra.edu/meetings/lpsc2023/pdf/1927.pdf" className="experience_link" target="_blank" rel="noopener noreferrer">https://www.hou.usra.edu/meetings/lpsc2023/pdf/1927.pdf</a>
      <p className="experience_period">2023/03/14</p>
    </div>
    <div className="experience_history_box">
      <h2 className="experience_title">衛星画像からの船舶自動検出技術の開発:(企業でのアルバイト)</h2>
      <p className="experience_description">衛星画像中の船舶を検出する機械学習モデルの開発を行いました。（企業名は公開できません。契約上の都合です...。）</p>
      <p className="experience_period">期間: 2021/09/ ~ 2022/03</p>
    </div>
    <div className="experience_history_box">
      <h2 className="experience_title">国立天文台サマースチューデントプログラム：火星衛星フォボス・ダイモスの起源研究</h2>
      <p className="experience_description">国立天文台のサマーインターンシップで、火星衛星の起源について研究を行いました。</p>
      <p className="experience_period">期間: 2021/08 ~ 2021/09</p>
    </div>
    <div className="experience_history_box">
      <h2 className="experience_title">ICPC(International collegiate programminc contest) 日本国内予選 117/297 位</h2>
      <p className="experience_period">2020/11</p>
    </div>
  </div>
);
}

export default About;
