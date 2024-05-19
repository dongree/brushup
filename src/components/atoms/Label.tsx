type Props = {
  htmlFor?: string;
  text: string;
};

export default function Label({ htmlFor, text }: Props) {
  return (
    <label htmlFor={htmlFor} className="text-xs sm:text-sm">
      {text}
    </label>
  );
}
