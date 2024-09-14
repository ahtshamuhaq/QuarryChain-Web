export type SliderControllerProps = {
  direction: SliderDirectionTypes;
  handleClick: (direction: string) => void;
};
type SliderDirectionTypes = "left" | "right";
