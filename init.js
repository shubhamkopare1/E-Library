require('dotenv').config();
let Book =require("./models/book")
let mongoose = require("mongoose");
const StudentData = require("./models/studentData");
const dbUrl = process.env.MONGO_URL;
// "mongodb://127.0.0.1:27017/books"
async function main(){
    await mongoose.connect(dbUrl)
}
main().then(()=>{
    console.log("connection established");
}).catch((err)=>{
    console.log(err);
})
const booksData = [
  //first year
  {
    title: ["Engineering Physics By M. N. Avadhanulu","First year books"],
    book:"10",
   location : "block 1  top row starting ",
    description: "A Textbook of Engineering Physics has been written primarily for the first year undergraduate students of engineering and also those of bachelors in sciences while also serving as a reference text for technologies and practitioners.",
    image: "https://m.media-amazon.com/images/I/516tWnCK01L._SY342_.jpg",
  
    author: "M N Avadhanulu, TVS Arun Murthy & P G Kshirsagar",
   
    language: "English",
    

    info: "A Textbook of Engineering Physics' has been written primarily for the first year undergraduate students of engineering and also those of bachelors in sciences while also serving as a reference text for technologies and practitioners. The book explains all the relevant and important topics related to physics in an easy-to-understand manner. Fifty chapters, beginning with a detailed discussion on oscillation and waves, the book goes on to discuss semiconductors, optical fibers, lasers, nanotechnology, and liquid crystals. A book which has seen, foreseen and incorporated changes in the subject for more than 25 years, it continues to be one of the most sought-after texts by the students."
  },
  {
    title: ["Engineering Mathematics","First year books"],
    book:"10",
    location : "block 1  top row starting ",
    category: "First year books",
    description: "A comprehensive book on Engineering Mathematics suitable for first-year students. It covers topics such as calculus, differential equations, linear algebra, and more.",
    image: "https://m.media-amazon.com/images/I/41LaegfnWnL._SY445_SX342_.jpg",

    author: "K.A. Stroud",
   
    language: "English",
   
    info: "This book is designed to provide a solid foundation in engineering mathematics for first-year students. It offers clear explanations of mathematical concepts and includes numerous examples and exercises to reinforce learning."
  },
  {
    title: ["Programming in C","First year books"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A comprehensive textbook on programming in the C language covering topics such as variables, control structures, functions, arrays, pointers, and file handling.",
    author: "Stephen G. Kochan",
   
    image: "https://m.media-amazon.com/images/I/51CxmVYKYsL._SY445_SX342_.jpg",
   
    info: "This book offers a thorough introduction to programming in the C language. It covers basic to advanced concepts, with practical examples and exercises to reinforce learning."
  },
  {
    title: ["Chemistry for Engineers","First year books"],
    book:"10",
    location : "block 1  top row starting ",
    category: "First year books",
    description: "An introductory textbook on chemistry tailored for engineering students. It covers basic concepts such as atomic structure, chemical bonding, and reactions.",
    image: "https://m.media-amazon.com/images/I/61krAkI101L._SY466_.jpg",
  
    author: "John T. Moore",
   
    language: "English",
    
    info: "This book provides a fundamental understanding of chemistry concepts essential for engineering students. It emphasizes the practical applications of chemistry in engineering disciplines."
  },


  {
    title: ["Engineering Drawing","First year books"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A comprehensive guide to engineering drawing covering topics such as orthographic projection, isometric projection, and CAD software.",
    image: "https://m.media-amazon.com/images/I/5141vAW5lrL._SY445_SX342_.jpg",

    author: "N.D. Bhatt",
 
    language: "English",
  
    info: "This book is designed to develop the drawing skills of engineering students. It covers both manual drafting techniques and computer-aided design (CAD) software."
  },
  {
    title: ["Introduction to Programming","First year books"],
    book:"10",
    location : "block 1  top row starting ",
    description: "An introductory textbook on programming suitable for first-year students. It covers basic programming concepts using a popular programming language.",
    image: "https://m.media-amazon.com/images/I/81V-itCvcQL._SY466_.jpg",

    author: "John Doe",
    
    language: "English",
   
    info: "This book introduces students to programming concepts such as variables, control structures, functions, and data types. It uses a step-by-step approach to teach programming principles."
  },
  {
    title: ["Introduction to Electrical Engineering","First year books"],
    book:"10",
    location : "block 1  top row starting ",
    description: "An introductory textbook on electrical engineering covering topics such as circuits, electromagnetism, and electrical machines.",
    image: "https://m.media-amazon.com/images/I/41qm5I91LFL._SY445_SX342_.jpg",
  
    author: "Vincent Del Toro",
  
    language: "English",
   
    info: "This book provides a solid foundation in electrical engineering principles for first-year students. It includes practical examples and exercises to reinforce learning."
  },
  {
    title: ["Fundamentals of Materials Science and Engineering","First year books"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A comprehensive textbook on materials science and engineering covering topics such as atomic structure, phase diagrams, and mechanical properties.",
    image: "	https://m.media-amazon.com/images/I/91yoBgwCkML._SY466_.jpg",
    
    author: "William D. Callister Jr.",

    language: "English",
 
    info: "This book introduces students to the fundamentals of materials science and engineering. It emphasizes the relationship between structure, properties, processing, and performance of materials."
  },
  // secod year books 
  {
    title: ["Introduction to Algorithms","Second year books CSE, IT,DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A comprehensive textbook on algorithms covering topics such as sorting, searching, and graph algorithms.",
    author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
   
   
    image: "https://m.media-amazon.com/images/I/61O5SsbL8HL._SY466_.jpg",
 
    info: "This book provides a thorough introduction to algorithms commonly used in computer science. It covers both theoretical concepts and practical implementations with numerous examples and exercises."
  },
  {
    title: ["Database Management Systems","Second year books CSE, IT ,DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A textbook on database management systems covering topics such as relational databases, SQL, and database design.",
    author: "Raghu Ramakrishnan, Johannes Gehrke",
  
    image: "https://m.media-amazon.com/images/I/61CUat-cJJL._SY466_.jpg",
  
    info: "This book offers a comprehensive introduction to database management systems. It covers both fundamental and advanced concepts, with a focus on practical applications and real-world scenarios."
  },
  {
    title: ["Operating System Concepts","Second year books CSE, IT ,DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "An introductory textbook on operating system concepts covering topics such as process management, memory management, and file systems.",
    author: "Abraham Silberschatz, Peter Baer Galvin, Greg Gagne",
  
    image: "https://m.media-amazon.com/images/I/41+TH+OFZCL._SY445_SX342_.jpg",
 
    info: "This book provides a solid foundation in the principles of operating systems. It covers both theoretical concepts and practical aspects, with numerous examples and exercises to reinforce learning."
  },
  {
    title: ["Introduction to Programming with Python","Second year books CSE, IT ,DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A beginner's textbook on programming using Python covering topics such as variables, control flow, functions, and data structures.",
    author: "John Zelle",

    image: "https://m.media-amazon.com/images/I/419NS17nPKL._SY445_SX342_.jpg",
   
    info: "This book provides a gentle introduction to programming concepts using Python. It covers basic programming constructs and problem-solving techniques, with hands-on exercises and examples."
  },
  {
    title: ["Discrete Mathematics and Its Applications","Second year books CSE, IT ,DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A textbook on discrete mathematics covering topics such as logic, set theory, combinatorics, and graph theory.",
    author: "Kenneth H. Rosen",
  
    image: "https://m.media-amazon.com/images/I/51E75M0Rm5L._SY445_SX342_.jpg",
   

    info: "This book offers a comprehensive introduction to discrete mathematics concepts and their applications. It covers both theoretical foundations and practical problem-solving techniques, with numerous examples and exercises."
  },
  {
    title: ["Data Structures and Algorithms in Python","Second year books CSE, IT ,DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A textbook on data structures and algorithms covering topics such as arrays, linked lists, trees, sorting algorithms, and searching algorithms using Python.",
    author: "Michael T. Goodrich, Roberto Tamassia, Michael H. Goldwasser",
   
    image: "https://m.media-amazon.com/images/I/51sV1Ue4E+L._SX342_SY445_.jpg",
    
  
    info: "This book provides a comprehensive overview of data structures and algorithms using Python. It covers fundamental concepts, design techniques, and analysis of algorithms, with practical implementations and exercises."
  },
  {
    title: ["Mechanics of Materials","Second year books ME,ECE"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A comprehensive textbook on mechanics of materials covering topics such as stress, strain, torsion, and bending.",
    author: "Ferdinand P. Beer, E. Russell Johnston Jr., John T. DeWolf",
  
    image: "https://m.media-amazon.com/images/I/51ffvSAc+fL._SY445_SX342_.jpg",
   
    info: "This book provides a solid foundation in the principles of mechanics of materials for second-year students. It covers both theoretical concepts and practical applications with numerous examples and exercises."
  },
  {
    title: ["Electric Circuits","Second year books EE"],
    book:"10",
    location : "block 1  top row starting ",
    description: "An introductory textbook on electric circuits covering topics such as Ohm's law, Kirchhoff's laws, and circuit analysis techniques.",
    author: "James W. Nilsson, Susan A. Riedel",
  
    image: "https://rukminim2.flixcart.com/image/416/416/kdt50nk0/book/4/8/4/electronics-circuits-second-year-engineering-degree-entc-new-original-imafumhqygdg7grw.jpeg?q=70&crop=false",
  
    info: "This book introduces students to the fundamentals of electric circuits and circuit analysis techniques. It includes practical examples and exercises to reinforce learning."
  },
  {
    title: ["Digital Electronics","Second year books ECE"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A comprehensive textbook on digital electronics covering topics such as Boolean algebra, logic gates, and sequential circuits.",
    author: "Thomas L. Floyd",
   

    image: "https://m.media-amazon.com/images/I/81ZBMCOBPZL._AC_UY218_.jpg 1x, https://m.media-amazon.com/images/I/81ZBMCOBPZL._AC_UY327_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/81ZBMCOBPZL._AC_UY436_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/81ZBMCOBPZL._AC_UY545_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/81ZBMCOBPZL._AC_UY654_FMwebp_QL65_.jpg 3x",
  
    info: "This book provides a solid foundation in digital electronics for second-year students. It covers both theoretical concepts and practical design techniques with numerous examples and exercises."
  },
  //third year books 
  {
    title:[ "Computer Networks","Third year books CSE, IT ,DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A comprehensive textbook on computer networks covering topics such as network protocols, routing algorithms, and network security.",
    author: "Andrew S. Tanenbaum, David J. Wetherall",
   
    image: "https://m.media-amazon.com/images/I/41DDNTatx5L._SY466_.jpg",
   
    info: "This book provides a thorough overview of computer networks and their underlying principles. It covers both theoretical concepts and practical implementations, with a focus on modern networking technologies and protocols."
  },
  {
    title: ["Software Engineering","Third year books CSE, IT ,DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A textbook on software engineering covering topics such as software development methodologies, software testing, and software project management.",
    author: "Ian Sommerville",
  
    image: "https://m.media-amazon.com/images/I/41Z7SzW4PRL._SX342_SY445_.jpg",
    
    info: "This book offers a comprehensive introduction to software engineering principles and practices. It covers the entire software development lifecycle, from requirements engineering to maintenance, with a focus on practical techniques and tools."
  },
  {
    title: ["Web Technologies","Third year books CSE, IT ,DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "An introductory textbook on web technologies covering topics such as HTML, CSS, JavaScript, and web development frameworks.",
    author: "Jeffrey C. Jackson",
   
    image: "https://m.media-amazon.com/images/I/51wmMrunyPL._SX342_SY445_.jpg",
    
    info: "This book provides a solid foundation in web technologies and their applications. It covers both front-end and back-end development, with hands-on examples and projects to reinforce learning."
  },
  {
    title: ["Machine Learning: A Probabilistic Perspective","Third year books CSE, IT ,DS,AI"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A comprehensive textbook on machine learning covering topics such as probabilistic models, Bayesian inference, and deep learning.",
    author: "Kevin P. Murphy",
   
    image: "https://m.media-amazon.com/images/I/41+kXyPa6XL._SX342_SY445_.jpg",
   
    info: "This book provides a rigorous introduction to machine learning from a probabilistic perspective. It covers a wide range of topics, including supervised and unsupervised learning, graphical models, and reinforcement learning, with numerous examples and exercises."
  },
  {
    title: ["Data Mining: Concepts and Techniques","Third year books DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A textbook on data mining covering topics such as association analysis, classification, clustering, and outlier detection.",
    author: "Jiawei Han, Micheline Kamber, Jian Pei",
   
    image: "https://m.media-amazon.com/images/I/51TBH6xgCiS._SX342_SY445_.jpg",
  
    info: "This book offers a comprehensive overview of data mining techniques and algorithms. It covers both fundamental and advanced concepts, with a focus on practical applications and real-world case studies."
  },
  {
    title: ["Deep Learning","Third year books DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "An introductory textbook on deep learning covering topics such as neural networks, convolutional networks, recurrent networks, and generative models.",
    author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
    
    image: "https://m.media-amazon.com/images/I/A10G+oKN3LL._SY466_.jpg",
   
    info: "This book provides a comprehensive introduction to deep learning techniques and architectures. It covers both theoretical foundations and practical implementations, with a focus on training deep neural networks for various tasks."
  },
  //forth year books
  {
    title: ["Cybersecurity: Principles and Practices","Forth year books CSE, IT ,DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A comprehensive textbook on cybersecurity covering topics such as cryptography, network security, and security management.",
    author: "William Stallings, Lawrie Brown",
  
    image: "https://m.media-amazon.com/images/I/61soqRJIbEL._SY466_.jpg",
  
   
    info: "This book provides an in-depth understanding of cybersecurity principles and practices. It covers a wide range of topics, including encryption algorithms, intrusion detection systems, and security policies, with real-world examples and case studies."
  },
  {
    title: ["Cloud Computing: Concepts, Technology & Architecture","Forth year books CSE, IT ,DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "A textbook on cloud computing covering topics such as cloud service models, virtualization, and cloud security.",
    author: "Thomas Erl, Ricardo Puttini, Zaigham Mahmood",
   
    image: "https://m.media-amazon.com/images/I/61THCj4q6FL._SX342_SY445_.jpg",
   
   
    info: "This book offers a comprehensive overview of cloud computing concepts, technologies, and architectures. It covers both theoretical foundations and practical implementations, with a focus on cloud service models, deployment models, and emerging trends."
  },
  {
    title: ["Information Retrieval: Implementing and Evaluating Search Engines","Forth year books CSE, IT ,DS"],
    book:"10",
    location : "block 1  top row starting ",
    description: "An introductory textbook on information retrieval covering topics such as indexing, querying, and evaluation of search engines.",
    author: "Stefan Büttcher, Charles L. A. Clarke, Gordon V. Cormack",
    
    image: "https://m.media-amazon.com/images/I/715ptznXPkL._SY466_.jpg",
    
  
    info: "This book provides a practical introduction to information retrieval techniques and algorithms. It covers both traditional and modern approaches to building search engines, with a focus on indexing methods, retrieval models, and evaluation metrics."
  },

  ];
   


  const studentsData = [
    {
      studentId: "TBT22385",
      name: "Shubham Kopare",
      branch: "Information Technology",
      contact: "8485029672",
      college: "Tulsiram Gaikwad Patil College Of Engineering Nagpur"
    },
    {
      studentId: "TBT22110",
      name: "Tannu Goswami",
      branch: "Information Technology",
      contact: "9665675747",
      college: "Tulsiram Gaikwad Patil College Of Engineering Nagpur"
    },
    {
      studentId: "TBT22208",
      name: " Sumit Kumar",
      branch: "Information Technology",
      contact: "6206516089",
      college: "Tulsiram Gaikwad Patil College Of Engineering Nagpur"
    },
    {
      studentId: "TBT22386",
      name: "Chagan Rakhade",
      branch: "Data Science",
      contact: "9098765432",
      college: "Tulsiram Gaikwad Patil College Of Engineering Nagpur"
    },
    {
      studentId: "TBT22386",
      name: "Chagan Rakhade",
      branch: "Data Science",
      contact: "9098765432",
      college: "Tulsiram Gaikwad Patil College Of Engineering Nagpur"
    },
    {
      studentId: "STU005",
      name: "Michael Johnson",
      branch: "Information Technology",
      contact: "9871234567",
      college: "EFG Institute of Science"
    }
  ];
  
 
  
// Clear and insert books data
Book.deleteMany({})
  .then(() => {
    return Book.insertMany(booksData);
  })
  .then(insertedDocuments => {
    console.log("Books data cleared and new documents inserted:", insertedDocuments.length);
    console.log("Books data saved successfully.");
  })
  .catch(error => {
    console.error("Error inserting book documents:", error);
  });

// Clear and insert student data
StudentData.deleteMany({})
  .then(() => {
    return StudentData.insertMany(studentsData);
  })
  .then(insertedDocuments => {
    console.log("Student data cleared and new documents inserted:", insertedDocuments.length);
    console.log("Student data saved successfully.");
  })
  .catch(error => {
    console.error("Error inserting student documents:", error);
  });




  