export const HAPPY_BUTTON_CLICKED = "happy button clicked";
export const SAD_BUTTON_CLICKED = "sad button clicked";
export const happyButtonClicked = (count: number, when: Date) => {
  return {
    type: HAPPY_BUTTON_CLICKED,
    payload: { count, when },
  };
};
export const sadButtonClicked = (count: number, when: Date) => {
  return {
    type: SAD_BUTTON_CLICKED,
    payload: { count, when },
  };
};
