import React, { useState, useRef, useEffect } from "react"
import sampleMusic from "./sample.mp3"; // 音楽ファイルへの相対パスでインポート

const IndexPage = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Audioオブジェクトの初期化をクライアントサイドでのみ行う
    audioRef.current = new Audio(sampleMusic)
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={togglePlay}>{isPlaying ? "Restart Music" : "Play Music"}</button>
      <button onClick={() => {audioRef.current.pause(); setIsPlaying(false)}}>Stop Music</button>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>エレクトリカルパレード</title>
