"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";



const Page = () => {
  const questions = [
    {
      id: 1,
      question: "What is the primary key in a database?",
      options: [
        { id: 1, text: "Unique identifier" },
        { id: 2, text: "Foreign key" },
        { id: 3, text: "Index" },
        { id: 4, text: "View" },
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "What does SQL stand for?",
      options: [
        { id: 1, text: "Structured Query Language" },
        { id: 2, text: "Simple Query Language" },
        { id: 3, text: "Sequential Query Language" },
        { id: 4, text: "System Query Language" },
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "Which command is used to remove a table from a database?",
      options: [
        { id: 1, text: "DELETE TABLE" },
        { id: 2, text: "DROP TABLE" },
        { id: 3, text: "REMOVE TABLE" },
        { id: 4, text: "ERASE TABLE" },
      ],
      correctAnswer: 2,
    },
    {
      id: 4,
      question: "What is a foreign key?",
      options: [
        { id: 1, text: "A unique identifier" },
        { id: 2, text: "A key used to join two tables" },
        { id: 3, text: "A temporary key" },
        { id: 4, text: "A key that uniquely identifies a row in a table" },
      ],
      correctAnswer: 2,
    },
    {
      id: 5,
      question: "What does the acronym ACID stand for in database management?",
      options: [
        { id: 1, text: "Atomicity, Consistency, Isolation, Durability" },
        { id: 2, text: "Access, Control, Integrity, Data" },
        { id: 3, text: "Accuracy, Consistency, Isolation, Data" },
        { id: 4, text: "Atomicity, Control, Integrity, Durability" },
      ],
      correctAnswer: 1,
    },
    {
      id: 6,
      question: "Which normal form removes partial dependency?",
      options: [
        { id: 1, text: "First Normal Form (1NF)" },
        { id: 2, text: "Second Normal Form (2NF)" },
        { id: 3, text: "Third Normal Form (3NF)" },
        { id: 4, text: "Boyce-Codd Normal Form (BCNF)" },
      ],
      correctAnswer: 2,
    },
    {
      id: 7,
      question: "What is a transaction in a database?",
      options: [
        {
          id: 1,
          text: "A collection of operations that performs a single logical function",
        },
        { id: 2, text: "A single query execution" },
        { id: 3, text: "A user session in the database" },
        { id: 4, text: "A backup of the database" },
      ],
      correctAnswer: 1,
    },
    {
      id: 8,
      question: "Which SQL keyword is used to retrieve a maximum value?",
      options: [
        { id: 1, text: "MAXIMUM" },
        { id: 2, text: "HIGHEST" },
        { id: 3, text: "TOP" },
        { id: 4, text: "MAX" },
      ],
      correctAnswer: 4,
    },
    {
      id: 9,
      question: "What is the purpose of the JOIN clause in SQL?",
      options: [
        { id: 1, text: "To combine rows from two or more tables" },
        { id: 2, text: "To delete rows in one table" },
        { id: 3, text: "To create a new table" },
        { id: 4, text: "To update rows in one table" },
      ],
      correctAnswer: 1,
    },
    {
      id: 10,
      question:
        "Which type of JOIN returns all rows when there is a match in either table?",
      options: [
        { id: 1, text: "INNER JOIN" },
        { id: 2, text: "LEFT JOIN" },
        { id: 3, text: "RIGHT JOIN" },
        { id: 4, text: "FULL OUTER JOIN" },
      ],
      correctAnswer: 4,
    },
    {
      id: 11,
      question: "What is a database index?",
      options: [
        { id: 1, text: "A copy of the database" },
        { id: 2, text: "A way to efficiently retrieve records" },
        { id: 3, text: "A backup of the database" },
        { id: 4, text: "A user-defined function" },
      ],
      correctAnswer: 2,
    },
    {
      id: 12,
      question: "What is the purpose of the GROUP BY clause in SQL?",
      options: [
        {
          id: 1,
          text: "To group rows that have the same values in specified columns",
        },
        { id: 2, text: "To delete rows in a table" },
        { id: 3, text: "To update rows in a table" },
        { id: 4, text: "To combine columns from multiple tables" },
      ],
      correctAnswer: 1,
    },
    {
      id: 13,
      question: "What does DML stand for in SQL?",
      options: [
        { id: 1, text: "Data Manipulation Language" },
        { id: 2, text: "Data Management Language" },
        { id: 3, text: "Database Manipulation Language" },
        { id: 4, text: "Database Management Language" },
      ],
      correctAnswer: 1,
    },
    {
      id: 14,
      question: "Which command is used to add a new row to a table in SQL?",
      options: [
        { id: 1, text: "INSERT INTO" },
        { id: 2, text: "ADD ROW" },
        { id: 3, text: "CREATE ROW" },
        { id: 4, text: "NEW ROW" },
      ],
      correctAnswer: 1,
    },
    {
      id: 15,
      question: "Which SQL clause is used to filter the result set?",
      options: [
        { id: 1, text: "WHERE" },
        { id: 2, text: "SELECT" },
        { id: 3, text: "FILTER" },
        { id: 4, text: "ORDER BY" },
      ],
      correctAnswer: 1,
    },
    {
      id: 16,
      question: "What does the term 'normalization' mean in database design?",
      options: [
        { id: 1, text: "Organizing data to reduce redundancy" },
        { id: 2, text: "Creating backup copies of data" },
        { id: 3, text: "Increasing data redundancy" },
        { id: 4, text: "Partitioning data into separate tables" },
      ],
      correctAnswer: 1,
    },
    {
      id: 17,
      question:
        "Which SQL function is used to count the number of rows in a table?",
      options: [
        { id: 1, text: "SUM()" },
        { id: 2, text: "COUNT()" },
        { id: 3, text: "TOTAL()" },
        { id: 4, text: "AVERAGE()" },
      ],
      correctAnswer: 2,
    },
    {
      id: 18,
      question: "What is a view in SQL?",
      options: [
        {
          id: 1,
          text: "A virtual table based on the result-set of an SQL statement",
        },
        { id: 2, text: "A temporary table" },
        { id: 3, text: "A copy of a table" },
        { id: 4, text: "A physical table in the database" },
      ],
      correctAnswer: 1,
    },
    {
      id: 19,
      question: "What does the term 'denormalization' mean?",
      options: [
        { id: 1, text: "Adding redundancy back into the database" },
        { id: 2, text: "Removing redundancy from the database" },
        { id: 3, text: "Creating indexes to speed up queries" },
        { id: 4, text: "Creating views to simplify queries" },
      ],
      correctAnswer: 1,
    },
    {
      id: 20,
      question:
        "Which type of database model uses tables to represent data and relationships?",
      options: [
        { id: 1, text: "Relational" },
        { id: 2, text: "Hierarchical" },
        { id: 3, text: "Network" },
        { id: 4, text: "Document" },
      ],
      correctAnswer: 1,
    },
    {
      id: 21,
      question: "What is a stored procedure?",
      options: [
        { id: 1, text: "A SQL query that is stored and can be reused" },
        { id: 2, text: "A function that is called in SQL" },
        { id: 3, text: "A database trigger" },
        { id: 4, text: "A scheduled job in the database" },
      ],
      correctAnswer: 1,
    },
    {
      id: 22,
      question: "What does the term 'schema' refer to in a database?",
      options: [
        { id: 1, text: "The structure of the database" },
        { id: 2, text: "A single table" },
        { id: 3, text: "A single column" },
        { id: 4, text: "The data in the database" },
      ],
      correctAnswer: 1,
    },
    {
      id: 23,
      question:
        "Which SQL statement is used to modify the structure of a database table?",
      options: [
        { id: 1, text: "ALTER TABLE" },
        { id: 2, text: "MODIFY TABLE" },
        { id: 3, text: "UPDATE TABLE" },
        { id: 4, text: "CHANGE TABLE" },
      ],
      correctAnswer: 1,
    },
    {
      id: 24,
      question: "What is a trigger in SQL?",
      options: [
        {
          id: 1,
          text: "A stored procedure that is executed in response to certain events",
        },
        { id: 2, text: "A function that runs periodically" },
        { id: 3, text: "A manual operation to change data" },
        { id: 4, text: "A backup operation" },
      ],
      correctAnswer: 1,
    },
    {
      id: 25,
      question: "Which SQL keyword is used to sort the result-set?",
      options: [
        { id: 1, text: "SORT BY" },
        { id: 2, text: "ORDER BY" },
        { id: 3, text: "GROUP BY" },
        { id: 4, text: "ARRANGE BY" },
      ],
      correctAnswer: 2,
    },
  ];
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (e, questionId) => {
    const { value } = e.target;
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: parseInt(value), // Parse value as integer
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    questions.forEach((question) => {
      if (selectedOptions[question.id] === question.correctAnswer) {
        score += 1;
      }
    });
    alert(`Your score is ${score} out of ${questions.length}`);
  };

  return (
    <div className="h-screen sm:p-5">
      <div>
        <h1 className="text-2xl font-bold py-2">Online Exam</h1>
        <p>
          Following are the questions in which each contains 2.5 marks, and the
          total number is 50 marks. <strong>('Attempt All Questions')</strong>
        </p>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
            <ol>
              <li>
                {question.id}. {question.question}
              </li>
            </ol>
            <br />
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center gap-2">
                <input
                  type="radio"
                  id={`question_${question.id}_${option.id}`}
                  name={`question_${question.id}`}
                  value={option.id}
                  onChange={(e) => handleOptionChange(e, question.id)}
                />
                <label htmlFor={`question_${question.id}_${option.id}`}>
                  {option.text}
                </label>
              </div>
            ))}
            <br />
          </div>
        ))}
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Page;


