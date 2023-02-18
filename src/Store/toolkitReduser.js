import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  News: [
    {
      TopicPhotoUrl: "https://azbyka.ru/wp-content/uploads/2016/07/priroda.jpg",
      Name: "Some News",
      Text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    },
    {
      TopicPhotoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Desert_Electric.jpg",
      Name: "Some News",
      Text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    },
    {
      TopicPhotoUrl:
        "https://www.keep-inspired.com/wp-content/uploads/2020/05/sebastien-gabriel-IMlv9Jlb24-unsplash-1-1024x683.jpg",
      Name: "Some News",
      Text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    },
    {
      TopicPhotoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKmaO1TeTDm68pAWFBLVQZo7LORA7Om2a9Pusw62mBZCyz7y_yavQ-fBt9_4bdmpE1mM&usqp=CAU",
      Name: "Some News",
      Text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    },
  ],
};

export const increment = createAction("INCREMENT");

export default createReducer(initialState, {
  [increment]: function (state) {
    state.count = state.count + 1;
  },
});
