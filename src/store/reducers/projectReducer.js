const initState = {
  projects: [
    {
      id: "1",
      address:
        "The Bright mall 15/9 Rama2 Rd,, Thakam, Bangkhunthain,, Bangkok 10150",
      image: "C:\fakepathBurgerKing.jpg",
      openHours: "Open 24 hours",
      phone: "022-123-1234",
      priceType: "$$ - Fast food restaurant",
      restaurantName: "(1)Burker King - The Bright Mall",
    },
    {
      id: "2",
      address:
        "The Bright mall 15/9 Rama2 Rd,, Thakam, Bangkhunthain,, Bangkok 10150",
      image: "C:\fakepathBurgerKing.jpg",
      openHours: "Open 24 hours",
      phone: "022-123-1234",
      priceType: "$$ - Fast food restaurant",
      restaurantName: "(2)Burker King - The Bright Mall",
    },
    {
      id: "3",
      address:
        "The Bright mall 15/9 Rama2 Rd,, Thakam, Bangkhunthain,, Bangkok 10150",
      image: "C:\fakepathBurgerKing.jpg",
      openHours: "Open 24 hours",
      phone: "022-123-1234",
      priceType: "$$ - Fast food restaurant",
      restaurantName: "(3)Burker King - The Bright Mall",
    }
  ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_RESTAURANT':
            console.log('createProject',action.project);
            return state;
        case 'CREATE_RESTAURANT_ERROR':
            console.log("createProject_err", action.err);
            return state;
        default:
          return state;
    }
};

export default projectReducer;
 