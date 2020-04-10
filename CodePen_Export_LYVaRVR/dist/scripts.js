let names = ["Tibi", "Peti", "Sanyi", "Adam", "Mate", "Erno", "Arpad", "Geza", "Bela"]; 
names.forEach((names,i) => { $("li")[i].append(names);
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $('body').append(
      '<h1>Hello Word</h1>',
      '<p>Paragraph</p>'
  );