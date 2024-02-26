/**
 * Props for the CustomButton component.
 */
export interface CustomButtonProps {
  /**
   * The text content of the button.
   */
  title: string;

  /**
   * Flag to determine if the button should have an outline style.
   */
  outline?: boolean;

  /**
   * Event handler for the button click.
   */
  onClick?: () => void;
}