// import { Button } from "@/components/ui/button";
// import React, { useState } from "react";

// const questions = [
//   {
//     id: 1,
//     question: "What is the primary key in a database?",
//     options: [
//       { id: 1, text: "Unique identifier" },
//       { id: 2, text: "Foreign key" },
//       { id: 3, text: "Index" },
//       { id: 4, text: "View" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 2,
//     question: "What does SQL stand for?",
//     options: [
//       { id: 1, text: "Structured Query Language" },
//       { id: 2, text: "Simple Query Language" },
//       { id: 3, text: "Sequential Query Language" },
//       { id: 4, text: "System Query Language" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 3,
//     question: "Which command is used to remove a table from a database?",
//     options: [
//       { id: 1, text: "DELETE TABLE" },
//       { id: 2, text: "DROP TABLE" },
//       { id: 3, text: "REMOVE TABLE" },
//       { id: 4, text: "ERASE TABLE" },
//     ],
//     correctAnswer: 2,
//   },
//   {
//     id: 4,
//     question: "What is a foreign key?",
//     options: [
//       { id: 1, text: "A unique identifier" },
//       { id: 2, text: "A key used to join two tables" },
//       { id: 3, text: "A temporary key" },
//       { id: 4, text: "A key that uniquely identifies a row in a table" },
//     ],
//     correctAnswer: 2,
//   },
//   {
//     id: 5,
//     question: "What does the acronym ACID stand for in database management?",
//     options: [
//       { id: 1, text: "Atomicity, Consistency, Isolation, Durability" },
//       { id: 2, text: "Access, Control, Integrity, Data" },
//       { id: 3, text: "Accuracy, Consistency, Isolation, Data" },
//       { id: 4, text: "Atomicity, Control, Integrity, Durability" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 6,
//     question: "Which normal form removes partial dependency?",
//     options: [
//       { id: 1, text: "First Normal Form (1NF)" },
//       { id: 2, text: "Second Normal Form (2NF)" },
//       { id: 3, text: "Third Normal Form (3NF)" },
//       { id: 4, text: "Boyce-Codd Normal Form (BCNF)" },
//     ],
//     correctAnswer: 2,
//   },
//   {
//     id: 7,
//     question: "What is a transaction in a database?",
//     options: [
//       {
//         id: 1,
//         text: "A collection of operations that performs a single logical function",
//       },
//       { id: 2, text: "A single query execution" },
//       { id: 3, text: "A user session in the database" },
//       { id: 4, text: "A backup of the database" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 8,
//     question: "Which SQL keyword is used to retrieve a maximum value?",
//     options: [
//       { id: 1, text: "MAXIMUM" },
//       { id: 2, text: "HIGHEST" },
//       { id: 3, text: "TOP" },
//       { id: 4, text: "MAX" },
//     ],
//     correctAnswer: 4,
//   },
//   {
//     id: 9,
//     question: "What is the purpose of the JOIN clause in SQL?",
//     options: [
//       { id: 1, text: "To combine rows from two or more tables" },
//       { id: 2, text: "To delete rows in one table" },
//       { id: 3, text: "To create a new table" },
//       { id: 4, text: "To update rows in one table" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 10,
//     question:
//       "Which type of JOIN returns all rows when there is a match in either table?",
//     options: [
//       { id: 1, text: "INNER JOIN" },
//       { id: 2, text: "LEFT JOIN" },
//       { id: 3, text: "RIGHT JOIN" },
//       { id: 4, text: "FULL OUTER JOIN" },
//     ],
//     correctAnswer: 4,
//   },
//   {
//     id: 11,
//     question: "What is a database index?",
//     options: [
//       { id: 1, text: "A copy of the database" },
//       { id: 2, text: "A way to efficiently retrieve records" },
//       { id: 3, text: "A backup of the database" },
//       { id: 4, text: "A user-defined function" },
//     ],
//     correctAnswer: 2,
//   },
//   {
//     id: 12,
//     question: "What is the purpose of the GROUP BY clause in SQL?",
//     options: [
//       {
//         id: 1,
//         text: "To group rows that have the same values in specified columns",
//       },
//       { id: 2, text: "To delete rows in a table" },
//       { id: 3, text: "To update rows in a table" },
//       { id: 4, text: "To combine columns from multiple tables" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 13,
//     question: "What does DML stand for in SQL?",
//     options: [
//       { id: 1, text: "Data Manipulation Language" },
//       { id: 2, text: "Data Management Language" },
//       { id: 3, text: "Database Manipulation Language" },
//       { id: 4, text: "Database Management Language" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 14,
//     question: "Which command is used to add a new row to a table in SQL?",
//     options: [
//       { id: 1, text: "INSERT INTO" },
//       { id: 2, text: "ADD ROW" },
//       { id: 3, text: "CREATE ROW" },
//       { id: 4, text: "NEW ROW" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 15,
//     question: "Which SQL clause is used to filter the result set?",
//     options: [
//       { id: 1, text: "WHERE" },
//       { id: 2, text: "SELECT" },
//       { id: 3, text: "FILTER" },
//       { id: 4, text: "ORDER BY" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 16,
//     question: "What does the term 'normalization' mean in database design?",
//     options: [
//       { id: 1, text: "Organizing data to reduce redundancy" },
//       { id: 2, text: "Creating backup copies of data" },
//       { id: 3, text: "Increasing data redundancy" },
//       { id: 4, text: "Partitioning data into separate tables" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 17,
//     question:
//       "Which SQL function is used to count the number of rows in a table?",
//     options: [
//       { id: 1, text: "SUM()" },
//       { id: 2, text: "COUNT()" },
//       { id: 3, text: "TOTAL()" },
//       { id: 4, text: "AVERAGE()" },
//     ],
//     correctAnswer: 2,
//   },
//   {
//     id: 18,
//     question: "What is a view in SQL?",
//     options: [
//       {
//         id: 1,
//         text: "A virtual table based on the result-set of an SQL statement",
//       },
//       { id: 2, text: "A temporary table" },
//       { id: 3, text: "A copy of a table" },
//       { id: 4, text: "A physical table in the database" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 19,
//     question: "What does the term 'denormalization' mean?",
//     options: [
//       { id: 1, text: "Adding redundancy back into the database" },
//       { id: 2, text: "Removing redundancy from the database" },
//       { id: 3, text: "Creating indexes to speed up queries" },
//       { id: 4, text: "Creating views to simplify queries" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 20,
//     question:
//       "Which type of database model uses tables to represent data and relationships?",
//     options: [
//       { id: 1, text: "Relational" },
//       { id: 2, text: "Hierarchical" },
//       { id: 3, text: "Network" },
//       { id: 4, text: "Document" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 21,
//     question: "What is a stored procedure?",
//     options: [
//       { id: 1, text: "A SQL query that is stored and can be reused" },
//       { id: 2, text: "A function that is called in SQL" },
//       { id: 3, text: "A database trigger" },
//       { id: 4, text: "A scheduled job in the database" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 22,
//     question: "What does the term 'schema' refer to in a database?",
//     options: [
//       { id: 1, text: "The structure of the database" },
//       { id: 2, text: "A single table" },
//       { id: 3, text: "A single column" },
//       { id: 4, text: "The data in the database" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 23,
//     question:
//       "Which SQL statement is used to modify the structure of a database table?",
//     options: [
//       { id: 1, text: "ALTER TABLE" },
//       { id: 2, text: "MODIFY TABLE" },
//       { id: 3, text: "UPDATE TABLE" },
//       { id: 4, text: "CHANGE TABLE" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 24,
//     question: "What is a trigger in SQL?",
//     options: [
//       {
//         id: 1,
//         text: "A stored procedure that is executed in response to certain events",
//       },
//       { id: 2, text: "A function that runs periodically" },
//       { id: 3, text: "A manual operation to change data" },
//       { id: 4, text: "A backup operation" },
//     ],
//     correctAnswer: 1,
//   },
//   {
//     id: 25,
//     question: "Which SQL keyword is used to sort the result-set?",
//     options: [
//       { id: 1, text: "SORT BY" },
//       { id: 2, text: "ORDER BY" },
//       { id: 3, text: "GROUP BY" },
//       { id: 4, text: "ARRANGE BY" },
//     ],
//     correctAnswer: 2,
//   },
// ];

