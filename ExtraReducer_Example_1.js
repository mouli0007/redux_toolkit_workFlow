
Making an dependency change if one slice function change it will mkae another slice data change automatically  


extraReducers: (builder) => {
    // addCar () action from an another slice reducer
    // while running addCar we are changing the state of another slice data
    builder.addCase(addCar, (state) => {
      state.name = "";
      state.cost = 0;
    });
  },
