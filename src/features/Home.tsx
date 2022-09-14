import React, { useEffect, useState } from 'react';
import './Home.scss';
import { getTodaysQuiz } from '../app/api/quiz';
import Quiz from '../app/model/Quiz';
import GamePlay from './GamePlay/GamePlay';
import { sendMoengageEvent } from '../app/tracker/moengage';

function Home() {

  const [quiz, setQuiz] = useState<Quiz.RootObject>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchTodaysQuiz()
    sendMoengageEvent("Entri Game Visit");
  }, [])

  const fetchTodaysQuiz = async () => {
    setIsLoading(true)
    try {
      const response = await getTodaysQuiz()
      setQuiz(response.data)
    } catch (error) {

    }
    setIsLoading(false)
  }

  if (quiz) {
    return (
      <GamePlay quiz={quiz} />
    )
  }

  if (!isLoading && !quiz) {
    return <div>No quiz today, comeback later</div>
  }

  return (
    <span style={{ fontFamily: 'Bungee', textAlign: 'center' }}>Loading</span>
  )

}

export default Home;
