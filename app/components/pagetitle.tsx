interface PageTitleProps {
  title: string;
}

export default function PageTitle({title}: PageTitleProps) {
  return(
    <div className="py-8 uppercase text-3xl sm:text-5xl">
      {title}
    </div>
  );
}