
Derived state is a state that can be calculated from using the existing state.

For example if you have a redux slice which stores your weekly expenses.

store=[{id:1,task:"grocery",cost:120},]
at the end of the week you want to calculate the total weekly expense. 
You could keep another state totalSofar and everytime you add a new task you could add the expense to the totalSoFar but this is unnecessary.
Because you would need the total cost only on demand, whenever you needed. ut for one time calculatation, 
  you have to create a new state value,write extra code to update this state value.

Instead, you could create a button to show you the totalSoFar and for the onClick handler, you could have a function that loop through the store array.

const totalCost = useSelector((state) =>
       state.tasks
      .reduce((acc, task) => acc + task.cost, 0)
  );
