const danhSachXucXac = [
  { ma: "one", classes: "fa fa-dice-one", so: 1 },

  { ma: "two", classes: "fa fa-dice-two", so: 2 },

  { ma: "three", classes: "fa fa-dice-three", so: 3 },

  { ma: "four", classes: "fa fa-dice-four", so: 4 },

  { ma: "five", classes: "fa fa-dice-five", so: 5 },

  { ma: "six", classes: "fa fa-dice-six", so: 6 },
];
const initialState = {
  xucXac: [
    { ma: "one", classes: "fa fa-dice-one", so: 1 },
    { ma: "two", hinhAnh: "fa fa-dice-two", so: 2 },
    { ma: "six", hinhAnh: "fa fa-dice-six", so: 3 },
  ],
  taiXiu: true,
  soBanThang: 1,
  SoBanChoi: 4,
};

const GameTaiXiuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHON_TAI_XIU":
      //Bóc tác
      let { taiXiu } = state;
      //set lại giá trị
      taiXiu = action.taiXiu;

      // return obj, luu lại state
      return { ...state, taiXiu };
    default:
      break;
  }

  return { ...state };
};

export default GameTaiXiuReducer;
