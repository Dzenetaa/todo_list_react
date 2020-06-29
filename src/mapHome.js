let todos = [[], [], []];
let titles = ['list1', 'list2', 'list3'];
todos.map((todo, index) => {
            const ind = index;
            titles.map((title, index) => {
              if (ind === index) {
                console.log("title for " + index + " is " + title);
              }
               });
});