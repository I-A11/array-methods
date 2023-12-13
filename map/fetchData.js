// Using async function to get data from API
// Use await keyword with async function
// public api: https://github.com/public-apis/public-apis
// url: "https://cat-fact.herokuapp.com/facts"

const url = "https://cat-fact.herokuapp.com/facts";

//Start to write fetch function

const fetchData = async () => {
  const data = await fetch(url);
  const response = await data.json();
  //   console.log(response);
  const catFacts = response.map((fact) => {
    return fact.text;
  });
  console.log(catFacts);
};

fetchData();
