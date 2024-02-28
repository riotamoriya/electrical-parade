import React, { useState, useEffect, useRef } from "react";
import playIcon from "../images/playIcon.webp"; // プレイボタンのアイコン
import stopIcon from "../images/stopIcon.webp"; // ストップボタンのアイコン
import sampleMusic from "./sample.mp3"; // 音楽ファイルへの相対パスでインポート
import icon from "../images/icon.png"; // アイコン画像へのパス

const IndexPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // useRefをnullで初期化

  useEffect(() => {
    // Audioインスタンスを生成して、useRefのcurrentに設定
    audioRef.current = new Audio(sampleMusic);

    const handleEnded = () => {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    };

    // イベントリスナーを追加
    audioRef.current.addEventListener("ended", handleEnded);

    // クリーンアップ関数でイベントリスナーを削除
    return () => {
      audioRef.current.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <img src={isPlaying ? stopIcon : playIcon} alt="Play/Stop" style={{ height: "45vw]", width: "45vh", marginBottom: "20px" }} />
      <div>
        <button onClick={togglePlay}>{isPlaying ? "Restart Music" : "Play Music"}</button>
        <button onClick={() => { audioRef.current.pause(); setIsPlaying(false); }}>Stop Music</button>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => 
  <>
    <title>エレクトリカルパレード</title> 
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="ページのURL" />
      <meta property="og:title" content="エレクトリカルパレード" />
      <meta property="og:description" content="ページの説明" />
      <meta property="og:image" content={icon} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="ページのURL" />
      <meta property="twitter:title" content="エレクトリカルパレード" />
      <meta property="twitter:description" content="ページの説明" />
      <meta property="twitter:image" content={icon} />

  </>
;