// //   const [selectedOptions, setSelectedOptions] = useState([]);

// const Page = () => {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   // const handleOptionChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setSelectedOptions({
//   //     ...selectedOptions,
//   //     [name]: value
//   //   });
//   // };
//   // const handlesubmit=()=>{

//   // }
//   // console.log("hello"+questions.question);

//   console.log(questions[0].correctAnswer);
//   const handleOptionChange = (e, questionId) => {
//     const { value } = e.target;
//     setSelectedOptions({
//       ...selectedOptions,
//       [questionId]: value,
//     });
//     // if (selectedOptions==questions.correctAnswer) {

//     // }
//   };

//   let score=0;
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // if (score) {
//     //   const ids = questions.map(question => {
//     //     if (question.options === question.correctAnswer) {
//     //       score += 1;
//     //     }
//     //   });
//       // console.log(ids);
//       questions.forEach((question) => {
//         if (selectedOptions[question.id] === question.correctAnswer) {
//           score += 1;
//         }
//       });
//       alert(`Your score is ${score} out of ${questions.length}`);
//     }
//   // };
//   return (
//     <div className=" h-screen sm:p-5  ">
//       <div className=" ">
//         <h1 className=" text-2xl font-bold py-2"> Online Exam</h1>
//         Q. Following are the questions in which each contain 2.5 marks and total
//         number is 50 marks. <strong>('Attempt All Questions')</strong>
//       </div>
//       <br />
//       <form action="" onSubmit={()=>handleSubmit()}>
//         {questions.map((question, index) => {
//           return (
//             <>
//               <ol className="" key={index}>
//                 <li>
//                   {question.id}. {question.question}
//                 </li>
//               </ol>
//               <br />
//               <div key={index}>
//                 {question.options.map((option, optionIndex) => {
//                   return (
//                     <div
//                       key={optionIndex}
//                       className="flex flex-cl justfy-center gap-2"
//                     >
//                       <input
//                         type="radio"
//                         name={`question_${question.id}`} // Use a unique name for each question
//                         value={option.id}
//                         onChange={(e) => handleOptionChange(e, question.id)} // Pass the question id
//                       />
//                       <span>{option.text}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//               <br />
//             </>
//           );
//         })}
//         <Button variant="secondary" type="submit">
//           Submit
//         </Button>
//       </form>

//       <br />
//     </div>
//   );
// };

// export default Page;
