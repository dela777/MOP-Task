import { useState } from "react";
import ActivePersonItem from "../Components/ActivePersonItem";
import QuestionItem from "../Components/QuestionItem";
import { ApiUrl } from "../Components/Helpers/ApiUrl";


const Home = () => {
 
  const apiUrl = ApiUrl;

  const [people, setPeople] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [mostLikedQuestions, setMostLikedQuestions] = useState([]);
  const [disable, setDisable] = useState(false);


  const fetchPeople = () => {
    const personsApi = `${apiUrl}people`;
    fetch(personsApi)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response.sort((a, b) => {
          if (a.rating > b.rating) {
            return -1;
          }
          if (a.rating < b.rating) {
            return 1;
          }
          return 0;
        });
      })
      .then((response) => {
        setPeople(response);
      })
      .catch((error) => {
         alert('An error has occuerred!!!' + error)
      })
      .finally(() => {
        setDisable(true);
      });
  };

  const fetchQuestions = (e) => {
    const questionApi = `${apiUrl}questions${e}`;
    fetch(questionApi)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return setQuestions(response);
      }).catch(error=>{
        alert('An error has occuerred!!!' + error)
      });
  };

  const likedQuestions = () => {
    fetch(`${apiUrl}questions`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response.sort((a, b) => {
          if (a.likes > b.likes) {
            return -1;
          }
          if (a.likes < b.likes) {
            return 1;
          }
          return 0;
        });
      })
      .then((response) => {
        setMostLikedQuestions(response);
        
      }).catch(error=>{
        alert('An error has occuerred!!!' + error)
      });
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-4 text-center text-success">
          <button
            className="btn btn-success w-100"
            onClick={() => {
              fetchQuestions("?_limit=10");
            }}
          >
            Last 10 questions
          </button>
          <ul className="list-group mt-3">
            {questions.map((question, i) => {
              return (
                <QuestionItem question={question} amount={question.answers.length} key={i} title="Answers" />
              );
            })}
          </ul>
          {questions.length > 0 && (
            <button
              className="btn btn-secondary w-100 mt-1"
              onClick={() => {
                fetchQuestions("");
              }}
            >
              Load more
            </button>
          )}
        </div>
        <div className="col-4 text-center text-warning ">
          <button
            className="btn btn-warning w-100"
            disabled={disable}
            onClick={fetchPeople}
          >
            Most active persons
          </button>

          <ul className="list-group mt-3">
            {people.map((person, i) => {
              return (
                <ActivePersonItem
                  name={person.name}
                  rating={person.rating}
                  key={i}
                />
              );
            })}
          </ul>
        </div>
        <div className="col-4 text-center text-danger ">
          <button className="btn btn-danger w-100" onClick={likedQuestions}>
            Most liked questions
          </button>
          <ul className="list-group mt-3">
           {
           mostLikedQuestions.map((question,i)=>{
             return <QuestionItem  question={question} amount={question.likes} title="Likes" key={i}/>
           })
           
           }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
