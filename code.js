const getData = async () => {

    const input = document.querySelector('#search').value;
  const url =
    `https://google-search72.p.rapidapi.com/search?q=${input}&gl=us&lr=lang_en&num=10&start=0`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "610b73e0f0msh2cb1a0e497a4aeap1ce150jsn8760ef1be939",
      "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const mainData = result.items;
    console.log(mainData);

    mainData.map((res, index) => {
        document.querySelector('#result').innerHTML +=`

        <h1> <a href="${res.link}">${res.title}</h1>
        <h4>${res.htmlTitle}</h4>
        `
    });

  } catch (error) {
    console.error(error);
  }
};
