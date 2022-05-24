import { useState } from "react";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import imageTsk from "img/TaskImg/5SecTask.png";
import styles from "./InteractiveTask.module.scss";

const InteractiveTask = () => {
  const [cards] = useState([
    { id: 1, title: "Відкритий ключ Боба", answer: false },
    { id: 2, title: "Закритий ключ Боба", answer: false },
    { id: 3, title: "Відкритий ключ Еліс", answer: true },
    { id: 4, title: "Закритий ключ Еліс", answer: false },
  ]);

  const [board, setBoard] = useState([]);
  const navigate = useNavigate();

  const backToCourse = () => navigate("/course")

  const cardHandler = (id) => {
    const newCard = cards.filter((card) => card.id === id);
    setBoard(newCard);
  };

  const [isRigntAnswer, setIsRightAnswer] = useState(null);

  const checkAnswer = () => {
    board.map((b) =>
      b.answer === true ? setIsRightAnswer(true) : setIsRightAnswer(false)
    );
  };

  return (
    <section className={styles.container}>
      <button className={styles.backBtn} onClick={backToCourse}><ArrowBackIcon/> Повернутися до курсу</button>
      <h2 className={styles.heading}>Завдання: перетягніть вірний ключ</h2>
      <div className={styles.alertContainer}>
        {isRigntAnswer === true && (
          <Alert severity="success" variant="filled" autoHideDuration={6000}> 
            Правильна відповідь!
          </Alert>
        )}
        {isRigntAnswer === false && (
          <Alert severity="error" variant="filled" autoHideDuration={6000}>
            Відповідь неправильна!
          </Alert>
        )}
      </div>
      <div className={styles.taskContainer}>
        <img className={styles.taskImg} src={imageTsk} alt="" />
        <div className={styles.cardContainer}>
          {cards.map((card) => (
            <div
              className={styles.answerCardItem}
              key={`${card.id}-${card.title}`}
              onClick={() => cardHandler(card.id)}
            >
              {card.title}
            </div>
          ))}
        </div>
        <div className={styles.answerBoard}>
          {board.map((b) => (
            <div key={`${b.id}-a`} className={styles.answerCardItemSelected}>
              {b.title}
            </div>
          ))}
        </div>
        <button className={styles.taskBtn} onClick={checkAnswer}>
          Перевірити
        </button>
      </div>
    </section>
  );
};

export default InteractiveTask;
